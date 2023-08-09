import { Component, OnInit  } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';



@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent {

  //===========================================================
  public area = {}

  // constructor(
  //   private apiService: ApiService,
  // ){}
  
  areas = {
    sistemas: {
      nombre: 'Sistemas'.toUpperCase(),
      organigrama: "Organigrama de sistemas",
      miembros: [
        {
          'Nombre': 'Miembro1',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro2',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro3',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro4',
          'email': 'emali.com'
        }
      ],
      estrategis: {
        objetivos: [
          'Objetivo1',
          'Objetivo2',
          'Objetivo3',
        ],
        miion: 'Mision del area de sistemas',
        vision: 'Vision del area de sistema'
      },
      proyectos: [
        {
          nombre: 'Proyecto 1',
          fecha: '25-12-2023'
        }
      ]
    },
    industrial: {
      nombre: 'Industrial'.toUpperCase(),
      organigrama: "Organigrama de industrial",
      miembros: [
        {
          'Nombre': 'Miembro1',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro2',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro3',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro4',
          'email': 'emali.com'
        }
      ],
      estrategis: {
        objetivos: [
          'Objetivo1',
          'Objetivo2',
          'Objetivo3',
        ],
        miion: 'Mision del area de industril',
        vision: 'Vision del area de industial'
      },
      proyectos: [
        {
          nombre: 'Proyecto 1',
          fecha: '25-12-2023'
        }
      ]
    },
    pmo: {
      nombre: 'pmo'.toUpperCase(),
      organigrama: "Organigrama de pmo",
      miembros: [
        {
          'Nombre': 'Miembro1',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro2',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro3',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro4',
          'email': 'emali.com'
        }
      ],
      estrategis: {
        objetivos: [
          'Objetivo1',
          'Objetivo2',
          'Objetivo3',
        ],
        miion: 'Mision del area de pmo',
        vision: 'Vision del area de pmo'
      },
      proyectos: [
        {
          nombre: 'Proyecto 1',
          fecha: '25-12-2023'
        }
      ]
    }
    
  }
}
