import { Component, OnInit } from '@angular/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';
import { CompanyService } from 'src/app/communication/services/company/company.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public features: string[] = [];
  public home: any = null;

  public get floatingImage() {
    return this.home?.gallery[0];
  }

  public get bkg() {
    return this.home?.uniqueImage;
  }

  public get title() {
    return this.home?.title;
  }

  public get logo() {
    return this.companyService.companyLogoBN;
  }

  constructor(
    public companyService: CompanyService,
    public apiSectionsService: ApiSectionsService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiSectionsService.getSection('6533fce44f5e07001aa5bcaf').subscribe({
      next: section => {
        this.home = section.section;
        this.features = this.home.text.split('((()))');
        console.log(this.features);
      }
    });
  }

}
