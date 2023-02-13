import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  {path:"",redirectTo:"new",pathMatch:"full"},
  {path:"new", component:NewComponent},
  {path:"product", component:ProductComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
