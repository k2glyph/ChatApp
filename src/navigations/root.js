import { StackNavigator } from 'react-navigation';
import Login from '@screens/unauthorized/login';
import Authorized from './Authorized';


const Root = StackNavigator({
  Unauthorized: { screen: Login },
  Authorized: { screen: Authorized },
},
  {
    headerMode: 'screen',
    navigationOptions: {
      header: {
        visible: false,
      },
    },
  },
);

export default Root;
