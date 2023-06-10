import { useState } from 'react';
import { Aside } from './components';

export const App = () => {
  const [show, setShow] = useState<boolean>(true);

  const isShowAside = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <div className='app'>
      <Aside
        show={show}
        onClick={isShowAside}
      />
    </div>
  );
};
