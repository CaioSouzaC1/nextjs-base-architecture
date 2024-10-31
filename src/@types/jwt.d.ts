import { IUser } from '@/interfaces/User'

declare module 'next-auth/jwt' {
  interface JWT {
    user: IUser
    token: string
  }
}
