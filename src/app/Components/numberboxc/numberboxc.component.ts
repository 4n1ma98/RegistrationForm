import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-numberboxc',
  standalone: false,
  templateUrl: './numberboxc.component.html',
  styleUrl: './numberboxc.component.css',
})
export class NumberboxcComponent {
  @Input() labelText: string = '';
  @Input() control: FormControl = new FormControl(0);
  @Input() error: boolean = false;
}
