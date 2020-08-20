import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharecter'
})
export class LimitCharecterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
