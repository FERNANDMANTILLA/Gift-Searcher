import React from "react";
import { useFetchGifts } from "../hooks/useFecthGifts";
import {GiftGridItem} from "./GiftGridItem";
export const GiftGrid = (props) => {

  const { data } = useFetchGifts(props.anime);

  return (
    <>
      <h2 className="title">{props.anime}</h2>

      <div className="card-grid">
        {data.map(({ id, title, images }) => { 
          return (
            <GiftGridItem key={id} id={id} title={title} images={images} />
          );
        })}
      </div>
    </>
  );
};
