import React, { lazy, Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import UserDetail from "./components/UserDetails/UserDetails";
import Login from "./components/Login/Login";
import Profile from "./components/Login/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import Overview from "./components/Dashboard/Overview";
import Settings from "./components/Dashboard/Settings";
import Reports from "./components/Dashboard/Reports";
import NotFound from "./components/NotFound/NotFound";
import { AuthProvider } from "./components/AuthContext/AuthContext";
import PrivateRoute from "./components/AuthContext/PrivateRoute";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Search from "./components/Search/Search";
import SearchResults from "./components/Search/SearchResult";
import Tabs from "./components/Tabs/Tabs";
import TabContent1 from "./components/Tabs/TabContent1";
import TabContent2 from "./components/Tabs/TabContent2";
import TabContent3 from "./components/Tabs/TabContent3";
import Header from "./components/header/Header";
import Modal from "./components/Modal/Modal"

const HeavyComponent1 = lazy(() =>
  import("./components/HeavyComponent1/HeavyComponent1")
);
const HeavyComponent2 = lazy(() =>
  import("./components/HeavyComponent1/HeavyComponent2")
);
const AnimatedApp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <AuthProvider>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/user/:userId" element={<UserDetail />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={<PrivateRoute element={Profile} />}
            />
            <Route
              path="/dashboard"
              element={<PrivateRoute element={Dashboard} />}
            >
              <Route path="overview" element={<Overview />} />
              <Route path="settings" element={<Settings />} />
              <Route path="reports" element={<Reports />} />
            </Route>
            <Route path="/search" element={<Search />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/heavy1" element={<HeavyComponent1 />} />
            <Route path="/heavy2" element={<HeavyComponent2 />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/tabs" element={<Tabs />}>
              <Route path="tab1" element={<TabContent1 />} />
              <Route path="tab2" element={<TabContent2 />} />
              <Route path="tab3" element={<TabContent3 />} />
            </Route>
              <Route
                path="/modal"
                element={
                  <Modal onClose={closeModal}>
                    <h2>Modal Content</h2>
                    <p>This is the content of the modal.</p>
                  </Modal>
                }
              />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </AuthProvider>
  );
};

const App = () => (
  <Router>
    <div>
      <Header />
      <Breadcrumbs />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="centro">
          <AnimatedApp />
        </div>
      </Suspense>
    </div>
  </Router>
);

export default App;
