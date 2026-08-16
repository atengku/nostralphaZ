'use client';

import React, { useState, useEffect } from 'react';
import { Shield, BookOpen, Layers, Cpu, DollarSign, Save, CheckCircle2 } from 'lucide-react';

export default function BCGBusinessPlanApp() {
  const [activeSection, setActiveSection] = useState('summary');
  const [saveStatus, setSaveStatus] = useState('Synced');

  // BCG Business Plan Framework State
  const [planData, setPlanData] = useState({
    summary: "Nostra Alpha Z is an AI-orchestrated private capital operating system designed to bridge the gap between early-stage execution and institutional capital allocation.",
    bcg_matrix: "Core Business (H1): Pro-sumer SaaS PLG engine.\nAdjacent Business (H2): DaaS Federated Learning intelligence moat.\nTransformational (H3): Purpose Bound Money (PBM) Venture CLO Marketplace.",
    operations: "Zero-trust ingestion pipeline: Kinetic OCR Stripping, NLP Firewall, and SHA-256 Vectorization. Asynchronous Multi-Agent Quarterback architecture.",
    financials: "Monetization via tiered SaaS subscriptions ($49/mo), DaaS licenses ($50k/yr), and Venture CLO success fees (5%) with 10% to 16% tranche yields."
  });

  // Load from local storage on boot
  useEffect(() => {
    const saved = localStorage.getItem('bcg-nostra-plan');
    if (saved) {
      setPlanData(JSON.parse(saved));
    }
  }, []);

  // Handle live typing and auto-save
  const handleChange = (field: string, value: string) => {
    const updated = { ...planData, [field]: value };
    setPlanData(updated);
    setSaveStatus('Saving...');
    localStorage.setItem('bcg-nostra-plan', JSON.stringify(updated));
    setTimeout(() => setSaveStatus('Synced'), 800);
  };

  return (
    <div className="min-h-screen bg-black text-cream flex font-sans">
      
      {/* SIDEBAR NAVIGATION (BCG Structure) */}
      <div className="w-80 bg-deep border-r border-gold-border p-8 flex flex-col relative">
        <div className="font-display text-2xl font-semibold text-white mb-10 tracking-wide flex items-center gap-3">
          <Shield className="w-6 h-6 text-gold" />
          <div>BCG / MBB <span className="text-gold italic font-light">Sandbox</span></div>
        </div>
        
        <div className="font-mono text-[9px] text-muted uppercase tracking-[0.2em] mb-4">Interactive Business Plan</div>
        
        <nav className="space-y-3 font-mono text-[10px] uppercase tracking-[0.15em]">
          <button onClick={() => setActiveSection('summary')} className={`flex items-center space-x-3 w-full p-3 rounded border transition-all ${activeSection === 'summary' ? 'bg-gold/10 border-gold/30 text-gold' : 'border-transparent text-muted hover:text-white hover:border-gold-border'}`}>
            <BookOpen className="w-4 h-4" /> <span>1. Executive Summary</span>
          </button>
          <button onClick={() => setActiveSection('bcg_matrix')} className={`flex items-center space-x-3 w-full p-3 rounded border transition-all ${activeSection === 'bcg_matrix' ? 'bg-gold/10 border-gold/30 text-gold' : 'border-transparent text-muted hover:text-white hover:border-gold-border'}`}>
            <Layers className="w-4 h-4" /> <span>2. BCG Value Pools (3-Horizon)</span>
          </button>
          <button onClick={() => setActiveSection('operations')} className={`flex items-center space-x-3 w-full p-3 rounded border transition-all ${activeSection === 'operations' ? 'bg-gold/10 border-gold/30 text-gold' : 'border-transparent text-muted hover:text-white hover:border-gold-border'}`}>
            <Cpu className="w-4 h-4" /> <span>3. Operating & Tech Model</span>
          </button>
          <button onClick={() => setActiveSection('financials')} className={`flex items-center space-x-3 w-full p-3 rounded border transition-all ${activeSection === 'financials' ? 'bg-gold/10 border-gold/30 text-gold' : 'border-transparent text-muted hover:text-white hover:border-gold-border'}`}>
            <DollarSign className="w-4 h-4" /> <span>4. Unit Economics & CLO</span>
          </button>
        </nav>
        
        <div className="mt-auto pt-8 border-t border-gold-border flex items-center justify-between font-mono text-[9px] text-muted">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-gold" /> Status</span>
          <span className="text-gold">{saveStatus}</span>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 p-16 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface/40 to-black">
        
        {/* SECTION 1: EXECUTIVE SUMMARY */}
        {activeSection === 'summary' && (
          <div className="max-w-4xl animate-in fade-in duration-500">
            <span className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] mb-4 block">Module I</span>
            <h2 className="font-display text-5xl font-light text-white mb-4">Executive <em className="text-gold">Summary.</em></h2>
            <p className="text-muted text-sm mb-8 font-light">The core thesis and macroeconomic intent. Type and modify your strategy live; changes persist automatically.</p>
            
            <div className="bg-surface border border-gold-border p-8 shadow-2xl">
              <label className="block font-mono text-[10px] text-gold uppercase tracking-[0.1em] mb-3">Live Strategy Editor</label>
              <textarea 
                className="w-full h-64 bg-black border border-gold-border/50 p-6 text-cream text-base focus:border-gold focus:outline-none transition-all font-light leading-relaxed resize-none"
                value={planData.summary}
                onChange={(e) => handleChange('summary', e.target.value)}
              />
            </div>
          </div>
        )}

        {/* SECTION 2: BCG VALUE POOLS */}
        {activeSection === 'bcg_matrix' && (
          <div className="max-w-4xl animate-in fade-in duration-500">
            <span className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] mb-4 block">Module II</span>
            <h2 className="font-display text-5xl font-light text-white mb-4">BCG 3-Horizon <em className="text-gold">Value Pools.</em></h2>
            <p className="text-muted text-sm mb-8 font-light">Mutually Exclusive, Collectively Exhaustive (MECE) allocation across core, adjacent, and transformational vectors.</p>
            
            <div className="bg-surface border border-gold-border p-8 shadow-2xl">
              <label className="block font-mono text-[10px] text-gold uppercase tracking-[0.1em] mb-3">Matrix Breakdown</label>
              <textarea 
                className="w-full h-64 bg-black border border-gold-border/50 p-6 text-cream text-base focus:border-gold focus:outline-none transition-all font-light leading-relaxed resize-none"
                value={planData.bcg_matrix}
                onChange={(e) => handleChange('bcg_matrix', e.target.value)}
              />
            </div>
          </div>
        )}

        {/* SECTION 3: OPERATING MODEL */}
        {activeSection === 'operations' && (
          <div className="max-w-4xl animate-in fade-in duration-500">
            <span className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] mb-4 block">Module III</span>
            <h2 className="font-display text-5xl font-light text-white mb-4">Operating & Tech <em className="text-gold">Architecture.</em></h2>
            <p className="text-muted text-sm mb-8 font-light">Zero-trust data pipelines, multi-agent orchestration, and kinetic security controls.</p>
            
            <div className="bg-surface border border-gold-border p-8 shadow-2xl">
              <label className="block font-mono text-[10px] text-gold uppercase tracking-[0.1em] mb-3">Architecture Blueprint</label>
              <textarea 
                className="w-full h-64 bg-black border border-gold-border/50 p-6 text-cream text-base focus:border-gold focus:outline-none transition-all font-light leading-relaxed resize-none"
                value={planData.operations}
                onChange={(e) => handleChange('operations', e.target.value)}
              />
            </div>
          </div>
        )}

        {/* SECTION 4: FINANCIALS & CLO */}
        {activeSection === 'financials' && (
          <div className="max-w-4xl animate-in fade-in duration-500">
            <span className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] mb-4 block">Module IV</span>
            <h2 className="font-display text-5xl font-light text-white mb-4">Unit Economics & <em className="text-gold">CLO Tranches.</em></h2>
            <p className="text-muted text-sm mb-8 font-light">Programmatic securitization, PBM escrow governance, and yield distribution.</p>
            
            <div className="bg-surface border border-gold-border p-8 shadow-2xl">
              <label className="block font-mono text-[10px] text-gold uppercase tracking-[0.1em] mb-3">Financial Model Parameters</label>
              <textarea 
                className="w-full h-64 bg-black border border-gold-border/50 p-6 text-cream text-base focus:border-gold focus:outline-none transition-all font-light leading-relaxed resize-none"
                value={planData.financials}
                onChange={(e) => handleChange('financials', e.target.value)}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
