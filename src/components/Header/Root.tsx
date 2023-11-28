import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex w-full max-w-sm flex-col items-center justify-center gap-10 bg-gradient-to-r from-indigo-600 to-sky-400 px-5 py-12' as ClassNameValue

export type RootProps = ComponentProps<'header'>

export function Root({ className, ...props }: RootProps) {
  return <header className={twMerge(base, className)} {...props} />
}
