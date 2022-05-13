/// <reference types="@types/google.maps" />
import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './CustomMap';

console.log('hi there');

const user = new User();

console.log(user);

const company = new Company();
console.log(company);

const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
