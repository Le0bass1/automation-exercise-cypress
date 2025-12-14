export interface User {
    title: string;
    name: string;
    email: string;
    password: string;
    birthday: string;
    firstName: string;
    lastName: string;
    company: string;
    address1: string;
    address2: string;
    country: 'India' | 'United States' | 'Canada' | 'Australia' | 'Israel' | 'New Zealand' | 'Singapore';
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
  }