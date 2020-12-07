import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample',
  template: `
  <div class="element-container">
  <h2 class="element-container__headline">Element-A WebComponent</h2>
  <router-outlet name="micro"></router-outlet>
</div>
  `,
  styles: []
})
export class SampleComponent implements OnChanges, OnInit {
  @Input() dataFromParent: string;
  @Output() emitDataToParent = new EventEmitter<string>();
  input: string;
  ifLoaded = false;
  constructor(private router: Router) {
    router.initialNavigation();
    // Manually triggering initial navigation
  }

  send() {
    this.emitDataToParent.emit(this.input);
    this.input = '';
  }

  ngOnInit(): void {
    if (this.ifLoaded) {
      // this code is only going to be run once
      console.log(this.dataFromParent);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.ifLoaded) {
      this.ifLoaded = true;
      this.ngOnInit();
    }
    // any code that needs to be run every time a change is made
  }
}
