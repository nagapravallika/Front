export class User {
  group(arg0: { first_name: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors))[]; last_name: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors))[]; gender: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors))[]; email: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors))[]; phone_no: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors))[]; password: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors))[]; }): User {
    throw new Error("Method not implemented.");
  }
  push(data: User): void {
    throw new Error("Method not implemented.");
  }
    
    id:string;
    first_name:string;
    last_name:string;
    gender:string;
    email:string;
    phone_no:string;
    password:string;
    address: { door_no:string;
                building_name:string;
                street:string;
                locality:string;
                landmark:string;
                city:string;
                state:string;
                pincode:string;
             }
    
  


           
}
