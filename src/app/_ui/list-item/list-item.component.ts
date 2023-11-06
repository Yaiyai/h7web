import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/communication/services/app/app.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() image: any = '';
  @Input() mainTitle: any;
  @Input() link: any;

  constructor(private router: Router, public appService: AppService) { }

  navigate(url: string) {
    this.router.navigate([url]);
  }

}
