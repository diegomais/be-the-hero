import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import SignUpTemplate from '.'

describe('<SignUpTemplate />', () => {
  it.skip('should call onSubmit with filled data when clicked', async () => {
    const mockedOnSubmit = vi.fn()
    render(<SignUpTemplate onSubmit={mockedOnSubmit} />)

    const data = {
      city: 'some-city',
      email: 'some-email',
      name: 'some-name',
      state: 'some-state',
      whatsapp: 'some-whatsapp',
    }

    fireEvent.change(screen.getByPlaceholderText(/name of ngo/i), {
      target: { value: data.name },
    })
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: data.email },
    })
    fireEvent.change(screen.getByPlaceholderText(/whatsApp/i), {
      target: { value: data.whatsapp },
    })
    fireEvent.change(screen.getByPlaceholderText(/city/i), {
      target: { value: data.city },
    })
    fireEvent.change(screen.getByPlaceholderText(/state/i), {
      target: { value: data.state },
    })

    expect(mockedOnSubmit).not.toBeCalled()

    fireEvent.click(screen.getByRole('button'))

    expect(mockedOnSubmit).toBeCalled()
  })
})
