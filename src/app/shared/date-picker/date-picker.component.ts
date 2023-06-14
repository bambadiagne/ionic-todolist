import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCalendar, NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {

  public model: NgbDateStruct | undefined;
	public date: { year: number; month: number;day:number } | undefined;
  @Output() selectedDate = new EventEmitter<Date>();
	constructor(private calendar: NgbCalendar) {}
  
  ngOnInit(): void {
   
  }
  onDateSelect(date:any){
      this.selectedDate.emit(new Date(date.year, date.month + 1, date.day));
    
  }
	

}
