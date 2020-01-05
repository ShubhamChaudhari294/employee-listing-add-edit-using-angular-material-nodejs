import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatTooltipModule, MatRadioModule, MatOptionModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatCardModule, MatDialogModule, MatProgressSpinnerModule, MatDividerModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTabsModule, MatTreeModule, MatBadgeModule, MatRippleModule, MatAutocompleteModule, MatExpansionModule, MatGridListModule, MatSlideToggleModule, MatDatepickerModule, MatNativeDateModule, MatMenuModule, MatSnackBarModule } from '@angular/material';


const AngularMatModules = [
  MatIconModule,
  MatTooltipModule,
  MatRadioModule,
  MatOptionModule,
  MatSelectModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatTreeModule,
  MatBadgeModule,
  MatRippleModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatGridListModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
  MatSnackBarModule
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...AngularMatModules
  ],
  exports:[
    ...AngularMatModules
  ]
})
export class SharedModule { }
