import { cn } from '@/lib/utils'

export default function Textarea({
  className,
  ...props
}: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(
        'min-h-36 w-full resize-y rounded-lg border border-zinc-200 bg-white p-6 text-sm text-zinc-800 placeholder:text-zinc-500 focus:border-rose-600 focus:ring-2 focus:ring-rose-600/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}
