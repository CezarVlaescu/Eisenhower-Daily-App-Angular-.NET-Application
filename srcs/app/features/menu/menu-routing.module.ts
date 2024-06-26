import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuContainerComponent } from './container/menu-container.component';

const routes: Routes = [
  { path: '', component: MenuContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
