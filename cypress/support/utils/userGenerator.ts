import { faker } from "@faker-js/faker";
import { User } from "../types/user";

const countries: User['country'][] = [
    'India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore'
];

export function generateFullUser(): User {
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        title: faker.person.sexType() === "male" ? "Mr" : "Mrs",
        password: faker.internet.password(),
        birthday: faker.date.birthdate().toISOString().split("T")[0],
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        company: faker.company.name(),
        address1: faker.location.streetAddress(),
        address2: faker.location.secondaryAddress(),
        country: faker.helpers.arrayElement(countries),
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        mobileNumber: faker.phone.number(),
    };
}