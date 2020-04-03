import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormGroupComponent } from './form-group/form-group.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: FormBuilderComponent
  },
  {
    path: '',
    component: FormGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
