import type { CollectionConfig } from 'payload/types'

// Target collections for routes
const _possibleTargets = ['pages']

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const sitemapHandler = async (req, res) => {
  const routes = await req.payload.find({
    collection: 'routes',
    depth: 1,
    pagination: false,
  })

  const entries = routes.docs.map(route => {
    return {
      path: route.path,
      lastmod: route.target.value.updatedAt,
    }
  })

  res.send(entries)
}

// const buildHandler = async (req, res, next) => {
//   const routesRes = req.payload.find({
//     collection: 'routes',
//     depth: 1,
//     pagination: false,
//   })

//   // Get the site menu & site footer data as well
//   const menuRes = req.payload.findGlobal({
//     slug: 'site_menu',
//   })

//   const footerRes = req.payload.findGlobal({
//     slug: 'site_footer',
//   })

//   const [routes, menu, footer] = await Promise.all([
//     routesRes,
//     menuRes,
//     footerRes,
//   ])

//   res.send({ routes: routes.docs, menu: menuRes, footer: footerRes })
// }

const Routes: CollectionConfig = {
  slug: 'routes',
  access: {
    read: () => true,
  },
  // access: {
  //   create: ({ req }) =>
  //     collectionAccess({
  //       req: req,
  //       allowedRole: 'admin',
  //       collectionString: 'routes',
  //     }),
  //   update: ({ req }) =>
  //     collectionAccess({
  //       req: req,
  //       allowedRole: 'admin',
  //       collectionString: 'routes',
  //     }),
  //   delete: ({ req }) =>
  //     collectionAccess({
  //       req: req,
  //       allowedRole: 'admin',
  //       collectionString: 'routes',
  //     }),
  //   read: ({ req }) =>
  //     collectionAccess({
  //       req: req,
  //       allowedRole: 'editor',
  //       collectionString: 'routes',
  //       apiAccess: true,
  //     }),
  // },
  endpoints: [
    // {
    //   path: '/build',
    //   method: 'get',
    //   handler: buildHandler,
    // },
    {
      path: '/sitemap',
      method: 'get',
      handler: sitemapHandler,
    },
  ],
  admin: {
    useAsTitle: 'path',
    defaultColumns: ['path', 'target'],
  },
  fields: [
    {
      name: 'path',
      type: 'text',
      unique: true,
      index: true,
      access: {
        create: () => true,
        read: () => true,
        update: () => true,
      },
    },
    {
      name: 'target',
      type: 'relationship',
      relationTo: [..._possibleTargets],
    },
  ],
}

export default Routes
