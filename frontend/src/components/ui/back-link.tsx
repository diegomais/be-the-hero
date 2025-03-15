import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

function BackLinkRoot({
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        'mt-10 flex items-center text-lg font-medium text-zinc-800 transition-opacity hover:opacity-80',
        className,
      )}
      {...props}
    />
  )
}

function BackLinkIcon({
  className,
  ...props
}: React.ComponentProps<typeof FiArrowLeft>) {
  return (
    <FiArrowLeft className={cn('mr-2 text-rose-600', className)} {...props} />
  )
}

const BackLink = {
  Root: BackLinkRoot,
  Icon: BackLinkIcon,
}

export default BackLink
