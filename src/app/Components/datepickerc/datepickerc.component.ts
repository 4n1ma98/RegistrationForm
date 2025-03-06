import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepickerc',
  templateUrl: './datepickerc.component.html',
  standalone: false,
  styleUrl: './datepickerc.component.css',
})
export class DatepickercComponent {
  @Input() control: FormControl = new FormControl('');
  @Input() error: boolean = false;
}
