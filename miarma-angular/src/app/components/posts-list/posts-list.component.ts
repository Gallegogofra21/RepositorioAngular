import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post-interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  publicPosts!: Post[];
  postNumberSelected = '50';
  

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.getPublicPost();
  }
  
  getPublicPost() {
    this.postService.getPublicPosts(parseInt(this.postNumberSelected)).subscribe(publicPostResponse => {
      this.publicPosts = publicPostResponse.content;
      console.log(publicPostResponse.content);
    })
  }

}
