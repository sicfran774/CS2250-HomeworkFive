import React from 'react';

const BOTW = () => {
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
      <div className="App">
        <h1> Breath of the Wild Compendium </h1>
        {food.map((item) => (
          <ul key={item.id}>
            <li>
            <img src={item.image} alt="" />
              Name: {item.name}
              <br></br> Description: {item.description}
            </li>
          </ul>
        ))}
        <br />
        {nonFood.map((item) => (
          <ul key={item.id}>
            <li>
            <img src={item.image} alt="" />
              Name: {item.name}
              <br></br> Description: {item.description}
            </li>
          </ul>
        ))}
        <br />
        {monster.map((item) => (
          <ul key={item.id}>
            <li>
            <img src={item.image} alt="" />
              Name: {item.name}
              <br></br> Description: {item.description}
            </li>
          </ul>
        ))}
      </div>
    );
  };
  
  export default BOTW;