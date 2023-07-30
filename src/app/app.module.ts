import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort'; // Importe o módulo MatSortModule
import { FlexLayoutModule } from '@angular/flex-layout'; // Importe o módulo FlexLayoutModule

import { AppComponent } from './app.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetService } from './pet.service.service';

@NgModule({
  declarations: [AppComponent, PetListComponent, PetFormComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule, // Adicione o módulo MatSortModule
    FlexLayoutModule // Adicione o módulo FlexLayoutModule
  ],
  providers: [
    PetService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' } // Defina o local para o DatePicker
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
