import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.css']
})
export class ServiziComponent {
  constructor(){}

  formreattivo!: FormGroup;

  onSubmit(form:any){
    console.log(form);
  }

  ngOnInit():void{
    console.log("init");
    this.formreattivo = new FormGroup({

      nome: new FormControl(null, Validators.required),
      cognome: new FormControl(null, Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
    })

  }

  onSubmitReactive(){
    console.log(this.formreattivo);
    console.log(this.formreattivo.get('nome')?.value);
  }

}
