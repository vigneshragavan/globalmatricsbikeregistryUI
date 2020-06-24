import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/servics/bike.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { observable, Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models:string[]=[
    'global ntb','global carbon','global time'
  ];
  bikeform:FormGroup;
  validMessage:string="";

  constructor(private bikeService:BikeService) { }

  ngOnInit(): void {
    this.bikeform=new 
    FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required),
      model:new FormControl('',Validators.required),
      serialNumber:new FormControl('',Validators.required),
      purchasePrice:new FormControl('',Validators.required),
      purchaseDate:new FormControl('',Validators.required),
      contact:new FormControl('',Validators.required)
    })
  }
  submitRegistration(){
    if(this.bikeform.valid){
      this.validMessage="your bike registration is submitted";
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
        data=>{
          this.bikeform.reset();
          return true;},

          error=>{
            return Observable.throw (error);
            
          }
        
      )

    }
    else{
      this.validMessage="please fill form before submitting"
    }
  }

}
