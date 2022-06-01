export default {
    name: 'link',
    type: 'object',

    title: 'Lenke',

    fields: [
        {
            name: 'title',
            type: 'string',

            title: 'Tittel',
            description: 'Teksten som vises på lenken'
        },

        {
            name: 'url',
            type: 'string',

            title: 'URL',
            description: 'Siden lenken tar brukeren til. E.G: /gruppetimer, https://vg.no',

            validation: r => r.regex(/^(\/[a-zA-Z0-9_-]*)+|(https?:\/\/[a-zA-Z0-9_\.\-]+)$/, {
                name: 'Link',
                invert: false
            })
        }
    ]
}