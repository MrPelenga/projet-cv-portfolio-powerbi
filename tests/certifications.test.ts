import { test } from 'node:test';
import { strictEqual, deepStrictEqual, ok } from 'node:assert';
import { profile } from '../src/data/profile';

test('certifications are listed newest first, Power BI PL-300 on top', () => {
  deepStrictEqual(profile.certifications.map(c => c.id), [
    'pl300', 'aws', 'azure-ds', 'pmi', 'dataiku-dev', 'dataiku-ml', 'dataiku-analytics',
  ]);
});

test('the DataCamp introduction to SQL certification is gone', () => {
  strictEqual(profile.certifications.some(c => c.id === 'datacamp-sql'), false);
  strictEqual(JSON.stringify(profile.certifications).includes('DataCamp'), false);
});

test('PL-300 shows its 7 November 2026 date and its new badge', () => {
  const pl300 = profile.certifications.find(c => c.id === 'pl300');
  strictEqual(pl300?.name, 'Microsoft Certified: Power BI Data Analyst Associate (exam PL-300)');
  strictEqual(pl300?.issuer, 'Microsoft');
  deepStrictEqual(pl300?.date, { fr: '7 novembre 2026', en: '7 November 2026' });
  strictEqual(pl300?.isNew, true);
});

test('only PL-300 carries the new badge', () => {
  deepStrictEqual(profile.certifications.filter(c => c.isNew).map(c => c.id), ['pl300']);
});

test('every certification carries the real date it was given', () => {
  for (const certification of profile.certifications) {
    ok(certification.date?.fr && certification.date?.en, `${certification.id} has no date`);
  }
});

test('credential IDs stay stored for LinkedIn alignment', () => {
  deepStrictEqual(
    profile.certifications.filter(c => c.credentialId).map(c => `${c.id}:${c.credentialId}`),
    ['azure-ds:FA6731E8268BFFB0', 'dataiku-dev:cae5bmu4w2ry', 'dataiku-ml:k8mitza8bksv'],
  );
});

test('validity dates and the training note stay stored for LinkedIn alignment', () => {
  deepStrictEqual(profile.certifications.filter(c => c.validUntil).map(c => c.id), ['azure-ds', 'pmi']);
  strictEqual(profile.certifications.find(c => c.id === 'pl300')?.note?.fr, 'Formation suivie chez MYPE Consulting');
});

test('no verification link is invented', () => {
  for (const certification of profile.certifications) {
    strictEqual(JSON.stringify(certification).includes('http'), false);
  }
});

test('the homepage chips stay short: the four main certifications', () => {
  deepStrictEqual(profile.certifications.slice(0, 4).map(c => c.id), ['pl300', 'aws', 'azure-ds', 'pmi']);
});

test('every certification has an issuer and a bilingual skills line', () => {
  for (const certification of profile.certifications) {
    ok(certification.name.length > 0 && certification.issuer.length > 0);
    ok(certification.skills.fr.length > 0 && certification.skills.en.length > 0);
  }
});
