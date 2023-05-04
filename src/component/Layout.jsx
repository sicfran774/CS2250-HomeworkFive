import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="root">
    <h1 className="header">Breath of the Wild Compendium</h1>
      <nav className="">
        <ul>
          <li>
            <Link to="/">Monsters</Link>
          </li>
          <li>
            <Link to="/creatures/food">Creatures (Food)</Link>
          </li>
          <li>
            <Link to="/creatures/non_food">Creatures (Non_Food)</Link>
          </li>
          <li>
            <Link to="/equipment">Equipment</Link>
          </li>
          <li>
            <Link to="/materials">Materials</Link>
          </li>
          <li>
            <Link to="/treasure">Treasure</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;