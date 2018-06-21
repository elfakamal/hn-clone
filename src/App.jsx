import React from 'react';

import Header from './components/Header';
import Spinner from './components/Spinner';
import StoryList from './components/StoryList';
import Filters from './components/Filters';

import { LIMIT } from './constants';
import { getStoryIds, fetchStories } from './services/stories';

import logo from './assets/logo.svg';
import './assets/App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.loadStories = this.loadStories.bind(this);
  }

  state = {
    stories: [],
    loading: true,
  };

  componentDidMount() {
    this.loadStories();
  }

  loadStories(endpoint) {
    this.setState({ loading: true });

    getStoryIds(endpoint).then(storyIds => {
      fetchStories(storyIds.splice(0, LIMIT)).then(stories => {
        this.setState({ stories, loading: false });
      });
    });
  }

  render() {
    const { stories = [], loading } = this.state;

    return (
      <div className="hackernews-app">
        <Header logo={logo} />
        <div className="hackernews-app-body">
          <Filters onFilterClick={this.loadStories} disabled={loading} />

          {loading && <Spinner />}
          {!loading && <StoryList stories={stories} />}
        </div>
      </div>
    );
  }
}
