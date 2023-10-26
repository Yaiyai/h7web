import { Component, OnInit } from '@angular/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
  public nosotros: any;
  public get bkg() {
    return this.nosotros?.uniqueImage;
  }

  public get title() {
    return this.nosotros?.title;
  }

  public get subtitle() {
    return this.nosotros?.subtitle;
  }

  constructor(
    public apiSectionsService: ApiSectionsService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiSectionsService.getSection('6533fc664f5e07001aa5bcaa').subscribe({
      next: section => {
        this.nosotros = section.section;
        console.log(this.nosotros);
      }
    });
  }

}
