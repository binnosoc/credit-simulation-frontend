import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';  // Import de ReactiveFormsModule
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SetPasswordRequest } from '../../services/models';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-reset-password-page',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule  // Ajoutez ReactiveFormsModule ici
  ],
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.css']  // Correction du nom: 'styleUrl' -> 'styleUrls'
})
export class ResetPasswordPageComponent implements OnInit {

  resetPasswordForm: FormGroup;
  token: string | null = null;
  tokenState: any;
  passwordChanged: any;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordsMatch });
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const t = params['t'];
      this.token = t;

      this.userService.isValidToken(t).subscribe(isValid => {
        this.tokenState = isValid;
       
      });
    });
  }

  passwordsMatch(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid) {
      const storedData = localStorage.getItem('accessTokenReset');
      if (storedData) {
        // Convertir la chaîne JSON en objet JavaScript
        const parsedData = JSON.parse(storedData);       
        // Utiliser les données récupérées
        const token = parsedData.token;
        const password = this.resetPasswordForm.get('password')?.value;
  
        // Assurez-vous que le token est défini avant d'appeler la méthode
        if (token) {
          this.userService.resetPassword(token, password).subscribe(isUpdated => {
           this.passwordChanged=isUpdated;
          });
        } else {
          console.error('Token not found in localStorage');
        }
      } else {
        console.error('No access token found in localStorage');
      }
    }
  }
  
}
