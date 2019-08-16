import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import IPost from '../post';
import {PostService} from '../post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Observable<IPost[]>;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    console.log(this);
  }

}
