import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(readonly translate: TranslateService) {}

  setLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
