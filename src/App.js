import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import Login from "./components/Login";
import NoticeBoard from "./components/NoticeBoard";
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

function App() {
  return (
    <div>
      <MantineProvider withNormalizeCSS withGlobalStyles>
      <Notifications />
      <BrowserRouter>
      <NavbarComponent />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/board" element={<NoticeBoard />} />
        </Routes>
      </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
