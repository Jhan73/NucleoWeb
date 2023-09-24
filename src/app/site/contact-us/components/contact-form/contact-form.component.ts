import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/site/services/common.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  
  formGroup: FormGroup = this.getFormFields()
  sendPath: string = '/contactanos/main/'

  validationMessage = {
    email: {
      required: 'El correo es obligatorio',
      email: 'El correo debe ser una dirección de correo válido'
    },
    name: {
      required: 'El nombre es obligatorio',
    },
    phone: {
      required: 'El teléfono es obligatorio',
    },
    message: {
      required: 'El mensaje es obligatorio',
    },
  }

  constructor(private commonService: CommonService){

  }

  private getFormFields(){
    return new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      name: new FormControl('', [ Validators.required]),
      phone: new FormControl('', [ Validators.required, Validators.minLength(9)]),
      message: new FormControl('', [ Validators.required]),
      termsAndConditions: new FormControl('', [ Validators.required, Validators.requiredTrue]),
      useTerms: new FormControl('', [ Validators.required, Validators.requiredTrue]),
    })
  }

  onSubmit(){
    this.commonService.create(this.sendPath, {
      //contacto_id: 100,
      nombre: this.formGroup.value.name,
      correo: this.formGroup.value.email,
      telefono: this.formGroup.value.phone,
      mensaje: this.formGroup.value.message,
    }).subscribe({
      next: res => {
        console.log('👨‍👨‍👧‍👧', res)
      },
      error: err => {
        console.log('🙍', err)
      }
    })
  }

}
