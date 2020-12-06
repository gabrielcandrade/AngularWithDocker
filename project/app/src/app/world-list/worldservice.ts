import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { World } from './world'

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  url = "http://localhost:8005/api/world/"

  constructor(private http: HttpClient) { }

  public salvar(world:World):Observable<World>{
    return this.http.post<World>(this.url, world)
  }

  getWorlds():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}