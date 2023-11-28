import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'rounded-md bg-white p-4 shadow' as ClassNameValue

export type RootProps = ComponentProps<'section'>

export function Root({ className, ...props }: RootProps) {
  return <section className={twMerge(base, className)} {...props} />
}
