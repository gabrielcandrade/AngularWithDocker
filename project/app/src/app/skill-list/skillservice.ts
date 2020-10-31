import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Skill } from './skills';

@Injectable()
export class SkillService {

    constructor(private http: HttpClient) { }

    getSkills() {
        return this.http.get<any>('assets/skills/skills.json')
        .toPromise()
        .then(res => <Skill[]>res.data)
        .then(data => { return data; });
    }
}