import React, {useState, useEffect} from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = "04898acc741cf45e9"

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=
            ${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(response => response.json())
        .then(result => {
            setData(result)
        })
    }

    fetchData();

  }, [term]) //whenever term changes useEffect, to this or do that.

  return {data}
}

export default useGoogleSearch

//search engine Id -> 04898acc741cf45e9