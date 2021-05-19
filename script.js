/* globals Docute */

new Docute({

    target: '#docute',
    sourcePath: 'contents/v2/',
    detectSystemDarkTheme: true,
    darkThemeToggler: true,
    highlight: ['js', 'bash', 'php', 'markdown', 'sql', 'json', 'regex', 'sass', 'less', 'html', 'git', 'vue'],
    nav: [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Links',
            link: '/links'
        }
    ],

    sidebar: [

        {
            title: 'IOSS',
            links: [
                {
                    title: 'VAT number Validation',
                    link: '/ioss/vat_number_validation'
                },

            ]
        },
        {
            title: 'HS Classification',
            links: [
                {
                  title: 'Code Finder',
                  link: '/hs-classification/hs_finder',
                },
                {
                    title: 'Classification History',
                    link: '/hs-classification/hs_classification_history',
                },
            ]
        },
    ],

});
