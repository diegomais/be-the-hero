import { cn } from '@/lib/utils'

export default function Input({
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      className={cn(
        'h-15 w-full rounded-lg border border-zinc-200 bg-white px-6 text-sm text-zinc-800 placeholder:text-zinc-500 focus:border-rose-600 focus:ring-2 focus:ring-rose-600/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}
