import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { routes } from './app.routes';

const httpLoaderFactory = (http: HttpClient) =>
    new TranslateHttpLoader(http, '../assets/i18n/', '.json');

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        provideTranslateService({
            defaultLanguage: 'en',
            useDefaultLang: true,
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ]
};
