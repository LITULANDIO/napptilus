import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '' || arg.length < 3) return value;
    const resultLoompa = [];
    for(const loompas of value){
      if(loompas.first_name.toLowerCase().indexOf(arg.toLowerCase())> -1){
        resultLoompa.push(loompas);
      }  
    };
    return resultLoompa;
  }



}
