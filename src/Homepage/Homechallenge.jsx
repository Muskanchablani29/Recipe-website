import React, { useState } from 'react';
import spin from '../Image/spin.webp';
import gift from '../Image/gift.gif';
import spoon from '../Image/spoon.gif';
import './ChallengeZone.css';

export default function HomeChallenge() {
 
  return (
    <div className="challenge">
      <div className="challenge__container">
        <div className="challenge__container__left">
          <h1>Challenge Zone</h1>
          <p>"Let the Fun Begin: Culinary Surprises and Recipe Challenges Await You!" </p>
 
          <div className="challenge-contain">
            <div className="challenge-contain__left">
              <img src={spin} alt
              />
              <p>Spin & get cooking Challenge</p>
            </div>
            <div className="challenge-contain__right">
              <img src={gift} alt
              />
              <p>Mystrey Cooking Challenge</p>
            </div>
            <div className="challenge-contain__left">
              <img src={spoon} alt
              />
              <p>Cook off challenge</p>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}
