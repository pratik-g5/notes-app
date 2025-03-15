import Body from './components/Body';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import appStore from './redux/appStore';

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Auth0Provider
          domain="dev-x38u2vzpge4npmjy.us.auth0.com"
          clientId="a2oh2hHI4Isfxpzs0Prd0pLoFX5PlW7z"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <Body />
        </Auth0Provider>
      </Provider>
    </>
  );
}

export default App;
