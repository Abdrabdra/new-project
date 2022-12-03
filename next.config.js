module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://adu24file.ams3.digitaloceanspaces.com',
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'https://api.adu24.com/:path*',
  //     },
  //   ]
  // },
}

// const withImages = require('next-images')
// module.exports = withImages({
//   assetPrefix: 'https://adu24file.ams3.digitaloceanspaces.com',
//   dynamicAssetPrefix: true,
//   webpack(config, options) {
//     return config
//   }
// })