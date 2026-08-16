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
    <div className="min-h-screen bg-black text-cream flex">
      {/* SIDEBAR */}
      <div className="w-72 bg-deep border-r border-gold-border p-8 flex flex-col relative">
        <div className="font-display text-2xl font-semibold text-white mb-12 tracking-wide flex items-center gap-3">
          <Shield className="w-6 h-6 text-gold" />
          <div>Nostra<span className="text-gold italic font-light">Alpha Z</span></div>
        </div>
        
        <nav className="space-y-3 font-mono text-[10px] uppercase tracking-[0.15em]">
          <button onClick={() => setActiveTab('strategy')} className={`flex items-center space-x-3 w-full p-3 rounded border transition-all ${activeTab === 'strategy' ? 'bg-gold/10 border-gold/30 text-gold' : 'border-transparent text-muted hover:text-white hover:border-gold-border'}`}>
            <Brain className="w-4 h-4" /> <span>Strategic Pools</span>
          </button>
          <button onClick={() => setActiveTab('valuation')} className={`flex items-center space-x-3 w-full p-3 rounded border transition-all ${activeTab === 'valuation' ? 'bg-gold/10 border-gold/30 text-gold' : 'border-transparent text-muted hover:text-white hover:border-gold-border'}`}>
            <BarChart3 className="w-4 h-4" /> <span>Valuation & CLO</span>
          </button>
          <button onClick={() => setActiveTab('pitch')} className={`flex items-center space-x-3 w-full p-3 rounded border transition-all ${activeTab === 'pitch' ? 'bg-gold/10 border-gold/30 text-gold' : 'border-transparent text-muted hover:text-white hover:border-gold-border'}`}>
            <TrendingUp className="w-4 h-4" /> <span>Neuro-Pitch Engine</span>
          </button>
        </nav>
        
        <div className="mt-auto pt-8 border-t border-gold-border">
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-muted">
            <span className="flex items-center gap-2"><Database className="w-3 h-3" /> PBM Escrow</span>
            <span className="text-gold">SECURE</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 p-12 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface/40 to-black">
        
        {activeTab === 'pitch' && (
          <div className="max-w-4xl animate-in fade-in duration-700">
            <span className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] mb-4 display-block">Phase 1: The Solution Engine</span>
            <h2 className="font-display text-5xl font-light text-white mb-4">Neuro-Pitch <em className="text-gold">Generator.</em></h2>
            <p className="text-muted text-lg mb-10 font-light max-w-2xl">Reframing technical logic into institutional alpha. Eradicate the GIGO paradox by rewriting your narrative for the Crocodile Brain.</p>
            
            <div className="bg-surface border border-gold-border p-8 shadow-2xl mb-8">
              <label className="block font-mono text-[10px] text-gold uppercase tracking-[0.1em] mb-4">Raw Founder Thesis</label>
              <textarea 
                className="w-full h-40 bg-black border border-gold-border/50 p-5 text-cream focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all font-light"
                placeholder="Paste the technical, jargon-heavy startup pitch here..."
                value={rawPitch}
                onChange={(e) => setRawPitch(e.target.value)}
              />
              <button 
                onClick={handleGenerate}
                className="mt-6 w-full bg-gold hover:bg-gold-light text-black font-mono text-xs uppercase tracking-widest py-4 font-semibold transition-all flex items-center justify-center gap-3"
              >
                {isGenerating ? <Activity className="w-4 h-4 animate-pulse" /> : <Brain className="w-4 h-4" />}
                <span>{isGenerating ? 'Synthesizing Institutional Logic...' : 'Run Neuro-Pitch Engine'}</span>
              </button>
            </div>

            {/* MOCK RESULTS */}
            <div className={`grid grid-cols-1 gap-4 ${isGenerating || !rawPitch ? 'opacity-20 pointer-events-none blur-[2px]' : 'opacity-100'} transition-all duration-700`}>
              <div className="bg-surface border border-gold-border p-6 border-l-4 border-l-gold">
                <h4 className="font-mono text-gold text-[10px] uppercase tracking-[0.15em] mb-2">1. The Primal Frame (Survival)</h4>
                <p className="text-sm font-light leading-relaxed">Legacy supply chains are bleeding 14% of gross margins to structural inefficiencies. We eliminate this friction instantly.</p>
              </div>
              <div className="bg-surface border border-gold-border p-6 border-l-4 border-l-white">
                <h4 className="font-mono text-white text-[10px] uppercase tracking-[0.15em] mb-2">2. The Macro Frame (The Prize)</h4>
                <p className="text-sm font-light leading-relaxed">Aligning perfectly with the WEF 10-year digitalization mandate, our architecture captures early regulatory tailwinds, making this a generational infrastructure play.</p>
              </div>
              <div className="bg-surface border border-gold-border p-6 border-l-4 border-l-muted">
                <h4 className="font-mono text-muted text-[10px] uppercase tracking-[0.15em] mb-2">3. The Micro Frame (Economics)</h4>
                <ul className="text-sm font-light leading-relaxed space-y-1 list-none">
                  <li><span className="text-gold mr-2">→</span>82% Contribution Margin (CM2)</li>
                  <li><span className="text-gold mr-2">→</span>4-Month CAC Payback</li>
                  <li><span className="text-gold mr-2">→</span>$15k Initial ACV</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'valuation' && (
          <div className="max-w-4xl animate-in fade-in duration-700">
            <span className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] mb-4 display-block">Phase 3: The End-Game</span>
            <h2 className="font-display text-5xl font-light text-white mb-4">Venture CLO <em className="text-gold">Structuring.</em></h2>
            <p className="text-muted text-lg mb-10 font-light max-w-2xl">Downside-protected programmatic securitization mapped to the Singapore MAS framework.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface border border-gold-border p-8">
                <h3 className="font-mono text-gold text-[10px] tracking-[0.15em] uppercase mb-4">Senior Debt (AAA)</h3>
                <p className="font-display text-4xl font-light text-white">$6.5M</p>
                <div className="mt-6 pt-6 border-t border-gold-border font-mono text-[9px] uppercase tracking-widest text-muted">1st Lien · 10% Yield</div>
              </div>
              <div className="bg-surface border border-gold-border p-8">
                <h3 className="font-mono text-white text-[10px] tracking-[0.15em] uppercase mb-4">Mezzanine Debt</h3>
                <p className="font-display text-4xl font-light text-white">$2.0M</p>
                <div className="mt-6 pt-6 border-t border-gold-border font-mono text-[9px] uppercase tracking-widest text-muted">2nd Lien · 16% Yield</div>
              </div>
              <div className="bg-surface border border-gold-border p-8">
                <h3 className="font-mono text-muted text-[10px] tracking-[0.15em] uppercase mb-4">First-Loss Equity</h3>
                <p className="font-display text-4xl font-light text-white">$1.5M</p>
                <div className="mt-6 pt-6 border-t border-gold-border font-mono text-[9px] uppercase tracking-widest text-muted">Subordinated Buffer</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}