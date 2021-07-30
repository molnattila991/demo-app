import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-feature-a-page-container',
  templateUrl: './feature-a-page-container.component.html',
  styleUrls: ['./feature-a-page-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureAPageContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
