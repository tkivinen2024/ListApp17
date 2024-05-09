import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { InMemoryDataService } from './services/in-memory-data.service';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MessageService } from './services/message.service';
import { HeroService } from './services/hero.service';


// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
// [  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }) ]

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
              MessageService, 
              InMemoryDataService, 
              HeroService,
              provideHttpClient(),
              importProvidersFrom([HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)])
   ]
};

