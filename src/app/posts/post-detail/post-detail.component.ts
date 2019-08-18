import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';
import IPost from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: IPost;

  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getPostData(id).subscribe(post => (this.post = post));

  }

}
