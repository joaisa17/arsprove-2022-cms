import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import contentId from './contentId';
import content from './content';
import hero from './hero';
import link from './link';

export default createSchema({
    name: 'default',

    types: schemaTypes.concat([
        blockContent,
        contentId,
        content,
        hero,
        link
    ])
});