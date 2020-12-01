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
                  buildHookId: '5fc6cc3a6399617bcde5c960',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-w9ccv1bc',
                  apiId: '1b344ebd-ab2b-4311-bbf9-766ab3a3e50e'
                },
                {
                  buildHookId: '5fc6cc3b19430b7729f1c385',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-id9grcn9',
                  apiId: 'cc3dc69f-6d18-4f22-a6f8-e36bbe5a387c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sakulads/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-id9grcn9.netlify.app', category: 'apps'}
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
