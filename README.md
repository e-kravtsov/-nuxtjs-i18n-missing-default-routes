# Nuxtjs/i18n missing default routes reporoduction

1. run pnpm dev
2. try to open one of these routes
/my-pages/my-information
/my-pages/my-contacts
/my-pages/order-history
/my-pages/reminders
/order-confirmed/orderId?
/order-confirmed/orderNumber?
/order-tracking/id?
3. route slug will open up instead of them although /en/my-pages/my-information works fine. In vue devtools there are 218 routes but 225 routes expected.

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
