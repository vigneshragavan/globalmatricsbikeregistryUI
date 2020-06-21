import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/servics/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes;

  constructor(private bikeservice:BikeService) { }

  ngOnInit() {
    this.getBikes();
  }
  getBikes(){

    this.bikeservice.getBikes().subscribe(

      data=>{this.bikes=data},
      err=>console.error(err),
      ()=>console.log('bike')

    )
  }

}
