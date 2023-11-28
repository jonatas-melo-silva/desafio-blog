import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { Templates } from '../templates'

const base =
  'flex min-h-screen w-full items-center flex-col bg-gray-100' as ClassNameValue

export type PublicProps = ComponentProps<'div'>

export function Public({ className, ...props }: PublicProps) {
  return (
    <div className={twMerge(base, className)} {...props}>
      <Templates.Header />

      <main className="flex h-full w-full max-w-sm flex-col gap-6 px-5 py-12">
        {props.children}
      </main>
    </div>
  )
}
