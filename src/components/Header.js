import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBarWidth,
  changeBarWidth,
} from "../store/features/changeBarWidthSlice";
import { changeAlgo } from "../store/features/updataAlgorithmSlice";
import "./Header.css";
import { changeRunAlgorithmButtonState } from "../store/features/AlgorithmRunButtonSlice";
import { setNewArray } from "../store/features/newArraySlice";
import { updateAnimationSpeed } from "../store/features/animationSpeedSlice";

export default function Header() {
  const overlayRef = useRef(null);
  const menuRef = useRef(null);
  const showMenuIconRef = useRef(null);
  const hideMenuIconRef = useRef(null);

  const dispatch = useDispatch();
  const barWidth = useSelector(getBarWidth);

  const handleAlgoChange = (e) => {
    dispatch(changeAlgo(e.target.value));
  };
  const handleBarWidthChange = (e) => {
    dispatch(changeBarWidth(parseInt(e.target.value)));
  };
  const handleAlgoRunButtonClick = () => {
    dispatch(changeRunAlgorithmButtonState(true));
  };
  const handleNewArrayClick = () => {
    dispatch(setNewArray(true));
  };
  const handleAnimationSpeedChange = (e) => {
    dispatch(updateAnimationSpeed(parseInt(e.target.value)));
  };
  const showMenu = ()=>{
    overlayRef.current.classList.toggle("overlay-active");
    menuRef.current.classList.toggle("active");
    hideMenuIconRef.current.style.display = "block";
    showMenuIconRef.current.style.display = "none";
  };
  const closeMenu = () => {
    overlayRef.current.classList.toggle("overlay-active");
    menuRef.current.classList.toggle("active");
    hideMenuIconRef.current.style.display = "none";
    showMenuIconRef.current.style.display = "block";
  };
  return (
    <div className="header">
      <div className="full-app-title">Sorting Visualizer</div>
      <div className="small-app-title">Sort !!</div>
      <div className="short-app-title">S</div>
      <nav className="nav-bar">
        <div className="nav1" ref={menuRef}>
          <select name="algo" className="algo" onChange={handleAlgoChange}>
            <option value="bubble">Bubble Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="quick">Quick Sort</option>
            <option value="merge">Merge Sort</option>
          </select>
          <select
            name="animation"
            className="animation-speed"
            onChange={handleAnimationSpeedChange}
          >
            <option value="20">Medium</option>
            <option value="40">Very Slow</option>
            <option value="30">Slow</option>
            <option value="10">Fast</option>
            <option value="5">Very Fast</option>
          </select>
          <div className="bar-width-element">
            <label htmlFor="bar-width" className="bar-width-label">
              Bar width
            </label>
            <input
              type="range"
              min="5"
              max="50"
              value={barWidth}
              id="bar-width"
              onChange={handleBarWidthChange}
            />
          </div>
          <button className="new-array-button" onClick={handleNewArrayClick}>
            New Array
          </button>
        </div>
        <div className="nav2">
          <button
            className="sort-algorithm-button"
            onClick={handleAlgoRunButtonClick}
          >
            Sort
          </button>
        </div>
        <div className="overlay" ref={overlayRef} onClick={closeMenu}></div>
        <div className="gg-close" ref={hideMenuIconRef} onClick={closeMenu}></div>
        <div className="gg-menu" ref={showMenuIconRef} onClick={showMenu}></div>
      </nav>
    </div>
  );
}
