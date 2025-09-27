import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Pricing from '.'

describe('Pricing', () => {
  it('renders Pricing component correctly', () => {
    render(<Pricing />)

    // Check container by id
    expect(document.getElementById('pricing')).toBeInTheDocument()

    // Check headings
    expect(
      screen.getByRole('heading', { level: 1, name: /Pilih Paket Harga Anda/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /Pilih Rencana yang Sesuai untuk Bisnis Anda/i })
    ).toBeInTheDocument()

    // Check TierCard titles
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
    expect(screen.getByText('Entrepreneur')).toBeInTheDocument()

    // Check TierCard prices
    expect(screen.getByText('IDR 500.000')).toBeInTheDocument()
    expect(screen.getByText('IDR 1.500.000')).toBeInTheDocument()
    expect(screen.getByText('IDR 3.000.000')).toBeInTheDocument()

    // Check some items in each card
    expect(screen.getByText('Mencatat barang masuk')).toBeInTheDocument()
    expect(screen.getByText('Analisis hasil penjualan dengan grafik/CHART')).toBeInTheDocument()
    expect(screen.getByText('AI Prediksi penghasilan')).toBeInTheDocument()
  })
})
