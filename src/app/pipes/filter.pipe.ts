import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts:any[],searchkey:string,propertyname:string): any[] {
    const result:any=[]
    if(!allContacts || searchkey=="" || propertyname==""){
      return allContacts
    }
    allContacts.forEach((item:any)=>{
      if(item[propertyname].trim().toLowerCase().includes(searchkey.trim().toLocaleLowerCase())){
        result.push(item)
      }
    })

    
    return result;



  }

}
