import { combineReducers } from "@reduxjs/toolkit";
import i18n from "./i18nSlice";
import desktopWithInfo from './DesktopWithInfo'
import modalGeneric from './MotionGenerix'
import sideMenu from './SideMenu'
import authorization from './auth'
import shopingList from './ShopingList'
import notificationDiv from "./NotificationDiv";
import navEffect from "./NavEffect";

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    desktopWithInfo,
    sideMenu,
    authorization,
    modalGeneric,
    i18n,
    shopingList,
    notificationDiv,
    navEffect,
    ...asyncReducers,
  });

  return combinedReducer(state, action);
};

export default createReducer;
