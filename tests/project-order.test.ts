import { test } from 'node:test';
import { deepStrictEqual } from 'node:assert';
import { allProjects } from '../src/data/projects/index';

test('newest projects come first, with the original order preserved', () => {
  deepStrictEqual(allProjects.map(project => project.id), ['7', '6', '5', '1', '2', '3', '4']);
});