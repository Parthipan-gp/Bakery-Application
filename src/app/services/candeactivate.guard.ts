import { CanDeactivateFn } from '@angular/router';
import { OrderDetailsComponent } from '../order-details/order-details.component';

export const candeactivateGuard: CanDeactivateFn<OrderDetailsComponent> = (component:OrderDetailsComponent, currentRoute, currentState, nextState) => {

  return component.canDeactivate();
};
