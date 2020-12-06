import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  url = "http://localhost:8005/api/character"

  constructor(private http: HttpClient) { }

  public salvar(character:Character):Observable<Character>{
    return this.http.post<Character>(this.url, character)
  }

  getCharacters():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}