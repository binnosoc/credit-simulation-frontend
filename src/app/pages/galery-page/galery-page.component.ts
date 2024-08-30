import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-galery-page',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './galery-page.component.html',
  styleUrl: './galery-page.component.css'
})
export class GaleryPageComponent implements OnInit {
  results: any[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  // onSearch(data: any) {
  //   const postData = {
  //     email: data.email,
  //     password: data.password
  //   };

  //   const apiUrl = 'http://localhost:8088/api-sim/v1/auth/authenticate';

  //   this.http.post(apiUrl, postData).subscribe({
  //     next: (response: any) => {
  //       console.log('Authentication successful:', response);
  //      },
  //     error: (err) => {
  //       console.error('Authentication failed:', err);
  //      }
  //   });
  // }

  onSearch(data: any) {
    const apiKey = '45643098-81314e08f026164d803c39edb';
    const query = data.motCle;
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo`;

    this.http.get(url).subscribe({
      next: (response: any) => {
        const jsonResponse = JSON.stringify(response, null, 2);

        this.results = response.hits; 
        console.log('Search results:', this.results);
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }
}
