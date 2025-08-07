import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

interface DatePickerProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  minDate?: Date
  maxDate?: Date
  error?: string
  label?: string
  required?: boolean
  captionLayout?: 'dropdown' | 'label' | 'dropdown-months' | 'dropdown-years'
  showOutsideDays?: boolean
  fromYear?: number
  toYear?: number
}

export function DatePicker({
  date,
  onDateChange,
  placeholder = 'Pick a date',
  disabled = false,
  className,
  minDate,
  maxDate,
  error,
  label,
  required = false,
  captionLayout = 'label',
  showOutsideDays = true,
  fromYear,
  toYear
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  const handleDateSelect = (selectedDate: Date | undefined) => {
    onDateChange?.(selectedDate)
    if (selectedDate) {
      setOpen(false)
    }
  }

  const formatDate = (date: Date) => {
    return format(date, 'PPP')
  }

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true
    if (maxDate && date > maxDate) return true
    return false
  }

  return (
    <div className="w-full">
      {label && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-full justify-between text-left font-normal',
              !date && 'text-muted-foreground',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
              disabled && 'opacity-50 cursor-not-allowed',
              className
            )}
            disabled={disabled}
            aria-label={label || 'Select date'}
            aria-describedby={error ? 'date-error' : undefined}
          >
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? formatDate(date) : placeholder}
            </div>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-auto p-0" 
          align="start"
          sideOffset={4}
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            disabled={isDateDisabled}
            captionLayout={captionLayout}
            showOutsideDays={showOutsideDays}
            fromYear={fromYear}
            toYear={toYear}
            initialFocus
            className="rounded-md border"
          />
        </PopoverContent>
      </Popover>
      {error && (
        <p id="date-error" className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
} 