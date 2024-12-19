import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
@Pipe({
  name: 'correctTime',
  standalone: true
})
export class CorrectTimePipe implements PipeTransform {

  transform(date: Date, ...args: unknown[]): unknown {
    
    return moment(date).fromNow();
  }

}
