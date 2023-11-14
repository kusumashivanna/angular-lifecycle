import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgAfterViewinitRoutingModule } from './ng-after-viewinit-routing.module';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParentComponent],
  imports: [CommonModule, NgAfterViewinitRoutingModule, FormsModule],
})
export class NgAfterViewinitModule {}
