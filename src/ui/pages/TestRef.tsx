import React, { useRef } from 'react';

export const TestRef = () => {
  const nameRef =useRef <HTMLInputElement>(null)
  const isNameRef = ()=>{
    if(nameRef){
      nameRef.current?.focus()
    }
  }
  return (
    <div>
      <form>

      <input ref={nameRef}/>

      </form>
      <button onClick={isNameRef}>Name</button>
    </div>
  );
};

