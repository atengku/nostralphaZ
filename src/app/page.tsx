'use client';

import React, { useState, useEffect } from 'react';
import { Brain, Activity, Shield, TrendingUp, BarChart3, Database, Save } from 'lucide-react';

export default function NostraDashboard() {
  const [activeTab, setActiveTab] = useState('strategy');
  
  // State for the Neuro-Pitch
  const [rawPitch, setRawPitch] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // State for the Living Business Plan Content (Loaded from Local Storage)
  const [strategyText, setStrategyText] = useState({
    horizon1: "Horizon 1: The Core (Pro-Sumer SaaS)\nProduct-Led Growth (PLG). Founders upload decks. We use neuro-framing to rewrite them, capturing inbound deal flow.",
    horizon2: "Horizon 2: Adjacent (The Bloomberg Play)\nExtracting 'Expert DNA' from elite Brand Partners via Federated Learning. Building the proprietary moat.",
    horizon3: "Horizon 3: Transformational (The Marketplace)\nDeploying PBM-backed Venture CLOs. Capturing alpha through programmatic matching and milestone escrow."
  });

  // Load saved content when the app opens
  useEffect(() => {
    const saved = localStorage.getItem('nostra-strategy');
    if (saved) {
      setStrategyText(JSON.parse(saved));
    }
  }, []);

  // Save content whenever you type
  const handleSaveStrategy = (key: string, value: string) => {
    const updated = { ...strategyText, [key]: value };
    setStrategyText(updated);
    localStorage.setItem('nostra-strategy', JSON.stringify(updated));
  };

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
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 p-12 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface/40 to-black">
        
        {/* STRATEGY TAB (NOW EDITABLE) */}
        {activeTab === 'strategy' && (
          <div className="max-w-5xl animate-in fade-in duration-700">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] display-block">Living Document</span>
              <span className="font-mono text-[10px] text-muted flex items-center gap-2"><Save className="w-3 h-3"/> Auto-Saving to Browser</span>
            </div>
            <h2 className="font-display text-5xl font-light text-white mb-10">Strategic <em className="text-gold">Value Pools.</em></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Editable Horizon 1 */}
              <div className="bg-surface border border-gold-border p-6 shadow-2xl">
                <h3 className="font-mono text-gold text-[10px] tracking-[0.15em] uppercase mb-4">Horizon 1: Core</h3>
                <textarea 
                  className="w-full h-48 bg-black border border-gold-border/50 p-4 text-sm text-cream focus:border-gold focus:outline-none transition-all font-light resize-none"
                  value={strategyText.horizon1}
                  onChange={(e) => handleSaveStrategy('horizon1', e.target.value)}
                />
              </div>

              {/* Editable Horizon 2 */}
              <div className="bg-surface border border-gold-border p-6 shadow-2xl">
                <h3 className="font-mono text-white text-[10px] tracking-[0.15em] uppercase mb-4">Horizon 2: Adjacent</h3>
                <textarea 
                  className="w-full h-48 bg-black border border-gold-border/50 p-4 text-sm text-cream focus:border-gold focus:outline-none transition-all font-light resize-none"
                  value={strategyText.horizon2}
                  onChange={(e) => handleSaveStrategy('horizon2', e.target.value)}
                />
              </div>

              {/* Editable Horizon 3 */}
              <div className="bg-surface border border-gold-border p-6 shadow-2xl">
                <h3 className="font-mono text-muted text-[10px] tracking-[0.15em] uppercase mb-4">Horizon 3: Transformational</h3>
                <textarea 
                  className="w-full h-48 bg-black border border-gold-border/50 p-4 text-sm text-cream focus:border-gold focus:outline-none transition-all font-light resize-none"
                  value={strategyText.horizon3}
                  onChange={(e) => handleSaveStrategy('horizon3', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* ... (Keep the existing Valuation and Neuro-Pitch blocks below here) ... */}
      </div>
    </div>
  );
}
