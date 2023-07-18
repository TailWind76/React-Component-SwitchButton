import React, { useState } from 'react';

const SwitchButton = ({ 
    action, 
    onText = 'ON',
    offText = 'OFF',
    onColor = '#4CAF50', 
    offColor = '#ccc', 
    buttonSizeWidth = '50px',
    buttonSizeHeight = '50px',
    imageSrc,
    imagePosition = 'left',
    imageSize = '24px',
    textPosition = 'right',
    distant='5%',
    border='medium',
    textSize='18px',
    textWeight='light'
}) => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
        if (action) {
            action(!isOn);
        }
    };

    const indicatorWidth = '50%';
    const switchStyles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            gap: distant,
        },
        button: {
            width: buttonSizeWidth,
            height: buttonSizeHeight,
            borderRadius: border === 'light' ? '15px' : border === 'medium' ? '25px' : border === 'rounded' ? '100px' : '0px',
            backgroundColor: isOn ? onColor : offColor,
            position: 'relative',
            cursor: 'pointer',
            
            transition: 'background-color 0.3s',
        },
        indicator: {
            width: indicatorWidth,
            height: '90%',
            borderRadius: '50%',
            backgroundColor: '#fff',
            position: 'absolute',
            top: '2px',
            left: isOn ? `calc(100% - ${indicatorWidth})` : '2px',
            transition: 'left 0.3s',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
        },
        buttonText: {
            marginLeft: '10px',
            marginRight: '10px',
            order: textPosition === 'left' ? -1 : 0,
            fontSize:textSize,
            fontWeight:textWeight
        },
        image: {
            width: imageSize,
            objectFit: 'cover',
            marginRight: '8px',
            marginLeft: '8px',
            order: imagePosition === 'right' ? 1:-1, // Add order for image
        },
    };
    return (
        <div style={switchStyles.container}>
            {imagePosition === 'left' && imageSrc && <img src={imageSrc} alt="icon" style={switchStyles.image} />}
            <div style={{ ...switchStyles.button, backgroundColor: isOn ? onColor : offColor }} onClick={toggleSwitch}>
                <div style={switchStyles.indicator}></div>
            </div>
            {imagePosition === 'right' && imageSrc && <img src={imageSrc} alt="icon" style={switchStyles.image} />}
            <span style={switchStyles.buttonText}>{isOn ? onText : offText}</span>
        </div>
    );
};

export default SwitchButton;
