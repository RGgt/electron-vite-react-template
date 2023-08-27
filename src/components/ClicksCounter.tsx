import { useState } from 'react';

function ClicksCounter() {
  const [count, setCount] = useState(0);
  const onClick = async () => {
    console.log('clicked');
    setCount((count) => count + 1);
  };

  return (
    <div>
      <button onClick={onClick} className="main-button">
        count is {count}
      </button>
    </div>
  );
}
export { ClicksCounter };
