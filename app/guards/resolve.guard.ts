import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve,
} from "@angular/router";
import { Observable } from "rxjs";
import { UserServiceService } from "../service/user-service.service";

@Injectable({
  providedIn: "root",
})
export class ResolveGuard implements Resolve<any> {
  
  constructor(private myservice: UserServiceService) {}
  
  resolve() {
    return this.myservice.getAll();
  }
  
}
