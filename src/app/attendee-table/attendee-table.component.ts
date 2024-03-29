import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {HttpClient} from '@angular/common/http';
import {DBAttendee} from '../add-attendee/add-attendee.component';
import {GroupEvent} from '../start-event/start-event.component';
import {environment} from '../../environments/environment';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {PairingService} from '../pairing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-attendee-table',
  templateUrl: './attendee-table.component.html',
  styleUrls: ['./attendee-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AttendeeTableComponent implements AfterViewInit {

  dbattendees = new Array<DBAttendee>();

  dataSource = new MatTableDataSource<DBAttendee>();
  selection = new SelectionModel<DBAttendee>(true, []);
  columnsToDisplay = ['select', 'name', 'companyName', 'industry'];
  expandedElement: DBAttendee | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private http: HttpClient, private pairingService: PairingService, private router: Router) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    const eventId = localStorage.getItem('event');

    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
    });

    merge(this.sort.sortChange)
      .pipe(
        startWith({}),
        switchMap(() => {
          // this.isLoadingResults = true; // will be used later when a progress bar is added
          return this.http.get<GroupEvent>(`${environment.seatingAPI}/event/${eventId}`);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          // this.isLoadingResults = false;

          if (data === null) {
            return [];
          }

          return data.attendees;
        }),
      )
      .subscribe(data => {
        // console.log(data);
        const d = data as DBAttendee[];

        for (const attendee of d) {
          const pairedWith = new Array<string>();
          if (attendee.pairedWith != null) {
            for (const vv of attendee.pairedWith) {
              pairedWith.push(vv.name);
            }
          }

          attendee.pairedWithNames = pairedWith;
          attendee.expanded = true;
          this.dbattendees.push(attendee);
        }
        this.dataSource.data = this.dbattendees;
        this.selection.select(...this.dataSource.data);
      });
  }

  toggleRow(element: { expanded: boolean; }) {
    element.expanded = !element.expanded;
    console.log(element);
  }

  manageAllRows(flag: boolean) {
    this.dbattendees.forEach(row => {
      row.expanded = flag;
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: DBAttendee): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  selectRow(row: DBAttendee) {
    console.log(row);
  }

  test() {
    this.pairingService.setAttendees(this.selection.selected);
    this.router.navigateByUrl('pairing');
  }
}
