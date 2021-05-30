import * as Sentry from '@sentry/nextjs'
import { NextPageContext } from 'next'
import NextErrorComponent, { ErrorProps } from 'next/error'

type AppErrorProps = {
  err: Error
  hasGetInitialPropsRun: boolean
  statusCode: number
}

type ErrorPropsWithHasGetInitialPropsRun = ErrorProps & {
  hasGetInitialPropsRun: boolean
}

const AppError = ({
  err,
  hasGetInitialPropsRun,
  statusCode,
}: AppErrorProps): JSX.Element => {
  if (!hasGetInitialPropsRun && err) {
    Sentry.captureException(err)
  }

  return <NextErrorComponent statusCode={statusCode} />
}

AppError.getInitialProps = async ({
  AppTree,
  asPath,
  err,
  pathname,
  query,
  res,
}: NextPageContext) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps({
    AppTree,
    err,
    pathname,
    query,
    res,
  })

  const error: ErrorPropsWithHasGetInitialPropsRun = {
    ...errorInitialProps,
    hasGetInitialPropsRun: true,
  }

  if (err) {
    Sentry.captureException(err)
    await Sentry.flush(2000)

    return error
  }

  Sentry.captureException(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
  )
  await Sentry.flush(2000)

  return error
}

export default AppError
