import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import * as H from '../components/Header'
import { Search } from './Search'

const base = '' as ClassNameValue

export type HeaderProps = ComponentProps<'header'>

export function Header({ className, ...props }: HeaderProps) {
  return (
    <H.Root className={twMerge(base, className)} {...props}>
      <H.Wrapper>
        <H.Logo />

        <Search />
      </H.Wrapper>
    </H.Root>
  )
}
