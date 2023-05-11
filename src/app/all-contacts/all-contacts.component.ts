import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {

  allContacts: any = []
  isLoading: boolean = true;
  errorHold: string = ''
  searchKey:string = ''

  constructor(private api: ApiService) { }
  ngOnInit():void {

    this.getallContacts()

  }
  // getallcontact function
  getallContacts(){
    this.api.getAllContacts().subscribe({
      next:(response:any)=>{
        console.log(response);
        setTimeout(()=>{

          this.allContacts = response
          this.isLoading = false

        }, 2000);

      },

      error:(err:any)=>{
        console.log(err.message);
        this.errorHold = err.message
        this.isLoading = false

      }

    }
    )
  }


  // delete contact
  deleteContact(id:any){
    // call delete api
    this.api.deleteContact(id).subscribe({
      next:(response:any)=>{
       this.getallContacts()
      }
    })

  }
}
