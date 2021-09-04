import React, { FC } from "react";
import './social-card.css';

type CardSocailMediaProps = {
  name: string;
  fallows: string;
}

const CardSocailMedia: FC<CardSocailMediaProps> = ({ name, fallows }) => {
  return (
    <div className="card">
      <div className={`ìmg ${name}`}></div>

      <div className="texts">
        <p className="number">{fallows}</p>
        <p className="text">Seguidores</p>
      </div>
    </div>
  )
}

export default CardSocailMedia;