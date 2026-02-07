import React from 'react';
const TwoCards = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl grid gap-6 md:grid-cols-2">
        {/* Card 1 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">Performance</p>
              <h2 className="mt-1 text-2xl font-semibold text-slate-900">
                Weekly Report
              </h2>
            </div>
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
              +12%
            </span>
          </div>

          <p className="mt-3 text-sm text-slate-600">
            Track progress, compare results, and spot what to improve this week.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition">
              View details
            </button>
            <button className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition ring-1 ring-slate-200">
              Export
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
              <p className="text-xs text-slate-500">Views</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">24.1k</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
              <p className="text-xs text-slate-500">Leads</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">312</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
              <p className="text-xs text-slate-500">Sales</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">48</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">Quick Actions</p>
              <h2 className="mt-1 text-2xl font-semibold text-slate-900">
                Create Invoice
              </h2>
            </div>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">
              Ready
            </span>
          </div>

          <p className="mt-3 text-sm text-slate-600">
            Generate a clean invoice in seconds and send it to your customer.
          </p>

          <div className="mt-6 space-y-3">
            <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Step 1</p>
              <p className="mt-1 text-sm text-slate-600">
                Add client details and job description.
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Step 2</p>
              <p className="mt-1 text-sm text-slate-600">
                Choose items, set price, and include GST if needed.
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Step 3</p>
              <p className="mt-1 text-sm text-slate-600">
                Export PDF and send via email.
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition">
              New invoice
            </button>
            <button className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition ring-1 ring-slate-200">
              Templates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TwoCards;