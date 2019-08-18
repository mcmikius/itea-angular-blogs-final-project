export default interface IPost {
  id?: string;
  title: string;
  author: string;
  authorId: string;
  content: string;
  image: string;
  createdAt: Date;
}
