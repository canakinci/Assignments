import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatestudentPageRoutingModule } from './updatestudent-routing.module';

import { UpdatestudentPage } from './updatestudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatestudentPageRoutingModule
  ],
  declarations: [UpdatestudentPage]
})
export class UpdatestudentPageModule {}
