import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'flex-shrink' as ClassNameValue

export type PrefixProps = ComponentProps<'div'>

export function Prefix({ className, ...props }: PrefixProps) {
  return <div className={twMerge(base, className)} {...props} />
}
