import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'text-sm font-normal text-neutral-500 md:text-base md:font-medium' as ClassNameValue
const dark = 'dark:text-red-400' as ClassNameValue

export type DataProps = ComponentProps<'p'>

export function Data({ className, ...props }: DataProps) {
  return <p className={twMerge(base, dark, className)} {...props} />
}
