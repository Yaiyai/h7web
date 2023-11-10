import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';

@Component({
  selector: 'app-subvenciones',
  templateUrl: './subvenciones.component.html',
  styleUrls: ['./subvenciones.component.scss']
})
export class SubvencionesComponent implements OnInit {
  public sub: any;
  public sub2: any;
  public get bkg() {
    return this.sub?.uniqueImage;
  }

  public get title() {
    return this.sub?.title || '';
  }

  public get text() {
    return this.sub?.text || '';
  }
  public get text2() {
    return this.sub2?.text || '';
  }
  public get images() {
    return this.sub?.gallery || [];
  }

  public get images2() {
    return this.sub2?.gallery || [];
  }

  public get subimages() {
    return this.sub?.sub || [];
  }

  constructor(
    private translate: TranslateService,
    private apiSectionsService: ApiSectionsService,
  ) {
    this.translate.onLangChange.subscribe(res => {
      this.getData();
    });
  }

  ngOnInit(): void {
    // this.getData();
  }

  getData() {
    this.apiSectionsService.getSection(this.translate.currentLang === 'es' ? '654e03ffbdcbb100194f8f88' : '654e03ffbdcbb100194f8f88').subscribe({
      next: section => {
        this.sub = section.section;
        let aux = section.section.gallery.filter((elm: any) => elm);
        this.sub.gallery = [...aux].slice(0, -3);
        this.sub.sub = [...aux].slice(1).slice(-3);
        this.getData2();
      }
    });
  }

  getData2() {
    this.apiSectionsService.getSection(this.translate.currentLang === 'es' ? '654e0b04bdcbb100194f8ff3' : '654e0b04bdcbb100194f8ff3').subscribe({
      next: section => {
        this.sub2 = section.section;
      }
    });

  }
}
