import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { TasksandpostsviewComponent } from './tasksandpostsview/tasksandpostsview.component';


const appRoutes : Routes = [{path : "newUser", component : NewUserComponent},
                            {path : "tasksAndPostsView/:id", component : TasksandpostsviewComponent}]

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    UserComponent,
    NewUserComponent,
    TasksandpostsviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
