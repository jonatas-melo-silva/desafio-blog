import { Search } from 'lucide-react'
import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import * as H from '../components/Header'
import * as I from '../components/Input'

const base = '' as ClassNameValue

export type HeaderProps = ComponentProps<'header'>

export function Header({ className, ...props }: HeaderProps) {
  return (
    <H.Root className={twMerge(base, className)} {...props}>
      <H.Logo />

      <I.Root>
        <I.Prefix>
          <Search className="h-5 w-5 text-white" />
        </I.Prefix>
        <I.Control type="search" placeholder="Pesquisar no blog" />
      </I.Root>
    </H.Root>
  )
}
