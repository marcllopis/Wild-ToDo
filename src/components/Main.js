import React from 'react';

const Main = props => (
  <div className='main'>
    <h2 className='main-text'>
      Bacon ipsum dolor amet porchetta jowl venison burgdoggen chuck prosciutto. Beef ribs buffalo short ribs ground round landjaeger, meatloaf tenderloin biltong. Kevin filet mignon jowl turkey pastrami. Jerky tri-tip turkey swine corned beef, alcatra ham hock flank landjaeger pork belly. Short ribs swine venison corned beef tongue leberkas jowl bacon landjaeger burgdoggen jerky tri-tip. Pig bacon pork loin brisket, capicola salami short loin t-bone hamburger meatloaf buffalo pancetta sausage chislic. Shankle bacon beef ribs meatloaf.
    </h2>
    <div className='btn-container'>
      <button onClick={props.action} className='main-btn'>Go to the TODO!</button>
    </div>
  </div>
)

export default Main;