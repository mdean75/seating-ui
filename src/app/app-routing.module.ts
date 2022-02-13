import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppModule} from './app.module';
import {AttendeeEntryComponent} from './attendee-entry/attendee-entry.component';
import {AttendeeListComponent} from './attendee-list/attendee-list.component';
import {AppComponent} from './app.component';
import {PairingComponent} from './pairing/pairing.component';
import {ResetAttendeesComponent} from './reset-attendees/reset-attendees.component';
import {AttendeeFormComponent} from './attendee-form/attendee-form.component';
import {MathquizComponent} from './mathquiz/mathquiz.component';
import {StartEventComponent} from './start-event/start-event.component';
import {AddAttendeeComponent} from './add-attendee/add-attendee.component';
import {ViewAttendeesComponent} from './view-attendees/view-attendees.component';
import {SelectEventComponent} from './select-event/select-event.component';


const appRoutes: Routes = [
  {path: '', component: SelectEventComponent, runGuardsAndResolvers: 'always'}, // old attendee form
  {path: 'attendee', component: AddAttendeeComponent, runGuardsAndResolvers: 'always'}, // attendee entry form
  // {path: 'alist', component: AttendeeListComponent},
  {path: 'attendee-list', component: ViewAttendeesComponent}, // view the list of attendees
  {path: 'pairing', component: PairingComponent, runGuardsAndResolvers: 'always'}, // create pairing list
  // {path: 'reset', component: ResetAttendeesComponent},
  {path: 'start', component: StartEventComponent} // create new event
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, {
    onSameUrlNavigation: 'reload',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
