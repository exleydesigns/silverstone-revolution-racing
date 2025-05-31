'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    loading = false, 
    children, 
    className = '', 
    disabled, 
    onClick,
    type = 'button'
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg font-inter focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed box-border'
    
    const sizeClasses = {
      sm: 'h-10 px-6 text-sm',
      md: 'h-12 px-8 text-base', 
      lg: 'h-14 px-10 text-lg'
    }
    
    const variantClasses = {
      primary: 'bg-brand-red text-white hover:brightness-110 border-2 border-brand-red transition-none',
      secondary: 'bg-white text-brand-red border-2 border-brand-red hover:bg-brand-red hover:text-white transition-colors duration-150',
      outline: 'bg-transparent text-brand-red border-2 border-brand-red hover:bg-brand-red hover:text-white transition-colors duration-150'
    }
    
    const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`
    
    return (
      <motion.button
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled || loading}
        onClick={onClick}
        whileHover={{ scale: disabled || loading ? 1 : 1.05 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button