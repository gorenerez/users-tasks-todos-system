import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private srv : UtilsService) { }

  sub : Subscription = new Subscription()

  userData : User = new User()
  isDisplay : boolean = true

  
  //Add new user
  add()
  {
    this.sub = this.srv.addUser(this.userData)
    .subscribe((status) => alert(status))
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()

  }
 
}
