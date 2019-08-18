import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {PostService} from '../post.service';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  title: string;
  image: string = null;
  content: string;

  buttonText = 'CREATE';

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;


  constructor(private auth: AuthService, private postService: PostService, private storage: AngularFireStorage) {
  }

  ngOnInit() {
  }

  createPost() {
    const data = {
      title: this.title,
      content: this.content,
      image: this.image || null,
      createdAt: new Date(),
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId
    };
    this.postService.createPost(data);
    this.title = '';
    this.content = '';
    this.buttonText = 'POST CREATED';
    setTimeout(() => (this.buttonText = 'Create Post'), 3000);
  }

  uploadImage(event) {
    const file = event.target.files[0];
    const filePath = `posts/${file.name}`;
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files');
    } else {
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.downloadURL = fileRef.getDownloadURL();
      this.uploadPercent = task.percentageChanges();
      console.log('Image Uploaded!');
      this.downloadURL.subscribe(url => this.image = url);
    }
  }
}

