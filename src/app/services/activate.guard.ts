import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { RouterService } from './router.service';

export const activateGuard: CanActivateFn = (route, state) => {

  const auth:AuthService=inject(AuthService)  
  const router:RouterService=inject(RouterService)

  if(auth.isLoggedStatus){
    return true
  }
  else{
    router.navigateToLoginView();
    return false
  }
  
};
