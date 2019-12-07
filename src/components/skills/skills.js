import React from 'react';
import PropTypes from 'prop-types';
import { Table, Row, Column } from './skills.css';

const Skills = () => {
  return (
    <Table>
      <Row>
        <Column letter="spacing">CORE</Column>
        <Column>JavaScript(ES5+)</Column>
      </Row>
      <Row>
        <Column letter="spacing">STYLES</Column>
        <Column>css scss css-in-js</Column>
      </Row>
      <Row>
        <Column letter="spacing">FRAMEWORKS</Column>
        <Column>react/redux(deeply) svelte vue 3(a little)</Column>
      </Row>
      <Row>
        <Column letter="spacing">TOOLS</Column>
        <Column>
          redux-thunk(deeply) redux-saga(deeply) effector react-router
        </Column>
      </Row>
      <Row>
        <Column letter="spacing">BUNDLE</Column>
        <Column>webpack(deeply) rollup</Column>
      </Row>
      <Row>
        <Column letter="spacing">JVM</Column>
        <Column>gatsby next</Column>
      </Row>
      <Row>
        <Column letter="spacing">REST</Column>
        <Column>typescript graphql </Column>
      </Row>
    </Table>
  );
};

export default Skills;
