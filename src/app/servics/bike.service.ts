import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class BikeService {


  constructor(private http:HttpClient) { }

getBikes()
{
return this.http.get('/server/api/v1/bike')
}
 
getBike(id:number)
{
return this.http.get('/server/api/v1/bike/' + id)
}


createBikeRegistration(bike)
{
  let body=JSON.stringify(bike);
  return this.http.post('/server/api/v1/postbike',body,httpOptions)
}
}
