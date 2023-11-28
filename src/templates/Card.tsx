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
    <Root className={twMerge(base, className)} {...props}>
      <Wrapper>
        <Data className="md:text-base md:font-medium">{post.date}</Data>
        <Prefix>
          <Heart className="h-5 w-5 text-indigo-600 md:h-8 md:w-8" />
        </Prefix>
      </Wrapper>
      <Title className="md:text-2xl md:font-medium">{post.title}</Title>
      <Description className="md:text-xl md:font-normal">
        {post.content}
      </Description>
    </Root>
  )
}
