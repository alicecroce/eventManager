import { Component } from '@angular/core';
import { MainComponent } from "./main/main.component";
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-ssfiugvuhriugvheriun';

  constructor(private userService:UserService){

  }
  getMessageFromUserService(){
    return this.userService.getMessage();
  }
}
