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
            title: 'Authentication',
            link: '/v1/auth/authentication'
        },
        {
            title: 'Landed Cost Calculation (LCC)',
            link: '/v1/lcc/landed_cost_calculation'
        },
        {
            title: 'Product Classifications',
            links: [
                {
                    title: 'HS classifications',
                    link: '/v1/classification/hs_classification'
                },
                {
                    title: 'HTS classifications',
                    link: '/v1/classification/hts_classification'
                },
                {
                    title: 'NCM classifications',
                    link: '/v1/classification/ncm_classification'
                },

            ]
        },
        {
            title: 'IOSS',
            links: [
                {
                    title: 'VAT Validation',
                    link: '/v2/ioss/vat_number_validation'
                },

            ]
        },

    ],


    versions: {
        'v2': {
            link: '/v2/'
        },
        'v1': {
            link: '/v1/'
        }
    }

});
