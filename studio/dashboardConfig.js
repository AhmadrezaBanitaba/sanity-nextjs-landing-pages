export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee0829043745e83ee5553f9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-toknp6fa',
                  apiId: '417061da-50d0-47b2-9d1e-25adf0d28ae6'
                },
                {
                  buildHookId: '5ee082905648de3063e1e1b4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-esvf2jxv',
                  apiId: '709d00d9-e5b1-4023-9081-0add1b50a0cc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AhmadrezaBanitaba/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-esvf2jxv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
