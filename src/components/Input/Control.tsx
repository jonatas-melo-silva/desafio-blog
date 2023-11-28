import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex w-full truncate bg-transparent p-0 text-sm font-medium text-white outline-none placeholder:text-white/50 placeholder:font-medium placeholder:text-sm' as ClassNameValue

export type ControlProps = ComponentProps<'input'>

export function Control({ className, ...props }: ControlProps) {
  return <input className={twMerge(base, className)} {...props} />
}
