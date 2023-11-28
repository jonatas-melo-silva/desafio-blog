import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'text-sm font-normal leading-relaxed text-neutral-500 md:text-xl md:font-medium' as ClassNameValue
const dark = 'dark:text-zinc-400' as ClassNameValue

export type DescriptionProps = ComponentProps<'p'>

export function Description({ className, ...props }: DescriptionProps) {
  return <p className={twMerge(base, dark, className)} {...props} />
}
