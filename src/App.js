import React from 'react';
import SwitchButton from './components/SwitchButton';
import OnIcon from "./components/icons/book.svg"
import './App.css'

const App = () => {
  const handleAction = (isOn) => {
    console.log('Switch toggled:', isOn);
  
  };

  return (
    <div className='Present--wrapper'
      >


<SwitchButton
        action={handleAction}
        onText="ON"
        offText="OFF"
        onColor="#1ABC9C"
        offColor="#000"
        buttonSizeWidth="100px"
        buttonSizeHeight="50px"
        imageSrc={OnIcon}
        imagePosition="right"
        imageSize="10%"
        textPosition="left"
        distant='15%'
        border='medium'
        textSize='25px'
        textWeight='bold'

      />



<SwitchButton
        action={handleAction}
        onText="ON"
        offText="OFF"
        onColor="violet"
        offColor="blue"
        buttonSizeWidth="150px"
        buttonSizeHeight="70px"
        imageSrc={OnIcon}
        imagePosition="right"
        imageSize="20%"
        textPosition = 'left'
        border='rounded'
     

      />
    </div>
  );
};

export default App;
