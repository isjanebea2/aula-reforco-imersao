import { Post } from "../../entities/post.entity";
import { CreatePostCommand } from "../dto/create-post.command";

export interface PostServiceInterface { 
   create(command: CreatePostCommand): Promise<Post>
   list(): Promise<Post[]>
}