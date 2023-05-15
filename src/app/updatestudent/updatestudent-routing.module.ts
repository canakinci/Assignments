import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatestudentPage } from './updatestudent.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatestudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatestudentPageRoutingModule {}
