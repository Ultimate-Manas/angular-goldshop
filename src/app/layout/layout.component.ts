import { Component, OnInit } from "@angular/core";
import { RouteService } from "./../route.service";
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent implements OnInit {
  isLoggedIn: Boolean = true;

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    this.isLoggedIn = this.routeService.IsLoggedIn();
  }

  public logout() {
    this.routeService.Logout();
  }

  ngAfterViewInit(): void {
    var self = this;
    setTimeout(function() {
      console.log("view init");
      self.isLoggedIn = self.routeService.IsLoggedIn();
    }, 1);
  }

  ngAfterViewChecked() {
    var self = this;
    setTimeout(function() {
      console.log("view checked");
      self.isLoggedIn = self.routeService.IsLoggedIn();
      console.log(self.isLoggedIn);
    }, 1);
  }
}
