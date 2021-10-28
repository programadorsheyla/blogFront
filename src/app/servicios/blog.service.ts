import { Injectable } from '@angular/core';
import { Blog } from './blog.model';
import dateFormat, { masks } from "dateformat";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: Blog[] = [];

  constructor(private http: HttpClient) {

  }

  create(blog: Blog) {
    const itemIndex = this.blogs.length;

    blog.tipo = "SITIO";
    blog.fecha = this.getFecha();

    console.log(blog);
    this.blogs[itemIndex] = blog;
  }

  getFecha() {
    let now = new Date();
    return dateFormat(now, "dd/mm/yyyy");
  }

  insertRemote(blog: Blog) {
    //debe retornar una promesa
    blog.tipo = "SERVIDOR";
    blog.fecha = this.getFecha();

    return this.http.post('http://localhost:2539/api/Blog', {
      titulo: blog.titulo,
      descripcion: blog.descipcion,
      fecha: blog.fecha,
      tipo: blog.tipo
    }, { responseType: 'text' }

    );

  }

  getall(): Blog[] {
    console.log('blogservice:getall');
    console.log(this.blogs);
    return this.blogs;
  }

}
