import { test } from 'node:test';
import { strictEqual, deepStrictEqual, ok } from 'node:assert';
import { profile } from '../src/data/profile';

test('certifications are listed newest first, Power BI PL-300 on top', () => {
  deepStrictEqual(profile.certifications.map(c => c.id), ['pl300', 'azure-ds', 'pmi', 'aws']);
});

test('PL-300 shows its November 2026 date, its new badge and the training note', () => {
  const pl300 = profile.certifications.find(c => c.id === 'pl300');
  ok(pl300);
  strictEqual(pl300.name, 'Microsoft Certified: Power BI Data Analyst Associate (exam PL-300)');
  strictEqual(pl300.issuer, 'Microsoft');
  deepStrictEqual(pl300.date, { fr: 'Nov. 2026', en: 'Nov 2026' });
  strictEqual(pl300.isNew, true);
  strictEqual(pl300.note.fr, 'Formation suivie chez MYPE Consulting');
  strictEqual(pl300.note.en, 'Training completed at MYPE Consulting');
});

test('certifications without a given date show none, and no verification link is invented', () => {
  deepStrictEqual(profile.certifications.filter(c => c.id !== 'pl300').map(c => c.date), [undefined, undefined, undefined]);
  for (const certification of profile.certifications) {
    strictEqual(JSON.stringify(certification).includes('http'), false);
  }
});

test('every certification has an issuer and a bilingual skills line', () => {
  for (const certification of profile.certifications) {
    ok(certification.name.length > 0 && certification.issuer.length > 0);
    ok(certification.skills.fr.length > 0 && certification.skills.en.length > 0);
  }
});
