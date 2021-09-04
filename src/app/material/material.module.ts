import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({

  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
