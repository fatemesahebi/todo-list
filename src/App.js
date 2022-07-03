import {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import {theme} from "assets/theme"
import Container from "components/core/Container";
import {Provider} from "react-redux";
import store from "redux/store";
const ToDoListPage=lazy(() => import("./pages/ToDoListPage"))

function App() {

  return (
      <div >
          <Provider store={store}>
          <ThemeProvider theme={theme}>
              <CssBaseline/>
              <Suspense fallback={null}>
                <BrowserRouter>
                  <Routes>
                      <Route element={<Container/>}>
                          <Route index element={<ToDoListPage/>}/>
                          <Route
                              path="*"
                              element={<Navigate to="/" replace/>}
                          />
                      </Route>

                  </Routes>
                </BrowserRouter>
              </Suspense>
            </ThemeProvider>
          </Provider>
      </div>
  );
}



export default App;