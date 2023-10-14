import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Dashboard from "./pages/dashboard/Dashboard";
import PageNotFound from "./pages/page-not-found/PageNotFound";

import AboutUsPage from "./pages/about/About";
import ContactPage from "./pages/contact/Contact";
import MyDocuments from "./pages/documents";
import POSPage from "./pages/pos";
import RootLayout from './pages/layouts/RootLayout';

import CustomHooks from './pages/documents/hooks/custom-hook';
import RefsDemo from './pages/documents/refs/RefsDemo';
import FormCompoent from './pages/documents/forms/Form';
import XParentComponent from './pages/documents/pure-components/XParentComponent';
import RegisterForm from './pages/auth/RegisterForm';
import UserList from './pages/documents/users';
import ResetPassword from './pages/auth/ResetPassword';
import ProtectedRoute from './config/ProtectRoute';
import { AuthContextProvider } from './contexts/AuthContextFirebase';
import LoginForm from './pages/auth/LoginForm';
import HomePage from './pages/home/Home';


const App = () => {
  return (
    <>
      {/* react project not work on gitpages 😲😲 || github page not support browser router */}
      <BrowserRouter>
        <AuthContextProvider>
          <RootLayout>
            <Routes>
              <Route path='auth/login' element={<LoginForm />}></Route>
              <Route path='auth/register' element={<RegisterForm />}></Route>
              <Route path='auth/reset-password' element={<ResetPassword />}></Route>

              <Route path='/'
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }></Route>
              <Route path='dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
              <Route path='about' element={<ProtectedRoute><AboutUsPage /></ProtectedRoute>}></Route>
              <Route path='contact' element={<ProtectedRoute><ContactPage /></ProtectedRoute>}></Route>
              <Route path='pos' element={<ProtectedRoute><POSPage /></ProtectedRoute>}></Route>

              <Route path="documents"
                element={
                  <ProtectedRoute>
                    <MyDocuments />
                  </ProtectedRoute>
                }>
                <Route path="hooks/custom-hooks" element={<CustomHooks />} />
                <Route path="refs" element={<RefsDemo />} />
                <Route path="p" element={<XParentComponent />} />
                <Route path="form" element={<FormCompoent />} />
                <Route path="user-list" element={<UserList />} />
              </Route>


              {/* 👇️ only match this when no other routes match */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </RootLayout>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
































