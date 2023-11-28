import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex w-full justify-center bg-gradient-to-r from-indigo-600 to-sky-400' as ClassNameValue

export type RootProps = ComponentProps<'header'>

export function Root({ className, ...props }: RootProps) {
  return <header className={twMerge(base, className)} {...props} />
}
