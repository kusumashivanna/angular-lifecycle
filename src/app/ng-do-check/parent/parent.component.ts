import { Component, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements DoCheck, OnDestroy {
  ngOnDestroy(): void {
    // This method will be called just before the component is destroyed
    console.log('OnDestory', this.message);
  }
  ngDoCheck(): void {
    console.log(this.doCheckMessage, this.message);
    //check if the input value is changed and implement the logic
    if (this.doCheckMessage !== this.message) {
      this.message = this.doCheckMessage;
      console.log(this.doCheckMessage, this.message);
    }
  }
  doCheckMessage: string = '';
  message: string = '';
}
