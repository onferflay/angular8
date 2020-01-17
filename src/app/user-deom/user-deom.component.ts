import { Component } from "@angular/core";

import { UserService } from "../services/user.service";

@Component({
  selector: "app-deom",
  templateUrl: "./user-deom.component.html",
  styleUrls: ["./user-deom.component.css"]
})
export class UserDeomComponent {
  userName: string;
  // userService: UserService;

  constructor(private userService: UserService) {
    // Create an _injector_ and ask for it to resolve and create a UserService
    // const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);
    // use the injector to **get the instance** of the UserService
    // this.userService = injector.get(UserService);
  }

  signIn(): void {
    // when we sign in, set the user
    // this mimics filling out a login form
    this.userService.setUser({
      name: "Nate Murray"
    });

    // now **read** the user name from the service
    this.userName = this.userService.getUser().name;
    console.log("User name is: ", this.userName);
  }
}
