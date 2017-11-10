import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {PostsModule} from './posts/posts.module';
import {UsersModule} from './users/users.module';

const appRoutes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {path: 'Users', loadChildren: 'app/users/users.module#UsersModule' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    PostsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
