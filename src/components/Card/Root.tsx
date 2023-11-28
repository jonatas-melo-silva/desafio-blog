import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'rounded-lg bg-white p-4 shadow hover:ring-2 hover:ring-indigo-600 md:p-10' as ClassNameValue
const dark =
  'dark:border-2 dark:border-neutral-800 dark:bg-zinc-900 dark:hover:border-red-400 dark:hover:ring-0 dark:active:border-red-400' as ClassNameValue

export type RootProps = ComponentProps<'section'>

export function Root({ className, ...props }: RootProps) {
  return <section className={twMerge(base, dark, className)} {...props} />
}
