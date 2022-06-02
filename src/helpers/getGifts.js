export const  getGifts = async (anime,count = 5) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WO91Rx6fQaYWZo2lQGGIeJthT1n1vdfa&limit=${count}&q=${ encodeURI( anime ) }`;
    const resp = await fetch(url);

    const {data} = await resp.json();
    const gift = data.map(({id,title,images}) => {return {id:id, title:title, images:images.downsized.url}})

    return gift;
    
    }