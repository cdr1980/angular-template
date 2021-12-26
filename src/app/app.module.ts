import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material.module';
import { ProductListModule } from './product-list/product-list.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    HttpClientModule, 
    BrowserModule,
    BrowserAnimationsModule,
    ProductListModule,
    CoreModule,
    MaterialModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [AppComponent],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent],
})
export class AppModule {}

