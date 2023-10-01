import { useState } from 'react';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';

const Toggle = ({ children, title, isOpen, onClick }) => {
  const [toggle, setToggle] = useState(false);
  const [isOpenArrow, setIsOpenArrow] = useState(false);

  const toggleArrow = () => {
    setIsOpenArrow(!isOpenArrow);
  };

  return (
    <div className="cursor-pointer" layout onClick={() => setToggle(!toggle)}>
      <h3
        className={`my-8 text-xl flex items-center ${
          isOpen ? 'border-b-2 border-main2' : ''
        }`}
        layout
        onClick={() => {
          toggleArrow();
          onClick();
        }}
      >
        {title} &nbsp;{' '}
        {!isOpen ? <BsArrowDownShort className="" /> : <BsArrowUpShort />}
      </h3>
      {isOpen ? children : null}
      <div className="bg-light2  h-1 shadow-shadow2 w-full" />
    </div>
  );
};

export default Toggle;
