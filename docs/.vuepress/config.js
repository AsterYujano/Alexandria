module.exports = {
    title: 'AlexandriaUI',
    description: "Alexandria's Library",
    head: [
	    ['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }],
	    ['meta', { name: 'og:type', content: 'website' }],
	    ['meta', { name: 'og:title', content: 'AlexandriaUI' }],
	    ['meta', { name: 'og:description', content: 'Alexandria\'s Library providing UI components' }],
	    ['meta', { name: 'og:image', content: '/img/logo.png' }],
	    ['meta', { name: 'twitter:card', content: 'summary' }],
	    ['meta', { name: 'twitter:title', content: 'AlexandriaUI' }],
	    ['meta', { name: 'twitter:description', content: 'Alexandria\'s Library providing UI components' }],
	    ['meta', { name: 'twitter:image', content: '/img/logo.png' }],
	    ['meta', { name: 'theme-color', content: '#42b883' }]
	],
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
                    '/components/tabs',
                ]
            }
        ]
    }
}