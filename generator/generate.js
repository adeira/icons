// @flow

import { warning } from '@adeira/js';
import fs from 'fs';
import path from 'path';
import * as changeCase from 'change-case';

import prettify from './prettify';
import svg2jsx from './svg2jsx';

const SOURCE_PATH = path.join(__dirname, '..', 'original');
const DESTINATION_PATH = path.join(__dirname, '..', '__generated__');
const TEMPLATES_PATH = path.join(__dirname, 'templates');

/* $FlowFixMe[unused-promise] This comment suppresses an error when upgrading
 * Flow to version 0.201.0. To see the error delete this comment and run Flow.
 */
(async () => {
  const collectedComponents = [];

  const metaFile = path.join(DESTINATION_PATH, `__meta.js`);

  for (const originalFilename of fs.readdirSync(SOURCE_PATH)) {
    const componentName = originalFilename.replace(/\.svg$/, '');
    const componentNamePascalCase = changeCase.pascalCase(componentName, {
      transform: changeCase.pascalCaseTransformMerge,
    });

    collectedComponents.push({
      svgName: componentName,
      reactName: componentNamePascalCase,
    });

    const sourceFile = path.join(SOURCE_PATH, originalFilename);
    const destinationFile = path.join(DESTINATION_PATH, `${componentNamePascalCase}.js`);

    /* $FlowFixMe[unused-promise] This comment suppresses an error when
     * upgrading Flow to version 0.201.0. To see the error delete this comment
     * and run Flow. */
    svg2jsx(fs.readFileSync(sourceFile, 'utf8'), componentNamePascalCase).then(
      (transformedIcon) => {
        warning(false, destinationFile);
        fs.writeFileSync(destinationFile, transformedIcon);
      },
    );
  }

  // TODO: replace with `@babel/template` (?)
  const metaFileCode = fs
    .readFileSync(path.join(TEMPLATES_PATH, 'metaFile.txt'), 'utf8')
    .replace('%%ICON_NAMES%%', collectedComponents.map(({ svgName }) => `'${svgName}'`).join(' | '))
    .replace(
      '%%COMPONENTS_MAP%%',
      collectedComponents
        .map(({ svgName, reactName }) => {
          return `${svgName}: React.lazy(() => import('./${reactName}'))`;
        })
        .join(',\n'),
    );

  fs.writeFileSync(metaFile, await prettify(metaFileCode));
})();
