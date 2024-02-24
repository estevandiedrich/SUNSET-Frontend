import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewpropspectComponent } from './newpropspect/newpropspect.component';
import { PropspectsComponent } from './propspects/propspects.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"menu",component:AppComponent},
  {path:"prospects",component:PropspectsComponent},
  {path:"newprospect",component:NewpropspectComponent},
  {path:"editprospect/:id",component:NewpropspectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
