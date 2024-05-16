import { Component } from '@angular/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent {
  public logos: any;
  constructor(
    private apiSectionsService: ApiSectionsService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiSectionsService.getSection('6645ac72bdcbb10019501f13').subscribe({
      next: section => {
        this.logos = section.section.gallery;
        console.log(this.logos);
      }
    });
  }
}
