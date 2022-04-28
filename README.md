This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Codes implemented in this branch

Implementated simple PWA app with Next.js --
KEY POINTS:

1. created \_document.js file, where had to add head section and some PWA related metadata.
2. Used one package named next-pwa, simply installed by

```
$ npm i next-pwa
```

3. In next.config.js file we need to add some configuration for next-pwa package.
4. We can use any online tool for `pwa asset generator`, as we can consider [PWA asset generator tool](https://www.seochecker.it/web-app-manifest-generator), also other web based tools are available, we can try any one of them.
5. Need unzip the generated files and move all files into public directory
6. Renaming the json file as metadata.json
7. Then build the app
8. Some generated files will appears which we need to add in gitignore file. Sample code,

```
# PWA files
# as with build, it will change constantly
**/public/sw.js
**/public/workbox-*.js
**/public/worker-*.js
**/public/sw.js.map
**/public/workbox-*.js.map
**/public/worker-*.js.map

```

9. To test the PWA, we need to run the app in chrome browser, and will see `download PWA app` button at the right side of the address bar.
10. Now we can download and install and simply test it.

### Small hack to remember

1. We have used

```
disable: process.env.NODE_ENV === 'development'
```

`disabled property` not to activate PWA for development mode.

### More details:

**youtube**: https://www.youtube.com/watch?v=ARNN_zmrwcw <br />
**Blog**: https://blog.avneesh.tech/how-to-create-a-pwa-with-nextjs
