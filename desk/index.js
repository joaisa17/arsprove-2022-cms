import S from '@sanity/desk-tool/structure-builder';

export default () =>
S.list()
.id('base')
.title('CMS')

.items([
    ...S.documentTypeListItems(),
    S.listItem()
    .title('Bilder')
    .child(
        S.documentTypeList('sanity.imageAsset')
    )
])