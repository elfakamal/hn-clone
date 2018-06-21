import React from 'react';
import PropTypes from 'prop-types';

const Story = ({ title, url, score, time, by }) => {
  return (
    <div className="story">
      <div className="score" title="Score">{score}</div>
      <div className="story-body">
        <div className="story-title">
          <a href={url} target="_blank" rel="noopener nofollow">{title}</a>
        </div>
        <div className="story-details">
          <small>by {by}</small> | <small>{time}</small>
        </div>
      </div>
    </div>
  );
};

Story.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  score: PropTypes.number,
  time: PropTypes.number,
  by: PropTypes.string,
};

export default Story;
