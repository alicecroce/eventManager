import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'//questo servizio è disponibile sempre e dovunque senza importarlo
})
export class UserService {

  constructor() { }

  getMessage(){
    return 'CiaoMondo';
  }
}
