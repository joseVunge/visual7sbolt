import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { createClient } from "@supabase/supabase-js";
import { SupabaseProvider } from './contexts/SupabaseContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import Vehicles from './pages/Vehicles';
import WhatsApp from './pages/WhatsApp';
import SocialMedia from './pages/SocialMedia';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Contacts from './pages/Contacts';
import AutoResponder from './pages/AutoResponder';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
//const supabaseUrl = process.env.REACT_APP_SUPABASE_URL!;
//const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY!;

//export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  return (
    <SupabaseProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
              }}
            />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={
                <ProtectedRoute>
                  <Layout>
                    <Dashboard />
                  </Layout>
                </ProtectedRoute>
              } />
              <Route path="/properties" element={
                <ProtectedRoute>
                  <Layout>
                    <Properties />
                  </Layout>
                </ProtectedRoute>
              } />
              <Route path="/vehicles" element={
                <ProtectedRoute>
                  <Layout>
                    <Vehicles />
                  </Layout>
                </ProtectedRoute>
              } />
              <Route path="/whatsapp" element={
                <ProtectedRoute>
                  <Layout>
                    <WhatsApp />
                  </Layout>
                </ProtectedRoute>
              } />
              <Route path="/social-media" element={
                <ProtectedRoute>
                  <Layout>
                    <SocialMedia />
                  </Layout>
                </ProtectedRoute>
              } />
              <Route path="/analytics" element={
                <ProtectedRoute>
                  <Layout>
                    <Analytics />
                  </Layout>
                </ProtectedRoute>
              } />
              <Route path="/users" element={
                <ProtectedRoute>
                  <Layout>
                    <Users />
                  </Layout>
                </ProtectedRoute>
              } />
              <Route path="/contacts" element={
                <ProtectedRoute>
                  <Layout>
                    <Contacts />
                  </Layout>
                </ProtectedRoute>
              } />
              <Route path="/auto-responder" element={
                <ProtectedRoute>
                  <Layout>
                    <AutoResponder />
                  </Layout>
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </SupabaseProvider>
  );
}

export default App;