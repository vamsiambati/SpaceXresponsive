import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Flight } from './shared/models/flight.model';
import { SpaceService } from './shared/space.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PublicIsSapient-Demo';
  flights:Flight[]=[];
  selectedYear="";
  launched="";
  landed="";
  loading=true;
  years=["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"];
  spaceForm = new FormGroup({
    year: new FormControl(''),
    slaunch:new FormControl(),
    sland:new FormControl()
  });
  constructor(private spaceService :SpaceService){

  }

  ngOnInit(){
    
    this.getData("");
    this.spaceForm.valueChanges.subscribe(formValue=>{
      this.selectedYear = formValue.year;
      this.launched = formValue.slaunch;
      this.landed = formValue.sland;

      let launchQuery="";
      let landQuery="";
      let yearQuery="";

      if(formValue.slaunch){
        launchQuery = "&launch_success="+formValue.slaunch
      }
      if(formValue.sland){
        landQuery = "&land_success="+formValue.sland
      }
      if(formValue.year){
        yearQuery = "&launch_year="+formValue.year
      }
      let query= launchQuery+landQuery+yearQuery
      console.log(query)
     this.getData(query)
    })
  }
  getData(query:string){
    this.loading=true;
    this.flights=[];
    this.spaceForm.disable({ emitEvent: false });
    this.spaceService.getFlights(query).then(rsp=>{
      this.flights=rsp
    }).finally(()=>{
      console.log(this.flights)
    this.spaceForm.enable({ emitEvent: false });
    this.loading=false
    })
  }
}
