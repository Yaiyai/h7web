import { Component, OnInit } from '@angular/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {
  public end: any;
  public get bkg() {
    return this.end?.uniqueImage;
  }

  public get title() {
    return this.end?.title;
  }

  public get subtitle() {
    return this.end?.subtitle;
  }

  constructor(
    public apiSectionsService: ApiSectionsService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiSectionsService.getSection('6533fe024f5e07001aa5bcba').subscribe({
      next: section => {
        this.end = section.section;
        console.log(this.end);
      }
    });
  }

}
