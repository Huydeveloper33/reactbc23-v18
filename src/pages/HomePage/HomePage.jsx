import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmApiAction } from "../../redux/Reducers/phimReducers";

export default function HomePage(props) {
  //useSelector
  const { arrFilm } = useSelector((reducer) => reducer.phimReducers);
  const dispatch = useDispatch();
  useEffect(() => {
    //Dispatch action api
    const actionThunk = getFilmApiAction();
    dispatch(actionThunk);
    //Call api
  }, []);

  console.log(arrFilm);
  return <div>HomePageprops</div>;
}
