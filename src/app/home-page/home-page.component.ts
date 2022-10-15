import { Component, OnInit } from '@angular/core';
import { ChatStateService } from '../chat-app/chat-state.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public chatState: ChatStateService) { }

  ngOnInit(): void {
  }

}
