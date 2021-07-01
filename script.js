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
                    title: 'Manual Classification',
                    link: '/hs-classification/hs_finder',
                },
                {
                    title: 'Bulk Classification',
                    link: '/bulk-classification/bulk_classification',
                },
                {
                    title: 'Classification History',
                    link: '/hs-classification/hs_classification_history',
                },
            ]
        },
        {
            title: 'Users',
            links: [
                {
                    title: 'Users',
                    link: '/users/users'
                },
                {
                    title: 'Consumers',
                    link: '/consumers/consumers'
                },
                {
                    title: 'Personal Information',
                    link: '/personal-information/personal_information'
                },

            ]
        },
        {
            title: 'Settings',
            links: [
                {
                    title: 'Companies',
                    link: '/companies/companies',
                },
                {
                    title: 'Transit Routes',
                    link: '/transit-routes/transit_routes'
                },

            ]
        },
        {
            title: 'Finance',
            links: [
                {
                    title: 'Billing History',
                    link: '/billing/billing_history'
                },
            ]
        },
    ],
});
