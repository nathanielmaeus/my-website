import React from 'react';
import PropTypes from 'prop-types';
import { Container, Contact } from './contacts.css';

import MailIcon from '../../icons/mailIcon';
import GithubIcon from '../../icons/githubIcon';
import TelegramIcon from '../../icons/telegramIcon';

const logos = {
  mail: <MailIcon path="#fff" width="28px" height="28px" />,
  github: <GithubIcon path="#fff" width="28px" height="28px" />,
  telegram: <TelegramIcon path="#fff" width="28px" height="28px" />,
};

export default function Contacts({ contacts }) {
  return (
    <Container>
      {contacts.map(contact => {
        return (
          <Contact key={contact.name}>
            {logos[contact.type]}
            <a href={contact.url} target="_blink">
              {contact.name}
            </a>
          </Contact>
        );
      })}
    </Container>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};
