import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AffichageRootUserComponent } from './affichage-root-user/affichage-root-user.component';
import { AffichageUserUniqueComponentComponent } from './affichage-user-unique-component/affichage-user-unique-component.component';
import { AffichageUsersComponent } from './affichage-users/affichage-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from "./user.service";

const usersRoutes: Routes = [{
  path: 'Users', component: AffichageRootUserComponent, children: [
    {
      path: ':id',
      component: AffichageUserUniqueComponentComponent
    },
    {
      path: '',
      component: AffichageUsersComponent
    }
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes),
    HttpClientModule
  ],
  declarations: [AffichageRootUserComponent, AffichageUserUniqueComponentComponent, AffichageUsersComponent, AddUserComponent],
  providers: [UserService]
})
export class UsersModule { }
