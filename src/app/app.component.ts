import { ApplicationRef, ChangeDetectorRef, Component, NgZone, OnInit, PlatformRef } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ChatAppModule } from './chat-app/chat-app.module';
import { ChatStateService } from './chat-app/chat-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hasNewMessage$!: Observable<boolean>;
  constructor(
    private chat: ChatStateService,
    private cd: ChangeDetectorRef,
    private appRef: ApplicationRef,
    private platformRef: PlatformRef,
    private ngZone: NgZone
  ) {
    console.log('Service instance in AppComponent: ', this.chat.id)
  }

  ngOnInit(): void {
    this.hasNewMessage$ = this.chat.newMessages$.pipe(
      tap(() => {
        // this.cd.detectChanges();
        queueMicrotask(() => this.appRef.tick());
      }),
      map(value => !!value)
    )
  }

  onClick() {
    this.ngZone.runOutsideAngular(() => {
      this.platformRef.bootstrapModule(ChatAppModule);
    })
  }

}
