import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { MyEvent } from '../../models/event.model';
import { Subscription } from '../../models/subscription.model';

@Component({
  selector: 'app-user-list',
  imports: [
    CommonModule,
    UserComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  @Input({ required: true }) userList: User[] = [];
  @Input({ required: true }) eventList: MyEvent[] = [];

  @Output() registerEventToUser = new EventEmitter<Subscription>();

  public register(subscription: Subscription) {
    this.registerEventToUser.emit(subscription);
  }
}
