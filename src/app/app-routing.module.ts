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


const appRoutes: Routes = [
  {path: '', component: AttendeeFormComponent, runGuardsAndResolvers: 'always'},
  {path: 'alist', component: AttendeeListComponent},
  {path: 'pairing', component: PairingComponent},
  {path: 'reset', component: ResetAttendeesComponent}
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
