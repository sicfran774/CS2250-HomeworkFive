import React from 'react';

function BOTW(text) {
  //useState()    ===   [variable, setter]
  const [items, setItems] = React.useState([]);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2/all")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsDataLoaded(true);
      });
  }, []);

  if (!isDataLoaded) {
    return (
      <div>
        <h1> Loading... </h1>
      </div>
    );
  }
    
  const food = items.data.creatures.food;
  const nonFood = items.data.creatures.non_food;
  const monster = items.data.monsters;
  
  
  return (
    <div className="item-flexbox">
      {food.map((item) => (
        <div className="item-cell" key={item.id} >
          <img src={item.image} alt="" />
            <h3 className="item-name">{item.name}</h3>
            <div className="item-cell-info">
              <h2>{item.name}</h2>
              <p className="item-description">{item.description}</p>
              <p className="item-found">Found in {item.common_locations}</p>
            </div>
            <div className="footer"></div>
        </div>
      ))}
      
    </div>
  );
};
  
export default BOTW;