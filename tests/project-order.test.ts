import { test } from 'node:test';
import { deepStrictEqual } from 'node:assert';
import { allProjects } from '../src/data/projects/index';

test('energy renovation is first, before Lead Engine, with existing project order preserved', () => {
  deepStrictEqual(allProjects.map(project => project.id), ['6', '5', '1', '2', '3', '4']);
});