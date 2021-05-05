import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { ListproductwithasyncComponent } from './listproductwithasync/listproductwithasync.component';
import { ListproductwithsubscribeComponent } from './listproductwithsubscribe/listproductwithsubscribe.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'addproduct',component : AddproductComponent},
  {path:'listwithasync', component : ListproductwithasyncComponent},
  {path:'updateproduct', component : UpdateproductComponent},
  {path:'listwithsubscribe', component :ListproductwithsubscribeComponent},{path:'',redirectTo: 'home',pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
