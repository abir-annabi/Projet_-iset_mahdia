import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcomeMessage: string = 'Bienvenue';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const name = this.route.snapshot.queryParamMap.get('name');
    const surname = this.route.snapshot.queryParamMap.get('surname');
    if (name && surname) {
      this.welcomeMessage = `Bienvenue ${name} ${surname}`;
    }
  }
}
