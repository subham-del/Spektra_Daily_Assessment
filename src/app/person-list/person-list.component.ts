import { Component } from '@angular/core';
import { PersonDetailsService } from '../person-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent {

  personList:any[] = []
  constructor(private service:PersonDetailsService,private router:Router){
    this.personList = this.service.techPeoples
  }

  handleClick(name:any){
    this.router.navigate(['details'],{
      state:{
        PersonName:name
      }
    })
  }

}
