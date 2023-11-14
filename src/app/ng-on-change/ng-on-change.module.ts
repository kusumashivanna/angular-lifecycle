import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgOnChangeRoutingModule } from './ng-on-change-routing.module';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [CommonModule, NgOnChangeRoutingModule, FormsModule],
})
export class NgOnChangeModule {}
