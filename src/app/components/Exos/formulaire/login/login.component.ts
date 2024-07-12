import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  group: FormGroup;
  displayError: string;

  constructor(private _router: Router, private _fb: FormBuilder, private _authService: AuthService) {
    this.group = this._fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    })
  }

  login() {
    if (this.group.valid) {
      // contact du service
      if (this._authService.login(this.group.value.username, this.group.value.password)) {
        // Si ok -> routing vers la page profile
        localStorage.setItem('authToken', 'ABCD')
        this._router.navigate(['/exos/profile'])
      } else if (!this._authService.login(this.group.value.username, this.group.value.password)) {
        // Si pas ok -> affichage d'un message à l'utilisateur
        this.displayError = 'Mauvais username ou mot de passe'
      }
    }
  }

}
