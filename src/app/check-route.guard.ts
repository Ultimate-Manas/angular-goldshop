import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { RouteService } from "./route.service";

@Injectable()
export class CheckRouteGuard implements CanActivate {
  constructor(private routeService: RouteService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.routeService.isAuthenticated()) {
      this.router.navigate(["login"]);
      return false;
    }

    return true;
  }
}
