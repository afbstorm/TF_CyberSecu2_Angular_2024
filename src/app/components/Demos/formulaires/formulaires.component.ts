import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { telValidator } from './tel.validator';

@Component({
  selector: 'app-formulaires',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaires.component.html',
  styleUrl: './formulaires.component.css'
})
export class FormulairesComponent {

  title: string = 'La démo des formulaires pour les CyberSecu2 !';
  control: FormControl;
  group: FormGroup;
  array: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    // Le formControl va servir à contrôler un input. 
    // Si l'input est seul (comme cet exemple), préférez le ngModel
    this.control = this._formBuilder.control(null, [Validators.required, Validators.minLength(5)])

    this.group = this._formBuilder.group(
      {
        prenom: [null, [Validators.required, Validators.maxLength(8)]],
        age: [null, [Validators.required, Validators.max(42)]],
        tel: ['', [telValidator(), Validators.required]]
      },
    )

    // Déclaration d'un formArray. On utilise un formGroup pour l'encadrer
    // Puis on utilise le .array pour déclarer des contrôles de bases.
    this.array = this._formBuilder.group({
      array: this._formBuilder.array([
        this._formBuilder.control(null, Validators.required)
        // this._formBuilder.group({
        //   titre: [null, [Validators.required]],
        //   description: [null, [Validators.required]]
        // })
      ])
    })
  }

  // Méthode associée au formControl seul (this.control)
  onControlSubmit(e: Event) {
    e.preventDefault();
    if (this.control.valid) {
      console.log(this.control.value);
    } else {
      console.log('Pas valide');
    }
  }

  // Méthode associée au formGroup (this.group)
  onGroupSubmit(e: Event) {
    e.preventDefault();
    if (this.group.valid) {
      console.log(this.group.value);
    } else {
      console.log('Pas valide');
    }
  }

  // Méthode de récupération du tableau de contrôles 
  // Le type de retour DOIT être FormArray
  // On cible le formGroup et on utilise la fonction get en indiquant le nom de l'array que l'on veut récupérer
  // Sans oublier de spécifier l'aliasing " as FormArray "
  getArrayForm(): FormArray {
    return this.array.get('array') as FormArray;
  }

  addControl() {
    this.getArrayForm().push(this._formBuilder.control(null, Validators.required))
  }

  onArraySubmit(e: Event) {
    e.preventDefault();
    const values = this.array.controls['array'].value
    console.log(values.map((elem: any) => elem)
    );
    
  }
}
