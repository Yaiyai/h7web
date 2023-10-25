import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';
import { CompanyService } from 'src/app/communication/services/company/company.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Input() isCentered: boolean = false;
  @Input() needsBlue: boolean = false;
  @Input() bkg: boolean = false;
  @Input() padding: number = 20;

  constructor(
    public companyService: CompanyService,
    public apiSectionsService: ApiSectionsService,
  ) { }

  ngOnInit(): void {
  }


}
