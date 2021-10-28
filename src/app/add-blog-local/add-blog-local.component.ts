import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Blog } from '../servicios/blog.model';
import { BlogService } from '../servicios/blog.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'add-blog-local',
  templateUrl: './add-blog-local.component.html',
  styleUrls: ['./add-blog-local.component.css']
})

export class AddBlogLocalComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private blogService: BlogService) { }
  addForm: FormGroup;
  @Output()
  createUsercontact = new EventEmitter<Blog>();

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descipcion: ['', Validators.required]
    });
  }

  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  isEmailInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  onSubmit() {
    this.blogService.create(this.addForm.value);

    this.router.navigate(['']);
  }

  onCancel() {
    this.router.navigate(['']);
  }
}
