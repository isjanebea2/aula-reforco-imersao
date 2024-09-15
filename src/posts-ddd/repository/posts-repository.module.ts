import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../entities/post.entity';
import { PostRepository } from './posts-repository';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostRepository],
  exports: [PostRepository],
})
export class PostRepositoryModule {}
