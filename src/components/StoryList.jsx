import React from 'react';
import PropTypes from 'prop-types';

import Story from './Story';

const StoryList = ({ stories = [] }) => (
  <div>
    {stories.map((story, key) => <Story {...story} key={key} />)}
  </div>
);

StoryList.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape()),
};

export default StoryList;
