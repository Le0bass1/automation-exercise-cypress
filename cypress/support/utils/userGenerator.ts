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

export function generateInvalidEmail(): string {
    const tipos = [
        () => faker.person.firstName(), // sem @ e domínio
        () => `${faker.person.firstName()}@`, // sem domínio
        () => `@${faker.internet.domainName()}`, // sem usuário
        () => faker.internet.email().replace('@', '@@'), // @ duplicado
        () => `${faker.person.firstName()} @${faker.internet.domainName()}`, // espaço
    ];

    return faker.helpers.arrayElement(tipos)();
}

export function generateInvalidPassword(): string {
    const types = [
        () => '', // vazia
        () => faker.string.alpha(2), // muito curta (2 chars)
        () => faker.string.alpha(5), // muito curta (5 chars)
        () => faker.string.numeric(8), // só números
        () => faker.string.alpha({ length: 8, casing: 'lower' }), // só minúsculas
        () => '   ', // só espaços
        () => faker.internet.password({ length: 3 }), // senha curta
    ];

    return faker.helpers.arrayElement(types)();
}