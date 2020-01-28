import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FingerAuthPage } from './finger-auth.page';

const routes: Routes = [
  {
    path: '',
    component: FingerAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FingerAuthPageRoutingModule {}
