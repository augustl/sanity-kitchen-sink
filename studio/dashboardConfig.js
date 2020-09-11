export default {
  widgets: [
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
                  buildHookId: '5f5bd67e1369812229ce5eac',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bxb4cgiw',
                  apiId: '2abb4f2e-e661-4315-bc72-6ec0683ed628'
                },
                {
                  buildHookId: '5f5bd67ee01e0a1c54ff0089',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-b6263rev',
                  apiId: '033d08c0-a813-4677-b3cc-1030a224b173'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/augustl/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-b6263rev.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
