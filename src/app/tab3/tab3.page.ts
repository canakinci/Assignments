import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModuleDataService } from '../services/moduledata.service';

import { AddModulePage } from '../addmodule/addmodule.page';

import * as L from "leaflet";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  maps: { [moduleNo: string]: L.Map } = {};
  modules: any;
  newModules: any;

  constructor(private moduledataservice: ModuleDataService, private modalCtrl: ModalController, private renderer: Renderer2, private el: ElementRef) {}

  getModuleData(){
    // Get the information from the API using Observable
    // by subscribing to the lecturerservice Observable
    this.moduledataservice.getData().subscribe(result => {
      this.modules = result;
      this.newModules = this.modules.modules;
    });
  }

  ngOnInit() {
    this.getModuleData();
  }

  setMap(module: any) {
    let mapContainer = this.el.nativeElement.querySelector('#mapId' + module.moduleNo);
    this.renderer.setStyle(mapContainer, 'height', '500px');

    if (!this.maps[module.moduleNo]) {
      this.maps[module.moduleNo] = L.map('mapId' + module.moduleNo, {
        center: [module.lat, module.long],
        zoom: 15,
        renderer: L.canvas()
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.maps[module.moduleNo]);

      L.marker([module.lat, module.long]).addTo(this.maps[module.moduleNo]).bindPopup('Module Location').openPopup();
    }
  }

  async addModule() {
    // create modal instance
    const modal = await this.modalCtrl.create({
      component: AddModulePage
    });
    // Get the data returned from the Modal and add to global variable
    modal.onDidDismiss().then(data => {
      // Check if data has been retured
      // if not, the modal was cancelled
      // using back button
      if (data['data']) {
        this.newModules.push(data['data']);
        console.log(data['data']);
      } else {
        console.log("Modal Cancelled");
      }
    });
    return await modal.present();
  }
}
