import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import SignInTemplate from '.'

const mockedOnSubmit = vi.fn()

describe('<SignInTemplate />', () => {
  it('should call onSubmit with filled id when clicked', () => {
    render(<SignInTemplate onSubmit={mockedOnSubmit} />)

    expect(mockedOnSubmit).not.toBeCalled()

    const id = 'some-id'

    fireEvent.change(screen.getByPlaceholderText(/your id/i), {
      target: { value: id },
    })

    fireEvent.click(screen.getByRole('button'))

    expect(mockedOnSubmit).toBeCalledWith({ id })
  })
})
