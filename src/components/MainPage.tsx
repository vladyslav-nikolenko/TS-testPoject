import React, {FC} from 'react';
import EventsExample from './EventsExample';
import Card from './Card';
import { CardVariant } from './Card';


const MainPage:FC = () => {

  
  return (
     <div>
        <EventsExample/>
        Hi Ts
        <Card onClick={(num) => console.log('num', num)} variant={CardVariant.primary} width='200px' height='200px'  > 
        cardChildren
        </Card>
    </div>
  );
}

export default MainPage;