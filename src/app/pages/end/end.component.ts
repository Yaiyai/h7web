import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {
  public result: { image: any; text: any; } = { image: '', text: '' };

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


  public get image() {
    return this.result.image;
  }

  public get text() {
    return this.result.text;
  }

  public get features() {
    return this.end?.features[0];
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
    this.apiSectionsService.getSection(this.translate.currentLang === 'es' ? '6533fe024f5e07001aa5bcba' : '65492b2bd90d872145f14fec').subscribe({
      next: section => {
        this.end = section.section;
        this.result = {
          image: this.end.text.split('))))</p>')[0].split('((((IMAGE:')[1],
          text: this.end.text.split('))))</p>')[1],
        };
      }
    });
  }

}
