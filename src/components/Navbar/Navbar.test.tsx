import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, vi, beforeEach, expect } from 'vitest'
import Navbar from '.'  // import from current folder

// Mock scrollIntoView
beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn()
})

// Module-level variable to control responsive breakpoint
let breakpointMock = { xs: true, sm: true, md: true, lg: true, xl: true }

// Mock Ant Design Grid useBreakpoint
vi.mock('antd', async (importOriginal) => {
  const antd = await importOriginal() as typeof import('antd')
  return {
    ...antd,
    Grid: {
      ...antd.Grid,
      useBreakpoint: () => breakpointMock,
    },
  }
})

describe('Navbar', () => {
  it('renders desktop navbar buttons', () => {
    breakpointMock = { xs: true, sm: true, md: true, lg: true, xl: true }
    render(<Navbar />)

    expect(screen.getByRole('button', { name: 'HOME' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'LOGIN' })).toBeInTheDocument()
  })

  it('opens login modal when login button clicked', () => {
    breakpointMock = { xs: true, sm: true, md: true, lg: true, xl: true }
    render(<Navbar />)

    const loginButton = screen.getByRole('button', { name: 'LOGIN' })
    fireEvent.click(loginButton)

    expect(screen.getByText('Username')).toBeInTheDocument()
    expect(screen.getByText('Password')).toBeInTheDocument()
  })

  it('scrolls to section when menu button clicked', () => {
    // Add dummy section for scrollIntoView
    const aboutSection = document.createElement('div')
    aboutSection.id = 'about'
    document.body.appendChild(aboutSection)

    render(<Navbar />)

    const aboutButton = screen.getByRole('button', { name: 'About' })
    fireEvent.click(aboutButton)

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()

    document.body.removeChild(aboutSection)
  })
})
