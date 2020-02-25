import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppModule} from './app.module';
import {AttendeeEntryComponent} from './attendee-entry/attendee-entry.component';
import {AttendeeListComponent} from './attendee-list/attendee-list.component';
import {AppComponent} from './app.component';
import {PairingComponent} from './pairing/pairing.component';


const appRoutes: Routes = [
  {path: '', component: AttendeeEntryComponent},
  {path: 'alist', component: AttendeeListComponent},
  {path: 'pairing', component: PairingComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
