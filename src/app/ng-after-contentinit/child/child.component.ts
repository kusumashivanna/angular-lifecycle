import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements AfterContentInit, AfterContentChecked {
  ngAfterContentInit(): void {
    // Access the projected content here
    console.log('Content has been initialized:');
    if (this.parentContent) {
      console.log(
        'Content has been initialized:',
        this.parentContent.nativeElement.textContent
      );
    }
  }
  @Input() inputText: string | undefined;
  @ContentChild('parentContent', { static: false }) parentContent:
    | ElementRef
    | undefined;
  ngAfterContentChecked(): void {
    console.log(
      'Content has been checked:',
      this.parentContent?.nativeElement.textContent,
      this.inputText
    );
    // This method will be called after Angular checks the content
    if (this.parentContent) {
      console.log(
        'Content has been checked:',
        this.parentContent.nativeElement.textContent
      );
    }
  }
}
