import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // model create add form

  addFormModel = this.fb.group({

    id: ['', [Validators.required]],
    productName: ['', [Validators.required ]],
    categortyID: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
    MRP: ['', [Validators.required]],
    is_available: ['', [Validators.required]],

    // img url
    productimage: ['', [Validators.required]],
    rating: ['', [Validators.required]],
    review: ['', [Validators.required]],
    warrenty: ['', [Validators.required]],
    vendorName: ['', [Validators.required]]



  })


  constructor(private fb: FormBuilder, private ds: DataService, private rout: Router) { }



  ngOnInit(): void {

  }

  addNewProduct() {


    const path = this.addFormModel.value
    let productData = {
      id: path.id,
      productName: path.productName,
      categortyID: path.categortyID,
      description: path.description,
      price: path.price,
      MRP: path.MRP,
      is_available: path.is_available,
      productimage: path.productimage,
      rating: path.rating,
      review: path.review,
      warrenty: path.warrenty,
      vendorName: path.vendorName
    }

    if (this.addFormModel.valid) {
      this.ds.addProduct(productData).subscribe({
        next: (result: any) => {
          console.log(result);

          alert('New Product Added')
          this.rout.navigateByUrl("")

        }
      })
    }
    else {
      alert("please fill all..")
    }
  }

}




