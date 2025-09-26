import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TierCard from './index'

describe('TierCard', () => {
  it('renders title, price, and items', () => {
    render(
      <TierCard 
        title="Basic" 
        price="IDR 500.000" 
        items={['Mencatat barang masuk', 'Mencatat barang keluar']} 
      />
    )

    // Assert title
    expect(screen.getByText('Basic')).toBeInTheDocument()

    // Assert price
    expect(screen.getByText('IDR 500.000')).toBeInTheDocument()

    // Assert items
    expect(screen.getByText('Mencatat barang masuk')).toBeInTheDocument()
    expect(screen.getByText('Mencatat barang keluar')).toBeInTheDocument()

    // Assert the button
    expect(screen.getByRole('button', { name: /langganan/i })).toBeInTheDocument()
  })
})
