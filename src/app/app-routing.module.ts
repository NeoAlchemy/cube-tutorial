import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CfopComponent } from './cfop/cfop.component';
import { BeginnerCrossComponent } from './beginner-cross/beginner-cross.component';
import { BeginnerF2lComponent } from './beginner-f2l/beginner-f2l.component';
import { BeginnerOllComponent } from './beginner-oll/beginner-oll.component';
import { BeginnerPllComponent } from './beginner-pll/beginner-pll.component';
import { BeginnerCfopComponent } from './beginner-cfop/beginner-cfop.component';
import { AdvancedCfopComponent } from './advanced-cfop/advanced-cfop.component';
import { AdvancedCrossComponent } from './advanced-cross/advanced-cross.component';
import { AdvancedF2lComponent } from './advanced-f2l/advanced-f2l.component';
import { AdvancedPllComponent } from './advanced-pll/advanced-pll.component';
import { AdvancedOllComponent } from './advanced-oll/advanced-oll.component';


const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'cfop', component: CfopComponent},
  {path: 'beginner-cfop', component: BeginnerCfopComponent},
  {path: 'beginner-cross', component: BeginnerCrossComponent},
  {path: 'beginner-f2l', component: BeginnerF2lComponent},
  {path: 'beginner-oll', component: BeginnerOllComponent},
  {path: 'beginner-pll', component: BeginnerPllComponent},
  {path: 'advanced-cfop', component: AdvancedCfopComponent},
  {path: 'advanced-cross', component: AdvancedCrossComponent},
  {path: 'advanced-f2l', component: AdvancedF2lComponent},
  {path: 'advanced-pll', component: AdvancedPllComponent},
  {path: 'advanced-oll', component: AdvancedOllComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
