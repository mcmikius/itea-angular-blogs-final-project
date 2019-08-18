import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import IPost from './post';
import {map} from 'rxjs/operators';

@Injectable()
export class PostService {
  postsCollection: AngularFirestoreCollection<IPost>;
  postDocument: AngularFirestoreDocument<IPost>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref =>
      ref.orderBy('createdAt', 'desc'));
  }

  getPosts() {
    return this.postsCollection.snapshotChanges().pipe(
      map(
        changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as IPost;
            data.id = a.payload.doc.id;
            return data;
          });
        }
      ));
  }

  getPostData(id: string) {
    this.postDocument = this.afs.doc<IPost>(`posts/${id}`);
    return this.postDocument.valueChanges();
  }

}
