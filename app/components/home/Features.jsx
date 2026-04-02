import { Clock, MapPin, Shield, Smartphone, Star, Users } from "lucide-react";
import FeatureCard from "../cards/FeatureCard";

export default function Features () {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Easy to Use",
      description: "Intuitive interface for both iOS and Android users",
      color: "from-[#A1241C] to-red-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time Tracking",
      description: "Track your parcels in real-time with live updates",
      color: "from-sky-500 to-blue-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Global Coverage",
      description: "Deliver nationally and internationally with ease",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Verified Riders",
      description: "All riders go through thorough verification process",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Multiple payment options with secure transactions",
      color: "from-indigo-500 to-violet-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Rating System",
      description: "Rate and review riders for better service quality",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#111827] text-white px-6 py-12 sm:px-10 sm:py-14 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-12 -right-12 h-60 w-60 rounded-full bg-red-500/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-14 -left-16 h-60 w-60 rounded-full bg-sky-500/20 blur-3xl"></div>

          <div className="text-center mb-14 relative z-10">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.2em] text-red-200 mb-4">Platform Advantages</p>
            <h2 className="reveal-up delay-1 text-4xl sm:text-5xl font-black mb-4">Why Teams Choose Caro</h2>
            <p className="reveal-up delay-2 text-lg text-slate-300 max-w-2xl mx-auto">
            Experience the future of delivery with our innovative features designed for both senders and riders.
          </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
                delayClass={`delay-${(index % 4) + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};