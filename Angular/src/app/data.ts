function randomFactory() {
  let s = 123456789;
  return function random() {
    s = (1103515245 * s + 12345) % 2147483647;
    return s % (10 - 1);
  };
}

export interface SampleItem {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: Date;
}

export default function generateData(count: number): SampleItem[] {
  const random = randomFactory();
  const surnames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Harris', 'Clark', 'Allen', 'Scott', 'Carter'];
  const names = ['James', 'John', 'Robert', 'Christopher', 'George', 'Mary', 'Nancy', 'Sandra', 'Michelle', 'Betty'];
  const genders = ['Male', 'Female'];
  const items: SampleItem[] = [];

  const startBirthDate = Date.parse('1/1/1975');
  const endBirthDate = Date.parse('1/1/1992');

  for (let i = 0; i < count; i += 1) {
    const birthDate = new Date(
      startBirthDate + Math.floor((random() * (endBirthDate - startBirthDate)) / 10),
    );
    birthDate.setHours(12);

    const nameIndex = random();
    items.push({
      id: i + 1,
      firstName: names[nameIndex],
      lastName: surnames[random()],
      gender: genders[Math.floor(nameIndex / 5)],
      birthDate,
    });
  }

  return items;
}
