import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { host, protocol } from './globals'

// el middleware se ejecuta antes de que Next.js procese la solicitud!!! (lo más importante)
// es por eso que el middleware solo recibe el objeto del request y no el response
// porque el response se crea en Next.js

export function middleware(req: NextRequest) {
  const url = new URL(req.nextUrl)
  const { pathname } = url
  const hostname = req.headers.get('host')

  // vemos si el hostname va dirigiendo a un subdominio
  const currentHost = hostname?.replace(`.${host!}`, '')

  // Aquí podemos verificar el subdominio.
  if (currentHost === 'docs') {
    // Si el subdominio es docs, entonces redirigimos a la ruta /docs
    // en la carpeta /pages/docs se encontrarán los archivos para dicho subdominio
    url.pathname = `/docs${pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.rewrite(new URL(pathname, `${protocol}://${host}`))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|favicon.ico).*)',
  ],
}
