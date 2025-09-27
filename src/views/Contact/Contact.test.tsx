import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from '.'

describe('Contact', () => {
  it('renders Contact component correctly', () => {
    render(<Contact />)

    // Check main heading (h1)
    expect(
      screen.getByRole('heading', { level: 1, name: /Hubungi Kami/i })
    ).toBeInTheDocument()

    // Check subheading (h3)
    expect(
      screen.getByRole('heading', { level: 3, name: /Kirim pesan pada form atau hubungi kami via Whatsapp\/Email/i })
    ).toBeInTheDocument()

    // Check icon buttons (WhatsApp and Mail)
    const iconButtons = screen.getAllByRole('button', { hidden: true })
    expect(iconButtons.length).toBeGreaterThanOrEqual(2) // WhatsApp and Mail

    // Check text input fields (first name, last name, email)
    const textboxes = screen.getAllByRole('textbox')
    expect(textboxes.length).toBe(4) // Nama Depan, Nama Belakang, Email, Message

    // Check Submit button
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument()

    // Check container by id
    expect(document.getElementById('contact')).toBeInTheDocument()
  })
})
