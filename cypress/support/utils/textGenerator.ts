import { faker } from "@faker-js/faker";

/**
 * Gera um título aleatório
 * @param wordCount - Número de palavras no título (padrão: 3-6)
 */
export function generateSubject(wordCount?: number): string {
    const count = wordCount ?? faker.number.int({ min: 3, max: 6 });
    return faker.lorem.sentence(count).replace('.', '');
}

/**
 * Gera um texto grande/longo
 * @param paragraphs - Número de parágrafos (padrão: 3)
 */
export function generateLongText(paragraphs: number = 3): string {
    return faker.lorem.paragraphs(paragraphs);
}