import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  /**
   * 
   * @param arr 
   * @param value 
   * @returns 
   */
  transform(arr: any[], value: string): any[] {

    if(!arr){
      return [];
    }

    if(!value){
      return arr;
    }

    return arr.filter(obj => {
      for(const key in obj){
          if(!obj[key]){
            continue;
          }
          const val: string = obj[key].toString().toLowerCase();

          if(val.includes(value.toLowerCase())){
            return true
          }
       }
        return false
    });
  }

}
