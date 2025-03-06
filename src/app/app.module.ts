import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtoncComponent } from './Components/buttonc/buttonc.component';
import { CheckboxcComponent } from './Components/checkboxc/checkboxc.component';
import { ComboboxcComponent } from './Components/comboboxc/comboboxc.component';
import { ContainercComponent } from './Components/containerc/containerc.component';
import { DatepickercComponent } from './Components/datepickerc/datepickerc.component';
import { FootercComponent } from './Components/footerc/footerc.component';
import { FormcComponent } from './Components/formc/formc.component';
import { MaincComponent } from './Components/mainc/mainc.component';
import { NavbarcComponent } from './Components/navbarc/navbarc.component';
import { NumberboxcComponent } from './Components/numberboxc/numberboxc.component';
import { TablecComponent } from './Components/tablec/tablec.component';
import { TextboxcComponent } from './Components/textboxc/textboxc.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AlertcComponent } from './Components/alertc/alertc.component';

export const MY_DATE_FORMATS: MatDateFormats = {
  parse: { dateInput: 'DD/MM/YYYY' },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    ButtoncComponent,
    CheckboxcComponent,
    ComboboxcComponent,
    ContainercComponent,
    DatepickercComponent,
    FootercComponent,
    FormcComponent,
    MaincComponent,
    NavbarcComponent,
    NumberboxcComponent,
    TextboxcComponent,
    TablecComponent,
    AlertcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-CO' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
