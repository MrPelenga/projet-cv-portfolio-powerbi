import { test } from 'node:test';
import { deepStrictEqual } from 'node:assert';
import { allProjects } from '../src/data/projects/index';

test('DPE, Lead Engine and NBA come first, with Polymarket last', () => {
  deepStrictEqual(allProjects.map(project => project.id), ['6', '5', '1', '2', '3', '4', '7']);
});