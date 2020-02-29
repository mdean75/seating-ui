import {AttendeeI} from './Attendee-i';
import {AttendeeListComponent} from './attendee-list/attendee-list.component';
import {AppComponent} from './app.component';

const a = new AppComponent();

// export const Attendees: AttendeeI[] = [
//   {
//     name:     'Bob Davis',
//     id:        a.getRandomInteger(1, 1000),
//     industry: 'Office Equipment & Copiers',
//     business: 'Cartridge World',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Elisa Zieg',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Non-Profit Organization',
//     business: "The Sparrow's Nest Maternity Home",
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Ben Motil',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Community',
//     business: "City of O'Fallon",
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Kris Kinsinger',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Window Treatments',
//     business: 'Two Blind Guys',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Anna Alt',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Home Improvement',
//     business: 'LSL Finishes',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Danielle Fristoe',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Health & Wellness',
//     business: 'Melaleuka Wellness Company',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Betty Bauer',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Insurance Services',
//     business: 'Compass Health Consultants - Healthcare Solutions Team',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Nicolas Ippolito',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Accountants & Tax Preparation',
//     business: 'Managerial Accounting Service',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Jim Mason',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Travel Services',
//     business: 'The Cruise & Travel Planner',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Kathy Fleming',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Human Resource Services',
//     business: 'People Solutions Center',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Jodie Uhlemeyer',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Pain Management',
//     business: 'Arch Advanced Pain Management - Find A Better You',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Brad Henningfeld',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Financial Services',
//     business: 'Principal Financial Group',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Matt Buetow',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Financial Services',
//     business: 'Principal Financial Group',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Ann Lubieswki',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Travel Services',
//     business: 'Travel by Ann',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Rodney Schrum',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Text Message Marketing',
//     business: 'Ameritext',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Angie Harness',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Real Estate: Residential',
//     business: 'Keller Williams - Angie Harness',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Heidi Martin',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Financial Services',
//     business: 'Principal Financial Group',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Linda Otto',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Retail Shopping',
//     business: 'Patty-Cakes of St. Louis',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Mary Agan',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Insurance Services',
//     business: 'Kathy Kilo Peterson State Farm',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Caitlyn Baratti',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Insurance Services',
//     business: 'Haight Insurance Agency, LLC',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Lindsey Helland',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Winery',
//     business: 'Cedar Lake Cellars',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Stephanie DiCiro',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Winery',
//     business: 'Cedar Lake Cellars',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Katie Worzel',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Health & Wellness',
//     business: 'Cornerstone Care',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Rick Nies',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Home Improvement',
//     business: 'MidWest SoftWash',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Skip Stephens',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Fire Protection',
//     business: 'Cottleville Fire Protection',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Wil Skaggs',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Fire Protection',
//     business: 'Cottleville Fire Protection',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Deanna Hoffman',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Retail Shopping',
//     business: 'Touchstone Crystal Jewelry by Swarovski',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Dan Tripp',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Coffee House',
//     business: 'Alpha & Omega Roasting Company',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Greg Kinder',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Civic Organizations',
//     business: "O'Fallon Lions Club",
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Kim Henson',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Marketing: Sales Promotions',
//     business: 'Circle of Marketing',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Brian Richardson',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Radio Station',
//     business: '99.9 FM KFAV & 730 AM KWRE Kaspar Broadcasting',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Shelley Barr',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Radio Station',
//     business: '104.5 FM KSLQ',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Rich Johns',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Restoration: Fire & Flood',
//     business: 'CATCO Catastrophe Cleaning & Restoration Company',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Jennifer Begley',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Banks',
//     business: 'Reliance Bank',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
//   {
//     name:     'Katy Kruze',
//     id:       a.getRandomInteger(1, 1000),
//     industry: 'Radio Station',
//     business: 'K-Wulf 101.7FM',
//     pairedWithName: ['Ben Motil', 'Danielle Fristoe', 'Ann Lubieswki']
//   },
// ];
