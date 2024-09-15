import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PostStatus } from '../enums/post-status.enum';

@Entity('posts')
export class Post {
  @Column({ name: 'title', type: 'varchar' })
  public title: string;

  @Column({ name: 'content', type: 'varchar' })
  public content: string;

  @Column({ name: 'status', type: 'enum', enum: PostStatus })
  public status: PostStatus;

  @PrimaryGeneratedColumn({ type: 'bigint' })
  public id: number;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.status = PostStatus.VISIBLE;
  }
}
