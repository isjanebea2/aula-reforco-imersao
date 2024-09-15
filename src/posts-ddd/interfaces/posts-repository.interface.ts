import { Post } from "../entities/post.entity";

export interface PostRepositoryInterface {
   create(post: Omit<Post, 'id'>): Promise<Post>
   find(): Promise<Post[]>
}

export const POSTS_REPO_TOKEN = Symbol()

