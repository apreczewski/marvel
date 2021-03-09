import React from 'react';
import { FaUser, FaPlusCircle, FaTimes } from 'react-icons/fa';

import { Wrapper, Image, Content, Name, AddUser, Close } from './styles';

import { CardUserData } from '../index'

const Header: React.FC<CardUserData> = ({ id = '', name, email, values, handleRemoveUser }) => {

  return (
    <Wrapper>
      <Image>
        <FaUser size={10} />
      </Image>
      <Content>
        {!!name && <Name>{name}</Name>}
        <AddUser>
          {!email && <FaPlusCircle size={10} />}
          {email ? <span>{email}</span> : <span>Add User</span>}
        </AddUser>
      </Content>
      <Close onClick={() => handleRemoveUser(id)}>
        <FaTimes size={10} />
      </Close>
    </Wrapper>
  );
}

export default Header;
