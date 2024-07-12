import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule} from 'primeng/inputtextarea';
import { CanComponentDeactivate } from '../leave-profile.guard';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, InputTextareaModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements CanComponentDeactivate {
// formGroup 
// --> formArray
// --> formGroup

  profileInfos: FormGroup

  // Propriété qui permet de définir l'état du formulaire (formulaire en cours ou terminé -> terminé === false / en cours === true)
  isDirty: boolean = false;

  constructor(private _fb: FormBuilder) {

    this.profileInfos = this._fb.group({
      lastname: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      firstname: this._fb.array([
        [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
      ]),
      email: [null, [Validators.required, Validators.email]],
      pseudo: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      address: this._fb.group({
        street: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        number: [null, [Validators.required, Validators.maxLength(3)]],
        pc: [null, [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
        city: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      }),
      jobTitle: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      jobDescription: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(300)]]
    })
  }

  getFirstnameArray(): FormArray {
    return this.profileInfos.get('firstname') as FormArray;
  }

  addFirstname() {
    this.getFirstnameArray().push(this._fb.control(
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
    ))
  }

  removeFirstname(index: number) {
    this.getFirstnameArray().removeAt(index)
  }

  submitProfileForm(e: Event) {
    e.preventDefault();
    if (this.profileInfos.valid) {
      console.log(this.profileInfos.value);
    } else {
      console.log('Formulaire incomplet');
      
    }
  }

  // Méthode propre à l'interface CanComponentDeactivate
  canDeactivate(): boolean | Promise<boolean> {
    // On vérifie si le formGroup est utilisé (touched) et s'il est invalide (non completé par exemple)
    if (this.profileInfos.touched && !this.profileInfos.valid) {
      // Si c'est le cas, on indique qu'il est en cours (dirty)
      this.isDirty = true;
    }

    // S'il est en cours, on demande à l'utilisateur la confirmation pour lui quitter la page
    if (this.isDirty) {
      return confirm("Your profile isn't yet saved. Do you really want to leave the page ?")
    }

    // Si pas, on quitte la page
    return true;
  }

}
