import { ResetCss } from './styles/resetCss';
import { GlobalStyle } from './styles/GlobalStyle';
import MyRoutes from './Routes/MyRoutes';
export default function App() {
  return (
   <>
    <ResetCss />
    <GlobalStyle />
    <MyRoutes />
   </>
  );
}
