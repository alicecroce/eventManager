import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyEvent as MyEvent } from '../../models/event.model';
import { User } from '../../models/user.model';
import { Subscription } from '../../models/subscription.model';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';

@Component({
  selector: 'app-event-list',
  imports: [CommonModule, EventComponent],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent {
  @Input({ required: true }) eventList: MyEvent[] = [];
  @Input({ required: true }) userList: User[] = [];
  @Output() registerUserToEvent = new EventEmitter<Subscription>();

  public register(subscription: Subscription) {
    this.registerUserToEvent.emit(subscription);
  }
}
