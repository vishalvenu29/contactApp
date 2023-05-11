import { Component, OnInit } from '@angular/core';
import { ContactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {


  contact:ContactSchema={}
  groups:any = []

  constructor (private api:ApiService,private addContactRouter:Router){
      this.contact.groupId = "Select A Group"
  }
  ngOnInit(): void {
    this.api.getGroups().subscribe({
      next:(response:any)=>{
          console.log(response);
          this.groups = response
          
      },
      error:(err:any)=>{
        console.log(err.message);
        
      }
      
    })
  }


  addContact(contact:ContactSchema){

    // api call in service
    this.api.addContact(contact).subscribe({
      next:(response:any)=>{
        // data added to server
        console.log(response);
        // navigate to all contacts page
        this.addContactRouter.navigateByUrl('')
        
      },
      error:(err:any)=>{
        console.log(err);
        

      }
      
    })


  }
}
