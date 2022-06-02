import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifts = (anime) => {

    useEffect(() => {
        getGifts(anime).then((imgs) => {

            setstate({
              data: imgs,
              loading: false,
            });

        });
      }, [anime]);

  const [state, setstate] = useState({
    data: [],
    loading: true,
  });



  return state;
};
