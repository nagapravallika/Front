export class User {
  push(data: User): void {
    throw new Error("Method not implemented.");
  }
    
    id:string;
    first_name:string;
    last_name:string;
    gender:string;
    email:string;
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
    last_login: Date;
    intrests: string;
  


           
}
