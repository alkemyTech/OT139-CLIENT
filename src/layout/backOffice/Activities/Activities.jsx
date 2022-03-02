import React from 'react';
import style from './activities.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

export default function Activities(props) {
  const activitiesMock = [
    {
      name: 'Lorem ipsum dolor sit amet',
      imageUrl: 'http://www.google.com',
      content: 'Lorem ipsum dolor sit amet',
      deletedAd: new Date(),
    },
    {
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'http://www.google.com',
      content: 'Lorem ipsum dolor sit amet',
      deletedAd: new Date(),
    },
    {
      name: 'Activities 3',
      imageUrl: 'http://www.google.com',
      content: 'Lorem ipsum dolor sit amet',
      deletedAd: new Date(),
    },
    {
      name: 'Activities 4',
      imageUrl: 'http://www.google.com',
      content: 'Lorem ipsum dolor sit amet',
      deletedAd: new Date(),
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Actividades</h1>
      </div>
      <div className={style.description}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
      <div className={style.activities_table}>
        {activitiesMock.map((activity, index) => {
          return (
            <div key={index} className={style.activity_item}>
              <div className={style.activity_name_cont}>{activity.name}</div>
              <div className={style.cont_buttons}>
                <button className={style.button_edit} onClick={() => {}}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button className={style.button_delete} onClick={() => {}}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
