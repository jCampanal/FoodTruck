import { combineReducers } from "@reduxjs/toolkit";
import i18n from "./i18nSlice";
import desktopWithInfo from './DesktopWithInfo'
import modalGeneric from './MotionGenerix'
import sideMenu from './SideMenu'
const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    desktopWithInfo,
    sideMenu,
    modalGeneric,
    i18n,
    ...asyncReducers,
  });

  return combinedReducer(state, action);
};

export default createReducer;
