import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-dump-place',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-dump-place.component.html',
  styleUrl: './create-dump-place.component.css'
})
export class CreateDumpPlaceComponent {
  constructor(private apiService: ApiService, private router: Router) {}

    addPost(form: NgForm) {
      
      if (form.invalid) {
        return
      }
      const { photo, address, latitude, longitude, creator, size, people, tools } = form.value;
      
      this.apiService.createPost(photo, address, latitude, longitude, creator, size, people, tools).subscribe(() => {
      this.router.navigate(['/actual-dump-places'])
      })
    }
}
