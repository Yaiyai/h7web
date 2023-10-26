import { Component, OnInit } from '@angular/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';
@Component({
  selector: 'app-inversa',
  templateUrl: './inversa.component.html',
  styleUrls: ['./inversa.component.scss']
})
export class InversaComponent implements OnInit {
  public inversa: any;
  public get bkg() {
    return this.inversa?.uniqueImage;
  }

  public get title() {
    return this.inversa?.title;
  }

  public get subtitle() {
    return this.inversa?.subtitle;
  }

  constructor(
    public apiSectionsService: ApiSectionsService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiSectionsService.getSection('6533fe444f5e07001aa5bcbc').subscribe({
      next: section => {
        this.inversa = section.section;
        console.log(this.inversa);
      }
    });
  }
}
