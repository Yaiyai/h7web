import { Component, OnInit } from '@angular/core';
import { ApiSectionsService } from 'src/app/communication/api-sections.service';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  public control: any;
  public result: { image: any; text: any; } = { image: '', text: '' };
  public get bkg() {
    return this.control?.uniqueImage;
  }

  public get title() {
    return this.control?.title;
  }

  public get subtitle() {
    return this.control?.subtitle;
  }

  constructor(
    public apiSectionsService: ApiSectionsService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiSectionsService.getSection('6533fdac4f5e07001aa5bcb7').subscribe({
      next: section => {
        this.control = section.section;
        console.log(this.control);
        this.result = {
          image: this.control.text.split('))))</p>')[0].split('((((IMAGE:')[1],
          text: this.control.text.split('))))</p>')[1],
        };
      }
    });
  }

}
