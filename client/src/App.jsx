import React, { useState, useEffect } from 'react';
import { ShoppingBag, Server, Database, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

function App() {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/v1/health')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        return res.json();
      })
      .then((data) => {
        setHealthData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Banner */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-100">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold font-heading text-slate-900 tracking-tight">
              Shop<span className="text-indigo-600">Ease</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Phase 1 Foundation Active
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            Full-Stack E-Commerce Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            CodeAlpha Internship Project Architecture
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Phase 1 establishes the production architecture: resilient MongoDB database schemas, centralized Express middleware, strict environment validation, security hardening, and Vite React frontend foundation.
          </p>
        </div>

        {/* Live Diagnostics Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Server className="w-5 h-5 text-indigo-600" />
              Live Backend & Database Diagnostics
            </h2>
            <span className="text-xs text-slate-500 font-mono">/api/v1/health</span>
          </div>

          {loading ? (
            <div className="py-8 flex flex-col items-center justify-center text-slate-500 text-sm gap-2">
              <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              <span>Connecting to backend API...</span>
            </div>
          ) : error ? (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm space-y-1">
              <div className="font-semibold flex items-center gap-1.5">
                Backend connection pending or offline
              </div>
              <p className="text-xs text-amber-700">
                To connect with the live backend, run: <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono">npm run dev</code> inside <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono">server/</code>.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-xs text-slate-500 font-medium">API Status</div>
                <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  {healthData.message}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-xs text-slate-500 font-medium">MongoDB Connection</div>
                <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
                  <Database className="w-4 h-4" />
                  {healthData.database?.status} ({healthData.database?.name})
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-xs text-slate-500 font-medium">Environment</div>
                <div className="text-slate-800 font-semibold text-sm font-mono uppercase">
                  {healthData.environment}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-xs text-slate-500 font-medium">Server Uptime</div>
                <div className="text-slate-800 font-semibold text-sm font-mono">
                  {healthData.uptimeSeconds}s
                </div>
              </div>
            </div>
          )}

          {/* Architecture Checklist */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Verified Phase 1 Modules
            </h3>
            <ul className="text-sm space-y-2 text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Mongoose Schemas: User, Category, Product, Cart, Order</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>JWT Authentication & Role-Based Authorization Middleware</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Centralized Error Handling (Validation, CastError, Duplicate Keys)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Security Protections: Helmet, CORS, Rate Limiting & Strict Env Validation</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        ShopEase &bull; CodeAlpha Full Stack Development Internship &bull; Phase 1 Architecture
      </footer>
    </div>
  );
}

export default App;
