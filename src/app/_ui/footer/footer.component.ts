import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/communication/services/app/app.service';
import { CompanyService } from 'src/app/communication/services/company/company.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public year = new Date().getFullYear();
  public get design() {
    return this.appService.getTranslation('desing');
  }
  constructor(
    private router: Router,
    public companyService: CompanyService,
    public appService: AppService
  ) { }

  navigate(url: string) {
    this.router.navigate([url]);
  }

  goHome() {
    this.navigate('/');
  }
}
