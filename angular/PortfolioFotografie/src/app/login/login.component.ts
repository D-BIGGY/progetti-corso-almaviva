import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  onSubmit(form: any)  {
    console.log(form);

  }

  
  formreattivo!: FormGroup;
  ngOnInit() :void {

    this.formreattivo = new FormGroup({
      username : new FormControl(null, Validators.required),
      password : new FormControl(null,[Validators.required, Validators.minLength(8) ] ),
    }
    
    ) }

  
    ngOnSubmitReact() : void {
      console.log(this.formreattivo.value);
    }



}
