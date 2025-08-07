import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DatePicker } from '@/components/custom/date-picker'

import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { createReservation, type ReservationData } from '@/api/reservations'

interface BookingFormProps {
  className?: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  date?: string
  time?: string
  guests?: string
}

interface FormData {
  name: string
  email: string
  phone: string
  date: Date | undefined
  time: string
  guests: string
  occasion: string
  requests: string
}

const BookingForm = ({ className }: BookingFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: undefined,
    time: '',
    guests: '',
    occasion: '',
    requests: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const timeSlots = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM']

  const occasions = [
    'Birthday',
    'Anniversary',
    'Date Night',
    'Business Dinner',
    'Family Gathering',
    'Special Celebration',
    'Other'
  ]

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[+]?[0-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/[\s\-()]/g, ''))
  }

  const validateField = (name: string, value: string | Date | undefined) => {
    switch (name) {
      case 'name':
        if (!value || typeof value !== 'string' || !value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return ''
      case 'email':
        if (!value || typeof value !== 'string' || !value.trim()) return 'Email is required'
        if (!validateEmail(value)) return 'Please enter a valid email address'
        return ''
      case 'phone':
        if (!value || typeof value !== 'string' || !value.trim()) return 'Phone number is required'
        if (!validatePhone(value)) return 'Please enter a valid phone number'
        return ''
      case 'date': {
        if (!value) return 'Date is required'
        const selectedDate = value instanceof Date ? value : new Date(value as string)
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        if (selectedDate < today) return 'Date cannot be in the past'
        return ''
      }
      case 'time':
        if (!value || typeof value !== 'string') return 'Time is required'
        return ''
      case 'guests':
        if (!value || typeof value !== 'string') return 'Number of guests is required'
        return ''
      default:
        return ''
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prev) => ({
      ...prev,
      date
    }))

    // Mark as touched and validate
    setTouched((prev) => ({ ...prev, date: true }))
    const error = validateField('date', date)
    setErrors((prev) => ({
      ...prev,
      date: error
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    // Mark as touched and validate
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }))
  }

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
    const value = formData[name as keyof typeof formData]
    const error = validateField(name, value)
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }))
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}
    const requiredFields = ['name', 'email', 'phone', 'date', 'time', 'guests']

    requiredFields.forEach((field) => {
      const value = formData[field as keyof typeof formData] as string
      const error = validateField(field, value)
      if (error) {
        newErrors[field as keyof FormErrors] = error
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched
    const allFields = ['name', 'email', 'phone', 'date', 'time', 'guests']
    setTouched(allFields.reduce((acc, field) => ({ ...acc, [field]: true }), {}))

    if (!validateForm()) {
      toast.error('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)

    try {
      const reservationData: ReservationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date ? formData.date.toISOString().split('T')[0] : '',
        time: formData.time,
        guests: formData.guests,
        occasion: formData.occasion || undefined,
        requests: formData.requests || undefined
      }

      const result = await createReservation(reservationData)

      if (result.success) {
        toast.success(result.message)
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: undefined,
          time: '',
          guests: '',
          occasion: '',
          requests: ''
        })
        setErrors({})
        setTouched({})
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.')
      console.error('Error submitting reservation:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="border-none shadow-lg">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Make a Reservation</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('name')}
                  className={touched.name && errors.name ? 'border-red-500' : ''}
                  required
                />
                {touched.name && errors.name && <p className="mt-2 text-red-600 text-sm">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('email')}
                  className={touched.email && errors.email ? 'border-red-500' : ''}
                  required
                />
                {touched.email && errors.email && <p className="mt-2 text-red-600 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={() => handleBlur('phone')}
                className={touched.phone && errors.phone ? 'border-red-500' : ''}
                required
              />
              {touched.phone && errors.phone && <p className="mt-2 text-red-600 text-sm">{errors.phone}</p>}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <DatePicker
                  date={formData.date}
                  onDateChange={handleDateChange}
                  placeholder="Select a date"
                  minDate={new Date()}
                  error={touched.date && errors.date ? errors.date : undefined}
                  label="Date"
                  required
                />
              </div>
              <div>
                <Label>
                  Time <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={(value) => handleSelectChange('time', value)} value={formData.time}>
                  <SelectTrigger className={touched.time && errors.time ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {touched.time && errors.time && <p className="mt-2 text-red-600 text-sm">{errors.time}</p>}
              </div>
              <div>
                <Label>
                  Guests <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={(value) => handleSelectChange('guests', value)} value={formData.guests}>
                  <SelectTrigger className={touched.guests && errors.guests ? 'border-red-500' : ''}>
                    <SelectValue placeholder="# of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {touched.guests && errors.guests && <p className="mt-2 text-red-600 text-sm">{errors.guests}</p>}
              </div>
            </div>

            <div>
              <Label>Occasion</Label>
              <Select onValueChange={(value) => handleSelectChange('occasion', value)} value={formData.occasion}>
                <SelectTrigger>
                  <SelectValue placeholder="Select occasion (optional)" />
                </SelectTrigger>
                <SelectContent>
                  {occasions.map((occasion) => (
                    <SelectItem key={occasion} value={occasion}>
                      {occasion}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="requests">Special Requests</Label>
              <Textarea
                id="requests"
                name="requests"
                value={formData.requests}
                onChange={handleInputChange}
                placeholder="Any dietary restrictions, seating preferences, or special requests..."
                rows={3}
              />
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary hover:bg-tertiary text-tertiary hover:text-primary py-3 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default BookingForm
