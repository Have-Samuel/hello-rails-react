import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/actions/greetins';

const Greeting = () => {
  const greetings = useSelector((state) => state.greetings);
  const greeting = greetings.length ? greetings[0][Math.floor(Math.random()*greetings[0].length)] : '';
  const dispacth = useDispatch();

  useEffect(() => {
    if (!greetings.length) {
      dispacth(getGreetings());
    }
  }, [greetings]);

  return (
    <div>
      {
        greeting ? (
          greeting.attributes.greeting
        ) : (
          <div>Loading</div>
        )
      }
    </div>
  );
}

export default Greeting;
