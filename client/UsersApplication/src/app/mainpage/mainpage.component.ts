import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
import { Subscription } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private srv : UtilsService) { }

  sub : Subscription = new Subscription()

  users : User[] = []
  filteresUsers : User[] = []


  //Search users by their name and email
  search(text : string)
  {
     this.filteresUsers = this.users.filter((x => x.Name?.includes(text)) || (x => x.Email?.includes(text)))
  }
// || (x => x.Email?.includes(text))

  ngOnInit(): void {
    //Get all users details onload
    this.sub = this.srv.getUsers().subscribe((data : any) => 
    {
      this.users = data;
      this.filteresUsers = data;
    })
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }
  
}


