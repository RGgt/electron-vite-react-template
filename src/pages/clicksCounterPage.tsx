import { ClicksCounter } from '../components/ClicksCounter';

function ClicksCounterPage() {
  return (
    <>
      <h1>Clicks counter</h1>
      <p>
        This is the default functionality in the react template. Nothing
        particularly interesting about it, but proves React is working.
        Although, the fact that you are able to reach this page, also proves
        that React is working.
      </p>
      <p>Click the button to increment the counter.</p>
      <ClicksCounter></ClicksCounter>
    </>
  );
}

export { ClicksCounterPage };
