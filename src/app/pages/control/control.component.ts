import { Component, OnInit } from '@angular/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';
import { ApiVariantsService } from 'src/app/communication/api-variants.service';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  public control: any;
  public result: { image: any; text: any; } = { image: '', text: '' };
  private _variantes: any;
  public get bkg() {
    return this.control?.uniqueImage;
  }

  public get title() {
    return this.control?.title;
  }

  public get subtitle() {
    return this.control?.subtitle;
  }

  public get image() {
    return this.result.image;
  }

  public get text() {
    return this.result.text;
  }

  public get features() {
    return this.control?.features[0];
  }

  public get variantes() {
    return this._variantes;
  }

  constructor(
    public apiSectionsService: ApiSectionsService,
    private apiVariantsService: ApiVariantsService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiSectionsService.getSection('6533fdac4f5e07001aa5bcb7').subscribe({
      next: section => {
        this.control = section.section;
        this.result = {
          image: this.control.text.split('))))</p>')[0].split('((((IMAGE:')[1],
          text: this.control.text.split('))))</p>')[1],
        };
        this.getVariantes();
      }
    });
  }

  getVariantes() {
    this.apiVariantsService.getVariantByCategory('Control dimensional').subscribe({
      next: res => {
        this._variantes = res.posts;
        console.log(this.variantes);
      }
    });
  }

  getVarianteTitle(variante: any) {
    return variante.title;
  }

  getVarianteImage(variante: any) {
    return variante.content.image[0].image;
  }

  getVarianteText(variante: any) {
    return variante.content.text[0].text;
  }

}
