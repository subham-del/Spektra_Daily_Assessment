import { Component } from '@angular/core';
import { PersonDetailsService } from '../person-details.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent {

  personDetails:any
  constructor(private service:PersonDetailsService){
    for(let item of this.service.techPeoples){
      if(item.name==history.state.PersonName){
        this.personDetails = item
      }
    }
  }
}
