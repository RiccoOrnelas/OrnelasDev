import { Component } from '@angular/core';
import { faPhone, faMailBulk, faLocation, } from '@fortawesome/free-solid-svg-icons';
import { OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name = 'Contatos'
  emailAddress = 'rickornelas.ho@gmail.com'
  phoneNumber = "(11) 94757 - 5844"
  faPhone = faPhone
  faMail = faMailBulk
  faLocal = faLocation
  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }
}

