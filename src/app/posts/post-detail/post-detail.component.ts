import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../post.service';
import IPost from '../post';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: IPost;
  editing = false;

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService, public auth: AuthService) {
  }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getPostData(id).subscribe(data => (this.post = data));

  }

  updatePost() {
    const formData = {
      title: this.post.title,
      content: this.post.content
    };
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.updatePost(id, formData);
    this.editing = false;
  }

  deletePost() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.deletePost(id);
    this.router.navigate(['/blog']);
  }


}
