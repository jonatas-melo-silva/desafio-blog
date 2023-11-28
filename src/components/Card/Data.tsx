import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'text-sm font-normal text-neutral-500' as ClassNameValue

export type DataProps = ComponentProps<'p'>

export function Data({ className, ...props }: DataProps) {
  return <p className={twMerge(base, className)} {...props} />
}
