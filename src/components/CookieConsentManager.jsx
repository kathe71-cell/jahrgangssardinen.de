import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie, Settings } from 'lucide-react';
import CookieSettingsModal from './CookieSettingsModal';

const CONSENT_KEY = 'cookie_consent_v2';

export default function CookieConsentManager({ showSettings, setShowSettings }) {
  const [consent, setConsent] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem(CONSENT_KEY);
      if (storedConsent) {
        const parsed = JSON.parse(storedConsent);
        setConsent(parsed);
        applyScripts(parsed);
      } else {
        setShowBanner(true);
      }
    } catch (error) {
      console.error("Could not parse cookie consent from localStorage", error);
      setShowBanner(true);
    }

    const handleOpenSettings = () => {
      setShowSettings(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const applyScripts = (preferences) => {
    if (preferences?.marketing) {
      if (!document.getElementById('google-adsense-script')) {
        const script = document.createElement('script');
        script.id = 'google-adsense-script';
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7078147966379221';
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }
    } else {
      const existingScript = document.getElementById('google-adsense-script');
      if (existingScript) {
        existingScript.remove();
      }
    }
  };

  const saveConsent = (preferences) => {
    const consentData = { ...preferences, timestamp: new Date().toISOString() };
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData));
      setConsent(consentData);
      setShowBanner(false);
      setShowSettings(false);
      applyScripts(consentData);
    } catch (error) {
       console.error("Could not save cookie consent to localStorage", error);
    }
  };

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const handleAcceptNecessary = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  return (
    <>
      <CookieSettingsModal
        isOpen={showSettings}
        initialPreferences={consent}
        onSave={saveConsent}
        onClose={() => setShowSettings(false)}
      />
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white p-4 sm:p-5 z-50 shadow-t-2xl animate-in slide-in-from-bottom duration-500">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-4 mb-4">
              <Cookie className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Deine Privatsphäre ist uns wichtig</h3>
                <p className="text-sm text-slate-300 mt-1">
                  Wir verwenden Cookies, um die Website zu betreiben und zu verbessern. Bitte triff eine Auswahl, um fortzufahren.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <Button onClick={() => setShowSettings(true)} variant="outline" className="bg-transparent text-white border-slate-500 hover:bg-slate-700 hover:text-white">
                <Settings className="w-4 h-4 mr-2" />
                Einstellungen
              </Button>
              <Button onClick={handleAcceptNecessary} variant="outline" className="bg-slate-700 text-white border-slate-500 hover:bg-slate-600 hover:text-white">
                Nur Essenzielle
              </Button>
              <Button onClick={handleAcceptAll} className="bg-amber-500 hover:bg-amber-600 text-white">
                Alle akzeptieren
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}