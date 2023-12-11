// AllSquares.js
import React, { useState } from 'react';
import Header from './Header';
import Square from './Square';
import ContentSquare1 from './ContentSquare1';
import ContentSquare2 from './ContentSquare2';
import ContentSquare3 from './ContentSquare3';
import ContentRectangle from './ContentRectangle';
import ContentSquare5 from './ContentSquare5';
import ContentSquare6 from './ContentSquare6';
import ContentSquare7 from './ContentSquare7';
import ContentSquare8 from './ContentSquare8';

const AllSquares = ({switchToHelloWorldPage}) => {
  // const [view, setView] = useState('AllSquares');

  // const switchToHelloWorldPage = () => {
  //   setView('HelloWorldPage');
  // }; 

  const tabs = [
    {
      id: 'challenges',
      title: 'Challenges',
      sentence: 'You joined Preprlabs on Nov 13, 2023, here is your Challenge journey.',
      bulletPoints: ['Project Submitted: 0', 'Project Submitted: 2', 'Invited: 1', 'Followed: 0'],
    },
    {
      id: 'labs',
      title: 'Labs',
      sentence: 'You joined Preprlabs on Nov 13, 2023, here is your Lab journey.',
      bulletPoints: ['Completed: 0', 'In progress: 1', 'Not started: 1'],
    },
    {
      id: 'resources',
      title: 'Resources',
      sentence: 'You joined Preprlabs on Nov 13, 2023, start your Resource Module journey now!',
      bulletPoints: ['', '', '', ''],
    },
  ];

  return (
    <div>
      <Header />
      <h2>Good evening, Anirudh.</h2>
      {/* <div className="button">
        <button onClick={switchToHelloWorldPage}>Visit W3Schools.com!</button>
      </div> */}
      <div style={{ display: 'flex' }}>
        <Square>
          <ContentSquare1 title="My Progress 1" tabs={tabs} />
        </Square>
        <Square>
          <ContentSquare2 title="Continue Where You Left Off" tabs={tabs} />
        </Square>
        <Square>
          <ContentSquare3 title="Upcoming Challenge Deadlines" tabs={tabs} />
        </Square>
      </div>
      <div style={{ display: 'flex' }}>
        <Square>
          <ContentRectangle title="Leaderboard" tabs={tabs} />
        </Square>
        <Square>
          <ContentSquare5 title="Latest Achievement" tabs={tabs} />
        </Square>
      </div>
      <div style={{ display: 'flex' }}>
        <Square>
          <ContentSquare6 title="2 Labs" tabs={tabs} />
        </Square>
        <Square>
          <ContentSquare7 title="18 Challenges" tabs={tabs} />
        </Square>
        <Square>
          <ContentSquare8 title="3 Projects" tabs={tabs} switchToHelloWorldPage={switchToHelloWorldPage} />
        </Square>
      </div>
    </div>
  );
};

export default AllSquares;
