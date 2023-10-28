import { Component, OnInit } from '@angular/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';

@Component({
  selector: 'app-impresion',
  templateUrl: './impresion.component.html',
  styleUrls: ['./impresion.component.scss']
})
export class ImpresionComponent implements OnInit {
  public impresion: any;
  public result: { image: any; text: any; } = { image: '', text: '' };
  public get bkg() {
    return this.impresion?.uniqueImage;
  }

  public get title() {
    return this.impresion?.title;
  }

  public get subtitle() {
    return this.impresion?.subtitle;
  }

  constructor(
    public apiSectionsService: ApiSectionsService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiSectionsService.getSection('6533fe834f5e07001aa5bcc1').subscribe({
      next: section => {
        this.impresion = section.section;
        console.log(this.impresion);
        this.result = {
          image: this.impresion.text.split('))))</p>')[0].split('((((IMAGE:')[1],
          text: this.impresion.text.split('))))</p>')[1],
        };
      }
    });
  }

}
