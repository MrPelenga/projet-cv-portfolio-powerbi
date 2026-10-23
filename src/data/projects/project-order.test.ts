import { test, expect } from 'bun:test';
import { allProjects } from './index';

test('energy renovation is first, before Lead Engine, with existing project order preserved', () => {
  expect(allProjects.map(project => project.id)).toEqual(['6', '5', '1', '2', '3', '4']);
});