import { Route } from 'react-router-dom';
import SideBar from '../../components/sideBar/sideBar';
import { profileRoutes } from '../../routes';


const ProfilePage = () => {
  return (
    <section>
      <h1>Profile</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi odit
        libero, nulla, maiores eaque officia magni, quasi autem tempore
        provident accusamus. Eveniet facilis eius, quo officia quisquam aliquam
        quasi facere.
      </p>
      <SideBar />
      {profileRoutes.map((route) => {
        return <Route path={route.path} component={route.component} />;
      })}
    </section>
  );
};

export default ProfilePage;
