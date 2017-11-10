import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffichageComponent } from './affichage/affichage.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {PostServiceService} from './post-service.service';
import { AffichagePostUniqueComponent } from './affichage-post-unique/affichage-post-unique.component';
import { AffichageRootComponent } from './affichage-root/affichage-root.component';
import { AffichageCommentsComponent } from './affichage-comments/affichage-comments.component';

const postsRoutes: Routes = [{
  path: 'posts', component: AffichageRootComponent, children: [
    {
      path: ':id',
      component: AffichagePostUniqueComponent
    },
    {
      path: '',
      component: AffichageComponent
    }
     ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postsRoutes),
    HttpClientModule
  ],
  declarations: [AffichageComponent, AffichagePostUniqueComponent, AffichageRootComponent, AffichageCommentsComponent],
  providers: [PostServiceService]
})
export class PostsModule { }
