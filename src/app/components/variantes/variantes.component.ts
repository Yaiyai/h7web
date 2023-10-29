import { Component, Input, OnInit } from '@angular/core';
import { ApiVariantsService } from 'src/app/communication/api-variants.service';

@Component({
  selector: 'app-variantes',
  templateUrl: './variantes.component.html',
  styleUrls: ['./variantes.component.scss']
})
export class VariantesComponent implements OnInit {
  @Input() category!: string;
  private _variantes: any;
  public get hasVariants() {
    return this._variantes?.length > 0;
  }

  public get variantes() {
    return this._variantes;
  }

  constructor(
    private apiVariantsService: ApiVariantsService,
  ) { }

  ngOnInit() {
    this.getVariantes();
  }

  getVariantes() {
    this.apiVariantsService.getVariantByCategory(this.category).subscribe({
      next: res => {
        this._variantes = res.posts;
      }
    });
  }

  getVarianteTitle(variante: any) {
    return variante.title;
  }

  getVarianteImage(variante: any) {
    return variante.content.image[0]?.image;
  }

  getVarianteText(variante: any) {
    return variante.content.text[0]?.text;
  }
}
