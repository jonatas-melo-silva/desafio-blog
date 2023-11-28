import { SearchIcon } from 'lucide-react'
import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { Input } from '../components'

const base = '' as ClassNameValue

export type SearchProps = ComponentProps<'input'>

export function Search({ className, ...props }: SearchProps) {
  return (
    <Input.Root className={twMerge(base, className)}>
      <Input.Prefix>
        <SearchIcon className="h-4 w-4 text-white dark:text-red-400 md:h-auto md:w-auto" />
      </Input.Prefix>
      <Input.Control
        type="search"
        placeholder="Pesquisar no blog"
        name="search"
        id="search"
        {...props}
      />
    </Input.Root>
  )
}
