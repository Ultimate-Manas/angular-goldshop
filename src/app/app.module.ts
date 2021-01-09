import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LayoutComponent } from "./layout/layout.component";

import { CheckRouteGuard } from "./check-route.guard";
import { RouteService } from "./route.service";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    component: HelloComponent,
    canActivate: [CheckRouteGuard]
  },
  {
    path: "logout",
    component: HelloComponent,
    canActivate: [CheckRouteGuard]
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  declarations: [AppComponent, HelloComponent, LayoutComponent, LoginComponent],
  bootstrap: [LayoutComponent],
  providers: [RouteService, CheckRouteGuard]
})
export class AppModule {}
