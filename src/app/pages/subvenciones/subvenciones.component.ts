import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-subvenciones',
  templateUrl: './subvenciones.component.html',
  styleUrls: ['./subvenciones.component.scss']
})
export class SubvencionesComponent implements OnInit {

  constructor(
    private translate: TranslateService,
  ) {
    this.translate.onLangChange.subscribe(res => {
      this.getData();
    });
  }

  ngOnInit(): void {
  }

  getData() {

  }

}
