# SwitchButton Component
The SwitchButton component is a simple React component that allows users to switch between two states and apply any handler to this button

## Installation
To use the SwitchButton component, you need to have a React project set up. If you don't have one, you can create a new React application using Create React App or any other preferred method.



## Usage
To integrate the SwitchButton component into your application, follow these steps:

1.install component in any folder and import and import it


```import SwitchButton from './YourFolder/SwitchButton';```

2.initialize the component with the required properties

```javascript

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

```
## property list: 
  `action` 
  
parameter accepts your handler which is activated on toggle
  
`onText`
  
The parameter accepts any string value that is displayed when enabled (off by default)

`offText`
The parameter accepts any string value that is displayed when the state is off (off by default)

`onColor`
button background color when enabled

`offColor`
button background color when enabled

`buttonSizeWidth`
  width of button (accepts any units allowed by css)
  
`buttonSizeHeight`
height of button (accepts any units allowed by css)

`imageSrc`
{Put our image props }

`imagePosition`
positioning of the icon/image of the button. Default(Left) Available Values: Right, Left
  
`imageSize`
size of your {image};

`textPosition`
text position of the button. Default(Left) Available Values: Right, Left

`distant`
uses flex-gap as the calculation for the distance between all items (Default 5%)

`border`

button rounding. (Default medium) Available values: lught,medium,rounded

`textSize`
size of button text

`textWeight`
Text weight, accepts all available css values ​​of the font-weight property


