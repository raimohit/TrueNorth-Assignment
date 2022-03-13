import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NA'
})
export class NAPipe implements PipeTransform {

  transform(value:string) {

    let newStr: string = "";

    if(value==null || value==undefined || value==''){

      newStr="N.A"

    }else{

      newStr=value
      
    }

    return newStr
  }

}
