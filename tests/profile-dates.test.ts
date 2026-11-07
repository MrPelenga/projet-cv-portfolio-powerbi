import { test } from 'node:test';
import { deepStrictEqual } from 'node:assert';
import { profile } from '../src/data/profile';

test('ICD Bachelor covers 2022–2023 in both languages', () => {
  const bachelor = profile.education.find(item => item.school === 'ICD Business School');
  deepStrictEqual(bachelor?.period, { fr: '2022 – 2023', en: '2022 – 2023' });
});

test('basketball association covers eight years from 2014 to 2022', () => {
  const basketball = profile.associations.find(item => item.name === 'Basketball');
  deepStrictEqual(basketball?.period, { fr: '2014 – 2022 (8 ans)', en: '2014 – 2022 (8 years)' });
});