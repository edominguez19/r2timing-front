import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { R2timingService } from '../../service/r2timing.service'

@Component({
  selector: 'app-competidores',
  templateUrl: './competidores.component.html',
  styleUrls: ['./competidores.component.css']
})
export class CompetidoresComponent implements OnInit {

  datasource!: MatTableDataSource<Paticipante>;
  @ViewChild('paginator', { static: true })
  paginator!: MatPaginator;
  @ViewChild('hASort', { static: true })
  sort!: MatSort;
  displayedColumn: string[] = ['nombre','apellido','ci','fechaNacimiento','ciudad','email','telefono'];

  competidores:Paticipante[] = [];

  constructor(private r2timingService: R2timingService, private route:Router) { 

    let consumo = r2timingService.get('participante').then(
      (respuesta:any)=>{
        for(let i = 0;i < respuesta.rows.length ; i++)
        {
          this.competidores.push(respuesta.rows[i]);
        }
        this.datasource = new MatTableDataSource<Paticipante>(this.competidores);
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sort;
      }
    ).catch((error) => {

    });

  }

  ngOnInit(): void {
    

  }

  nuevoParticipante()
  {
    this.route.navigate(['/registro'])
  }

}

export interface Paticipante
{
  'idParticipante': number,
  'ci': string,
  'apellidos': string,
  'nombres': string,
  'fechaNacimiento': string,
  'ciudad': string,
  'email': string,
  'telefono': string
}
