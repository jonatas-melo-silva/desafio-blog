import { Heart } from 'lucide-react'
import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import {
  Data,
  Description,
  Prefix,
  Root,
  Title,
  Wrapper,
} from '../components/Card'
import { Post } from '../types/Post'

const base = 'md:p-10' as ClassNameValue

export type CardProps = ComponentProps<'section'> & {
  post: Post
}

export function Card({ className, post, ...props }: CardProps) {
  return (
    <Root
      className={twMerge(
        base,
        'dark:border-2 dark:border-neutral-800 dark:bg-zinc-900 dark:hover:border-red-400 dark:active:border-red-400',
        className,
      )}
      {...props}
    >
      <Wrapper>
        <Data className="dark:text-red-400 md:text-base md:font-medium">
          {post.date}
        </Data>
        <Prefix>
          <Heart className="h-5 w-5 text-indigo-600 dark:text-red-400 dark:active:fill-red-400 md:h-8 md:w-8" />
        </Prefix>
      </Wrapper>
      <Title className="dark:text-white md:text-2xl md:font-medium">
        {post.title}
      </Title>
      <Description className="dark:text-zinc-400 md:text-xl md:font-medium">
        {post.content}
      </Description>
    </Root>
  )
}
