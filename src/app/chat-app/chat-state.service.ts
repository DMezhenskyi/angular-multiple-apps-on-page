import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatStateService {

  private openToggler = new BehaviorSubject(false);
  private message = new Subject<{ message: string }>();

  readonly isOpen$: Observable<boolean> = this.openToggler;
  readonly newMessages$: Observable<{ message: string }> = this.message;

  id = Math.random();

  toggle() {
    this.openToggler.next(!this.openToggler.getValue());
  }

  notifyAboutNewMessage() {
    this.message.next({ message: "Hi there!" })
  }
}
