import React from "react";
import Card from "./Card";

const Main = ({feed}) => {
  
  return (
    <div className="grid grid-cols-4 gap-4 gap-y-25 mt-10 p-10">
          {feed && feed.map(item => {
              const name = item['im:name'].label;
              const image = item['im:image'][2].label;
              const artist = item['im:artist'].label;
              const id = item.id.attributes['im:id'];
              return <Card name={name} image={image} artist={artist} id={id} key={id}/>
          })}
      </div>
  );
};

export default Main;
