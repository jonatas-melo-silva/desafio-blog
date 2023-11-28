import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'w-full truncate bg-transparent text-sm font-medium text-white outline-none placeholder:text-white/50' as ClassNameValue

export type ControlProps = ComponentProps<'input'>

export function Control({ className, ...props }: ControlProps) {
  return <input className={twMerge(base, className)} {...props} />
}
