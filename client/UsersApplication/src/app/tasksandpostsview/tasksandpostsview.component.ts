import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tasksandpostsview',
  templateUrl: './tasksandpostsview.component.html',
  styleUrls: ['./tasksandpostsview.component.css']
})
export class TasksandpostsviewComponent implements OnInit {

  constructor(private srv : UtilsService, private ar : ActivatedRoute) { }

  sub1 : Subscription = new Subscription()
  sub2 : Subscription = new Subscription()
  sub3 : Subscription = new Subscription()
  sub4 : Subscription = new Subscription()
  sub5 : Subscription = new Subscription()
  

  userid : string = ""
  user : User = new User
  isFalse : boolean = true
  addNewTaskButtonPushed : boolean = true
  addNewPostButtonPushed : boolean =true
  titleTask : string = ""
  titlePost : string = ""
  bodyPost : string = ""
  

  addNewPost(){
    this.user.Posts?.push({Title : this.titlePost , Body : this.bodyPost})
     this.sub5 = this.srv.updateUser(this.userid, this.user)
     .subscribe((status) => alert(status))
  }


   //Add new task
   addNewTask()
   {
     this.user.Tasks?.push({Title : this.titleTask , Completed : false})
     this.sub4 = this.srv.updateUser(this.userid, this.user)
     .subscribe((status) => alert(status))
   }

  //Update a task as completed
  updateTaskCompleted()
  {
    this.sub3 = this.srv.updateUser(this.userid,this.user)
      .subscribe(() => {})
      //status => alert(status) --> if you want also status
  }

  //Get from URL user ID and get user data from server onload
  ngOnInit(): void {
    this.sub1 = this.ar.params.subscribe(data =>
      {
        this.userid =  data["id"]

        this.sub2 = this.srv.getUser(this.userid)
          .subscribe((data : User) => {this.user = data})
          
      })
  }

  ngOnDestroy()
  {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    this.sub4.unsubscribe();
    this.sub5.unsubscribe();
  }

}
