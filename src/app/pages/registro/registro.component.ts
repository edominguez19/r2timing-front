import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { R2timingService } from '../../service/r2timing.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  parametroForm = new FormGroup({
    nombres: new FormControl('',[Validators.required]),
    apellidos: new FormControl('',[Validators.required]),
    ci:new FormControl('',[Validators.required]),
    fechaNacimiento:new FormControl('',[Validators.required]),
    ciudad:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    telefono:new FormControl('',[Validators.required])
  });

  constructor(private r2timingService: R2timingService, private route:Router) { }

  breakpoint:number = 1;

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth < 723)?1:2;
  }

  onSubmit()
  {
    let data = {
      "ci" : this.parametroForm.value.ci,
      "nombres":this.parametroForm.value.nombres,
      "apellidos":this.parametroForm.value.apellidos,
      "fechaNacimiento":"07-04-1987",
      "ciudad":this.parametroForm.value.ciudad,
      "email":this.parametroForm.value.email,
      "telefono":this.parametroForm.value.telefono
    }

    let consumo = this.r2timingService.post('participante',data).then(
      (respuesta:any)=>{
        console.log("pepita 123",respuesta);
        this.route.navigate(['/competidores'])
      }
    ).catch((error) => {

    });
  }

  onResize(event: any){
    this.breakpoint = (event.target.innerWidth <= 723) ? 1 : 2;
  }
 

}