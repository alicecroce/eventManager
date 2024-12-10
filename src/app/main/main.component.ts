import { Component } from '@angular/core';
import { MyEvent } from '../models/event.model';
import { User } from '../models/user.model';
import { EventListComponent } from "./event-list/event-list.component";
import { UserListComponent } from './user-list/user-list.component';
import { Subscription } from '../models/subscription.model';

@Component({
  selector: 'app-main',
  imports: [EventListComponent, UserListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  public eventList: MyEvent[] = [
    {
      id: 0,
      name: 'Concerto',
      date: new Date("2024-11-05"),
      location: 'Udine',
      maxCapacity: 3454
    },
    {
      id: 1,
      name: 'Cena',
      date: new Date("2023-10-15"),
      location: 'Trieste',
      maxCapacity: 12
    }
  ];

  public userList: User[] = [
    {
      id: 0,
      name: 'Pippo',
      email: 'pippo@gmail.com'
    },
    {
      id: 1,
      name: 'Paperino',
      email: 'paperino@gmail.com'
    }
  ]

  public subscriptionList: Subscription[] = [];

  public addSubscription(subscription: Subscription) {
    this.subscriptionList.push(subscription);
    if (this.subscriptionList.length > 0) { 
      const lastSubscription = this.subscriptionList[this.subscriptionList.length - 1];
      window.alert(
        `User ${this.userList.find(u => u.id === lastSubscription.userId)?.name} is subscribed to event ${this.eventList.find(e => e.id === lastSubscription.eventId)?.name}`
      );
    }
  }
}
