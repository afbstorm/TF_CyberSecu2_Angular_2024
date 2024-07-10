import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private message: string = 'Coucou hibou';

  constructor() { }

  getMessage(): string {
    return this.message;
  }

  updateMessage(update: string) {
    this.message = update;
  }
}
