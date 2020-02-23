import {Attendee} from './Attendee';
import {AttendeeListComponent} from './attendee-list/attendee-list.component';
import {AppComponent} from './app.component';

const a = new AppComponent();

export const Attendees: Attendee[] = [
  {
    name:     'Bob Davis',
    id:        a.getRandomInteger(1, 1000),
    industry: 'Office Equipment & Copiers',
    business: 'Cartridge World',
    pairedWith: []
  },
  {
    name:     'Elisa Zieg',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Non-Profit Organization',
    business: "The Sparrow's Nest Maternity Home",
    pairedWith: []
  },
  {
    name:     'Ben Motil',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Community',
    business: "City of O'Fallon",
    pairedWith: []
  },
  {
    name:     'Kris Kinsinger',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Window Treatments',
    business: 'Two Blind Guys',
    pairedWith: []
  },
  {
    name:     'Anna Alt',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Home Improvement',
    business: 'LSL Finishes',
    pairedWith: []
  },
  {
    name:     'Danielle Fristoe',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Health & Wellness',
    business: 'Melaleuka Wellness Company',
    pairedWith: []
  },
  {
    name:     'Betty Bauer',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Insurance Services',
    business: 'Compass Health Consultants - Healthcare Solutions Team',
    pairedWith: []
  },
  {
    name:     'Nicolas Ippolito',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Accountants & Tax Preparation',
    business: 'Managerial Accounting Service',
    pairedWith: []
  },
  {
    name:     'Jim Mason',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Travel Services',
    business: 'The Cruise & Travel Planner',
    pairedWith: []
  },
  {
    name:     'Kathy Fleming',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Human Resource Services',
    business: 'People Solutions Center',
    pairedWith: []
  },
  {
    name:     'Jodie Uhlemeyer',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Pain Management',
    business: 'Arch Advanced Pain Management - Find A Better You',
    pairedWith: []
  },
  {
    name:     'Brad Henningfeld',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Financial Services',
    business: 'Principal Financial Group',
    pairedWith: []
  },
  {
    name:     'Matt Buetow',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Financial Services',
    business: 'Principal Financial Group',
    pairedWith: []
  },
  {
    name:     'Ann Lubieswki',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Travel Services',
    business: 'Travel by Ann',
    pairedWith: []
  },
  {
    name:     'Rodney Schrum',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Text Message Marketing',
    business: 'Ameritext',
    pairedWith: []
  },
  {
    name:     'Angie Harness',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Real Estate: Residential',
    business: 'Keller Williams - Angie Harness',
    pairedWith: []
  },
  {
    name:     'Heidi Martin',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Financial Services',
    business: 'Principal Financial Group',
    pairedWith: []
  },
  {
    name:     'Linda Otto',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Retail Shopping',
    business: 'Patty-Cakes of St. Louis',
    pairedWith: []
  },
  {
    name:     'Mary Agan',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Insurance Services',
    business: 'Kathy Kilo Peterson State Farm',
    pairedWith: []
  },
  {
    name:     'Caitlyn Baratti',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Insurance Services',
    business: 'Haight Insurance Agency, LLC',
    pairedWith: []
  },
  {
    name:     'Lindsey Helland',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Winery',
    business: 'Cedar Lake Cellars',
    pairedWith: []
  },
  {
    name:     'Stephanie DiCiro',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Winery',
    business: 'Cedar Lake Cellars',
    pairedWith: []
  },
  {
    name:     'Katie Worzel',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Health & Wellness',
    business: 'Cornerstone Care',
    pairedWith: []
  },
  {
    name:     'Rick Nies',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Home Improvement',
    business: 'MidWest SoftWash',
    pairedWith: []
  },
  {
    name:     'Skip Stephens',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Fire Protection',
    business: 'Cottleville Fire Protection',
    pairedWith: []
  },
  {
    name:     'Wil Skaggs',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Fire Protection',
    business: 'Cottleville Fire Protection',
    pairedWith: []
  },
  {
    name:     'Deanna Hoffman',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Retail Shopping',
    business: 'Touchstone Crystal Jewelry by Swarovski',
    pairedWith: []
  },
  {
    name:     'Dan Tripp',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Coffee House',
    business: 'Alpha & Omega Roasting Company',
    pairedWith: []
  },
  {
    name:     'Greg Kinder',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Civic Organizations',
    business: "O'Fallon Lions Club",
    pairedWith: []
  },
  {
    name:     'Kim Henson',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Marketing: Sales Promotions',
    business: 'Circle of Marketing',
    pairedWith: []
  },
  {
    name:     'Brian Richardson',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Radio Station',
    business: '99.9 FM KFAV & 730 AM KWRE Kaspar Broadcasting',
    pairedWith: []
  },
  {
    name:     'Shelley Barr',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Radio Station',
    business: '104.5 FM KSLQ',
    pairedWith: []
  },
  {
    name:     'Rich Johns',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Restoration: Fire & Flood',
    business: 'CATCO Catastrophe Cleaning & Restoration Company',
    pairedWith: []
  },
  {
    name:     'Jennifer Begley',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Banks',
    business: 'Reliance Bank',
    pairedWith: []
  },
  {
    name:     'Katy Kruze',
    id:       a.getRandomInteger(1, 1000),
    industry: 'Radio Station',
    business: 'K-Wulf 101.7FM',
    pairedWith: []
  },
];
