import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './ng-on-change/parent/parent.component';

const routes: Routes = [
  {
    path: 'ng-on-change',
    loadChildren: () =>
      import('./ng-on-change/ng-on-change.module').then(
        (m) => m.NgOnChangeModule
      ),
  },
  {
    path: 'ng-do-check',
    loadChildren: () =>
      import('./ng-do-check/ng-do-check.module').then((m) => m.NgDoCheckModule),
  },
  {
    path: 'ng-after-content-init',
    loadChildren: () =>
      import('./ng-after-contentinit/ng-after-contentinit.module').then(
        (m) => m.NgAfterContentinitModule
      ),
  },
  {
    path: 'ng-after-view-init',
    loadChildren: () =>
      import('./ng-after-viewinit/ng-after-viewinit.module').then(
        (m) => m.NgAfterViewinitModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
