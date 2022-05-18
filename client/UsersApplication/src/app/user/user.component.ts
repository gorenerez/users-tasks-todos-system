import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private srv : UtilsService) { }

  sub : Subscription = new Subscription()
  sub1 : Subscription = new Subscription()

  getMoreInputs : boolean = false
  isChecked : boolean = false
  userTaskCompleted : Boolean = true

  //Get user data from main page
  @Input()
  userData : User = new User()

  @Input()
  filteresUsers1 : User[] = []

  @Input()
  users1 : User[] = []

  
  @Input()
  searchUser(text : string)
  {
     this.filteresUsers1 = this.users1.filter((x => x.Name?.includes(text)) || (x => x.Email?.includes(text)))
  }

  //Update user//
  update()
  {
    this.sub = this.srv.updateUser(this.userData._id! , this.userData)
      .subscribe((status) => alert(status))
  }

  //Delete user//
  delete()
  { 
    this.sub1 = this.srv.deleteUser(this.userData._id!)
      .subscribe((status) => alert(status))
  }

  //Check which tasks completed function
  checkTasks()
  {
    this.userData.Tasks?.forEach(Task => {
      if(Task.Completed == false)
      {
        this.userTaskCompleted = false
      }
    })
  }

  
  ngOnInit(): void {

  this.checkTasks()

  }
  

  ngOnDestroy()
  {
    this.sub.unsubscribe()
    this.sub1.unsubscribe()
  }
}


