import React from 'react';

export default function Activities() {
  const activitiesMock = [
    {
      name: 'image 1',
      imageUrl: 'http://www.google.com',
      content: 'Lorem ipsum dolor sit amet',
      deletedAd: new Date(),
    },
    {
      name: 'image 2',
      imageUrl: 'http://www.google.com',
      content: 'Lorem ipsum dolor sit amet',
      deletedAd: new Date(),
    },
    {
      name: 'image 3',
      imageUrl: 'http://www.google.com',
      content: 'Lorem ipsum dolor sit amet',
      deletedAd: new Date(),
    },
    {
      name: 'image 4',
      imageUrl: 'http://www.google.com',
      content: 'Lorem ipsum dolor sit amet',
      deletedAd: new Date(),
    },
  ];

  return (
    <div>
      <h1>Activities</h1>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </h3>
      {activitiesMock.map((activity, index) => {
        return (
          <div key={index}>
            <h4>{activity.name}</h4>
            <img src={activity.imageUrl} alt={activity.name} />
            <p>{activity.content}</p>
            <button>Editar</button>
            <button>Eliminar</button>
          </div>
        );
      })}
    </div>
  );
}
