import { Suspense, lazy, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './lib/supabase';

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
  </div>
);

// Delivery pages
const DeliveryLogin = lazy(() => import('./pages/delivery/Login'));
const DeliveryDashboard = lazy(() => import('./pages/delivery/Dashboard'));
const DeliveryBordereauScanner = lazy(() => import('./pages/delivery/BordereauScanner'));
const DeliveryExchangeVerification = lazy(() => import('./pages/delivery/ExchangeVerification'));
const DeliveryVerificationList = lazy(() => import('./pages/delivery/VerificationList'));
const DeliveryFinancialDashboard = lazy(() => import('./pages/delivery/FinancialDashboard'));

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(undefined);

  useEffect(() => {
    let mounted = true;
    const timeout = setTimeout(() => {
      if (mounted && user === undefined) setUser(null);
    }, 5000);

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (mounted) setUser(session?.user ?? null);
    }).catch(() => { if (mounted) setUser(null); });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) setUser(session?.user ?? null);
    });

    return () => { mounted = false; clearTimeout(timeout); subscription.unsubscribe(); };
  }, []);

  if (user === undefined) return <LoadingSpinner />;
  if (user === null) return <Navigate to="/login" />;
  return <>{children}</>;
}

function App() {
  return (
    <Router basename="/Swapp-delivery">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<DeliveryLogin />} />
          <Route path="/dashboard" element={<ProtectedRoute><DeliveryDashboard /></ProtectedRoute>} />
          <Route path="/scan" element={<ProtectedRoute><DeliveryBordereauScanner /></ProtectedRoute>} />
          <Route path="/verify/:code" element={<ProtectedRoute><DeliveryExchangeVerification /></ProtectedRoute>} />
          <Route path="/verifications" element={<ProtectedRoute><DeliveryVerificationList /></ProtectedRoute>} />
          <Route path="/finances" element={<ProtectedRoute><DeliveryFinancialDashboard /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
