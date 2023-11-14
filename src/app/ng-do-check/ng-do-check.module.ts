import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgDoCheckRoutingModule } from './ng-do-check-routing.module';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParentComponent],
  imports: [CommonModule, NgDoCheckRoutingModule, FormsModule],
})
export class NgDoCheckModule {}
