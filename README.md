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

used catch all routes feature offers by next.js
If go for [docs page](http://localhost:3000/docs) then it will landed on 404 page. As we still not implemented index.js file inside the docs folder

In order to see the route params and page content then navgate to [http://localhost:3000/docs/feature1](http://localhost:3000/docs/feature1). Now we can add multiple route params after feature1. all will be captured.
Check in console.. all the sent routes will be visible as an array.
e.g. [http://localhost:3000/docs/feature1/catalog1](http://localhost:3000/docs/feature1/catalog1) or [http://localhost:3000/docs/feature1/catalog1/example1](http://localhost:3000/docs/feature1/catalog1/example1)

#### Small hack

In order to make [docs page](http://localhost:3000/docs) - page working we need to update the file name inside the docs folder.
in place of [...params].js file name we need to update the name as [[...params]].js and voila.. will work.
Check the same sort of implementations with [vehicles] folder
