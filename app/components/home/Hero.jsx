import { Download, Globe, Package, Shield, Users } from "lucide-react";

// Hero Section Component
export default function Hero () {
  return (
    <section id="home" className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-shell px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="reveal-up inline-flex items-center rounded-full border border-red-200 bg-white/80 px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#A1241C] uppercase">
                Borderless Parcel Delivery
              </p>

              <div className="space-y-4">
                <h1 className="reveal-up delay-1 text-5xl md:text-6xl font-black text-gray-900 leading-[1.02]">
                  Move Parcels
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#A1241C] via-red-500 to-sky-500 gradient-pan">
                    With Confidence
                  </span>
                </h1>
                <p className="reveal-up delay-2 text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
                  Caro connects senders with verified riders for national and international delivery,
                  combining live tracking, secure handoff, and transparent pricing in one smooth flow.
                </p>
              </div>

              <div className="reveal-up delay-3 flex flex-col sm:flex-row gap-4">
                <button className="bg-[#A1241C] hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download App</span>
                </button>
                <button className="surface-glass border border-red-200 text-[#A1241C] hover:bg-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Join as Rider</span>
                </button>
              </div>

              <div className="reveal-up delay-4 grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                <div className="surface-glass rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-2xl font-black text-[#A1241C]">10K+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Active Users</div>
                </div>
                <div className="surface-glass rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-2xl font-black text-[#A1241C]">50K+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Deliveries</div>
                </div>
                <div className="surface-glass rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-2xl font-black text-[#A1241C]">100+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Cities</div>
                </div>
              </div>
            </div>

            <div className="relative reveal-up delay-2">
              <div className="surface-glass rounded-3xl p-5 sm:p-7 float-slow">
                <div className="rounded-2xl border border-white/60 bg-white/90 p-5 sm:p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">Live Dispatch Board</h3>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      14 Riders Online
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 rounded-xl bg-red-50/80 p-3 border border-red-100">
                      <div className="w-11 h-11 bg-[#A1241C] rounded-xl flex items-center justify-center text-white shrink-0">
                        <Package className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Downtown pickup assigned</p>
                        <p className="text-sm text-gray-600">ETA 19 mins • Signature required</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-xl bg-sky-50/80 p-3 border border-sky-100">
                      <div className="w-11 h-11 bg-sky-500 rounded-xl flex items-center justify-center text-white shrink-0">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">International lane active</p>
                        <p className="text-sm text-gray-600">Toronto to Amsterdam • Customs pre-cleared</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-xl bg-emerald-50/80 p-3 border border-emerald-100">
                      <div className="w-11 h-11 bg-emerald-500 rounded-xl flex items-center justify-center text-white shrink-0">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Secure escrow protected</p>
                        <p className="text-sm text-gray-600">Release triggered after OTP handoff</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 top-8 hidden lg:block surface-glass rounded-xl px-4 py-3 float-fast">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Handoff Success</p>
                <p className="text-xl font-black text-[#A1241C]">99.2%</p>
              </div>

              <div className="absolute -left-7 -bottom-6 hidden lg:block surface-glass rounded-xl px-4 py-3 float-fast">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Avg Delivery</p>
                <p className="text-xl font-black text-sky-600">42m</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};