import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CreateIncidentTemplate from '.'

describe('<CreateIncidentTemplate />', () => {
  it('should call onSubmit with filled data when clicked', () => {
    const mockedOnSubmit = vi.fn()
    render(<CreateIncidentTemplate onSubmit={mockedOnSubmit} />)

    const data = {
      description: 'some-description',
      title: 'some-title',
      value: 'some-value',
    }

    fireEvent.change(screen.getByPlaceholderText(/description/i), {
      target: { value: data.description },
    })
    fireEvent.change(screen.getByPlaceholderText(/title/i), {
      target: { value: data.title },
    })
    fireEvent.change(screen.getByPlaceholderText(/value/i), {
      target: { value: data.value },
    })

    expect(mockedOnSubmit).not.toBeCalled()

    fireEvent.click(screen.getByRole('button'))

    expect(mockedOnSubmit).toBeCalledWith(data)
  })
})
