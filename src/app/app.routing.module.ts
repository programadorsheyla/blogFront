import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogLocalComponent } from './add-blog-local/add-blog-local.component';
import { EditUsercontactComponent } from './add-blog-remoto/add-blog-remoto.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'remoto', component: EditUsercontactComponent },
  { path: 'local', component: AddBlogLocalComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
