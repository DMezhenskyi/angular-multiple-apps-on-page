import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ChatAppModule } from './app/chat-app/chat-app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule)
  .catch(err => console.error(err));

// platform.bootstrapModule(ChatAppModule)
//   .catch(err => console.error(err));
