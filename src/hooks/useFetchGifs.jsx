
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {


    const [gifsData, setCategorys] = useState([]);
    const [isloading, setIsloading] = useState(true)

    const getGifsCategory = async () => {
        const savedGifsCategory = await getGifs(category)
        setIsloading(false)
        setCategorys(savedGifsCategory)
    }

    useEffect(() => {
        
        getGifsCategory()
      
    }, [])

    return{
        gifsData,
        isloading
    }
    

}