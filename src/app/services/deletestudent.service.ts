import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeletestudentService {
  // Create url to json-data-students
  url = 'http://localhost:8888/php_ionic/json-delete-student.php';

  // Inject HttpClient module into Constructor
  constructor(private http: HttpClient) {}

  // Create getData() function thats makes http request
  postData(studentID: number) {
    // Make http request using Http Client;
    //alert(data['studentID']);

    return this.http.post(this.url, studentID, {
      headers: new HttpHeaders({
        Accept: 'text/plain',
        'Content-Type': 'text/plain',
      }),
      responseType: 'text',
    });
  }
}
