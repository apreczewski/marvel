import React, { useState, useRef } from 'react';
import { BiRightArrow, BiDownArrow } from 'react-icons/bi';
import { Overlay } from 'react-bootstrap';
import { uuid } from 'uuidv4';

import { Wrapper, Selection, BtnSelector, PopoverCustom } from './styles';

interface IDropdownSelector {
  handleSetTypeCurrent(text: string): void;
  types: string[];
  typeCurrent: string;
}

const DropdownSelector: React.FC<IDropdownSelector> = ({ types, typeCurrent, handleSetTypeCurrent }) => {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);

  const handleOpenPopover = (status: boolean) => {
    if (status) {
      setVisible(true);
      return;
    }
    setVisible(false);
  };

  return (
    <Wrapper>
      <Selection ref={ref} onClick={() => handleOpenPopover(!visible)}>
        <BtnSelector>
          {!visible && (
            <BiRightArrow size={15} />
          )}
          {visible && (
            <BiDownArrow size={15} />
          )}
          {typeCurrent}
        </BtnSelector>
      </Selection>

      <Overlay
        target={ref.current}
        show={visible}
        placement="bottom-start"
        key={uuid()}
      >
        <PopoverCustom>
          {types && types.map((type) => (
            type !== typeCurrent && (
              <BtnSelector
                key={uuid()}
                type="button"
                onClick={() => {
                  handleSetTypeCurrent(type);
                  handleOpenPopover(!visible);
                }}
              >
                {type}
              </BtnSelector>
            )
          ))}
        </PopoverCustom>
      </Overlay>
    </Wrapper>
  );
}

export default DropdownSelector;
