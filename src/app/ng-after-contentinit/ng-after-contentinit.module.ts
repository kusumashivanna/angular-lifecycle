import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgAfterContentinitRoutingModule } from './ng-after-contentinit-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [CommonModule, NgAfterContentinitRoutingModule, FormsModule],
})
export class NgAfterContentinitModule {}
