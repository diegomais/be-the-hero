import { fireEvent, render } from '@testing-library/react'
import SignInTemplate from '.'

const mockedOnSubmit = jest.fn()

describe('<SignInTemplate />', () => {
  it('should call onSubmit with filled id when clicked', () => {
    const { getByPlaceholderText, getByRole } = render(
      <SignInTemplate onSubmit={mockedOnSubmit} />
    )

    expect(mockedOnSubmit).not.toBeCalled()

    const id = 'some-id'

    fireEvent.change(getByPlaceholderText(/your id/i), {
      target: { value: id },
    })

    fireEvent.click(getByRole('button'))

    expect(mockedOnSubmit).toBeCalledWith({ id })
  })
})
