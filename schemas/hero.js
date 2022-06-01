export default {
    name: 'hero',
    type: 'object',

    title: 'Hero',

    fields: [
        {
            name: 'title',
            type: 'string',

            title: 'Tittel'
        },

        {
            name: 'subtitle',
            type: 'string',

            title: 'Undertittel'
        },

        {
            name: 'image',
            type: 'image',

            title: 'Bakgrunnsbilde'
        }
    ]
}