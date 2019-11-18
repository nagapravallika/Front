import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  posts: User;

  error:string;

  user =new User();
  constructor( private userservice: UserService) { }

  ngOnInit() {
    return this.userservice.getUser().subscribe(
      (data:User) => this.user =data,
      error => this.error =error
    );

  }
  onSubmit(){

    return this.userservice.createPost(this.user).subscribe(
      data => this.user.push(data),
      error => this.error =error
    );
  }

}
