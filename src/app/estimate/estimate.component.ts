import { Component, OnInit } from "@angular/core";
import { RouteService } from "../route.service";

@Component({
  selector: "app-estimate",
  templateUrl: "./estimate.component.html",
  styleUrls: ["./estimate.component.css"]
})
export class EstimateComponent implements OnInit {
  isPrivUser: boolean = false;
  constructor(private routeService: RouteService) {}

  ngOnInit() {
    this.isPrivUser = this.routeService.isPrivUser();
  }
}
