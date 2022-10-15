import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ChatStateService } from './chat-app/chat-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hasNewMessage$!: Observable<boolean>;
  constructor(private chat: ChatStateService) {}

  ngOnInit(): void {
    this.hasNewMessage$ = this.chat.newMessages$.pipe(map(value => !!value))
  }

}
