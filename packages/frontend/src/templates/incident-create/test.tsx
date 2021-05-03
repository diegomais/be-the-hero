import { fireEvent, render } from '@testing-library/react'
import CreateIncidentTemplate from '.'

const mockedOnSubmit = jest.fn()

describe('<CreateIncidentTemplate />', () => {
  it('should call onSubmit with filled data when clicked', () => {
    const { getByPlaceholderText, getByRole } = render(
      <CreateIncidentTemplate onSubmit={mockedOnSubmit} />
    )

    expect(mockedOnSubmit).not.toBeCalled()

    const data = {
      description: 'some-description',
      title: 'some-title',
      value: 'some-value',
    }

    fireEvent.change(getByPlaceholderText(/description/i), {
      target: { value: data.description },
    })
    fireEvent.change(getByPlaceholderText(/title/i), {
      target: { value: data.title },
    })
    fireEvent.change(getByPlaceholderText(/value/i), {
      target: { value: data.value },
    })

    fireEvent.click(getByRole('button'))

    expect(mockedOnSubmit).toBeCalledWith(data)
  })
})
