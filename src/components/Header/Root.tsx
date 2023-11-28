import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex w-full justify-center bg-gradient-to-r from-indigo-600 to-sky-400' as ClassNameValue
const dark =
  'dark:bg-gradient-to-r dark:from-zinc-900 dark:to-zinc-900' as ClassNameValue

export type RootProps = ComponentProps<'header'>

export function Root({ className, ...props }: RootProps) {
  return <header className={twMerge(base, dark, className)} {...props} />
}
