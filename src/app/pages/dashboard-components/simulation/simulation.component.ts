import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PieChartComponent } from "../pie-chart/pie-chart.component";

@Component({
  selector: 'app-simulation',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, PieChartComponent],
  templateUrl: './simulation.component.html',
  styleUrl: './simulation.component.css'
})
export class SimulationComponent implements OnInit {
  results: { monthly: number } | null = null;
  amount: any;
  duration: any;
  interestRate: any;
  totalAmount: any;
  totalInterestRate: any;
  monthly: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  onSearch(data: any): void {
    if (!data.amount || !data.interestRate || !data.duration ||
      data.amount <= 0 || data.interestRate < 0 || data.duration <= 0) {
      console.error('Invalid form data');
      return;
    }

    const postData = {
      amount: data.amount,
      interestRate: data.interestRate,
      duration: data.duration
    };

    const apiUrl = 'http://localhost:8088/api-sim/v1/sim/calc-payment';

    this.http.post(apiUrl, postData).subscribe({
      next: (response: any) => {
        this.amount = data.amount;
        this.interestRate = data.interestRate;
        this.duration = data.duration;
        this.results = response;

        const pieChart = document.querySelector('app-pie-chart') as any;

        this.totalAmount = this.duration * Math.floor(response.monthly);
        this.monthly = Math.floor(this.results?.monthly || 0);
        this.totalInterestRate = this.duration * this.monthly - this.amount;

        pieChart.totalAmount = this.totalAmount;
        pieChart.totalInterestRate = this.totalInterestRate;
        pieChart.monthly = this.monthly;


        console.log(this.totalAmount);
      },
      error: (err) => {
        console.error('Request failed:', err);
      }
    });
  }
}
