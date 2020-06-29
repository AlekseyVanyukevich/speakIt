import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'appBytesMedia'
})
export class BytesMediaPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(buffer: ArrayBuffer, type: string): SafeUrl {
    const imageData = `data:${type};base64,${buffer}`;  
    return this.sanitizer.bypassSecurityTrustUrl(imageData); 
  }

}
