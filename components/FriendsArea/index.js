import React from 'react';

const FriendsArea = ({ friends }) => (
  <div>
    <h5 style={{
      textAlign: 'center',
    }}
    >友情鏈接</h5>
    <ul
      className="list-inline"
      style={{
        textAlign: 'center',
      }}
    >
      {friends.forEach(friend => (
        <li>
          <a href={friend.href} target="_blank">{friend.title}</a>
        </li>
      ))
      }
    </ul>
  </div>
);

export default FriendsArea;
