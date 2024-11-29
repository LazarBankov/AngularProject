import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CreateDumpPlaceComponent } from './create-dump-place/create-dump-place.component';
import { AboutComponent } from './core/about/about.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, FooterComponent, CreateDumpPlaceComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'EcoHunt';

  ngOnInit(): void {
    
  }
}
