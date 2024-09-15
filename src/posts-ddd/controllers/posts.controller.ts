import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreatePostCommand } from '../services/dto/create-post.command';
import { PostService } from '../services/post-service';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('notes')
export class postsController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() body: CreatePostDto,
  ) {
    return this.postService.create(
      new CreatePostCommand(
        body.content,
        body.title,
      ),
    );
  }

  @Get()
  async list() {
    return this.postService.list();
  }
}
