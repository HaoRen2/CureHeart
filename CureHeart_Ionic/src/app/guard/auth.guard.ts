import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

// Guard para que proteger las rutas que solo puede ir cuando esta logeado puede si el usuario;
// No he utilizado porque me da problema con android
@Injectable({ providedIn: 'root' })

export class AuthGuard {

    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            return true;
        }
        // si el usuario no esta logado se le devolverá a login
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
