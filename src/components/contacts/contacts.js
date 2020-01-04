import React from 'react';
import PropTypes from 'prop-types';
import { Container, Contact } from './contacts.css';
import { Consumer } from 'store/createContext';

import MailIcon from '../../icons/mailIcon';
import GithubIcon from '../../icons/githubIcon';
import TelegramIcon from '../../icons/telegramIcon';

const logos = (type, theme) => {
  const color = theme === 'light' ? '#000' : '#fff';
  const components = {
    mail: <MailIcon fill={color} width="28px" height="28px" />,
    github: <GithubIcon fill={color} width="28px" height="28px" />,
    telegram: <TelegramIcon fill={color} width="28px" height="28px" />,
  };

  return components[type];
};

export default function Contacts({ contacts }) {
  return (
    <Consumer>
      {({ theme }) => (
        <Container theme={theme}>
          {contacts.map(contact => {
            return (
              <Contact key={contact.name}>
                {logos(contact.type, theme)}
                <a href={contact.url} target="_blink">
                  {contact.name}
                </a>
              </Contact>
            );
          })}
        </Container>
      )}
    </Consumer>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};
