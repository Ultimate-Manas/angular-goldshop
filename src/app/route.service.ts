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
    const token = localStorage.getItem("token");
    return Boolean(token);
  }

  public setAuth(tokenValue: string) {
    localStorage.setItem("token", tokenValue);
  }

  public isPrivUser(): boolean {
    return true;
  }
}
