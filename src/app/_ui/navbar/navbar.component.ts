import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/communication/services/app/app.service';
import { CompanyService } from 'src/app/communication/services/company/company.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private subscription: Subscription = new Subscription();
  public company: any;

  constructor(private router: Router, public companyService: CompanyService, public appService: AppService) {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goHome() {
    this.navigate('/');
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }

}
