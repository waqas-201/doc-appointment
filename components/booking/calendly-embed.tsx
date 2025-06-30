'use client';

import { useEffect } from 'react';

export function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/your-calendly-username"
        style={{ minWidth: '320px', height: '400px' }}
      />
      
      {/* Fallback for when Calendly is not available */}
      <div className="bg-gradient-to-br from-cyan-50 to-slate-50 rounded-lg p-8 text-center">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Schedule Your Appointment
        </h3>
        <p className="text-slate-600 mb-6">
          Select your preferred date and time for consultation with Dr. Ayesha Khan.
        </p>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            {/* Mock calendar dates */}
            {[15, 16, 17, 18, 19, 20, 21].map(date => (
              <button
                key={date}
                className="p-3 border border-slate-200 rounded-lg hover:bg-cyan-50 hover:border-cyan-300 transition-colors"
              >
                <div className="text-sm text-slate-600">Dec</div>
                <div className="text-lg font-semibold text-slate-900">{date}</div>
              </button>
            ))}
          </div>
          
          <div className="mt-6">
            <h4 className="text-sm font-medium text-slate-900 mb-3">Available Times</h4>
            <div className="grid grid-cols-2 gap-2">
              {['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM'].map(time => (
                <button
                  key={time}
                  className="p-2 text-sm border border-slate-200 rounded-lg hover:bg-cyan-50 hover:border-cyan-300 transition-colors"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <p className="text-xs text-slate-500 mt-6">
          This is a demo calendar. In production, integrate with your preferred scheduling system.
        </p>
      </div>
    </div>
  );
}