import React from 'react';
import { ShoppingBag, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      {/* Trust Badges */}
      <div className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Secure Payments & COD</h4>
                <p className="text-xs text-slate-500">Verified cash-on-delivery and encrypted checkout</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Reliable Shipping</h4>
                <p className="text-xs text-slate-500">Prompt fulfillment with order tracking</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Guaranteed Fresh Stock</h4>
                <p className="text-xs text-slate-500">Authoritative server-side inventory control</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold font-heading text-slate-900 tracking-tight">
                Shop<span className="text-indigo-600">Ease</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              ShopEase is an engineered full-stack e-commerce web platform built with React, Node.js, Express, and MongoDB for the CodeAlpha Full Stack Development Internship.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Navigation
            </h5>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
              <li><Link to="/catalog" className="hover:text-indigo-600 transition-colors">Products</Link></li>
              <li><Link to="/categories" className="hover:text-indigo-600 transition-colors">Categories</Link></li>
              <li><Link to="/about" className="hover:text-indigo-600 transition-colors">About ShopEase</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              System Architecture
            </h5>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="/api/health" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">API Diagnostics (/api/health)</a></li>
              <li><span className="text-slate-400">RESTful Express Backend</span></li>
              <li><span className="text-slate-400">Mongoose ODM</span></li>
              <li><span className="text-slate-400">Tailwind CSS Design System</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>&copy; {new Date().getFullYear()} ShopEase. CodeAlpha Full Stack Development Internship.</p>
          <p className="font-mono text-slate-400">Phase 1: Project Foundation & Architecture</p>
        </div>
      </div>
    </footer>
  );
}
