import { useEffect, useState } from 'react';

function useRandomJoke(firstName, lastName) {
    const [joke, setjoke] = useState('')

    useEffect(()=>{
      const fetchJoke = async ()=>
        await fetch (`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
        .then((res)=> res.json())
          .then ((data)=>{
            setjoke(data.value.joke);
          })
          fetchJoke()
    }, [firstName, lastName])
    return joke;
}

export default useRandomJoke
