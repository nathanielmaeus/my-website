import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'store/createContext';

import { Table, Row, Column, Highlight, Tools } from './skills.css';

const Skills = ({ skills }) => {
  return (
    <Consumer>
      {({ theme }) => (
        <Table>
          {skills.map(item => {
            return (
              <Row key={item.title} theme={theme}>
                <Column letter="spacing">
                  <Highlight>{item.title}</Highlight>
                </Column>
                <Tools>{item.tools}</Tools>
              </Row>
            );
          })}
        </Table>
      )}
    </Consumer>
  );
};

Skills.propTypes = {
  skills: PropTypes.array,
};

export default React.memo(Skills);
