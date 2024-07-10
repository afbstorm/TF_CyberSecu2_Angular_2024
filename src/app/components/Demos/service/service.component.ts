import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  title: string = 'La démo des services pour les CyberSecu2 !'

  message: string;
  newMessage: string;

  constructor(private _messageService: MessageService) {}

  ngOnInit() {
    this.message = this._messageService.getMessage();
  }

  setNewMessage() {
    // Envoi de l'info au service
    this._messageService.updateMessage(this.newMessage);
    this.message = this._messageService.getMessage();
  }

}
