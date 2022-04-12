import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-useinfo',
  templateUrl: './useinfo.component.html',
  styleUrls: ['./useinfo.component.css']
})
export class UseinfoComponent implements OnInit {
  public selecteduser!: User;
  id!: String;
  indexfordelte!:number;
  indexforupdate!:number;
  addform!: FormGroup;
  phoneaddform!: FormGroup;

  constructor(private route: ActivatedRoute,private userService:UserService) { }

  ngOnInit(){

    this.phoneaddform=new FormGroup({
        'type': new FormControl(null,Validators.required),
        'number': new FormControl(null,Validators.required)

      });

    this.addform= new FormGroup({
      'firstname': new FormControl(null,Validators.required),
      'lastname': new FormControl(null,Validators.required),
    });
    this.getselecteduser();
  }

  public openForm():void{
    const container = document.getElementById('#navbar2')
    const button = document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-target','#addUser');
    button.click();
  }







  public onDeletePhone(index: number):void{
    console.log(index)
    this.selecteduser.phonebook.splice(index, 1);

  }

  public openupdateform(index: number){
    const container = document.getElementById('#navbar2')
    const button = document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-target','#updateUser');
    console.log(index)
    console.log('hello')
    this.setinfoupdate(index);
    button.click();
  }


  setinfoupdate(index:number){
    console.log(this.selecteduser.phonebook[index].type)
    this.phoneaddform.patchValue({
      type: this.selecteduser.phonebook[index].type,
      number: this.selecteduser.phonebook[index].number
    });
    this.indexforupdate=index;
  }



  onUpdatePhone(index:number){
    document.getElementById('close_add_form_1')?.click();
    console.log(this.phoneaddform.value)
    this.selecteduser.phonebook[index]=this.phoneaddform.value
    this.phoneaddform.reset();

  }




  public onDeleteModal(index:number): void {
    const container = document.getElementById('#navbar2');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-target', '#deleteUser');
    button.click();
    console.log(index)
    this.indexfordelte=index
    
  }




  public savechanges(){

    if(this.addform.value.firstname==this.selecteduser.firstname && this.addform.value.lastname==this.selecteduser.lastname){
      this.userService.updateuser(this.selecteduser).subscribe(
        (response:User) =>{
          this.selecteduser=response;
          this.setvalue();
        },
        (y:HttpErrorResponse) =>{
          alert(y.message)
        }
      );  
    }else{
      this.selecteduser.firstname=this.addform.value.firstname;
      this.selecteduser.lastname=this.addform.value.lastname;
      this.userService.updateuser(this.selecteduser).subscribe(
        (response:User) =>{
          this.selecteduser=response;
          this.setvalue();
        },
        (y:HttpErrorResponse) =>{
          alert(y.message)
        }
      );  
    } 
}



  public onAddPhone(): void{
    document.getElementById('close_add_form_2')?.click();
    console.log(this.phoneaddform.value)
    this.selecteduser.phonebook.push(this.phoneaddform.value)
    this.phoneaddform.reset();
  }






  setvalue(){
    this.addform.patchValue({
      firstname: this.selecteduser.firstname,
      lastname: this.selecteduser.lastname
    });

  }

  public getselecteduser(): void{
    this.id=this.route.snapshot.params['id']
    console.log(this.id);
    this.userService.selectusebyid(this.id).subscribe(
      (response:User) =>{
        console.log(response.firstname);
        this.selecteduser=response;
        console.log(this.selecteduser.firstname)
        this.setvalue();
      },
      (y:HttpErrorResponse) =>{
        alert(y.message)
      }
    );  
}







}
