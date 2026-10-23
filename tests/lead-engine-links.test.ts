import { test } from 'node:test';
import { strictEqual, deepStrictEqual } from 'node:assert';
import { project5 } from '../src/data/projects/project5';
import { project6 } from '../src/data/projects/project6';
import { project1 } from '../src/data/projects/project1';
import { project2 } from '../src/data/projects/project2';
import { project3 } from '../src/data/projects/project3';
import { project4 } from '../src/data/projects/project4';

test('Lead Engine links point to the live app and its GitHub repository, in both languages', () => {
  strictEqual(project5.appUrl, 'https://leadengine-gabriel.streamlit.app/');
  strictEqual(project5.sourceUrl, 'https://github.com/MrPelenga/Lead_Engine');
  strictEqual(project5.appLabel, "Voir l'application en ligne");
  strictEqual(project5.appLabel_en, 'Open the live app');
  strictEqual(project5.sourceLabel, 'Voir le code sur GitHub');
  strictEqual(project5.sourceLabel_en, 'View the code on GitHub');
});

test('Lead Engine shows no loading note', () => {
  strictEqual(project5.loadingNote, undefined);
  strictEqual(project5.loadingNote_en, undefined);
});

test('other projects keep their own external-link data', () => {
  strictEqual(project6.appUrl, 'https://projet-r-novation-nerg-tique-dv4jewyjntnejthixcmblb.streamlit.app/');
  strictEqual(project6.sourceUrl, 'https://github.com/MrPelenga/Projet-r-novation-nerg-tique');
  strictEqual(project6.loadingNote, 'Premier chargement : environ 30 secondes');
  strictEqual(project6.loadingNote_en, 'First load: about 30 seconds');
  strictEqual(project6.appLabel, undefined);
  deepStrictEqual(
    [project1, project2, project3, project4].map(p => [p.appUrl, p.sourceUrl]),
    [[undefined, undefined], [undefined, undefined], [undefined, undefined], [undefined, undefined]],
  );
});
