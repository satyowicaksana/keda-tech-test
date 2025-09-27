import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '.'

describe('Home', () => {
  it('renders Home component correctly', () => {
    render(<Home />)

    // Check container exists
    expect(document.getElementById('home')).toBeInTheDocument()

    // Check description text
    expect(
      screen.getByText(/Kelola inventaris dan keuntungan bisnis Anda dengan mudah/i)
    ).toBeInTheDocument()

    // Check slogan text
    expect(
      screen.getByText(/Satu sistem, kendali penuh, untung maksimal/i)
    ).toBeInTheDocument()

    // Check images by alt text
    expect(screen.getByAltText('graph')).toBeInTheDocument()
    expect(screen.getByAltText('blob')).toBeInTheDocument()
    expect(screen.getByAltText('circles')).toBeInTheDocument()
  })
})
