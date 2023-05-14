import { AccountComponent } from './pages/account/account.component';
import { DevolucionesComponent } from './pages/devoluciones/devoluciones.component';
import { EnviosComponent } from './pages/envios/envios.component';
import { BalenciagaComponent } from './components/balenciaga/balenciaga.component';
import { NikeComponent } from './components/nike/nike.component';
import { AdidasComponent } from './components/adidas/adidas.component';
import { HoodiesComponent } from './pages/hoodies/hoodies.component';
import { SneakersComponent } from './pages/sneakers/sneakers.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "sneakers", component: SneakersComponent},
  {path: "hoodies", component: HoodiesComponent},
  {path: "sneakers/adidas", component: AdidasComponent},
  {path: "sneakers/nike", component: NikeComponent},
  {path: "sneakers/balenciaga", component: BalenciagaComponent},
  {path: "shipping", component: EnviosComponent},
  {path: "return", component: DevolucionesComponent},
  {path: "account", component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
