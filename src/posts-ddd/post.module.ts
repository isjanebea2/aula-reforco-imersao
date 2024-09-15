import { Module } from "@nestjs/common";
import { postsController } from "./controllers/posts.controller";
import { PostRepositoryModule } from "./repository/posts-repository.module";
import { PostService } from "./services/post-service";

@Module({
  imports: [PostRepositoryModule],
  providers: [{
    provide: PostService,
    useClass: class Mock {}
  }],
  controllers: [postsController]
})
export class PostDDDModule {}
