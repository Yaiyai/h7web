import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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


  public get image() {
    return this.result.image;
  }

  public get text() {
    return this.result.text;
  }

  public get features() {
    return this.impresion?.features[0];
  }

  constructor(
    public apiSectionsService: ApiSectionsService,
    private translate: TranslateService,
  ) {
    this.translate.onLangChange.subscribe(res => {
      this.getData();
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiSectionsService.getSection(this.translate.currentLang === 'es' ? '6533fe834f5e07001aa5bcc1' : '65492b04d90d872145f14fe9').subscribe({
      next: section => {
        this.impresion = section.section;
        this.result = {
          image: this.impresion.text.split('))))</p>')[0].split('((((IMAGE:')[1],
          text: this.impresion.text.split('))))</p>')[1],
        };
      }
    });
  }

}
