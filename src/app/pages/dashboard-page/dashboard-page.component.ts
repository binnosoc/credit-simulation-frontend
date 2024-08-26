import { Component } from '@angular/core';
import { HearderComponent } from "../dashboard-components/hearder/hearder.component";
import { HeaderComponent } from "../dashboard-components/header/header.component";
import { SidebarComponent } from "../dashboard-components/sidebar/sidebar.component";
import { FooterComponent } from "../dashboard-components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [RouterOutlet, HearderComponent, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
