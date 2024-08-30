import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, ChartConfiguration, ChartData } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnChanges {

  @Input() totalAmount!: number;
  @Input() totalInterestRate!: number;
  @Input() monthly!: number;

  private chart: Chart<'pie', number[], string> | null = null;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart) {
      this.chart.destroy();  // Détruire l'ancien graphique
    }

    this.createChart();  // Créer un nouveau graphique avec les nouvelles données
  }

  private createChart(): void {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;

    const data: ChartData<'pie', number[], string> = {
      labels: ['Total Amount', 'Total Interest Rate', 'Monthly Payment'],
      datasets: [{
        label: 'Simulation Data',
        data: [this.totalAmount, this.totalInterestRate, this.monthly],  // Conversion en entier
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    const config: ChartConfiguration<'pie', number[], string> = {
      type: 'pie',
      data: data,
      options: {}
    };

    this.chart = new Chart(ctx, config);
  }
}
