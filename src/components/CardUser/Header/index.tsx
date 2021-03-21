import React from 'react';
import { useHome, UserProps } from '../../../hooks/home';

import { FaUser, FaPlusCircle, FaTimes } from 'react-icons/fa';
import { Wrapper, Image, Content, Name, AddUser, Close } from './styles';

const Header: React.FC<UserProps> = (user) => {
  const { id, name, email } = user;
  const { removeUser } = useHome();

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
      <Close onClick={() => removeUser(id)}>
        <FaTimes size={10} />
      </Close>
    </Wrapper>
  );
}

export default Header;
