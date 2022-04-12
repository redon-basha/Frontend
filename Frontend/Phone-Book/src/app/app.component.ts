import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // public users: User[] = [];
  // public deleteuser!: User;
  // addform!: FormGroup
  

  constructor(){}


  ngOnInit(){
    // this.getallusers();

    // this.addform= new FormGroup({
    //   'firstname': new FormControl(null,Validators.required),
    //   'lastname': new FormControl(null,Validators.required),
    //   'phonebook': new FormArray([
    //     new FormGroup({
    //       'type': new FormControl(null,Validators.required),
    //       'number': new FormControl(null,Validators.required)
    //     })
    //   ])   
    // });
  }
//   getControls(){
//     return (<FormArray>this.addform.get('phonebook')).controls;
//   };





//   public getallusers(): void{
//     this.userService.getusers().subscribe(
//       (x:User[]) =>{
//         this.users=x;
//         console.log(this.users)
//       },
//       (y:HttpErrorResponse) =>{
//         alert(y.message)
//       }
      
//     )  
// }


// public onDeleteUser(id: String): void {
//   this.userService.deleteuser(id).subscribe(
//     (response: void) => {
//       console.log(response);
//       this.getallusers();
//     },
//     (error: HttpErrorResponse) => {
//       alert(error.message);
//     }
//   );
// }








// public onHeaderClick(mode_name:String):void{
//   if (mode_name=='firstname') {
//     this.userService.sortuser('firstname').subscribe(
//       (x:User[]) =>{
//         this.users=x;
//         console.log(this.users)
//       },
//       (y:HttpErrorResponse) =>{
//         alert(y.message)
//       }
      
//     )  
//   } else if (mode_name=='lastname') {
//     this.userService.sortuser('lastname').subscribe(
//       (x:User[]) =>{
//         this.users=x;
//         console.log(this.users)
//       },
//       (y:HttpErrorResponse) =>{
//         alert(y.message)
//       }
      
//     )  
//   } else {
//     this.getallusers();

//   }

// }






// public onAddModal():void{
//   const container = document.getElementById('#main_div')
//   const button = document.createElement('button');
//   button.type='button';
//   button.style.display='none';
//   button.setAttribute('data-target','#addUser');
//   button.click();
// }



// public onAddUser(): void{
//   document.getElementById('close_add_form')?.click();
//   console.log(this.addform.value)
//   this.userService.adduser(this.addform.value).subscribe(
//     (response: User) => {
//        this.getallusers();
//       console.log(response);
//       this.addform.reset();
//     },
//     (error: HttpErrorResponse) => {
//       alert(error.message);
//        this.addform.reset();
//     }
//   );
// }








// public onDeleteModal(user: User): void {
//   const container = document.getElementById('#main_div');
//   const button = document.createElement('button');
//   button.type = 'button';
//   button.style.display = 'none';
//   this.deleteuser=user;
//   button.setAttribute('data-target', '#deleteUser');
//   button.click();
  
// }


// }

// function getControls() {
//   throw new Error('Function not implemented.');
 }
