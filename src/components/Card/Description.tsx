import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'text-sm font-normal leading-relaxed text-neutral-500' as ClassNameValue

export type DescriptionProps = ComponentProps<'p'>

export function Description({ className, ...props }: DescriptionProps) {
  return <p className={twMerge(base, className)} {...props} />
}
