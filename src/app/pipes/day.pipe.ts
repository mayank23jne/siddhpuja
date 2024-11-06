import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(value: any, arg): unknown {
	 if(value == 'Monday'){
		 var day = 'सोमवार'
	 }else if(value == 'Tuesday'){
		  var day = 'मंगलवार'
	 }else if(value == 'Wednesday'){
		  var day = 'बुधवार'
	 }else if(value == 'Thursday'){
		  var day = 'गुरुवार'
	 }else if(value == 'Friday'){
		  var day = 'शुक्रवार'
	 }else if(value == 'Saturday'){
		  var day = 'शनिवार'
	 }else{
		  var day = 'रविवार'
	 }
    return day;
  }

}
