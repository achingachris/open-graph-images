import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

// export const meta: MetaFunction = () => ({
//   charset: "utf-8",
//   title: "New Remix App",
//   viewport: "width=device-width,initial-scale=1",
// });

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  'og:image':
    'https://res.cloudinary.com/chris101/image/upload/v1656028653/Screenshot_from_2022-06-24_02-57-13_onpbiw.png',
  'og:title': 'Hackmamba, The Great Blog',
  'og:description':
    'Focus on building your product while our team of creators, product managers, and developer advocates create and deliver the right content for you',
  title: 'Hackmamba, The Great Blog',
  description:
    'Focus on building your product while our team of creators, product managers, and developer advocates create and deliver the right content for you',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
