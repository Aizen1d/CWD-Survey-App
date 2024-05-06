import { create } from 'zustand'

const useCreateSurveyModalStore = create((set) => ({
  isOpen: false,
  open: () => set(() => ({ isOpen: true })),
  close: () => set(() => ({ isOpen: false })),
}))

export default useCreateSurveyModalStore