import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";

const players = [{
  _id:'1',
  name:'Lauren',
  score: 90
},{
  _id:'2',
  name:'Mike',
  score: 50
},{
  _id:'3',
  name:'Mary',
  score: 10
}];
const renderPlayers = function (playersList){
  let numbers = [{val: 1},{val: 2},{val: 3}];

  let newNumbers = numbers.map(function(number){
      return <p key={number.val}>{number.val}</p>;
  });
  console.log(newNumbers);
  return [<p key="1">1</p>,<p key='2'>2</p>,<p key='3'>3</p>];
};

Meteor.startup (function(){
  let title = 'Score Keep';
  let jsx = (
    <div>
      <p>{title}</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render (jsx, document.getElementById('app'));
});
