import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from '../model/user-register-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

  export class SignupFormComponent implements OnInit {
    // Incialización del formulario
    public productregister!: FormGroup;
    // variable submitted a false
    public submitted: boolean = false;
  
    // Inicializamos FormBuilder en el constructor
    constructor(private formBuilder: FormBuilder) {
       // Nuestro formulario - sin campos por defecto
       // Podemos meter valores por defecto en las comillas
        this.productregister= this.formBuilder.group({
          name: ['', [Validators.required, Validators.maxLength(20)]],
          password: ['', [Validators.required, Validators.maxLength(20)]],
          passwordRepeat: ['', [Validators.required, Validators.maxLength(20)]],
        });
     }
    
    // El OnInit -> Vacío
    ngOnInit() {/* Empty */}
    
    //Función accionada al clickar en submit
    public onSubmit(): void {
        // El usuario ha pulsado en submit->cambia a true submitted
        this.submitted = true;
        // Si el formulario es valido
        if (this.productregister.valid) {
          // Creamos un Usuario y lo emitimos
          const product: productregister = {
            name: this.productregister.get('name')?.value,
            price: this.productregister.get('price')?.value,
            description: this.productregister.get('description')?.value,
            route: this.productregister.get('route')?.value,
            opinion: this.productregister.get('opinion')?.value,
            
          };
          console.log(productregister);
          // Reseteamos todos los campos y el indicador de envío o submitted
          this.productregister.reset();
          this.submitted = false;
        }
      }
  }
});

export class FormComponent {}

export interface productregister{
  name: string;
  price: number;
  description: string;
  route: string;
  opinions: string;
}
  
