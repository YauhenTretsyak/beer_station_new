import { useContext, useState } from 'react';
import { SwitchContext } from '../../context/SwitchContext';
import { v4 as uuidv4 } from "uuid";
import locations from "../../dataComponents/localSelector.data";

import {
  Selector,
  Wrapper,
  Paragraph,
  Place
} from "./LocalSelector.styles";

const LocalSelector = () => {

  const { locationSwitch, LocationSwitcher } = useContext(SwitchContext);
  const [ isDisplay, setIsDisplay ] = useState(false);

  const HandlerLocation = (e) => {
    const location = e.target.getAttribute("data-local");
    const address = e.target.textContent;
    LocationSwitcher(location, address);
    setIsDisplay(false)
  }

  const local = locations.map(item => {
    return(
      <Place 
        key={uuidv4()}
        data-local={item.data}
        onClick={ HandlerLocation }
      >
        { item.loc }
      </Place>
    )
  })

  return(
    <Selector isDisplay={isDisplay}>
      <Paragraph 
        isDisplay={isDisplay}
        onClick={ () => setIsDisplay(!isDisplay) }
      >
        { locationSwitch.address }
      </Paragraph>
      <Wrapper isDisplay={isDisplay}>
        {local}
      </Wrapper>
    </Selector>
  )
}

export default LocalSelector;