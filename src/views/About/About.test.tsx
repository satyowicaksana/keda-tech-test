import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from '.'

describe('About', () => {
  it('renders About component correctly', () => {
    render(<About />)

    // Check heading
    expect(screen.getByRole('heading', { name: /Siapa Kami/i })).toBeInTheDocument()

    // Check paragraph contains certain text
    expect(screen.getByText(/Kami adalah startup yang berdedikasi/i)).toBeInTheDocument()

    // Check images by alt text
    expect(screen.getByAltText('team')).toBeInTheDocument()
    expect(screen.getByAltText('client')).toBeInTheDocument()

    // Check container div exists
    expect(document.getElementById('about')).toBeInTheDocument()
  })
})
