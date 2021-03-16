import React from 'react';
import { useUsers, UserProps } from '../../../hooks/users';

import { FaUser, FaPlusCircle, FaTimes } from 'react-icons/fa';
import { Wrapper, Image, Content, Name, AddUser, Close } from './styles';

const Header: React.FC<UserProps> = ({ id = '', name, email, values }) => {
  const { removeUser } = useUsers();

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
