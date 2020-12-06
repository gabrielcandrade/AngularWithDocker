import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../character-list/characters';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url = "http://localhost:8005/api/skill"

  constructor(private http: HttpClient) { }

  public salvar(character:Character):Observable<Character>{
    return this.http.post<Character>(this.url, character)
  }

  getSkill():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

}