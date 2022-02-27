import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPorfolio:any;

  constructor(private datosporfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosporfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    })
  }


}
