/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutUsImport } from './routes/about-us'
import { Route as IndexImport } from './routes/index'
import { Route as ProductsIndexImport } from './routes/products/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as ProductsProductIdImport } from './routes/products/$productId'
import { Route as DashboardProductsImport } from './routes/dashboard/products'
import { Route as DashboardCategoriesImport } from './routes/dashboard/categories'
import { Route as CategoryCategoryIdImport } from './routes/category/$categoryId'
import { Route as DashboardAuthLoginImport } from './routes/dashboard/auth/login'
import { Route as DashboardAddProductImport } from './routes/dashboard/add/product'
import { Route as DashboardAddCategoryImport } from './routes/dashboard/add/category'

// Create/Update Routes

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

const ProductsIndexRoute = ProductsIndexImport.update({
  id: '/products/',
  path: '/products/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/dashboard/',
  path: '/dashboard/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsProductIdRoute = ProductsProductIdImport.update({
  id: '/products/$productId',
  path: '/products/$productId',
  getParentRoute: () => rootRoute,
} as any)

const DashboardProductsRoute = DashboardProductsImport.update({
  id: '/dashboard/products',
  path: '/dashboard/products',
  getParentRoute: () => rootRoute,
} as any)

const DashboardCategoriesRoute = DashboardCategoriesImport.update({
  id: '/dashboard/categories',
  path: '/dashboard/categories',
  getParentRoute: () => rootRoute,
} as any)

const CategoryCategoryIdRoute = CategoryCategoryIdImport.update({
  id: '/category/$categoryId',
  path: '/category/$categoryId',
  getParentRoute: () => rootRoute,
} as any)

const DashboardAuthLoginRoute = DashboardAuthLoginImport.update({
  id: '/dashboard/auth/login',
  path: '/dashboard/auth/login',
  getParentRoute: () => rootRoute,
} as any)

const DashboardAddProductRoute = DashboardAddProductImport.update({
  id: '/dashboard/add/product',
  path: '/dashboard/add/product',
  getParentRoute: () => rootRoute,
} as any)

const DashboardAddCategoryRoute = DashboardAddCategoryImport.update({
  id: '/dashboard/add/category',
  path: '/dashboard/add/category',
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
    '/category/$categoryId': {
      id: '/category/$categoryId'
      path: '/category/$categoryId'
      fullPath: '/category/$categoryId'
      preLoaderRoute: typeof CategoryCategoryIdImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/categories': {
      id: '/dashboard/categories'
      path: '/dashboard/categories'
      fullPath: '/dashboard/categories'
      preLoaderRoute: typeof DashboardCategoriesImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/products': {
      id: '/dashboard/products'
      path: '/dashboard/products'
      fullPath: '/dashboard/products'
      preLoaderRoute: typeof DashboardProductsImport
      parentRoute: typeof rootRoute
    }
    '/products/$productId': {
      id: '/products/$productId'
      path: '/products/$productId'
      fullPath: '/products/$productId'
      preLoaderRoute: typeof ProductsProductIdImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof rootRoute
    }
    '/products/': {
      id: '/products/'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProductsIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/add/category': {
      id: '/dashboard/add/category'
      path: '/dashboard/add/category'
      fullPath: '/dashboard/add/category'
      preLoaderRoute: typeof DashboardAddCategoryImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/add/product': {
      id: '/dashboard/add/product'
      path: '/dashboard/add/product'
      fullPath: '/dashboard/add/product'
      preLoaderRoute: typeof DashboardAddProductImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/auth/login': {
      id: '/dashboard/auth/login'
      path: '/dashboard/auth/login'
      fullPath: '/dashboard/auth/login'
      preLoaderRoute: typeof DashboardAuthLoginImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about-us': typeof AboutUsRoute
  '/category/$categoryId': typeof CategoryCategoryIdRoute
  '/dashboard/categories': typeof DashboardCategoriesRoute
  '/dashboard/products': typeof DashboardProductsRoute
  '/products/$productId': typeof ProductsProductIdRoute
  '/dashboard': typeof DashboardIndexRoute
  '/products': typeof ProductsIndexRoute
  '/dashboard/add/category': typeof DashboardAddCategoryRoute
  '/dashboard/add/product': typeof DashboardAddProductRoute
  '/dashboard/auth/login': typeof DashboardAuthLoginRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about-us': typeof AboutUsRoute
  '/category/$categoryId': typeof CategoryCategoryIdRoute
  '/dashboard/categories': typeof DashboardCategoriesRoute
  '/dashboard/products': typeof DashboardProductsRoute
  '/products/$productId': typeof ProductsProductIdRoute
  '/dashboard': typeof DashboardIndexRoute
  '/products': typeof ProductsIndexRoute
  '/dashboard/add/category': typeof DashboardAddCategoryRoute
  '/dashboard/add/product': typeof DashboardAddProductRoute
  '/dashboard/auth/login': typeof DashboardAuthLoginRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about-us': typeof AboutUsRoute
  '/category/$categoryId': typeof CategoryCategoryIdRoute
  '/dashboard/categories': typeof DashboardCategoriesRoute
  '/dashboard/products': typeof DashboardProductsRoute
  '/products/$productId': typeof ProductsProductIdRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/products/': typeof ProductsIndexRoute
  '/dashboard/add/category': typeof DashboardAddCategoryRoute
  '/dashboard/add/product': typeof DashboardAddProductRoute
  '/dashboard/auth/login': typeof DashboardAuthLoginRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about-us'
    | '/category/$categoryId'
    | '/dashboard/categories'
    | '/dashboard/products'
    | '/products/$productId'
    | '/dashboard'
    | '/products'
    | '/dashboard/add/category'
    | '/dashboard/add/product'
    | '/dashboard/auth/login'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about-us'
    | '/category/$categoryId'
    | '/dashboard/categories'
    | '/dashboard/products'
    | '/products/$productId'
    | '/dashboard'
    | '/products'
    | '/dashboard/add/category'
    | '/dashboard/add/product'
    | '/dashboard/auth/login'
  id:
    | '__root__'
    | '/'
    | '/about-us'
    | '/category/$categoryId'
    | '/dashboard/categories'
    | '/dashboard/products'
    | '/products/$productId'
    | '/dashboard/'
    | '/products/'
    | '/dashboard/add/category'
    | '/dashboard/add/product'
    | '/dashboard/auth/login'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutUsRoute: typeof AboutUsRoute
  CategoryCategoryIdRoute: typeof CategoryCategoryIdRoute
  DashboardCategoriesRoute: typeof DashboardCategoriesRoute
  DashboardProductsRoute: typeof DashboardProductsRoute
  ProductsProductIdRoute: typeof ProductsProductIdRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
  ProductsIndexRoute: typeof ProductsIndexRoute
  DashboardAddCategoryRoute: typeof DashboardAddCategoryRoute
  DashboardAddProductRoute: typeof DashboardAddProductRoute
  DashboardAuthLoginRoute: typeof DashboardAuthLoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutUsRoute: AboutUsRoute,
  CategoryCategoryIdRoute: CategoryCategoryIdRoute,
  DashboardCategoriesRoute: DashboardCategoriesRoute,
  DashboardProductsRoute: DashboardProductsRoute,
  ProductsProductIdRoute: ProductsProductIdRoute,
  DashboardIndexRoute: DashboardIndexRoute,
  ProductsIndexRoute: ProductsIndexRoute,
  DashboardAddCategoryRoute: DashboardAddCategoryRoute,
  DashboardAddProductRoute: DashboardAddProductRoute,
  DashboardAuthLoginRoute: DashboardAuthLoginRoute,
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
        "/category/$categoryId",
        "/dashboard/categories",
        "/dashboard/products",
        "/products/$productId",
        "/dashboard/",
        "/products/",
        "/dashboard/add/category",
        "/dashboard/add/product",
        "/dashboard/auth/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about-us": {
      "filePath": "about-us.tsx"
    },
    "/category/$categoryId": {
      "filePath": "category/$categoryId.tsx"
    },
    "/dashboard/categories": {
      "filePath": "dashboard/categories.tsx"
    },
    "/dashboard/products": {
      "filePath": "dashboard/products.tsx"
    },
    "/products/$productId": {
      "filePath": "products/$productId.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx"
    },
    "/products/": {
      "filePath": "products/index.tsx"
    },
    "/dashboard/add/category": {
      "filePath": "dashboard/add/category.tsx"
    },
    "/dashboard/add/product": {
      "filePath": "dashboard/add/product.tsx"
    },
    "/dashboard/auth/login": {
      "filePath": "dashboard/auth/login.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
