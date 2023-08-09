import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService {
  createDb() {
    const organigrama = ''
    const miembros = [
      { id: 1, name: 'miembro 1' },
      { id: 2, name: 'miembro 2' },
      { id: 2, name: 'miembro 3' },
      { id: 2, name: 'miembro 4' },
    ];

    return { miembros };
  }
  constructor() { }

}
