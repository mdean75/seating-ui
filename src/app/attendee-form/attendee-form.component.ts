import {Component, OnInit, ViewChild} from '@angular/core';
import {AttendeeEntryComponent} from '../attendee-entry/attendee-entry.component';
import {Attendee} from '../attendee';
import { FormGroup, NgForm} from '@angular/forms';
import {AppComponent} from '../app.component';
import {AttendeeService} from '../attendee.service';
import {TestI} from '../testI';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-attendee-form',
  templateUrl: './attendee-form.component.html',
  styleUrls: ['./attendee-form.component.css'],
  providers: []
})
export class AttendeeFormComponent implements OnInit {
  constructor(private http: HttpClient) {}

  totalAngularPackages: Attendee[];
  test: TestI;
  userid: number;
  id: number;
  title: string;
  atts: Attendee[];
  // as: AttendeeService;
  // attendeeForm: FormGroup;
  industries = getIndustries();
  model: Attendee = new Attendee(0, '', '', '');
  // model: Attendee;
  submitted = false;
  isActiveAddIndustry = false;

  // addAttendee(att) {
  //   this.as.addAttendee(att);
  // }

  // getChildren() {
  //   this.as.getChildren().subscribe(data => this.test = {id: (data as any) });
  // }

  onSubmit(f: NgForm) {
    console.log('submitted form');
    const attendee = new Attendee(this.getRandomInteger(1, 1000), this.model.name, this.model.business, this.model.industry);
    // AppComponent.atts.push(attendee);
    // this.atts.push(attendee);
    // this.addAttendee(attendee);
    // this.as.attendeeArray.push(attendee);
    // console.log(this.as.getAttendees());
    f.form.setValue({name: '', business: '', industry: ''});

    // this.as.getChildren().subscribe((data: TestI) => this.test = { ...data} );
    // this.getChildren();
    this.http.get<any>('https://seating.bedaring.me/api/appdata').subscribe(data => {
      this.totalAngularPackages = data.Attendees;
    });
    console.log(this.totalAngularPackages);
  }

  ngOnInit(): void {
    this.http.get<any>('https://seating.bedaring.me/api/appdata').subscribe(data => {
      this.totalAngularPackages = data;
    });

    // this.http.get<any>('https://seating.bedaring.me/api/appdata').subscribe(data => {
    //   this.totalAngularPackages = data.Attendees;
    // });
    console.log(this.totalAngularPackages);
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
