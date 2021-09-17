
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=qzf3ZJnMp0UZ8XWinWruIjcItFVeMi7D&limit=10&q=${ encodeURI(category) }`;

    const respuesta = await fetch( url );
    const { data } = await respuesta.json();

    const gifs = data.map( (img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;

}

