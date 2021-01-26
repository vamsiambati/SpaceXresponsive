import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from './models/flight.model';
@Injectable({providedIn:'root'})
export class SpaceService {
    middlewareUrl ="https://api.spaceXdata.com/v3/launches?limit=100";
    constructor(private http:HttpClient){}

    getFlights(query:string):Promise<Flight[]>{
        return this.http.get(this.middlewareUrl+query)
  .toPromise()
  .then(response =>{
   return Promise.resolve(<Flight[]>response);
}) 
    }
}