import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Search } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-4 text-slate-400 pointer-events-none flex items-center justify-center">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            'flex h-12 w-full rounded-full border-2 border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100',
            icon && 'pl-12',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';
