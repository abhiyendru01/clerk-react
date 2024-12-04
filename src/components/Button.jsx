import React from 'react';
import styled from 'styled-components';
const Button = () => {
    return (<StyledWrapper>
      <div className="button-container">
        <button className="button">
          <svg className="icon" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
            <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"/>
          </svg>
        </button>
        <button className="button">
          <svg className="icon" stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </button>
        {/* New button with + icon */}
        <button className="button">
          <svg className="icon" stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5v14m7-7H5"/>
          </svg>
        </button>
        
        <button className="button">
          <svg className="icon" stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
            <circle cx={9} cy={21} r={1}/>
            <circle cx={20} cy={21} r={1}/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        </button>
        {/* Event-related button with calendar icon */}
        <button className="button">
          <svg className="icon" stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7 4h10v1H7V4zm12 16H5V8h14v12z"/>
          </svg>
        </button>
      </div>
    </StyledWrapper>);
};
const StyledWrapper = styled.div `
  .button-container {
    display: flex;
    background-color: black;
    width: 300px;  /* Increased width */
    height: 60px;  /* Increased height */
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  .button {
    outline: 0 !important;
    border: 0 !important;
    width: 60px;  /* Increased size */
    height: 60px;  /* Increased size */
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }

  .button:hover {
    transform: translateY(-3px);
  }

  .icon {
    font-size: 24px;  /* Increased icon size */
    color: white;
  }
`;
export default Button;
