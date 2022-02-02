import React from 'react';

export  function Input() {
  return <div className="input">
      <input type="email" required placeholder="example@gmail.com"/>
      <button type="submit">Send</button>
  </div>;
}
