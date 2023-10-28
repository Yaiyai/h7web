import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-image',
  templateUrl: './text-image.component.html',
  styleUrls: ['./text-image.component.scss']
})
export class TextImageComponent {
  @Input() isCustom: boolean = false;
  @Input() leftImage: boolean = false;
  @Input() mainTitle: any;
  @Input() image: any;
  @Input() text: any;

  constructor() { }


}
