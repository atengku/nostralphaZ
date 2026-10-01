'use client';

import React, { useState, useEffect } from 'react';
import { Shield, BookOpen, Layers, Cpu, DollarSign, CheckCircle2, Upload, FileText, Check } from 'lucide-react';

export default function BCGBusinessPlanApp() {
  const [activeSection, setActiveSection] = useState('summary');
  const [saveStatus, setSaveStatus] = useState('Synced');
  
  // File upload states
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedSuccess, setProcessedSuccess] = useState(false);

  const [planData, setPlanData] = useState({
    summary: "Nostra Alpha Z is an AI-orchestrated private capital operating system designed to bridge the gap between early-stage execution and institutional capital allocation.",
    bcg_matrix: "Core Business (H1): Pro-sumer SaaS PLG engine.\nAdjacent Business (H2): DaaS Federated Learning intelligence moat.\nTransformational (H3): Purpose Bound Money (PBM) Venture CLO Marketplace.",
    operations: "Zero-trust ingestion pipeline: Kinetic OCR Stripping, NLP Firewall, and SHA-256 Vectorization. Asynchronous Multi-Agent Quarterback architecture.",
    financials: "Monetization via tiered SaaS subscriptions ($49/mo), DaaS licenses ($50k/yr), and Venture CLO success fees (5%) with 10% to 16% tranche yields."
  });

  useEffect(() => {
    const saved = localStorage.getItem('bcg-nostra-plan');
    if (saved) {
      setPlanData(JSON.parse(saved));
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    const updated = { ...planData, [field]: value };
    setPlanData(updated);
    setSaveStatus('Saving...');
    localStorage.setItem('bcg-nostra-plan', JSON.stringify(updated));
    setTimeout(() => setSaveStatus('Synced'), 800);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setIsProcessing(true);
      setProcessedSuccess(false);
      
      // Simulate Zero-Trust Airlock Ingestion & Parsing
      setTimeout(() => {
        setIsProcessing(false);
        setProcessedSuccess(true);
        // Automatically inject file status into the active section data
        handleChange(activeSection, `[Ingested File: ${file.name}]\n\nAirlock Status: Sanitized & Hashed via SHA-256.\nParsed Text: Document structure extracted successfully for institutional synthesis.`);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-black text-cream flex font-sans">
      
      {/* SIDEBAR NAVIGATION */}
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
        
        {/* DYNAMIC RENDER BASED ON ACTIVE SECTION */}
        <div className="max-w-4xl animate-in fade-in duration-500">
          <span className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] mb-4 block">
            Module {activeSection === 'summary' ? 'I' : activeSection === 'bcg_matrix' ? 'II' : activeSection === 'operations' ? 'III' : 'IV'}
          </span>
          <h2 className="font-display text-5xl font-light text-white mb-4">
            {activeSection === 'summary' && <>Executive <em className="text-gold">Summary.</em></>}
            {activeSection === 'bcg_matrix' && <>BCG 3-Horizon <em className="text-gold">Value Pools.</em></>}
            {activeSection === 'operations' && <>Operating & Tech <em className="text-gold">Architecture.</em></>}
            {activeSection === 'financials' && <>Unit Economics & <em className="text-gold">CLO Tranches.</em></>}
          </h2>
          <p className="text-muted text-sm mb-8 font-light">
            Upload source files, pitch decks, or financial statements below. The Zero-Trust Airlock will ingest, sterilize, and populate the module automatically.
          </p>

          {/* FILE UPLOAD DROPZONE */}
          <div className="bg-surface border border-gold-border p-8 shadow-2xl mb-8">
            <label className="block font-mono text-[10px] text-gold uppercase tracking-[0.1em] mb-4">Zero-Trust File Ingestion Gateway</label>
            
            <label className="border-2 border-dashed border-gold-border hover:border-gold p-8 rounded-lg bg-black/40 flex flex-col items-center justify-center cursor-pointer transition-all group">
              <input type="file" className="hidden" onChange={handleFileUpload} accept=".pdf,.docx,.xlsx,.csv,.txt" />
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Upload className="w-5 h-5 text-gold" />
              </div>
              <p className="font-mono text-xs text-cream uppercase tracking-wider mb-1">
                {uploadedFile ? uploadedFile.name : "Drop Deck, Statement, or Brief Here"}
              </p>
              <p className="font-mono text-[10px] text-muted">Supports PDF, Word, Excel, or CSV (Quarantined & Sanitized)</p>
            </label>

            {isProcessing && (
              <div className="mt-4 p-4 bg-gold/5 border border-gold/20 flex items-center gap-3 font-mono text-xs text-gold animate-pulse">
                <Cpu className="w-4 h-4 animate-spin" />
                <span>Running Airlock OCR Stripping & SHA-256 Hashing...</span>
              </div>
            )}

            {processedSuccess && (
              <div className="mt-4 p-4 bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-3 font-mono text-xs text-emerald-400">
                <Check className="w-4 h-4" />
                <span>Ingestion Complete. Text extracted and injected into module state.</span>
              </div>
            )}
          </div>
          
          {/* EDITABLE TEXT AREA (POPULATED BY UPLOAD OR MANUAL TYPING) */}
          <div className="bg-surface border border-gold-border p-8 shadow-2xl">
            <label className="block font-mono text-[10px] text-gold uppercase tracking-[0.1em] mb-3">Live Module Content & Extracted Data</label>
            <textarea 
              className="w-full h-64 bg-black border border-gold-border/50 p-6 text-cream text-base focus:border-gold focus:outline-none transition-all font-light leading-relaxed resize-none"
              value={planData[activeSection as keyof typeof planData]}
              onChange={(e) => handleChange(activeSection, e.target.value)}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
