import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { User } from '../user';
import { HttpResponse, HttpHeaders, HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User;
  
  constructor(private httpClient:HttpClient) {
    this.createForm();
  }

  createForm() {
    this.user = this.user.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      gender: ['', Validators.required ],
      email: ['', Validators.required ],
      phone_no: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  addUser(first_name, last_name, gender, email,phone_no, password) {
    this.addUser(first_name, last_name, gender, email, phone_no,password);
  }


  ngOnInit() {
   

  }
  
}
