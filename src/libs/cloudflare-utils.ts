export const cookieName = 'CF_Authorization'

export const getLogoutUrl = (): string => {
  return `https://${process.env.VUE_APP_CF_ACCESS_TEAM_DOMAIN}.cloudflareaccess.com/cdn-cgi/access/logout`
}

export const getEmailFromToken = (jwt: string): string => {
  const parts = jwt.split('.')
  if (parts.length !== 3) {
    throw new Error('JWT does not have three parts.')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [header, payload, signature] = parts
  const textDecoder = new TextDecoder('utf-8')
  const payloadObj = JSON.parse(textDecoder.decode(base64UrlDecode(payload)))
  return payloadObj.email
}

const base64UrlDecode = (s: string) => {
  s = s.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '')
  return new Uint8Array(Array.from(atob(s)).map((c: string) => c.charCodeAt(0)))
}
