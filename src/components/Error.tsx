import { ReactNode } from 'react'

export const Error = ({ children }: { children: ReactNode }) => {
  return (
    <p
      className='text-center bg-red-600 text-white font-bold p-3 uppercase text-sm'
    >
      { children }
    </p>
  )
}
