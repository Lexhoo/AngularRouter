import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';


const ROUTES: Routes = [
  { path: '', component: MenuComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'user', component: UserComponent},

];


export { ROUTES };
