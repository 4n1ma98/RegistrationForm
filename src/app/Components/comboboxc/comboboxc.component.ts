import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-comboboxc',
  templateUrl: './comboboxc.component.html',
  standalone: false,
  styleUrl: './comboboxc.component.css',
})
export class ComboboxcComponent {
  @Input() labelText: String = '';
  @Input() control: FormControl = new FormControl('');
  @Input() error: boolean = false;
}
