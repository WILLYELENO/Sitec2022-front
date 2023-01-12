This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Using json-server to simulate a fake API:
-Run the command "npm run fake-api-auth" so the server will be up.
Documentation: 
JSON Placeholder https://jsonplaceholder.typicode.com/
JSON Server https://github.com/typicode/json-server

Requirements:
It is required to generate a website for the ITEC institution, where it can be consulted
contact information, news, main page detailing the different areas
With photographs and some descriptive text. In addition, said website must also
allow working with sessions for students or teachers of the site to access
different contents.

Features developed:
Suppliers
- Theme: Required to be able to select between a Dark and Light Theme
- Auth: We detail the logic to know if a user logged in
- Language: At least two languages ​​Spanish and English are required
- Mobile: Provider that gives us information on the type of device
Pages
- Index: main page images links and descriptions (publish)
- login: controlled forms to be able to log in (public)
- contact: information and form to send queries (public)
- news: information and news from ITEC (public)
- home: home page of the student (protected by Auth)
Services
- MockService: allows to emulate response with promises
- ServiceApi: allows us to communicate with the back through fetch
.


Authentication:
User: "williams@itec.org.ar"

Password: "123456"



You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
