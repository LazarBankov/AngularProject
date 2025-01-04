import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  post = {} as Post;
  private map: any; // Use `any` as Leaflet types aren't loaded server-side

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    @Inject(PLATFORM_ID) private platformId: object // Inject the platform ID
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const id = this.route.snapshot.params['postId'];
      this.apiService.getSinglePost(id).subscribe((post) => {
        this.post = post;
        this.loadMap();
      });
    }
  }

  private async loadMap(): Promise<void> {
    const L = await import('leaflet');
    const map = L.map('map').setView([this.post.latitude, this.post.longitude], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        const defaultIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Path to default icon
      iconSize: [25, 41],  // Default marker size
      iconAnchor: [12, 41],  // Center of the icon (usually half the width and full height)
      popupAnchor: [0, -41]  // Popup should open above the marker
    });
  
    L.marker([this.post.latitude, this.post.longitude], { icon: defaultIcon })
      .addTo(map)
  
    setTimeout(() => map.invalidateSize(), 0); // Ensures proper sizing after render
  }
}
