import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AttendeeEntryComponent } from './attendee-entry/attendee-entry.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AttendeeListComponent } from './attendee-list/attendee-list.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AttendeeFormComponent } from './attendee-form/attendee-form.component';
import {AttendeeService} from './attendee.service';
import { PairingComponent } from './pairing/pairing.component';
import {HttpClientModule} from '@angular/common/http';
import { ResetAttendeesComponent } from './reset-attendees/reset-attendees.component';
import {DataSharingService} from './data-sharing.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { StartEventComponent } from './start-event/start-event.component';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule} from '@angular/material/core';
import { MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { AddAttendeeComponent } from './add-attendee/add-attendee.component';
import { ViewAttendeesComponent } from './view-attendees/view-attendees.component';
import { SelectEventComponent } from './select-event/select-event.component';
import { MatSelectModule} from '@angular/material/select';
import { AttendeeTableComponent } from './attendee-table/attendee-table.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    AttendeeEntryComponent,
    AttendeeListComponent,
    AttendeeFormComponent,
    PairingComponent,
    ResetAttendeesComponent,
    StartEventComponent,
    AddAttendeeComponent,
    ViewAttendeesComponent,
    SelectEventComponent,
    AttendeeTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MDBBootstrapModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
  ],
  providers: [AttendeeService, DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
