import {Component, OnInit} from '@angular/core';
import {Attendee} from '../attendee';
import { NgForm} from '@angular/forms';
import {AttendeeService} from '../attendee.service';
import {NavigationEnd, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {GroupEvent} from '../start-event/start-event.component';

@Component({
  selector: 'app-add-attendee',
  templateUrl: './add-attendee.component.html',
  styleUrls: ['./add-attendee.component.css']
})
export class AddAttendeeComponent implements OnInit {

  eventId = '';
  eventDate: Date;

  constructor(attservice: AttendeeService, router: Router, public sb: MatSnackBar, public http: HttpClient) {
    this.attService = attservice;
    this.router = router;
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.clearForm();
      }
    });
  }
  navigationSubscription;
  router;
  test2;
  test1;
  attService;
  totalAngularPackages: Attendee[];

  industries = getIndustries();
  model: Attendee = new Attendee(0, '', '', '');

  isActiveAddIndustry = false;

  openSnackBar(message: string, action: string) {
    this.sb.open(message, action, {
      duration: 3000,
    });
  }
  onSubmit(f: NgForm) {
    console.log('submitted form');
    // const attendee = new Attendee(this.getRandomInteger(1, 1000), this.model.name, this.model.business, this.model.industry);

    const attendee: DBAttendee = {
      id: '',
      name: this.model.name,
      companyName: this.model.business,
      industry: this.model.industry,
    };
    const eventId = localStorage.getItem('event');
    this.http.post(`${environment.seatingAPI}/event/${eventId}/attendee`, attendee).subscribe(resp => {
      console.log(`added attendee: ${resp}`);
    });

    this.clearForm();


    // this.attService.addAttendee(attendee).subscribe(data => {
    //   this.test1 = data;
    // });
    // console.log(this.totalAngularPackages);
    this.openSnackBar('Successfully added meeting attendee', 'add');
  }

  clearForm() {
    this.model = new Attendee(0, '', '', '');
  }
  ngOnInit(): void {
    this.attService.getAppData().subscribe(data => {
      this.totalAngularPackages = data;
    });
    console.log(this.totalAngularPackages);
    this.eventId = localStorage.getItem('event');
    this.eventDate = new Date(localStorage.getItem('eventDate'));
  }

  public getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  showDiv() {
    if (this.isActiveAddIndustry === false) {
      this.isActiveAddIndustry = true;
      document.getElementById('test').style.display = 'block';
    } else {
      this.isActiveAddIndustry = false;
      document.getElementById('test').style.display = 'none';
    }
  }

  initDemo() {
    console.log('initDemo()');
    const eventId = localStorage.getItem('event');
    this.http.post(`${environment.seatingAPI}/event/${eventId}/demo`, null).subscribe(data => {
      console.log(data);
    });
    this.router.navigateByUrl('/attendee-list');
  }
  addIndustry() {
    const i = document.getElementById('newIndustry') as HTMLInputElement;
    const list = document.getElementById('industry') as HTMLSelectElement;

    console.log('i: ', i.value);
    const addOption = document.createElement('option');
    addOption.value = i.value;
    addOption.text = i.value;

    console.log('add: ', addOption);

    list.add(addOption);

    i.value = '';

    document.getElementById('test').style.display = 'none';
  }

}


function getIndustries() {
  return [
    'Accountants & Tax Preparation',
    'Advertising',
    'Advertising: Direct Mail',
    'Advertising: Promotional Products',
    'Aesthestics',
    'Air Duct Cleaning & Chimney Sweep',
    'Alterations',
    'Ambulance',
    'Apartment Complexes',
    'Appliances: Sales/Service/Parts',
    'Art Studio',
    'Automobile: Body & Dent Repair',
    'Automobile: Detailing',
    'Automobile: Sales',
    'Automobile: Services & Repair',
    'Bakery',
    'Banks',
    'Banquet Facilities',
    'Barber Shop',
    'Beverage Distributors',
    'Bookkeeping Services',
    'BRC: Business Attorney',
    'BRC: CPA',
    'Brewery',
    'Bridal Shop',
    'Building Materials',
    'Business Development',
    'Business Emergency Planning',
    'Business Networking Organization',
    'Business Services',
    'Car Wash',
    'Career Coaching',
    'Catering Services',
    'Chamber of Commerce',
    'Cheerleading',
    'Child Care & Preschools',
    'Chiropractors',
    'Chocolate & Gifts',
    'Church',
    'Civic Organizations',
    'Cleaning Services: Commercial',
    'Cleaning Services: Residential',
    'Coffee House',
    'Community',
    'Computer: IT/Service/Security',
    'Concrete Work: Residential & Commercial',
    'Construction Supply',
    'Construction: Commercial',
    'Construction: Residential',
    'Consultants',
    'Consumer Lending',
    'Counseling Services',
    'Credit Card Processing',
    'Credit Unions',
    'Dance & Gymnastics',
    'Debt Counseling & Repair',
    'Dental Health',
    'Digital Media',
    'Document Management',
    'Document Shredding',
    'Education: Colleges',
    'Education: Music',
    'Education: Public & Private Schools',
    'Educational Services',
    'Elected Officials',
    'Electrical',
    'Embroidery',
    'Emergency Response & Recovery Planning',
    'Employment Agency/Service',
    'Engineering Services',
    'Entertainment',
    'Equipment Rental',
    'Event Planner',
    'Executive Collaboration Suites',
    'Financial Services',
    'Fire Protection',
    'Fitness Club & Gym',
    'Flooring',
    'Florist',
    'Food and Beverage Supply',
    'Food Truck',
    'Funeral Homes',
    'Furniture',
    'Furniture: Outdoor',
    'General Contracting',
    'Glass & Window Repair',
    'Golf Course',
    'Graphic Design',
    'Hardware Stores',
    'Health & Wellness',
    'Healthcare Services',
    'Heating & Air Services',
    'Home Decor & Accessories',
    'Home Health Agencies',
    'Home Improvement',
    'Home Inspections',
    'Hospitals',
    'Hotels & Motels',
    'Human Resource Services',
    'HWP: Grocery',
    'In-Home Podiatry',
    'Individual',
    'Industrial Supplies',
    'Insurance Broker: Chamber Benefit Plan',
    'Insurance Services',
    'Insurance Services: Commercial',
    'Internet Marketing',
    'IT',
    'IT: Back Up/Recovery/Security',
    'Jewelry',
    'Kitchen and Bath',
    'Landscaping & Lawn Service',
    'Landscaping & Lawn Service: Commercial',
    'Leadership Development & Coaching',
    'Legal Services',
    'Life Coach',
    'Locksmith',
    'Mailing Services',
    'Manufacturing',
    'Marketing: Mobile/On-line',
    'Marketing: Sales Promotions',
    'Marketing: Videography/Photography',
    'Martial Arts Academy',
    'Massage Therapy',
    'Mattress Store',
    'Meat Market',
    'Media',
    'Medicare',
    'Memory Care Unit',
    'Mental Health Services',
    'Mold Remediation',
    'Mortgage Services',
    'Moving & Storage',
    'Newspaper & Magazines',
    'Non-Profit Organization',
    'Nutritional Supplement',
    'Occupational Therapy',
    'Office Equipment & Copiers',
    'Optometrists & Ophthamologists',
    'Pain Management',
    'Painting & Supplies',
    'Party Rentals & Inflatables',
    'Payroll Services',
    'Personal Trainer & Nutrition Counseling',
    'Pest Control',
    'Pet Care',
    'Pharmacy',
    'Photo Restoration',
    'Photographers',
    'Physical Therapy',
    'Physicians',
    'Picture Framing',
    'Plumbing Services',
    'Printers & Publishers',
    'Professional Services',
    'Property Management',
    'Radio Station',
    'Real Estate: Commercial',
    'Real Estate: Residential',
    'Recreation & Sports',
    'Recycling',
    'Restaurants',
    'Restaurants: Bar & Grill',
    'Restaurants: Fast Food',
    'Restaurants: Frozen Desserts',
    'Restoration: Fire & Flood',
    'Retail Shopping',
    'Roofing',
    'RV Sales & Repair',
    'Salon & Spa',
    'Screen Printing',
    'Screen Repair',
    'Sealing',
    'Security Services',
    'Self Storage',
    'Senior Living: Assisted',
    'Senior Living: Independent',
    'Senior Living: Skilled Nursing',
    'Senior Services',
    'Service Organization',
    'Services for the Disabled',
    'Siding & Exteriors',
    'Sign Manufacturer',
    'Smoke Shop',
    'Tanning Salon',
    'Technology',
    'Telecommunications Services',
    'Text Message Marketing',
    'Title Companies',
    'Trampoline Park',
    'Travel Services',
    'Truck Services',
    'Trucking Company',
    'Urgent Care',
    'Utilities',
    'Veterinarian',
    'Web Site Design',
    'Website-Video',
    'Wholesale Clubs',
    'Wholesale Distributor',
    'Window Treatments',
    'Wine Bar',
    'Winery'
  ];
}

export interface DBAttendee {
  id: string;
  name: string;
  companyName: string;
  industry: string;
  pairedWith?: DBAttendee[];
  pairedWithNames?: string[];
}
