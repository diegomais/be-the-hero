import { fireEvent, render } from '@testing-library/react'
import SignUpTemplate from '.'

const mockedOnSubmit = jest.fn()

describe('<SignUpTemplate />', () => {
  it('should call onSubmit with filled data when clicked', () => {
    const { getByPlaceholderText, getByRole } = render(
      <SignUpTemplate onSubmit={mockedOnSubmit} />
    )

    expect(mockedOnSubmit).not.toBeCalled()

    const data = {
      city: 'some-city',
      email: 'some-email',
      name: 'some-name',
      state: 'some-state',
      whatsapp: 'some-whatsapp',
    }

    fireEvent.change(getByPlaceholderText(/name of ngo/i), {
      target: { value: data.name },
    })
    fireEvent.change(getByPlaceholderText(/email/i), {
      target: { value: data.email },
    })
    fireEvent.change(getByPlaceholderText(/whatsApp/i), {
      target: { value: data.whatsapp },
    })
    fireEvent.change(getByPlaceholderText(/city/i), {
      target: { value: data.city },
    })
    fireEvent.change(getByPlaceholderText(/state/i), {
      target: { value: data.state },
    })

    fireEvent.click(getByRole('button'))

    expect(mockedOnSubmit).toBeCalledWith(data)
  })
})
