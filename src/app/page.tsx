'use client';

import React, { useState } from 'react';
import { Brain, Activity, Shield, TrendingUp, BarChart3, Database } from 'lucide-react';

export default function NostraDashboard() {
  const [activeTab, setActiveTab] = useState('pitch');
  const [rawPitch, setRawPitch] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000); 
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex font-sans">
      <div className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col">
        <div className="flex items-center space-x-3 mb-10">
          <Shield className="w-8 h-8 text-blue-500" />
          <h1 className="text-xl font-bold tracking-wider">NOSTRA<br/><span className="text-blue-500">ALPHA Z</span></h1>
        </div>
        <nav className="space-y-4 text-sm font-medium text-slate-400">
          <button onClick={() => setActiveTab('strategy')} className={`flex items-center space-x-3 w-full p-2 rounded-md hover:bg-slate-800 hover:text-white transition ${activeTab === 'strategy' ? 'bg-slate-800 text-white' : ''}`}>
            <Brain className="w-4 h-4" /> <span>Strategic Pools (MBB)</span>
          </button>
          <button onClick={() => setActiveTab('valuation')} className={`flex items-center space-x-3 w-full p-2 rounded-md hover:bg-slate-800 hover:text-white transition ${activeTab === 'valuation' ? 'bg-slate-800 text-white' : ''}`}>
            <BarChart3 className="w-4 h-4" /> <span>Valuation & CLO</span>
          </button>
          <button onClick={() => setActiveTab('pitch')} className={`flex items-center space-x-3 w-full p-2 rounded-md hover:bg-slate-800 hover:text-white transition ${activeTab === 'pitch' ? 'bg-slate-800 text-white' : ''}`}>
            <TrendingUp className="w-4 h-4" /> <span>Neuro-Pitch Engine</span>
          </button>
        </nav>
        <div className="mt-auto pt-8 border-t border-slate-800">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <Database className="w-4 h-4" />
            <span>PBM Escrow: <span className="text-green-400 font-bold">SECURE</span></span>
          </div>
        </div>
      </div>
      <div className="flex-1 p-10 overflow-y-auto">
        {activeTab === 'pitch' && (
          <div className="max-w-4xl animate-in fade-in duration-500">
            <h2 className="text-3xl font-light mb-2">Neuro-Pitch Generator</h2>
            <p className="text-slate-400 mb-8">Reframing founder logic into institutional alpha using Oren Klaff mechanics.</p>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl mb-8">
              <label className="block text-sm font-medium text-slate-400 mb-2">Raw Founder Thesis</label>
              <textarea 
                className="w-full h-32 bg-slate-950 border border-slate-800 rounded-lg p-4 text-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
                placeholder="Paste the technical, jargon-heavy startup pitch here..."
                value={rawPitch}
                onChange={(e) => setRawPitch(e.target.value)}
              />
              <button 
                onClick={handleGenerate}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center space-x-2"
              >
                {isGenerating ? <Activity className="w-5 h-5 animate-pulse" /> : <Brain className="w-5 h-5" />}
                <span>{isGenerating ? 'Synthesizing Institutional Logic...' : 'Generate Institutional Pitch'}</span>
              </button>
            </div>
            <div className={`space-y-4 ${isGenerating || !rawPitch ? 'opacity-20 pointer-events-none blur-sm' : 'opacity-100'} transition-all duration-500`}>
              <div className="bg-red-950/30 border border-red-900/50 p-5 rounded-lg border-l-4 border-l-red-500">
                <h4 className="text-red-400 font-bold text-sm mb-1">THE PRIMAL FRAME (Survival)</h4>
                <p className="text-slate-300 text-sm">Legacy supply chains are bleeding 14% of gross margins to structural inefficiencies. We eliminate this friction instantly.</p>
              </div>
              <div className="bg-blue-950/30 border border-blue-900/50 p-5 rounded-lg border-l-4 border-l-blue-500">
                <h4 className="text-blue-400 font-bold text-sm mb-1">THE MACRO FRAME (Institutional Alignment)</h4>
                <p className="text-slate-300 text-sm">Aligning perfectly with the WEF 10-year digitalization mandate, our architecture captures early regulatory tailwinds, making this a generational infrastructure play.</p>
              </div>
              <div className="bg-green-950/30 border border-green-900/50 p-5 rounded-lg border-l-4 border-l-green-500">
                <h4 className="text-green-400 font-bold text-sm mb-1">THE MICRO FRAME (Unit Economics)</h4>
                <p className="text-slate-300 text-sm">• 82% Contribution Margin (CM2)<br/>• 4-Month CAC Payback<br/>• $15k Initial ACV</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'valuation' && (
          <div className="max-w-4xl animate-in fade-in duration-500">
            <h2 className="text-3xl font-light mb-2">Venture CLO Tranche Structuring</h2>
            <p className="text-slate-400 mb-8">Downside-protected programmatic securitization.</p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <h3 className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-1">Senior Debt (AAA)</h3>
                <p className="text-2xl font-light">$6,500,000</p>
                <div className="mt-4 text-sm text-green-400 flex items-center"><Activity className="w-4 h-4 mr-1"/> 1st Lien / 10% Yield</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <h3 className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-1">Mezzanine Debt</h3>
                <p className="text-2xl font-light">$2,000,000</p>
                <div className="mt-4 text-sm text-blue-400 flex items-center"><Activity className="w-4 h-4 mr-1"/> 2nd Lien / 16% Yield</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <h3 className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-1">First-Loss Equity</h3>
                <p className="text-2xl font-light">$1,500,000</p>
                <div className="mt-4 text-sm text-red-400 flex items-center"><Activity className="w-4 h-4 mr-1"/> Subordinated Buffer</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}