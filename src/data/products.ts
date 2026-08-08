import ausherMed2400 from '../assets/products/ausher-med-2400.png';
import ausherMed2400b from '../assets/products/ausher-med-2400b.png';
import ausherMed3600 from '../assets/products/ausher-med-3600.png';
import ausherMed3600b from '../assets/products/ausher-med-3600b.png';
import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '2400',
    anchor: '#2400',
    name: 'AusherMed 2400',
    output: '2,400Wh · LiFePO4',
    battery: 'Base UPS station',
    setting: 'Home healthcare',
    tagline: 'Medical-grade UPS power station for home healthcare devices.',
    description:
      'A medical-grade LiFePO4 UPS station purpose-built for assistive technology at home — CPAP machines, air mattresses, suction pumps, feeding pumps, and oxygen concentrators. Under 10ms switchover keeps therapy running through outages, with no installation required.',
    image: ausherMed2400,
    bg: 'page',
    imageOrder: 0,
    specs: [
      { label: 'Capacity', value: '2,400Wh (expandable to 19.2kWh)' },
      { label: 'Switchover', value: 'Under 10ms' },
      { label: 'Compliance', value: 'IEC 60601-1, IEC 60601-1-2' },
      { label: 'Weight / Warranty', value: '~29kg · 5 years' },
    ],
  },
  {
    id: '2400b',
    anchor: '#2400b',
    name: 'AusherMed 2400B',
    output: '2,400Wh · Expansion Battery',
    battery: 'Requires AusherMed 2400',
    setting: 'Extended home runtime',
    tagline: 'Modular expansion battery that extends AusherMed 2400 runtime.',
    description:
      'A modular expansion battery that extends AusherMed 2400 runtime — up to seven units can connect to a single base station, scaling total capacity to 19.2kWh. Plug-and-play, with automatic detection and no configuration.',
    image: ausherMed2400b,
    bg: 'surface',
    imageOrder: 1,
    specs: [
      { label: 'Capacity', value: '2,400Wh per unit (up to 19.2kWh)' },
      { label: 'Pairs With', value: 'AusherMed 2400 (required)' },
      { label: 'Compliance', value: 'IEC 60601-1, IEC 60601-1-2' },
      { label: 'Weight / Warranty', value: '~22kg · 5 years' },
    ],
  },
  {
    id: '3600',
    anchor: '#3600',
    name: 'AusherMed 3600',
    output: '3,600Wh · LiFePO4',
    battery: 'Base UPS station',
    setting: 'Facility & SDA backup',
    tagline: 'High-capacity UPS for facility-level and SDA backup power.',
    description:
      'A high-capacity UPS station for facility-level backup — SDA homes, clinics, aged care, and vaccine cold chain. Delivers 3,600W continuous (7,200W peak) across six AC outlets, with an 8-inch monitoring touchscreen and under 10ms switchover.',
    image: ausherMed3600,
    bg: 'page',
    imageOrder: 0,
    specs: [
      { label: 'Capacity', value: '3,600Wh (expandable to 28.8kWh)' },
      { label: 'Output', value: '3,600W continuous / 7,200W peak' },
      { label: 'Compliance', value: 'IEC 62040-1, UL 9540A, CE, RCM' },
      { label: 'Weight / Warranty', value: '~48kg · 5 years' },
    ],
  },
  {
    id: '3600b',
    anchor: '#3600b',
    name: 'AusherMed 3600B',
    output: '3,600Wh · Expansion Battery',
    battery: 'Requires AusherMed 3600',
    setting: 'Extended facility runtime',
    tagline: 'Modular expansion battery that extends AusherMed 3600 runtime.',
    description:
      'A modular expansion battery for the AusherMed 3600, scaling facility-level backup up to 28.8kWh total capacity. Ideal for SDA homes, aged care, and clinics needing extended runtime beyond the base unit.',
    image: ausherMed3600b,
    bg: 'surface',
    imageOrder: 1,
    specs: [
      { label: 'Capacity', value: '3,600Wh per unit (up to 28.8kWh)' },
      { label: 'Pairs With', value: 'AusherMed 3600 (required)' },
      { label: 'Compliance', value: 'IEC 62040-1, UL 9540A, CE, RCM' },
      { label: 'Warranty', value: '5 years' },
    ],
  },
  
];

export const companyValues = [
  {
    title: 'Convenience and Efficiency',
    body: 'Pass-through charging powers devices while recharging, ensuring longer battery life and efficiency for emergency and continuous use.',
  },
  {
    title: 'Protection for Sensitive Equipment',
    body: 'Pure sine wave technology ensures clean, stable power, protecting sensitive medical equipment for accurate and reliable performance.',
  },
  {
    title: 'Energy Efficiency and Cost Savings',
    body: "Aushertech's energy-efficient design minimizes waste, helping healthcare facilities reduce costs without compromising performance.",
  },
  {
    title: 'Scalable Energy Solutions',
    body: 'Expandable battery pack allows healthcare providers to boost power capacity as needs change, ensuring flexibility in medical settings.',
  },
];

export const aboutValues = [
  {
    title: 'Our Vision',
    body: 'To create a world where power reliability never limits quality healthcare, both in hospitals and at home.',
  },
  {
    title: 'Our Mission',
    body: 'To empower healthcare providers and caregivers with safe, reliable, and innovative power solutions that prioritize patient well-being.',
  },
  {
    title: 'Our Standard',
    body: 'Every AusherMed unit is engineered to IEC 60601 medical-grade compliance, from home care to facility-level backup.',
  },
];
