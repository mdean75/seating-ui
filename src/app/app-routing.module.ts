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


const appRoutes: Routes = [
  {path: '', component: AttendeeFormComponent, runGuardsAndResolvers: 'always'},
  {path: 'attendee', component: AddAttendeeComponent, runGuardsAndResolvers: 'always'},
  {path: 'alist', component: AttendeeListComponent},
  {path: 'attendee-list', component: ViewAttendeesComponent},
  {path: 'pairing', component: PairingComponent},
  {path: 'reset', component: ResetAttendeesComponent},
  {path: 'start', component: StartEventComponent}
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
