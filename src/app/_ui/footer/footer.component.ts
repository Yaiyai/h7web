import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/communication/services/company/company.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public year = new Date().getFullYear();
  constructor(
    private router: Router,
    public companyService: CompanyService,
  ) { }

  navigate(url: string) {
    this.router.navigate([url]);
  }

  goHome() {
    this.navigate('/');
  }
}
