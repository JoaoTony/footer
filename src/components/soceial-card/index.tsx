import React, { FC } from 'react'

import './social-card.css'

import CardSocailMedia from './card-social-media';

const socialData = [
  {name: 'facebook', fallows: '22.000'},
  {name: 'youtube', fallows: '42.000'},
  {name: 'twitter', fallows: '12.000'}
]
 
const SocialCard: FC = () => (
  <div className="container-card">
    {socialData.map(item => <CardSocailMedia name={item.name} fallows={item.fallows}/>)}
    <div className="count">76.000</div>
  </div>
);

export default SocialCard;