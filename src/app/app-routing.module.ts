import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"manage", component: ManagePageComponent }, 
  {path:"products", component: ProductsPageComponent},
  {path:"products/", component: ProductsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
