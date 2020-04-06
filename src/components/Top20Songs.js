import React from 'react';

const Top20Songs = (props) => {

  const options = props.top20.map((song, index)=> {
    return <li key={song.title.label}>
    <img src={song['im:image'][0].label}/>
    {index + 1}: {song.title.label}
    <audio controls>
    <source src={song.link[1].attributes.href} type="audio/mpeg"></source>
    </audio>
    </li>
  })

  return (
    <ol>
    {options}
    </ol>
  )
}

export default Top20Songs;
