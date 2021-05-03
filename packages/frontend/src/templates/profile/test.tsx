import { fireEvent, render } from '@testing-library/react'
import ProfileTemplate from '.'

const mockedDeleteIncident = jest.fn()
const mockedLogout = jest.fn()

describe('<ProfileTemplate />', () => {
  it('should call handleLogout when logout button is clicked', () => {
    const { getByTestId } = render(
      <ProfileTemplate
        handleDeleteIncident={mockedDeleteIncident}
        handleLogout={mockedLogout}
        incidents={[]}
        ngoName="some-ngo"
      />
    )

    expect(mockedLogout).not.toBeCalled()

    fireEvent.click(getByTestId('logout-button'))

    expect(mockedLogout).toBeCalled()
  })
})
