import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post-interface';
import { PostsService } from 'src/app/services/posts.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() postInput!: Post;
  

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
  }

  getPostImageUrl(post: string){
    return `${post.replace('10.0.2.2', 'localhost')}`;
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(p => {
      location.reload();
    });
  }

}
