import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, function(e) {
      if (e) {
        okCallback();
      } else {}
    });
  }
  success(message: string) {
    alertify.set('notifier', 'position', 'top-center');
    alertify.success(message);
  }

  error(message: string) {
    alertify.set('notifier', 'position', 'top-center');
    alertify.error(message);
  }

  warning(message: string) {
    alertify.set('notifier', 'position', 'top-center');
    alertify.warning(message);
  }

  message(message: string) {
    alertify.set('notifier', 'position', 'top-center');
    alertify.message(message);
  }

}
