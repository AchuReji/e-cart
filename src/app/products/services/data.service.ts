import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

search=new BehaviorSubject("")

  constructor(private http: HttpClient) { }

  // api to access all product from product collection -get

  getAllProduct() {
    return this.http.get('http://localhost:3000/poducts')
  }
  // get single product data
  getProduct(id:any) {
    return this.http.get('http://localhost:3000/poducts/'+id )
  }
// delete 
removeProduct(id:any){
  return this.http.delete('http://localhost:3000/poducts/'+id)
}


// add product
addProduct(bodyData:any){
  return this.http.post('http://localhost:3000/poducts',bodyData)
}

// edit api
updateProduct(id:any,bodyData:any){
  return this.http.put('http://localhost:3000/poducts/'+id,bodyData)
}

}
