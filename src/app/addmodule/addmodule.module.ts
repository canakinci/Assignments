import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmodulePageRoutingModule } from './addmodule-routing.module';

import { AddModulePage } from './addmodule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmodulePageRoutingModule
  ],
  declarations: [AddModulePage]
})
export class AddmodulePageModule {}
