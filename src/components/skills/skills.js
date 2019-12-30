import React from 'react';
import PropTypes from 'prop-types';

import { Table, Row, Column, Highlight } from './skills.css';

const Skills = ({ skills }) => {
  return (
    <Table>
      {skills.map(item => {
        return (
          <Row key={item.title}>
            <Column letter="spacing">
              <Highlight>{item.title}</Highlight>
            </Column>
            <Column>{item.tools}</Column>
          </Row>
        );
      })}
    </Table>
  );
};

Skills.propTypes = {
  skills: PropTypes.array,
};

export default Skills;
