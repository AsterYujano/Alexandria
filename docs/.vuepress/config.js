module.exports = {
    title: 'AlexandriaUI',
    description: "Alexandria's Library",
    themeConfig:{
        nav: [
            { text: 'Components', link: '/components/homepage' },
            { text: 'Github', link: 'https://github.com/AsterYujano/Alexandria' },
        ],
        sidebar: [
            {
                title: 'Components',
                collapsable: false,
                children: [
                	'/components/homepage',
                    '/components/navbar',
                    '/components/card',
                    '/components/footer',
                ]
            }
        ]
    }
}