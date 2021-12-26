import { HttpClient } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';
//import { ErrorDialogService } from '../shared/errors/error-dialog.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  formData: any;
  literal: string = 'Een lange tekst...';
  tekst: string = 'Een tekst';
  janee: boolean = true;
  datum: Date = new Date();
  tijd: Date = new Date();
  error: string = '';

  constructor(
    private http: HttpClient 
    // private errorDialogService: ErrorDialogService,
    // private zone: NgZone
  ) {}

  submit() {
    const vm: any = {
      tekst: this.tekst,
      janee: this.janee,
      datum: new Date(
        this.datum.getFullYear(),
        this.datum.getMonth()-1,
        this.datum.getDate(),
        this.tijd.getHours(),
        this.tijd.getMinutes(),
        this.tijd.getSeconds(),
      )
    };

    this.formData = JSON.stringify(vm);
  }

  reset() {
    this.tekst = '';
    this.janee = true;
    this.datum = new Date();
  }

  localError() {
    throw Error('The app component has thrown an error!');
  }

  failingRequest() {
    this.http.get('https://httpstat.us/404?sleep=2000').toPromise();
  }

  successfulRequest() {
    this.http.get('https://httpstat.us/200?sleep=2000').toPromise();
  }

  // toDateInputValue: (): string => '';DatePipe.prototype.toDateInputValue = (function() {
  //   var local = new Date(this);
  //   local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  //   return local.toJSON().slice(0,10);
  // });
}
