import { Link } from "react-router";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Globe,
  ChevronRight,
  Calendar,
  MapPin,
} from "lucide-react";
import Hero from "../components/Hero";

const Home = () => {
  const featuredPrograms = [
    {
      title: "Computer Science",
      description:
        "Leading-edge technology education with hands-on experience in AI, machine learning, and software development.",
      image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg",
    },
    {
      title: "Business Administration",
      description:
        "Comprehensive business education preparing students for leadership roles in the global marketplace.",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
    },
    {
      title: "Engineering",
      description:
        "Innovative engineering programs combining theoretical knowledge with practical application.",
      image:
        "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
    },
    {
      title: "Medicine",
      description:
        "World-class medical education with state-of-the-art facilities and clinical experience.",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg",
    },
  ];

  const stats = [
    { icon: Users, number: "25,000+", label: "Students" },
    { icon: BookOpen, number: "200+", label: "Programs" },
    { icon: Award, number: "95%", label: "Employment Rate" },
    { icon: Globe, number: "50+", label: "Countries" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      program: "Computer Science Graduate",
      quote:
        "The education I received here prepared me for a successful career in tech. The faculty are world-class and the resources are incredible.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      name: "Mike Davis",
      program: "Business Administration",
      quote:
        "The business program gave me the skills and network I needed to start my own company. I am grateful for the opportunities this university provided.",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    },
    {
      name: "Lisa Chen",
      program: "Engineering Student",
      quote:
        "The hands-on learning approach and cutting-edge facilities make this university stand out. I am excited about my future in engineering.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
  ];

  const news = [
    {
      title: "New Research Center Opens",
      date: "March 15, 2025",
      excerpt:
        "State-of-the-art facility dedicated to artificial intelligence and machine learning research.",
      image:
        "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
    },
    {
      title: "Record-Breaking Graduation",
      date: "March 10, 2025",
      excerpt:
        "Largest graduating class in university history with 95% employment rate.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
    },
    {
      title: "International Partnership",
      date: "March 5, 2025",
      excerpt:
        "New collaboration with leading European universities for student exchange programs.",
      image:
        "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Excellence in Education"
        subtitle="Empowering minds, shaping futures, and creating tomorrow's leaders through innovative education and research."
        backgroundImage="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to="/admissions" className="btn btn-secondary btn-lg">
            Apply Now <ArrowRight size={20} />
          </Link>
          <Link to="/about" className="btn btn-outline btn-lg">
            Learn More
          </Link>
        </div>
      </Hero>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              >
                <stat.icon size={32} className="text-amber-400 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular and innovative academic programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPrograms.map((program, index) => (
              <div key={index} className="card group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link
                    to="/academics"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/academics" className="btn btn-primary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our graduates and current students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="mb-6">
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600 text-sm">
                      {testimonial.program}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest News & Events
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with campus happenings and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="card group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-blue-600 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of learners, innovators, and future leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="btn btn-secondary btn-lg">
              Apply Today
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
