import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import IPost from '../post';
import {PostService} from '../post.service';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Observable<IPost[]>;

  constructor(private postService: PostService, public auth: AuthService) {
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  deletePost(id: string) {
    this.postService.deletePost(id);
  }

}
