import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Post } from "../entities/post.entity";
import { PostRepositoryInterface } from "../interfaces/posts-repository.interface";

@Injectable()
export class PostRepository implements PostRepositoryInterface {

  constructor (
   @InjectRepository(Post)
   private readonly postRepo: Repository<Post> 
  ) {}
  async create(post: Omit<Post, 'id'>): Promise<Post> {
     const newPost = this.postRepo.create(post)
     return await this.postRepo.save(newPost)
  }

  async find(): Promise<Post[]> {
    return this.postRepo.find()
  }
}