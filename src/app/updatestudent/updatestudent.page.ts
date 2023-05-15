import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { StudentupdateService } from '../services/studentupdate.service';
import { Student } from '../tab1/student';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.page.html',
  styleUrls: ['./updatestudent.page.scss'],
})
export class UpdatestudentPage implements OnInit {
  student: Student;

  constructor(
    private studentupdateservice: StudentupdateService,
    private modalCtrl: ModalController,
    navParams: NavParams
  ) {
    this.student = navParams.get('student');
  }

  ngOnInit() {
  }

  updateStudent() {
    //console.log(this.newStudent);
    // Make a post request using the studentcreate service and subscribe to the
    // response in order to inform the user of the outcome. In this case, we just
    // go back to the previous page
    this.studentupdateservice.postData(this.student).subscribe(
      res => {
        console.log("Success: Record has been updated" + res);
        this.dismiss(true);
      },
      async err => {
        console.log(err.message);
      }
    );
  }

  // Now dismiss the modal and pass the created student back to
  // the tab1 page so that we can add the student to the list
  dismiss(returnStudent: boolean) {
    if (returnStudent) {
      this.modalCtrl.dismiss();
    } else {
      this.modalCtrl.dismiss();
    }
  }
}
