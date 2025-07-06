import {
  Home,
  Users,
  Trophy,
  Heart,
  MapPin,
  Calendar,
  Camera,
  Music,
  Clock,
} from "lucide-react";
import Hero from "../components/Hero";

const StudentLife = () => {
  const activities = [
    {
      icon: Users,
      title: "Student Organizations",
      description: "Over 200 clubs and organizations to match your interests",
      image:
        "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
    },
    {
      icon: Trophy,
      title: "Athletics",
      description:
        "Competitive sports and recreational activities for all skill levels",
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
    },
    {
      icon: Music,
      title: "Arts & Culture",
      description: "Theater, music, art exhibitions, and cultural events",
      image:
        "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Volunteer opportunities to make a positive impact",
      image:
        "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
    },
  ];

  const housing = [
    {
      name: "Heritage Hall",
      type: "Traditional Residence",
      capacity: "500 students",
      features: [
        "Shared rooms",
        "Community kitchens",
        "Study lounges",
        "24/7 security",
      ],
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    },
    {
      name: "University Apartments",
      type: "Apartment Style",
      capacity: "300 students",
      features: [
        "Private bedrooms",
        "Full kitchens",
        "Living areas",
        "Parking available",
      ],
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },
    {
      name: "Graduate Housing",
      type: "Graduate Students",
      capacity: "200 students",
      features: [
        "Studio & 1BR units",
        "Quiet study areas",
        "Family housing",
        "Pet-friendly",
      ],
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    },
  ];

  const dining = [
    {
      name: "The Great Hall",
      type: "Main Dining",
      description: "All-you-can-eat dining with international cuisine",
      hours: "7 AM - 10 PM",
    },
    {
      name: "Campus Café",
      type: "Coffee & Light Meals",
      description: "Artisan coffee, sandwiches, and healthy options",
      hours: "6 AM - 11 PM",
    },
    {
      name: "Food Court",
      type: "Variety Dining",
      description: "Multiple food vendors with diverse cuisines",
      hours: "11 AM - 9 PM",
    },
    {
      name: "Grab & Go",
      type: "Quick Service",
      description: "Convenient snacks and meals for busy students",
      hours: "24/7",
    },
  ];

  const services = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive healthcare services and fitness facilities",
    },
    {
      icon: Users,
      title: "Career Services",
      description: "Job placement assistance and career counseling",
    },
    {
      icon: MapPin,
      title: "Transportation",
      description: "Campus shuttle and public transportation connections",
    },
    {
      icon: Camera,
      title: "Recreation Center",
      description: "State-of-the-art fitness equipment and group classes",
    },
  ];

  const events = [
    {
      title: "Welcome Week",
      date: "August 25-31, 2025",
      description: "Orientation activities for new students",
      image:
        "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    },
    {
      title: "Homecoming",
      date: "October 15, 2025",
      description: "Annual celebration with alumni and current students",
      image:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    },
    {
      title: "Spring Festival",
      date: "April 20, 2025",
      description: "Campus-wide celebration with food, music, and activities",
      image:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    },
  ];

  const mealPlans = [
    {
      name: "Unlimited Plan",
      price: "$2,500/semester",
      description: "Unlimited meals at any dining location",
    },
    {
      name: "15 Meals/Week",
      price: "$2,200/semester",
      description: "15 meals per week plus flex dollars",
    },
    {
      name: "10 Meals/Week",
      price: "$1,800/semester",
      description: "10 meals per week plus flex dollars",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Student Life"
        subtitle="Discover a vibrant campus community where lifelong friendships are made and memories are created."
        backgroundImage="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
        height="medium"
      />

      {/* Activities */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Campus Activities
            </h2>
            <p className="text-xl text-gray-600">
              Engage in activities that enrich your college experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <activity.icon size={48} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {activity.title}
                  </h4>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Housing */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Housing Options
            </h2>
            <p className="text-xl text-gray-600">
              Find your home away from home on our beautiful campus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {housing.map((option, index) => (
              <div key={index} className="card h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {option.name}
                  </h4>
                  <div className="text-blue-600 font-medium mb-1">
                    {option.type}
                  </div>
                  <div className="text-gray-500 text-sm mb-4">
                    {option.capacity}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Features:
                    </h5>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="btn btn-primary mt-6">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dining Options
            </h2>
            <p className="text-xl text-gray-600">
              Delicious and nutritious meals to fuel your academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dining.map((option, index) => (
              <div key={index} className="card p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {option.name}
                </h4>
                <div className="text-blue-600 font-medium text-sm mb-3">
                  {option.type}
                </div>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock size={16} className="mr-2" />
                  {option.hours}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Meal Plans
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mealPlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {plan.name}
                  </h4>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {plan.price}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Student Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support services for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card p-6 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon
                      size={32}
                      className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Join us for exciting campus events and celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="card group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-blue-600 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    {event.date}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="btn btn-outline">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Stats */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Student Organizations" },
              { number: "25", label: "Dining Locations" },
              { number: "12", label: "Residence Halls" },
              { number: "50+", label: "Annual Events" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
