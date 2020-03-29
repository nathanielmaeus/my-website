import React from 'react';
import PropTypes from 'prop-types';
import { Chapter } from './chapters.css';
import { MessyImage } from '../../images/messy';
import { CoffeImage } from '../../images/coffee';
import Contacts from 'components/contacts';

const images = (type, theme) => {
  const color = theme !== 'light' ? '#212121' : '#fff';
  const innerColor = theme === 'light' ? '#212121' : '#ccc';
  const components = {
    coffee: (
      <CoffeImage className="doodle" fill={color} innerFill={innerColor} />
    ),
    messy: (
      <MessyImage className="doodle" fill={color} innerFill={innerColor} />
    ),
  };

  return components[type];
};

export default function Chapters({ chapters, theme, contacts }) {
  return (
    <>
      {chapters.map(chapter => {
        const isLarge = !chapter.image;
        return (
          <Chapter key={chapter.image} isLarge={isLarge}>
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: chapter.source.childMarkdownRemark.html,
              }}
            ></div>
            {chapter.image && images(chapter.image, theme)}
            {!chapter.image && <Contacts contacts={contacts} />}
          </Chapter>
        );
      })}
    </>
  );
}

Chapters.propTypes = {
  chapters: PropTypes.array.isRequired,
  theme: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
};
