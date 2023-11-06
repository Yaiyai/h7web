import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/communication/services/app/app.service';
import { CompanyService } from 'src/app/communication/services/company/company.service';
import { languagesFalse } from 'src/assets/languages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private subscription: Subscription = new Subscription();
  public company: any;

  constructor(
    private router: Router,
    public companyService: CompanyService,
    public translate: TranslateService,
    public appService: AppService) {
  }

  getTranslation(key: string) {
    return languagesFalse[this.translate.currentLang][key];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goHome() {
    this.navigate('/');
  }

  switchLanguage(lang: 'es' | 'en') {
    this.translate.use(lang);
  }

  navigate(url: string, anchor: string = '') {
    if (anchor) {
      this.router.navigate([url], { fragment: anchor });

    } else {
      this.router.navigate([url]);
    }
  }

}
