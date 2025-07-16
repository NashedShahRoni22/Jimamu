import { Clock, MapPin, Shield, Smartphone, Star, Users } from "lucide-react";
import FeatureCard from "../cards/FeatureCard";

export default function Features () {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Easy to Use",
      description: "Intuitive interface for both iOS and Android users",
      color: "bg-red-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time Tracking",
      description: "Track your parcels in real-time with live updates",
      color: "bg-blue-500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Global Coverage",
      description: "Deliver nationally and internationally with ease",
      color: "bg-green-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Verified Riders",
      description: "All riders go through thorough verification process",
      color: "bg-purple-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Multiple payment options with secure transactions",
      color: "bg-yellow-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Rating System",
      description: "Rate and review riders for better service quality",
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Jimamu?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of delivery with our innovative features designed for both senders and riders.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};