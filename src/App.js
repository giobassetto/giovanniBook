import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Header from './Components/Header';
import Post from './Components/Post';

import '../public/styles.scss';

class App extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    posts: [
      {
        id: 1,
        name: 'Giovanni Bassetto',
        avatar:
          'https://scontent.fldb7-1.fna.fbcdn.net/v/t1.0-9/49103401_1824301397696648_3625512727847370752_n.jpg?_nc_cat=104&_nc_ht=scontent.fldb7-1.fna&oh=1f612dd78de228fada396893cbb7ebcb&oe=5D20F893',
        time: 'há 6 min',
        content:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: 2,
        name: 'Giovanni',
        avatar:
          'https://scontent.fldb7-1.fna.fbcdn.net/v/t1.0-9/20914300_1251541021639358_7822373551605072995_n.jpg?_nc_cat=109&_nc_ht=scontent.fldb7-1.fna&oh=ccf2cb0f86239127274551a0f26f7fa6&oe=5D1F4B28',
        time: 'há 35 min',
        content:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
