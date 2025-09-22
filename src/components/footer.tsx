"use client";

import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react";
export function Footer() {
  return <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200" data-unique-id="a1499b95-d064-4782-8354-fef69531b227" data-file-name="components/footer.tsx">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-12">
          
          {/* Logo Section - Left Side */}
          <div className="lg:col-span-1">
            <a href="https://relivhealthy.com/" className="inline-block transition-opacity duration-200 hover:opacity-80">
              <img src="https://pre-built-images.s3.amazonaws.com/webapp-uploads/4a7c818821764b5fc4ecca88e27e5a38.gif" alt="ReLiv Healthy Logo" className="h-16 w-auto sm:h-20" />
            </a>
          </div>
          {/* Contact Locations */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4" data-unique-id="a4daa543-b9ce-41b0-b315-9094e6b1e298" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="5f466ad8-ce17-48ed-9b7d-57b9bbede572" data-file-name="components/footer.tsx">Our Location</span></h3>
            
            {/* HUB: Banjara Hills */}
            <div className="space-y-3" data-unique-id="c918c600-f639-4780-b7c5-1767be4a7278" data-file-name="components/footer.tsx">
              <div className="flex items-start gap-3" data-unique-id="72f0b620-1a4a-42ea-bee8-3a8680b40b34" data-file-name="components/footer.tsx">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div data-unique-id="f4a06683-112b-4d86-b391-d3f53655072a" data-file-name="components/footer.tsx">
                  <h4 className="font-semibold text-gray-900 mb-1" data-unique-id="a816c14f-9b8e-4729-ab5d-3dbb8fe0e568" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="21068a6c-1fcf-4d4b-a120-7db2b854dee7" data-file-name="components/footer.tsx">Banjara Hills</span></h4>
                  <p className="text-sm text-gray-600 leading-relaxed" data-unique-id="b52e0818-df05-4dd7-87e6-878d77d4cc6b" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="2650cd5a-9e44-4884-9386-6d911dfbc2f6" data-file-name="components/footer.tsx">
                    Plot No 3, Huda Heights, Near Lotus Pond, Road No 12, MLA Colony, Filmnagar, Jubilee Hills, Hyderabad - 500 096
                  </span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information & Social Media */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4" data-unique-id="2e9a024f-2238-48e5-bec1-27df6655ecd7" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="5f8a72ef-16e4-4a4e-ad2b-f6843f9ee8a7" data-file-name="components/footer.tsx">Contact Us</span></h3>
            
            <div className="space-y-4" data-unique-id="fb7f47c4-a631-4929-be94-7c250fb70ac5" data-file-name="components/footer.tsx">
              <div className="flex items-center gap-3" data-unique-id="614cc85f-62b0-4e8c-9369-ef4b3ed97122" data-file-name="components/footer.tsx">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@relivhealthy.com" className="text-gray-600 hover:text-primary transition-colors duration-200" data-unique-id="e439998a-870c-4924-bf88-e7d3aff61d5f" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="76865c87-2373-4797-8912-160ef07e94a7" data-file-name="components/footer.tsx">
                  info@relivhealthy.com
                </span></a>
              </div>
              
              <div className="flex items-center gap-3" data-unique-id="fef2b0b3-d6ff-4f10-bc6c-c1b0ceba1320" data-file-name="components/footer.tsx">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:9000767060" className="text-gray-600 hover:text-primary transition-colors duration-200" data-unique-id="24296165-769a-433f-9e96-876ad0526fe5" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="94e6f4fb-0dde-4d37-8e6b-65c26e233b4b" data-file-name="components/footer.tsx">
                  9000-76-7060
                </span></a>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex gap-4 justify-start">
                <a href="https://www.facebook.com/relivhere/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
                  <Facebook className="h-5 w-5 text-blue-600 group-hover:text-blue-700" />
                </a>
                
                <a href="https://www.instagram.com/ReLivhere/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
                  <Instagram className="h-5 w-5 text-pink-600 group-hover:text-pink-700" />
                </a>
                
                <a href="https://www.youtube.com/@relivhealthy" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
                  <Youtube className="h-5 w-5 text-red-600 group-hover:text-red-700" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200" data-unique-id="f669583e-3f51-4894-b1f5-3451f9bbf06e" data-file-name="components/footer.tsx">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4" data-unique-id="ad5f93ce-6539-4921-92b7-79a451e522c9" data-file-name="components/footer.tsx">
            <p className="text-sm text-gray-600 text-center sm:text-left" data-unique-id="8a4c34fe-0be5-4b7f-91e5-74bc59689ed9" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="ad245d47-672b-402d-85b6-f76ab938630a" data-file-name="components/footer.tsx">
              © 2024 ReLiv Healthy. All rights reserved.
            </span></p>
            <div className="flex gap-6 text-sm" data-unique-id="6e079c9e-1788-4ee8-b506-6dd345b3d431" data-file-name="components/footer.tsx">
              <a href="/privacy" className="text-gray-600 hover:text-primary transition-colors" data-unique-id="7c208100-37ee-4750-ad7b-1730ba8b800c" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="2c28bacf-d4ec-47c4-9af6-31d5acfd7728" data-file-name="components/footer.tsx">
                Privacy Policy
              </span></a>
              <a href="/terms" className="text-gray-600 hover:text-primary transition-colors" data-unique-id="d170fbf4-67b0-4863-bc98-a6f5317e6efc" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="8a3232af-026f-42a8-8da1-8b9cd2a2966a" data-file-name="components/footer.tsx">
                Terms of Service
              </span></a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}