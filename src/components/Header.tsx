import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ShieldCheck,
  MapPin,
  Wrench,
  Calculator,
  Compass,
  Star,
  ChevronRight,
  Clock,
} from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';
import { generateWhatsAppLink } from '../utils/whatsappHelper';

interface HeaderProps {
  onOpenEstimator?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultWhatsApp = generateWhatsAppLink({
    serviceName: 'General Inquiry / Service Booking',
  });

  // Lock body scroll and handle Escape key when menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (anchorId: string, isEstimator = false) => {
    setMobileMenuOpen(false);
    if (isEstimator && onOpenEstimator) {
      onOpenEstimator();
    } else {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Today: {WORKSHOP_INFO.openingHours.weekdays}
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {WORKSHOP_INFO.address.split(',')[1]?.trim() || 'Pending'}, Kuching
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400 hidden md:inline">
              Emergency Towing / Battery Hotline:
            </span>
            <a
              href={`tel:${WORKSHOP_INFO.emergencyPhone}`}
              className="text-amber-400 hover:text-amber-300 font-mono font-medium tracking-tight"
            >
              {WORKSHOP_INFO.emergencyPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation (Sticky Top Bar) */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-heading font-black text-xl shadow-md shadow-amber-500/20 group-hover:bg-amber-400 transition-colors shrink-0">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors leading-none whitespace-nowrap">
                Apex AutoCraft
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 mt-1 whitespace-nowrap">
                Kuching · Sarawak
              </span>
            </div>
          </a>

          {/* Zone 2: Desktop Navigation Links (Visible on desktop 1024px+) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium text-slate-300 shrink-0">
            <a
              href="#services"
              className="hover:text-amber-400 transition-colors py-1 hover:border-b-2 hover:border-amber-400 whitespace-nowrap"
            >
              Services & Pricing
            </a>
            <a
              href="#estimator"
              onClick={(e) => {
                if (onOpenEstimator) {
                  e.preventDefault();
                  onOpenEstimator();
                }
              }}
              className="hover:text-amber-400 transition-colors py-1 hover:border-b-2 hover:border-amber-400 whitespace-nowrap"
            >
              Cost Estimator
            </a>
            <a
              href="#four-by-four"
              className="hover:text-amber-400 transition-colors py-1 hover:border-b-2 hover:border-amber-400 whitespace-nowrap"
            >
              4x4 & Pickups
            </a>
            <a
              href="#process"
              className="hover:text-amber-400 transition-colors py-1 hover:border-b-2 hover:border-amber-400 whitespace-nowrap"
            >
              Our Process
            </a>
            <a
              href="#reviews"
              className="hover:text-amber-400 transition-colors py-1 hover:border-b-2 hover:border-amber-400 whitespace-nowrap"
            >
              Reviews
            </a>
            <a
              href="#location"
              className="hover:text-amber-400 transition-colors py-1 hover:border-b-2 hover:border-amber-400 whitespace-nowrap"
            >
              Location
            </a>
          </nav>

          {/* Zone 3: Primary Actions (Tablet & Mobile friendly) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={`tel:${WORKSHOP_INFO.phoneClean}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 text-xs font-mono font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap shrink-0"
              title="Call Workshop Desk"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="whitespace-nowrap">{WORKSHOP_INFO.phone}</span>
            </a>

            <a
              href={defaultWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 shadow-sm shadow-emerald-600/25 transition-all whitespace-nowrap shrink-0 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">WhatsApp Us</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile & Tablet Navigation Menu Button (Visible on screens below 1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700/80 hover:border-amber-500/50 text-slate-200 hover:text-white transition-all duration-150 active:scale-95 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shrink-0"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs font-semibold tracking-wide text-slate-200">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Rock-solid Mobile & Tablet Navigation Drawer mounted directly to document.body via Portal */}
      {typeof document !== 'undefined' &&
        createPortal(
          <div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation Menu"
            className={`fixed inset-0 z-[9999] transition-all duration-200 ${
              mobileMenuOpen
                ? 'opacity-100 pointer-events-auto visible'
                : 'opacity-0 pointer-events-none invisible'
            }`}
          >
            {/* Backdrop Overlay */}
            <div
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
              aria-hidden="true"
            />

            {/* Slide-over Drawer Panel */}
            <div
              className={`fixed top-0 right-0 bottom-0 w-full max-w-sm sm:max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col z-[10000] transition-transform duration-300 ease-out transform ${
                mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {/* Drawer Top Header */}
              <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/70 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-heading font-black text-lg shadow-md shadow-amber-500/20 shrink-0">
                    A
                  </div>
                  <div>
                    <span className="font-heading font-bold text-base text-white block leading-tight">
                      Apex AutoCraft
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400">
                      Site Navigation Menu
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  aria-label="Close Navigation Menu"
                >
                  <span className="text-xs font-semibold">Close</span>
                  <X className="w-4 h-4 text-slate-300" />
                </button>
              </div>

              {/* Scrollable Navigation Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2 px-1">
                    Explore Workshop Sections
                  </span>

                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => handleNavClick('services')}
                      className="w-full text-left p-3 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                          <Wrench className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors block">
                            Services & Pricing
                          </span>
                          <span className="text-[11px] text-slate-400 block">
                            Engine lubrication, brakes, aircond & diagnostics
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors shrink-0" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('estimator', true)}
                      className="w-full text-left p-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/40 hover:border-amber-500/70 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-bold">
                          <Calculator className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-bold text-amber-400 block">
                              Instant Price Estimator
                            </span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold uppercase">
                              Popular
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-300 block">
                            Calculate exact cost by vehicle model
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('four-by-four')}
                      className="w-full text-left p-3 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                          <Compass className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors block">
                            Sarawak 4x4 & Pickups
                          </span>
                          <span className="text-[11px] text-slate-400 block">
                            Hilux, Ranger, D-Max suspension & driveline
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('process')}
                      className="w-full text-left p-3 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors block">
                            21-Point Inspection Process
                          </span>
                          <span className="text-[11px] text-slate-400 block">
                            WhatsApp photo proof before any repair
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors shrink-0" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('reviews')}
                      className="w-full text-left p-3 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors block">
                            Verified Customer Reviews
                          </span>
                          <span className="text-[11px] text-slate-400 block">
                            4.9/5 stars from 320+ Kuching car owners
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors shrink-0" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('location')}
                      className="w-full text-left p-3 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-white group-hover:text-rose-400 transition-colors block">
                            Workshop Location & Booking
                          </span>
                          <span className="text-[11px] text-slate-400 block">
                            Pending Industrial Estate · 2 mins from Crown Towers
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 transition-colors shrink-0" />
                    </button>
                  </div>
                </div>

                {/* Facility & Hours Card */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200">Operating Hours</span>
                    <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Open Mon–Sat
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Monday – Saturday: 8:30 AM – 6:00 PM (Closed Sunday)
                  </p>
                  <div className="pt-2 border-t border-slate-850 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Breakdown Hotline:</span>
                    <a
                      href={`tel:${WORKSHOP_INFO.emergencyPhone}`}
                      className="text-amber-400 font-mono font-semibold"
                    >
                      {WORKSHOP_INFO.emergencyPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/80 flex flex-col gap-2.5 shrink-0">
                <a
                  href={defaultWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-950/50 transition-colors active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Chat on WhatsApp (+60 16-889 2314)</span>
                </a>

                <a
                  href={`tel:${WORKSHOP_INFO.phoneClean}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700 font-medium text-xs sm:text-sm transition-colors active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Call Workshop: {WORKSHOP_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

