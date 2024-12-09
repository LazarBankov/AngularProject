import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-dump-place',
  standalone: true,
  imports: [],
  templateUrl: './create-dump-place.component.html',
  styleUrl: './create-dump-place.component.css'
})
export class CreateDumpPlaceComponent {
  constructor(private apiService: ApiService) {}

    addPost(form: NgForm) {
      console.log(form);
      
      if (form.invalid) {
        return
      }
      console.log(form.value);
      
      //this.apiService.createPost(photoUrl, address, latitude, longitude, creator, size, people, tools).subscribe(data => {
      //  console.log(data); 
      //})
    }
}
