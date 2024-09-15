import { CreatePostCommand } from './dto/create-post.command';
import { Injectable } from '@nestjs/common';
import { PostServiceInterface } from './interfaces/post-service.interface';
import { PostRepository } from '../repository/posts-repository';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostService implements PostServiceInterface {
  constructor(
     private readonly postRepository: PostRepository,
  ) {}

  async create(command: CreatePostCommand): Promise<Post> {
    return await this.postRepository.create(command.toEntity());
  }

  async list() {
    return this.postRepository.find()
  }
}
