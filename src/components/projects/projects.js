import React from 'react';
import PropTypes from 'prop-types';
import Project from './blocks/project';
import { List } from './projects.css';

function Projects({ items }) {
  return (
    <List>
      {items.map(item => {
        return <Project key={item.title} item={item} />;
      })}
    </List>
  );
}

Projects.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Projects;
