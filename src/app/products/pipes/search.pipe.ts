import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(dataArray:any[],searchString:string,dataKey:string): any{
    const result:any=[]

    if(!dataArray || searchString=="" || dataKey==""){
      return dataArray
    }
    else{
      dataArray.forEach((item:any)=>{
        if(item[dataKey].trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          result.push(item)
          
        }
      })
    }
    
    
    return result
  
  
  }

}
