import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ProfileTemplate from '.'

const mockedDeleteIncident = vi.fn()
const mockedLogout = vi.fn()

describe('<ProfileTemplate />', () => {
  it('should call handleLogout when logout button is clicked', () => {
    render(
      <ProfileTemplate
        onIncidentDelete={mockedDeleteIncident}
        onLogout={mockedLogout}
        incidents={[]}
        ngoName="some-ngo"
      />
    )

    expect(mockedLogout).not.toBeCalled()

    fireEvent.click(screen.getByTestId('logout-button'))

    expect(mockedLogout).toBeCalled()
  })
})
