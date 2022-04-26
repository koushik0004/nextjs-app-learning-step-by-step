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

Use Link component in next in products/index.js file
Also implemented programatic route (on button click page navigation) [in is in pages/index.js]
Also added custom 404 page, pages/404.js

#### Small hack to remember

Link component takes [replace: boolean] prop along with href prop
If we use replace prop then once we ant to use back button of browser it will landed over the home page, instade last navigated page

In case of router.push(), we can use replace prop by calling router.replace() instade of routre.push(), will behave same.
