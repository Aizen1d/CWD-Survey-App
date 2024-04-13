import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      isAuth: false,
      login: () => set(() => ({ isAuth: true })),
      logout: () => { 
        set(() => ({ isAuth: false }))
        if (document.cookie.includes('jwt')) {
          document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
        }
      }

    }),
    {
      name: 'auth-storage',
    }
  )
)

export default useAuthStore