import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ExpertWitnessComponent } from './expert-witness/expert-witness.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RehabilitationComponent } from './rehabilitation/rehabilitation.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { CookiePageComponent } from './cookie-page/cookie-page.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent, pathMatch: 'full'},
  { path: 'rehabilitation', component: RehabilitationComponent, pathMatch: 'full'},
  { path: 'expertWitness', component: ExpertWitnessComponent, pathMatch: 'full'},
  { path: 'main', component: MainPageComponent, pathMatch: 'full'},
  { path: 'privatePolicy', component: PrivatePolicyComponent, pathMatch: 'full'},
  {path: 'cookiePage', component: CookiePageComponent, pathMatch: 'full'},
  { path: '', redirectTo: '/main', pathMatch: 'full' }
  
];

const routerOptions : ExtraOptions = {
  scrollPositionRestoration : 'enabled',
  anchorScrolling : 'enabled',
  onSameUrlNavigation : 'reload',
  useHash : true  
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
