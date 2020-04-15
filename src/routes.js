import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import WhoWeAre from './pages/WhoWeAre';
import Shopping from './pages/Shopping';
import FeedSocial from './pages/FeedSocial';
import Profile from './pages/Profile';

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
          WhoWeAre,
        }),
        Logged: createBottomTabNavigator(
          {
            Feed: FeedSocial,
            Shopping,
            WhoWeAre,
            Profile,
          },
          {
            headerLayoutPreset: 'center',
            tabBarOptions: {
              showIcon: true,
              showLabel: true,
              activeTintColor: '#f2ab25',
              inactiveTintColor: '#000',
              style: {
                backgroundColor: '#fff',
              },
            },
          }
        ),
      },
      {
        initialRouteName: userLogged ? 'Logged' : 'Sign',
      }
    )
  );

export default Routes;
