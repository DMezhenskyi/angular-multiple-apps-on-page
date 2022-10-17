import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ChatStateService } from '../chat-state.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [
    trigger('chat', [
      state('void', style({ transform: 'scale(0.7, 0.7)', opacity: 0 })),
      state('*', style({ transform: 'scale(1, 1)', opacity: 1 })),
      transition('* <=> *', [animate('320ms cubic-bezier(0, 1, 0.45, 1.34)')]),
    ])
  ]
})
export class ChatComponent implements OnInit {

  hasNewMessage$!: Observable<boolean>;

  constructor(public chatState: ChatStateService) {
    console.log('Service instance in ChatComponent: ', this.chatState.id)
    // throw new Error('Failed Bootstraping...');
  }

  ngOnInit(): void {
    this.hasNewMessage$ = this.chatState.newMessages$.pipe(map(value => !!value))
    setTimeout(() => {
      this.chatState.notifyAboutNewMessage();
    },5000)
  }

}
