import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnChanges, OnInit {
  @Input() parentValueData: string | undefined;
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  ngOnInit() {
    //this etode is called after the ngOnChane and after the component is initalized
    console.log('this', this.parentValueData);
  }
}
