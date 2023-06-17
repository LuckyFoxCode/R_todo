import { useState } from 'react';
import { Aside, Content } from './components';

export interface DataProps {
  id: string;
  color: string;
  title: string;
  isSelected: boolean;
}

export const App = () => {
  const [data, setData] = useState<DataProps[]>([
    { color: '#42B883', id: '01', title: 'Покупки', isSelected: false },
    { color: '#64C4ED', id: '02', title: 'Фронтенд', isSelected: true },
  ]);

  return (
    <div className='app'>
      <Aside
        data={data}
        setData={setData}
      />
      <Content />
    </div>
  );
};
