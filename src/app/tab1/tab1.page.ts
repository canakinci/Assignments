import { Component, OnInit } from '@angular/core';
// Import the studentdata service
import { StudentDataService } from '../services/studentdata.service';
import { Router } from '@angular/router';
// Import the student class
import { Student } from './student';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { AddStudentPage } from '../addstudent/addstudent.page';
import { DeletestudentService } from '../services/deletestudent.service';
import { UpdatestudentPage } from '../updatestudent/updatestudent.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  // we need use an intermdiate array to store the result
  // and then pass into newStudents?
  students: any;
  newStudents: any;
  newStudent = new Student();

  // Pass instance of StudentDataService into constructor:
  constructor(
    private studentdataservice: StudentDataService,
    private router: Router,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private deleteStudentService: DeletestudentService
  ) {}

  getStudentData() {
    // Get the information from the API using Observable
    // by subscribing to the studentservice Observable
    this.studentdataservice.getData().subscribe((result) => {
      this.students = result;
      this.newStudents = this.students.students;
    });
  }

  // Create modal that will launch to add a new student to
  // the MySQL database using the AddStudentPage
  // The student object is then passed back from the modal
  // so that we can update the list view with the new item
  // Note: ensure to import the AddStudentPage module to app.module.ts and
  // add it to the imports array too
  async addStudent() {
    // create modal instance
    const modal = await this.modalCtrl.create({
      component: AddStudentPage,
    });
    //Get the data returned from the Modal and add to global variable
    modal.onDidDismiss().then((data) => {
      // Check if data has been retured
      // if not, the modal was cancelled
      // using back button
      if (data['data']) {
        this.newStudents.push(data['data']);
        console.log(data['data']);
      } else {
        console.log('Modal Cancelled');
      }
    });
    return await modal.present();
  }

  async updateStudent(student: Student) {
    const modal = await this.modalCtrl.create({
      component: UpdatestudentPage,
      componentProps: {
        student: student,
      },
    });

    return await modal.present();
  }

  async deleteStudentConfirmed(studentID: number) {
    if (studentID) {
      this.deleteStudentService.postData(studentID).subscribe(
        (res) => {
          console.log('Success: Record has been deleted');
          this.getStudentData();
        },
        async (err) => {
          console.log(err.message);
        }
      );
    } else {
      console.log('Missing Student Id');
    }
  }

  async deleteStudent(studentID: number) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to delete this student?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Yes',
          handler: () => {
            this.deleteStudentConfirmed(studentID);
          },
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {
    this.getStudentData();
  }
}
