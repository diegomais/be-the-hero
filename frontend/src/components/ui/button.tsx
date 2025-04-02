import { cn } from '@/lib/utils'

export default function Button({
  className,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        'flex h-15 w-full cursor-pointer items-center justify-center rounded-lg bg-rose-600 p-6 text-lg font-bold text-white transition-all duration-200 hover:brightness-90',
        className
      )}
      {...props}
    />
  )
}
