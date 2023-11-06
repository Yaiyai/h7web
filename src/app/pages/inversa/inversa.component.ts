import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';
@Component({
  selector: 'app-inversa',
  templateUrl: './inversa.component.html',
  styleUrls: ['./inversa.component.scss']
})
export class InversaComponent implements OnInit {
  public result: { image: any; text: any; } = { image: '', text: '' };
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


  public get image() {
    return this.result.image;
  }

  public get text() {
    return this.result.text;
  }

  public get features() {
    return this.inversa?.features[0];
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
    this.apiSectionsService.getSection(this.translate.currentLang === 'es' ? '6533fe444f5e07001aa5bcbc' : '65492b37d90d872145f14fed').subscribe({
      next: section => {
        this.inversa = section.section;
        this.result = {
          image: this.inversa.text.split('))))</p>')[0].split('((((IMAGE:')[1],
          text: this.inversa.text.split('))))</p>')[1],
        };
      }
    });
  }
}
