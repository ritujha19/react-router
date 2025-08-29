import { Home, About, Contact, User, Login } from "./components";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const App = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <>
      <Routes location={state && state.background ? state.background : location}>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="user/:userId" element={<User />} />
    {!state?.background && <Route path="login" element={<Login />} />}
  </Route>
</Routes>


      {state && state.background &&(
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      ) }
    </>
  );
};

export default App;
