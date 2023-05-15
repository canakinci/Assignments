import { Component, OnInit } from '@angular/core';
import { Module } from '../tab3/modules';
import { ModuleCreateService } from '../services/createmodule.service';
// Used to manage the Modal with dosmiss()
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addmodule',
  templateUrl: './addmodule.page.html',
  styleUrls: ['./addmodule.page.scss'],
})
export class AddModulePage{

  newModule = new Module();

  constructor(private modulecreateservice: ModuleCreateService, private modalCtrl: ModalController) { }

  // Method that uses the Module create service to post data to the database via php
  addModule() {
    //console.log(this.newModule);
    // Make a post request using the Modulecreate service and subscribe to the
    // response in order to inform the user of the outcome. In this case, we just
    // go back to the previous page
    this.modulecreateservice.postData(this.newModule).subscribe(
      res => {
        console.log("Success: Record has been added" + res);
        this.dismiss(true);
      },
      async err => {
        console.log(err.message);
      }
    );
  }

  // Now dismiss the modal and pass the created Module back to
  // the tab1 page so that we can add the Module to the list
  dismiss(returnModule: boolean) {
    if (returnModule) {
      this.modalCtrl.dismiss(this.newModule);
    } else {
      this.modalCtrl.dismiss();
    }
  }

}
