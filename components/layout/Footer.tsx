import * as React from "react";

interface FooterProps {
  // Add any props here if needed in the future
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#1E2124] text-gray-400 py-8 px-4">
      <div className="container mx-auto text-center space-y-6">
        {/* Company Info */}
        <div className="space-y-1">
          <p className="text-white">Aventiv</p>
          <p className="text-sm">is the parent company of</p>
          <p className="text-sm">Securus Monitoring | JPay | Securus Technologies</p>
        </div>

        {/* Links */}
        <div className="space-x-4 text-sm">
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="/terms" className="hover:text-white">Terms And Conditions</a>
          <span>|</span>
          <a href="/support" className="hover:text-white">Contact Support</a>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          © 2023 | Aventiv Technologies, LLC All Rights Reserved.
        </div>

        {/* Legal Disclaimers */}
        <div className="max-w-4xl mx-auto space-y-2 text-xs">
          <p>
            Money transfers and payments are subject to terms of service and may be subject to state laws and regulations. Please see the AirPaid and JPay websites for further information.
          </p>
          <p>
            Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc.
          </p>
          <p>
            Android, Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;