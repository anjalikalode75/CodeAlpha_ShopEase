import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Server,
  Database,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
  Cpu,
  Clock,
} from 'lucide-react';
import { checkHealth } from '../services/healthService';

export default function HomePage() {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    checkHealth()
      .then((data) => {
        if (isMounted) {
          setHealthData(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Unable to connect to backend server');
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="space-y-12 py-8 sm:py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              CodeAlpha Full Stack Internship &bull; Phase 1 Foundation
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              Engineered for Speed, Reliability & Security.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Welcome to <strong>ShopEase</strong> — a production-style full-stack e-commerce web platform. Phase 1 establishes the rock-solid architecture: Express REST API, Mongoose domain models, strict environment validation, security middleware, and responsive React frontend.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
              >
                Explore Product Catalog
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#diagnostics"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
              >
                Inspect Live Diagnostics
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Live System Diagnostics Section */}
      <section id="diagnostics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Server className="w-5 h-5 text-indigo-600" />
                Live Architecture & Database Diagnostics
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Real-time health report polled from backend endpoint <code className="font-mono text-indigo-600">GET /api/health</code>
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Express &bull; Mongoose
            </span>
          </div>

          {loading ? (
            <div className="py-12 flex flex-col items-center justify-center text-slate-500 text-sm gap-3">
              <div className="w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              <span>Connecting to Express backend and querying MongoDB status...</span>
            </div>
          ) : error ? (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
              <div className="font-semibold text-sm flex items-center gap-2">
                <span>Backend API Connection Pending</span>
              </div>
              <p className="text-xs text-amber-800">
                {error}. Ensure your backend server is running via <code className="bg-amber-100 px-1 rounded font-mono">npm run dev</code> inside <code className="bg-amber-100 px-1 rounded font-mono">server/</code>.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  API Status
                </div>
                <div className="font-semibold text-sm text-slate-900">
                  {healthData.message}
                </div>
                <div className="text-[11px] text-slate-500 font-mono">Version: {healthData.version}</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-indigo-600" />
                  MongoDB Connection
                </div>
                <div className="font-semibold text-sm text-indigo-700 capitalize">
                  {healthData.database?.status}
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Database: {healthData.database?.name || 'shopease'}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-slate-600" />
                  Environment
                </div>
                <div className="font-semibold text-sm text-slate-900 font-mono uppercase">
                  {healthData.environment}
                </div>
                <div className="text-[11px] text-slate-500">Node v24.18.0 &bull; Express</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-600" />
                  Server Uptime
                </div>
                <div className="font-semibold text-sm text-slate-900 font-mono">
                  {healthData.uptimeSeconds} seconds
                </div>
                <div className="text-[11px] text-slate-500 truncate" title={healthData.timestamp}>
                  {new Date(healthData.timestamp).toLocaleTimeString()}
                </div>
              </div>
            </div>
          )}

          {/* Architecture Integrity Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h3 className="text-sm font-bold text-slate-900">Database Models Configured</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mongoose schemas defined for User, Category, Product, Cart, and Order with strict validation, indexes, and password security hooks.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h3 className="text-sm font-bold text-slate-900">Security Middleware Ready</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Helmet HTTP headers, CORS with credential support, rate limiting, and centralized error handling (validation, CastError, duplicate keys).
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h3 className="text-sm font-bold text-slate-900">Zero Simulated/Fake Data</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adhering to internship rules: no hardcoded or fake products are rendered. Authentic catalog data will be dynamically populated in Phase 3 via MongoDB seed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
