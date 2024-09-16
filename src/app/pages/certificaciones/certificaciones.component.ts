import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss']
})
export class CertificacionesComponent {
  public certf: any;
  public get bkg() {
    return this.certf?.uniqueImage;
  }

  public get title() {
    return this.certf?.title || '';
  }

  public get text() {
    return this.certf?.text || '';
  }

  public get images() {
    return this.certf?.gallery || [];
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
    this.getData();
  }

  getData() {
    this.apiSectionsService.getSection(this.translate.currentLang === 'es' ? '66e7f73cbdcbb1001950eb54' : '66e7f73cbdcbb1001950eb54').subscribe({
      next: section => {
        this.certf = section.section;
        let aux = section.section.gallery.filter((elm: any) => elm);
        // this.certf.gallery = [...aux].slice(0, -3);
        // this.certf.sub = [...aux].slice(1).slice(-3);
      }
    });
  }

}
