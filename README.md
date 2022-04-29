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

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Pre-rendering and static generation

1. A method of pre-rendering is basically where HTML pages generated at the build time.
2. The HTML with all data that makes up content of the webpage will be generated in advance at build time.
3. Pages are build once, cached by CDN and served to client almost instantly

### Implemented functionalities

1. Static site generation with API data throgh getStaticProps function [pages/index.js] and [pages/users.js]
2. Added client side component in users.js page in order to render the page

### Small hacks to keep in mind

### Reference

**Youtube:** https://www.youtube.com/watch?v=keP1PygtJ8c&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=16
