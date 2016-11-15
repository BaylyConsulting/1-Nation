import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { getTranslationProviders } from './app/providers/i18n';

if (environment.production) {
  enableProdMode();
}

//Deactivated the active translators until i18n.ts is fixed. 
//getTranslationProviders().then(providers => {
//  const options = { providers };
//  platformBrowserDynamic().bootstrapModule(AppModule, options);
//});

platformBrowserDynamic().bootstrapModule(AppModule);
