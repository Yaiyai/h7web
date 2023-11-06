import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { ApiCompanyService } from 'src/app/communication/api-company.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('form') form!: ElementRef;

  public get image() {
    return 'https://res.cloudinary.com/h7metrology/image/upload/v1698574020/web/localizacionH7.png';
  }

  public get name() {
    return this.contactForm.get('name')?.value;
  }

  public contactForm!: FormGroup;

  constructor(private apiCompanyService: ApiCompanyService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      phone: new FormControl('', [Validators.required]),
      company: new FormControl(''),
      message: new FormControl('', [Validators.required]),
      receptor: new FormControl('contacto@h7metrology.com'),
      web: new FormControl('H7Metrology'),
      link: new FormControl('https://cms.h7metrology.com/h7/mensajes'),
      subject: new FormControl('Hay un mensaje nuevo en el gestor de contenido de H7Metrology'),
    });
  }

  sendEmail(e: Event) {
    const { valid, value } = this.contactForm;
    if (valid) {
      emailjs
        .sendForm('bratic_contact', 'template_messages', e.target as HTMLFormElement, 'user_ktgYq5LuGt8HgLfoJW8MI')
        .then((result) => {
          value.subject = 'Contacto desde la web H7';
          this.sendMessage(value);
        })
        .catch((error) => {
          value.subject = 'Contacto desde la web H7';
          this.sendMessage(value);
        });
    }
  }

  sendMessage(message: any) {
    this.apiCompanyService.sendMensage(message).subscribe({
      next: () => {
        this.buildForm();
      }
    });
  }
}
