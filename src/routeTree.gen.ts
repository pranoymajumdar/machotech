/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProductsImport } from './routes/products'
import { Route as AboutUsImport } from './routes/about-us'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ProductsRoute = ProductsImport.update({
  id: '/products',
  path: '/products',
  getParentRoute: () => rootRoute,
} as any)

const AboutUsRoute = AboutUsImport.update({
  id: '/about-us',
  path: '/about-us',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about-us': {
      id: '/about-us'
      path: '/about-us'
      fullPath: '/about-us'
      preLoaderRoute: typeof AboutUsImport
      parentRoute: typeof rootRoute
    }
    '/products': {
      id: '/products'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProductsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about-us': typeof AboutUsRoute
  '/products': typeof ProductsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about-us': typeof AboutUsRoute
  '/products': typeof ProductsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about-us': typeof AboutUsRoute
  '/products': typeof ProductsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about-us' | '/products'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about-us' | '/products'
  id: '__root__' | '/' | '/about-us' | '/products'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutUsRoute: typeof AboutUsRoute
  ProductsRoute: typeof ProductsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutUsRoute: AboutUsRoute,
  ProductsRoute: ProductsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about-us",
        "/products"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about-us": {
      "filePath": "about-us.tsx"
    },
    "/products": {
      "filePath": "products.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
