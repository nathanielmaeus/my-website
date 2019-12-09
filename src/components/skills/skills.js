import React from 'react';
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
        <Column>react/redux(deep) svelte vue 3(a little)</Column>
      </Row>
      <Row>
        <Column letter="spacing">TOOLS</Column>
        <Column>
          redux-thunk(deep) redux-saga(deep) effector react-router
        </Column>
      </Row>
      <Row>
        <Column letter="spacing">BUNDLE</Column>
        <Column>webpack(deep) rollup</Column>
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

Skills.propTypes = {};

export default Skills;
