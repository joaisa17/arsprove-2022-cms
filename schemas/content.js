export default {
    name: 'contentDocument',
    type: 'document',

    title: 'Innholds-dokument',

    fields: [
        {
            name: 'contentId',
            type: 'contentId',

            title: 'Innholds-ID',
            description: 'Hentes inn av nettsiden',

            validation: r => r.required()
        },

        {
            name: 'content',
            type: 'blockContent',

            title: 'Innhold'
        }
    ],

    preview: {
        select: { id: 'contentId' },
        prepare: s => ({ title: s.id? `ID: ${s.id}` : 'Uten ID'})
    }
}