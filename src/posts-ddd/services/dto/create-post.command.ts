import { Post } from "../../entities/post.entity";

export class CreatePostCommand {
  //  title: string
  //  body: string

  constructor(
    public body: string,
    public title: string,
  ) {}
  
  toEntity() {
    return new Post(this.title, this.body);
  }
}
