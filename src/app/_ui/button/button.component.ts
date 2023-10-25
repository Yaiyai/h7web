import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() class: 'main' | 'outline' | 'go' | 'link' | 'gray' | 'white' = 'main';
  @Input() isLink: boolean = false;
  @Input() link: string = '';
  @Input() icon: string = '';

  constructor() { }

  ngOnInit() {

  }
}
