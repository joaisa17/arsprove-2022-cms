export default {
    name: 'blockContent',
    type: 'array',

    title: 'Markdown-innhold',

    of: [
        {
            type: 'block',
            of: [
                { type: 'hero' }
            ]
        },
    ]
}