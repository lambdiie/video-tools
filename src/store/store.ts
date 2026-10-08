import { create } from 'zustand'

interface FileState {
  file: File | null
  src: string
  setFile: (file: File) => void
}

export const useFileStore = create<FileState>()((set) => ({
  file: null,
  src: "",
  setFile: (newFile) => set({ file: newFile, src: URL.createObjectURL(newFile) }),
}))