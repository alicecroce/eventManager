import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../models/user.model';
import { MyEvent } from '../../../models/event.model';
import { Subscription } from '../../../models/subscription.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [
    CommonModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({ required: true }) user!: User;
  @Input({ required: true }) userList: User[] = [];
  @Input({ required: true }) eventList: MyEvent[] = [];

  @Output() registerEventToUser = new EventEmitter<Subscription>();

  public selectedEvent: MyEvent | null = null;

  public register() {
    if (!this.selectedEvent) {
      return;
    }

    const subscription = {
      id: 0,
      userId: this.user.id,
      eventId: this.selectedEvent.id
    } as Subscription;

    this.registerEventToUser.emit(subscription);
    this.selectedEvent = null;
  }

  /**
   * 
   * @param event questo è l'evento del DOM restituito dall'evento di selezione
   */
  public selectEvent(event: Event) {
    const select = event.target as HTMLSelectElement;
    const eventId = parseInt(select.value);
    this.selectedEvent = this.eventList.find(event => event.id === eventId) || null;
  }

}
