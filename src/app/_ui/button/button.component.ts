import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() classBtn: 'main' | 'outline' | 'go' | 'link' | 'gray' | 'white' | 'nolink' = 'main';
  @Input() isLink: boolean = false;
  @Input() isNegative: boolean = false;
  @Input() link: string = '';
  @Input() icon: string = '';

  constructor() { }

  ngOnInit() {

  }
}
