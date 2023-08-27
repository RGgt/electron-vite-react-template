import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>Oops! </h1>
        <p>Sorry, an unexpected error has occurred.</p>

        <ul>
          <li>
            Status: {error.status} [{error.statusText}]
          </li>
          <li>Message: {error.data}</li>
          {error && error.error && error.error.stack && (
            <li>
              Stack: <blockquote>{error.error?.stack}</blockquote>
            </li>
          )}
        </ul>

        <p>
          <a href="/">Return to starting screen</a>
        </p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return (
      <>
        <h1>Oops! Unexpected Error of unknown type!!</h1>
      </>
    );
  }
}

export { ErrorPage };
