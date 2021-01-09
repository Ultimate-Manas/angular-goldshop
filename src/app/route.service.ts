import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RouteService {
  constructor(private http: HttpClient) {}

  public validateAuth(userName, userPassword) {
    this.http
      .post("", { user: userName, pass: userPassword })
      .subscribe(resp => {
        console.log(resp);
        localStorage.setItem("token", "true");
      });
  }

  public isAuthenticated(): boolean {
    debugger;
    const token = localStorage.getItem("token");
    return Boolean(token);
  }
}
