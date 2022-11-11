export const host =
  process.env.NODE_ENV === 'development'
    ? 'localhost:3000'
    : process.env.NEXT_URL

export const protocol =
  process.env.NODE_ENV === 'development' ? 'http' : 'https'
