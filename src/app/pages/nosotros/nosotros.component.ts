import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
  public loading: boolean = true;
  public nosotros: any;
  public result: { carrera: { text: string; image: string; }; formacion: { text: string; image: string; }; sostenibilidad: { text: string; image: string; }; } = {
    carrera: {
      text: '',
      image: ''
    },
    formacion: {
      text: '',
      image: ''
    },
    sostenibilidad: {
      text: '',
      image: ''
    },
  };
  public get bkg() {
    return this.nosotros?.uniqueImage;
  }

  public get title() {
    return this.nosotros?.title;
  }

  public get subtitle() {
    return this.nosotros?.subtitle;
  }

  public get featuresOne() {
    return this.nosotros?.features[0];
  }

  public get featuresSecond() {
    return this.nosotros?.features[1];
  }

  public get sosImage() {
    return this.result?.sostenibilidad?.image;
  }

  public get formacionImage() {
    return this.result?.formacion?.image;
  }

  public get carreraImage() {
    return this.result?.carrera?.image;
  }

  public get sosText() {
    return this.result?.sostenibilidad?.text;
  }

  public get formacionText() {
    return this.result?.formacion?.text;
  }

  public get carreraText() {
    return this.result?.carrera?.text;
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
    this.loading = true;
    this.getData();

  }

  getData() {
    this.apiSectionsService.getSection(this.translate.currentLang === 'es' ? '6533fc664f5e07001aa5bcaa' : '65492af0d90d872145f14fe8').subscribe({
      next: section => {
        this.nosotros = section.section;
        let carrera = this.nosotros.text.split('IMGCARRERA:')[1].split('<p>FORMACION</p>')[0];
        let formacion = this.nosotros.text.split('IMGFORMACION:')[1].split('<p>SOSTENIBILIDAD</p>')[0];
        let sostenibilidad = this.nosotros.text.split('IMGSOSTENIBILIDAD:')[1];

        this.result.carrera.image = carrera.split('))))</p>')[0];
        this.result.carrera.text = carrera.split('))))</p>')[1];
        this.result.formacion.image = formacion.split('))))</p>')[0];
        this.result.formacion.text = formacion.split('))))</p>')[1];
        this.result.sostenibilidad.image = sostenibilidad.split('))))</p>')[0];
        this.result.sostenibilidad.text = sostenibilidad.split('))))</p>')[1];
        this.loading = false;
      }
    });
  }

}
