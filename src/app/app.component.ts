import { Component } from '@angular/core';
import { AppService } from './communication/services/app/app.service';
import { ApiCompanyService } from './communication/api-company.service';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { CompanyService } from './communication/services/company/company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'H7 Metrology';
  public company: any;

  constructor(
    public appService: AppService,
    private apiCompanyService: ApiCompanyService,
    private meta: Meta,
    public translate: TranslateService,
    private companyService: CompanyService,
  ) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    translate.use('es');
    this.meta.addTags([
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'description', content: 'H7 Metrology - Dimensional & NDT Solutions - Cantabria, España' },
      { name: 'author', content: 'https://mfi.es/' },
      { name: 'keywords', content: 'H7, Reinosa, Cantabria, España, Ingeniería Inversa, Control dimensional, Ensayos no destructivos, Impresion 3D, Impresora 3D, Metrology, H7 Metrology, Método UT, Metodo MT, Inspecciones S/P, Medicion Laser Tracker' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://www.h7metrology.com/' },
      { name: 'twitter:title', content: 'H7 Metrology - Dimensional & NDT Solutions' },
      { name: 'twitter:description', content: 'H7 Metrology es una compañía que provee soluciones donde se requiera tanto el control dimensional como los ensayos no destructivos, tanto para componentes nuevos como maquinaria en servicio.' },
    ]);
  }

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    this.apiCompanyService.getCompany().subscribe({
      next: data => {
        this.company = data.company[0];
        this.companyService.setCompany(this.company);
      },
      error: err => console.error('Error getting company: ', err)
    });
  }
}
