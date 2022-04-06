import { NavLink } from "react-router-dom";
import { profileRoutes } from "../../routes";
import styles from './sideBar.module.scss';
const SideBar = () => {
  return (
    <ul className={styles.ulTag} >
      {profileRoutes.map( (route)=>{
          return(
              <li key={route.id}  > <NavLink activeClassName={styles.activeTab} to={route.path} >{route.title}</NavLink> </li>
          );
      } )}
    </ul>
  );
};

export default SideBar;
