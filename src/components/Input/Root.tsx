import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex h-10 w-full items-center gap-2 rounded-lg bg-white/20 px-2.5 py-3 shadow focus-within:ring-2 focus-within:ring-indigo-600 md:h-16 md:max-w-xs md:px-6 md:py-5' as ClassNameValue
const dark =
  'dark:border-2 dark:border-neutral-800 dark:bg-neutral-800/40 dark:focus-within:border-red-400 dark:focus-within:ring-0' as ClassNameValue

export type RootProps = ComponentProps<'div'>

export function Root({ className, ...props }: RootProps) {
  return <div className={twMerge(base, dark, className)} {...props} />
}
