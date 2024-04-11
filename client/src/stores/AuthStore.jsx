import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      isAuth: false,
      login: () => set(() => ({ isAuth: true })),
      logout: () => set(() => ({ isAuth: false })),
    }),
    {
      name: 'auth-storage',
    }
  )
)

export default useAuthStore