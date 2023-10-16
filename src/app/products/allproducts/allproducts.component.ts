import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {


allproducts: any=[]
categoryProducts:any=[]


searchString:any=""




constructor(private ds:DataService){ }

ngOnInit():void{
  this.ds.getAllProduct().subscribe({
    next:(result:any)=>{
      this.allproducts=result
      // console.log(this.allproducts);
      this.categoryProducts=this.allproducts
      console.log(this.categoryProducts);
      
      
    }
  })
  this.ds.search.subscribe((data:any)=>{
this.searchString=data
  })
}

categoryProduct(catId:any){


this.categoryProducts=this.allproducts.filter((item:any)=>
  item["categortyID"]==catId || catId=="")

// console.log(this.categoryProducts);

}


}
