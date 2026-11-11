/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CurrencyCode } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WinterReliefBanner } from './components/WinterReliefBanner';
import { CausesSection } from './components/CausesSection';
import { FounderProfileGig } from './components/FounderProfileGig';
import { ImpactTracker } from './components/ImpactTracker';
import { FounderMessage } from './components/FounderMessage';
import { BeneficiaryStories } from './components/BeneficiaryStories';
import { FieldGallery } from './components/FieldGallery';
import { TransparencySection } from './components/TransparencySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { ZakatCalculatorModal } from './components/ZakatCalculatorModal';
import { VolunteerModal } from './components/VolunteerModal';
import { PamphletModal } from './components/PamphletModal';

export default function App() {
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>('PKR');
  
  // Modals state
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [donateCauseId, setDonateCauseId] = useState<string | undefined>(undefined);
  const [donateAmountPKR, setDonateAmountPKR] = useState<number | undefined>(undefined);

  const [isZakatOpen, setIsZakatOpen] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [isPamphletOpen, setIsPamphletOpen] = useState(false);

  const handleOpenDonate = (causeId?: string, amountPKR?: number) => {
    setDonateCauseId(causeId);
    setDonateAmountPKR(amountPKR);
    setIsDonateOpen(true);
  };

  const handleDonateZakatAmount = (calculatedAmountPKR: number) => {
    setDonateCauseId(undefined);
    setDonateAmountPKR(calculatedAmountPKR);
    setIsDonateOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] flex flex-col font-sans selection:bg-[#1B6B4A] selection:text-white">
      {/* Navigation Header */}
      <Header
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenDonate={(causeId) => handleOpenDonate(causeId)}
        onOpenZakat={() => setIsZakatOpen(true)}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
        onOpenPamphlet={() => setIsPamphletOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentCurrency={currentCurrency}
          onOpenDonate={handleOpenDonate}
          onOpenZakat={() => setIsZakatOpen(true)}
          onOpenPamphlet={() => setIsPamphletOpen(true)}
        />

        {/* Urgent Winter Relief Campaign with Lowered Rates */}
        <WinterReliefBanner
          currentCurrency={currentCurrency}
          onOpenDonate={(causeId, amountPKR) => handleOpenDonate(causeId, amountPKR)}
          onOpenPamphlet={() => setIsPamphletOpen(true)}
        />

        {/* Founder Profile Gig Showcase for Sawera Ejaz */}
        <FounderProfileGig
          onOpenDonate={handleOpenDonate}
          onOpenPamphlet={() => setIsPamphletOpen(true)}
        />

        {/* All Causes & Humanitarian Programs */}
        <CausesSection
          currentCurrency={currentCurrency}
          onOpenDonate={handleOpenDonate}
        />

        {/* Interactive Impact Map & Pakistan Regions */}
        <ImpactTracker onOpenDonate={() => handleOpenDonate()} />

        {/* Founder Letter: Sawera Ejaz & 100% Direct Delivery Pledge */}
        <FounderMessage onOpenPamphlet={() => setIsPamphletOpen(true)} />

        {/* Beneficiary Stories */}
        <BeneficiaryStories onOpenDonate={() => handleOpenDonate()} />

        {/* On-ground Field Photo Proof */}
        <FieldGallery />

        {/* Direct Transparency, Volunteer Accountability & Bank Details */}
        <TransparencySection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenDonate={() => handleOpenDonate()}
        onOpenZakat={() => setIsZakatOpen(true)}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
        onOpenPamphlet={() => setIsPamphletOpen(true)}
      />

      {/* Interactive Modals */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        initialCauseId={donateCauseId}
        initialAmountPKR={donateAmountPKR}
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenPamphlet={() => {
          setIsDonateOpen(false);
          setIsPamphletOpen(true);
        }}
      />

      <ZakatCalculatorModal
        isOpen={isZakatOpen}
        onClose={() => setIsZakatOpen(false)}
        currentCurrency={currentCurrency}
        onDonateZakatAmount={handleDonateZakatAmount}
      />

      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />

      {/* Official Digital Pamphlet Modal (پمفلٹ) */}
      <PamphletModal
        isOpen={isPamphletOpen}
        onClose={() => setIsPamphletOpen(false)}
        onOpenDonate={(causeId, amountPKR) => {
          setIsPamphletOpen(false);
          handleOpenDonate(causeId, amountPKR);
        }}
      />
    </div>
  );
}
