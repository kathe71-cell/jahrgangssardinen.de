import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function CookieSettingsModal({ isOpen, onSave, onClose }) {
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  const handleSave = () => {
    onSave({
      necessary: true,
      ...preferences,
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Cookie-Einstellungen anpassen</DialogTitle>
          <DialogDescription>
            Hier kannst du deine Cookie-Präferenzen verwalten. Du kannst deine Auswahl jederzeit ändern.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-6">
          <div className="p-4 bg-slate-50 rounded-lg border">
            <div className="flex items-center justify-between">
              <Label htmlFor="necessary-cookies" className="font-bold text-slate-900">
                Notwendige Cookies
              </Label>
              <Switch id="necessary-cookies" checked disabled />
            </div>
            <p className="text-sm text-slate-600 mt-2">
              Diese Cookies sind für die Grundfunktionalität der Website erforderlich und können nicht deaktiviert werden.
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border">
            <div className="flex items-center justify-between">
              <Label htmlFor="analytics-cookies" className="font-bold text-slate-900">
                Analyse-Cookies
              </Label>
              <Switch
                id="analytics-cookies"
                checked={preferences.analytics}
                onCheckedChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
              />
            </div>
            <p className="text-sm text-slate-600 mt-2">
              Diese Cookies helfen uns zu verstehen, wie du unsere Website nutzt, damit wir sie verbessern können (z.B. Google Analytics).
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border">
            <div className="flex items-center justify-between">
              <Label htmlFor="marketing-cookies" className="font-bold text-slate-900">
                Marketing & Affiliate Cookies
              </Label>
              <Switch
                id="marketing-cookies"
                checked={preferences.marketing}
                onCheckedChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
              />
            </div>
            <p className="text-sm text-slate-600 mt-2">
              Diese Cookies werden von unseren Werbepartnern (z.B. Amazon) gesetzt, um Einnahmen über Affiliate-Links zu generieren. Dies hilft, die Seite zu finanzieren.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} className="w-full bg-amber-500 hover:bg-amber-600">
            Auswahl speichern & Schließen
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}