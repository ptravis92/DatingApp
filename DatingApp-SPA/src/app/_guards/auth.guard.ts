import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
    ) { }
  canActivate(): boolean {
    return this.authService.loggedIn();
    this.alertify.error('You Shall not Pass!!');
    this.router.navigate(['/home']);
  }

}
