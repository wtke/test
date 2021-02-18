import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorrCpComponent } from './corr-cp/corr-cp.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'corr-cp', component: CorrCpComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
