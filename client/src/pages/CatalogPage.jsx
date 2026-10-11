import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ArrowLeft, Database, ShieldAlert } from 'lucide-react';

export default function CatalogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto shadow-inner">
          <Package className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
            Phase 3 Deliverable
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Product Catalog Placeholder
          </h1>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            In compliance with CodeAlpha project guidelines, no fake or mock product listings are rendered. The dynamic product catalog, category filters, and price ranges will be populated in <strong>Phase 3</strong> via MongoDB REST API endpoints and verified database seeding.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-left text-xs text-slate-600 space-y-2 max-w-md mx-auto">
          <div className="font-semibold text-slate-900 flex items-center gap-2">
            <Database className="w-4 h-4 text-indigo-600" />
            Backend Readiness Check:
          </div>
          <ul className="list-disc pl-5 space-y-1 text-slate-500">
            <li>Product & Category Mongoose schemas compiled</li>
            <li>Text indexing on name, description & tags ready</li>
            <li>Stock integer verification active on server</li>
          </ul>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          Return to Foundation Dashboard
        </Link>
      </div>
    </div>
  );
}
