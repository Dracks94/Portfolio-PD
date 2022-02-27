import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';

import { PortfolioService} from './servicios/portfolio.service';
import { BotonComponent } from './componentes/boton/boton.component'

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BotonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
