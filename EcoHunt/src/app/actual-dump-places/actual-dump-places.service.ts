import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActualDumpPlacesService {

  constructor(private http: HttpClient) { }
}
