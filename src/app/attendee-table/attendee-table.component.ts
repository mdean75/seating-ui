import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {HttpClient} from '@angular/common/http';
import {DBAttendee} from '../add-attendee/add-attendee.component';
import {GroupEvent} from '../start-event/start-event.component';
import {environment} from '../../environments/environment';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, of} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';

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
  columnsToDisplay = ['name', 'companyName', 'industry'];
  expandedElement: DBAttendee | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    const eventId = localStorage.getItem('event');

    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
      // this.paginator.pageSize = this.pageSize;
    });

    merge(this.sort.sortChange)
      .pipe(
        startWith({}),
        switchMap(() => {
          // this.isLoadingResults = true;
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
          // console.log(value);
          if (attendee.pairedWith != null) {
            for (const vv of attendee.pairedWith) {
              pairedWith.push(vv.name);
            }
          }

          attendee.pairedWithNames = pairedWith;
          this.dbattendees.push(attendee);
        }
        this.dataSource.data = this.dbattendees;
        // for (const i of this.dataSource.data) {
        //   console.log(`attendee: ${i.name}`);
        // }

      }, error => {},
        () => {
          // console.log(this.dbattendees);
          // console.log(`data source: ${this.dataSource.}`);
          // for (const i of this.dataSource) {
          //   console.log(`attendee: ${i.name}`);
          // }

      });
  }

  toggleRow(element: { expanded: boolean; }) {
    // console.log(element);
    // Uncommnet to open only single row at once
    // ELEMENT_DATA.forEach(row => {
    //   row.expanded = false;
    // })
    element.expanded = !element.expanded;
  }

//   ngOnInit(): void {
//     const eventId = localStorage.getItem('event');
//
//     this.http.get<GroupEvent>(`${environment.seatingAPI}/event/${eventId}`).subscribe(data => {
//       console.log(data);
//       const d = data.attendees as DBAttendee[];
//
//       for (const value of d) {
//         const pairedWith = new Array<string>();
//         // console.log(value);
//         if (value.pairedWith != null) {
//           for (const vv of value.pairedWith) {
//             pairedWith.push(vv.name);
//           }
//         }
//
//         value.pairedWithNames = pairedWith;
//         this.dbattendees.push(value);
//       }
//     }, error => {},
//       () => {
//       console.log(this.dbattendees);
//       console.log(this.dataSource);
//       });
//   }
//
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
];
