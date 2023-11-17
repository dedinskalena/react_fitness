export const exerciseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cb7e0fcd27mshf01667cd476a172p1e2537jsn2c9912ccc39d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cb7e0fcd27mshf01667cd476a172p1e2537jsn2c9912ccc39d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
}; 


export const fetchData=async (url,options)=>{
    const response=await fetch(url,options)
    const data=await response.json()
    return data
}