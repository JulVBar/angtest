import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../services/data.service.ts.service';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(array: Person[], search: string): Person[] {
    if (!search) return array;
    return array.filter(item=>item.name?.toLowerCase().includes(search?.toLowerCase()))
  }

}
