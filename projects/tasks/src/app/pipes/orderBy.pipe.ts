import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true,
  pure: false // pipe is impure.  it will be recalculated on each change detection cycle.
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], field: string): any[] {
    // don't transform if not array.
    if (array.length <= 1) {
      return array;
    }

    return array.slice().sort((a, b) => {
      if (a[field] < b[field]) { return -1; }
      else if (a[field] > b[field]) { return 1; }
      else { return 0; }
    });
  }

}
