import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserIndexComponent } from './pages/user-index/user-index.component';


@NgModule({
  declarations: [UserIndexComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
