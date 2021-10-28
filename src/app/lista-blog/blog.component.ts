import { Component, OnInit } from '@angular/core';
import { Blog } from '../servicios/blog.model';
import { BlogService } from '../servicios/blog.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})

export class BlogComponent implements OnInit {

  blogs: any;
  blog: Blog;

  constructor(private ucs: BlogService, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:2539/api/Blog', {}).subscribe(datos => {
    this.blogs = datos;
    console.log(this.blogs);
    this.blogs.push(...this.ucs.getall());
    },
      err => {
        console.log(err);
      }
    );
  }
}
