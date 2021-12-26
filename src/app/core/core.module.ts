import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ErrorHandler } from 'protractor/built/exitCodes';
import { GlobalErrorHandler } from './errors/global-error-handler';
import { HttpLoadingInterceptor } from './errors/http-loading.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      // processes all errors
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      // interceptor to show loading spinner
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
