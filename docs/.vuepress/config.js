module.exports = {
    title: 'AlexandriaCSS',
    description: "Alexandria's Library",
    themeConfig:{
        nav: [
            { text: 'COUNTER', link: '/counter/' },
            { text: 'GUIDE', link: '/guide/' },
            { text: 'Components', link: '/components/' },
        ],
        sidebar: [
            {
                title: 'Counter',
                collapsable: false,
                children: [
                '/counter/counter-app'
                ]
            },
            {
                title: 'API Guide',
                collapsable: false,
                children: [
                    '/guide/guide',
                    '/guide/api'
                ]
            },
            {
                title: 'Components',
                collapsable: false,
                children: [
                    '/components/header',
                ]
            }
        ]
    }
}