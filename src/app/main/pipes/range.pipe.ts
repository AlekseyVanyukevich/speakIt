import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'appRange'
})
export class RangePipe implements PipeTransform {
    transform(size: number) {
        const array = new Array(size).fill(0).map((v, index) => index);
        console.log(array);
        return array;
    }
}