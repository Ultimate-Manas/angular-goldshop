import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RouteService } from "./../route.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string = "";
  userpass: string = "";
  constructor(
    private routeService: RouteService,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit() {}

  login() {
    if (this.username == "manas" && this.userpass == "1234") {
      this.routeService.setAuth("true");
      this.route.navigate([""]);
    }
    //this.http.post("", {}).subscribe(resp => {});
  }
}
