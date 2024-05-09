import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../features/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: '',
    loadChildren: () => import('../../features/task-container/task.module').then(m => m.TaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
