import {NgModule} from '@angular/core';
import {PostDashboardComponent} from './post-dashboard/post-dashboard.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostsListComponent} from './posts-list/posts-list.component';
import {PostService} from './post.service';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: 'blogs', component: PostsListComponent },
  { path: 'blogs/:id', component: PostDetailComponent },
  { path: 'dashboard', component: PostDashboardComponent },
]


@NgModule({
  declarations: [PostDashboardComponent, PostDetailComponent, PostsListComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  providers: [PostService]
})
export class PostsModule {
}
