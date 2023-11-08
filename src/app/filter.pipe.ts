import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';
import { pipe } from 'rxjs';
@Pipe({
  name :'filter'
})
export class FilterPipe implements PipeTransform {

  transform(userdata:User[],filterText:String){
    if(userdata.length===0 || filterText===''){
      return userdata;
    }
    else{
      return userdata.filter((User)=>{
        return User.first_name.toLocaleLowerCase()===filterText.toLocaleLowerCase()
      })
    }
  }

}
