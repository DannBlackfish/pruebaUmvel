import { Component, OnInit } from '@angular/core';

import { GraficaService } from '../servicio/grafica.service'
import { Chart } from 'chart.js'

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  chart= []

  constructor(private _grafica:GraficaService) { }

  ngOnInit(): void {
    this._grafica.carros()
    .subscribe(res => {

      const marca = res['sales'].map(res => res.car_make)
      const ventas = res['sales'].map(res => res.quantity)

      console.log(res)

      this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: marca,
        datasets: [
          {
            label: 'Quantity',
            data: ventas,
            backgroundColor: [
                'rgba(102, 102, 204, 0.2)'
            ],
            borderColor: [
                'rgba(102, 102, 204, 1)'
            ],
            borderWidth: 1
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    })



    })
  }

  

}
