import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Character } from './characters';

@Injectable()
export class CharacterService {

    constructor(private http: HttpClient) { }

    getCharacters() {
        return this.http.get<any>('assets/characters/characters.json')
        .toPromise()
        .then(res => <Character[]>res.data)
        .then(data => { return data; });
    }
}