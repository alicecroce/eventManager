import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { MyEvent } from '../../../models/event.model';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user.model';
import { Subscription } from '../../../models/subscription.model';

@Component({
  selector: 'app-event',
  imports: [CommonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  @Input({ required: true }) event!: MyEvent;
  @Input({ required: true }) userList: User[] = [];
  @Output() registerUserToEvent = new EventEmitter<Subscription>();

  public selectedUser: User | null = null;

  public register() {
    if (!this.selectedUser) {
      return;
    }

    const subscription = {
      id: 0,
      eventId: this.event.id,
      userId: this.selectedUser.id
    } as Subscription;
    this.registerUserToEvent.emit(subscription);
    this.selectedUser = null;
  }

  /**
   * 
   * @param event questo è l'evento del DOM restituito dall'evento di selezione
   */
  public selectUser(event: Event) {
    const select = event.target as HTMLSelectElement;
    const userId = parseInt(select.value);
    this.selectedUser = this.userList.find(user => user.id === userId) || null;
  }
}
