export default {
    name: 'contentId',
    type: 'string',

    title: 'Innholds-ID',

    options: {
        list: [
            {title: 'Landingsside', value: 'home'},
            {title: 'Om Oss', value: 'about'},
            {title: 'Gruppetimer (før kalender)', value: 'sessionsBefore'},
            {title: 'Gruppetimer (etter kalender)', value: 'sessionsAfter'}
        ]
    }
}