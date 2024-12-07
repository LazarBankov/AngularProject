import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-dump-place',
  standalone: true,
  imports: [],
  templateUrl: './create-dump-place.component.html',
  styleUrl: './create-dump-place.component.css'
})
export class CreateDumpPlaceComponent {
  constructor(private apiService: ApiService) {}

    addPost(event: Event, photoUrl: string, address: string, latitude: string, longitude: string, creator: string, size: string, people: string, tools: string) {

      event.preventDefault()

      this.apiService.createPost(photoUrl, address, latitude, longitude, creator, size, people, tools).subscribe(data => {
        console.log(data);
        
      })
    }
}
