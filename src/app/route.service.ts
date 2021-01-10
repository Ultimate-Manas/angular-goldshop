import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable()
export class RouteService {
  isPriv: boolean = false;
  isLoggedIn: boolean = false;
  constructor(private http: HttpClient, private route: Router) {}

  public validateAuth(userName, userPassword) {
    this.http
      .post("", { user: userName, pass: userPassword })
      .subscribe(resp => {
        console.log(resp);
        localStorage.setItem("token", "true");
      });
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    return Boolean(token);
  }

  public setAuth(tokenValue: string, isPriv: boolean) {
    this.isLoggedIn = true;
    this.isPriv = isPriv;
    localStorage.setItem("token", tokenValue);
  }

  public isPrivUser(): boolean {
    return this.isPriv;
  }

  public IsLoggedIn() {
    return this.isLoggedIn;
  }

  public Logout() {
    if (confirm("Are you sure to logout")) {
      this.isPriv = false;
      this.isLoggedIn = false;
      localStorage.removeItem("token");
      this.route.navigate(["login"]);
    }
  }
}
