import { Pipe, PipeTransform } from '@angular/core';
//import { DomSanitizer} from '@angular/platform-browser';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'filter'
})
export class SafePipe implements PipeTransform {
 constructor(private sanitizer: DomSanitizer) {}
  transform(url): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
