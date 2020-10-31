import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { World } from './world';

@Injectable()
export class WorldService {

    constructor(private http: HttpClient) { }

    getWorlds() {
        return this.http.get<any>('assets/worlds/worlds.json')
        .toPromise()
        .then(res => <World[]>res.data)
        .then(data => { return data; });
    }
}