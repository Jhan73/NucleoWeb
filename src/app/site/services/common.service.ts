import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http: HttpClient ) { }

  getById( path: string, id: number){
    const urlPath = `${path}`
    return this.http.get<any>(urlPath)
  }

  getAll( path: string){
    const urlPath = `${path}`
    return this.http.get<any>(urlPath)
  }
  create( path: string, data: {}){
    const urlPath = `${path}`
    return this.http.post<any>(urlPath, data)
  }
  update( path: string, data: {}){
    const urlPath = `${path}`
    return this.http.put<any>(urlPath, data)
  }
  delete( path: string, id: number){
    const urlPath = `${path}/${id}`
    return this.http.delete<any>(urlPath)
  }

}
