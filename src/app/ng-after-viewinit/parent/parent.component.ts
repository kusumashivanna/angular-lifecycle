import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('myDiv', { static: false })
  myDiv!: ElementRef;
  message: string = 'hello';
  ngAfterViewInit() {
    if (this.myDiv) {
      debugger;
      console.log(
        'View has been initialized:',
        this.myDiv.nativeElement.innerHTML
      );
    }
  }
  ngAfterViewChecked() {
    console.log('View has been initialized:', this.message);
  }
}
