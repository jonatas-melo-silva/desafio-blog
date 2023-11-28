import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex h-10 w-full items-center gap-2 rounded-md bg-white/20 px-2.5 py-3 shadow' as ClassNameValue

export type RootProps = ComponentProps<'div'>

export function Root({ className, ...props }: RootProps) {
  return <div className={twMerge(base, className)} {...props} />
}
