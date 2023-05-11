import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL='https://contact-app-awfl.onrender.com'

  constructor(private http:HttpClient) { }


  

  // function to get all contacts api
  getAllContacts(){
    // api call: url = http://localhost:3000/contacts req to get
    return this.http.get(`${this.BASE_URL}/contacts`)
  }



// view contact

viewContact(id:any){

   // api call: url = http://localhost:3000/contacts/ca1 req: get
   
   return this.http.get(`${this.BASE_URL}/contacts/${id}`)

}

// get a particular group 
getGroup(id:any){
  // api call: url = http://localhost:3000/groups/3 req: get
  return this.http.get(`${this.BASE_URL}/groups/${id}`)

}


// get all groups
getGroups(){

  // api call: url = http://localhost:3000/groups req to get

 return this.http.get(`${this.BASE_URL}/groups`)

}

// add contact

addContact(contact:ContactSchema){

  return this.http.post(`${this.BASE_URL}/contacts`, contact)
}


// delete contact 
deleteContact(id:any){
  // api call
  return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
}

// edit a contact
editContact(id:any,contact:ContactSchema){
// api call
return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
}

}




 

