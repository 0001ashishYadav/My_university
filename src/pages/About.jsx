import {
  Award,
  Users,
  BookOpen,
  Globe,
  Target,
  Eye,
  Heart,
} from "lucide-react";
import Hero from "../components/Hero";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for the highest standards in education, research, and service.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We foster a diverse, inclusive environment where everyone belongs.",
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description: "We embrace new ideas and technologies to advance learning.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "We prepare students to make a positive difference in the world.",
    },
  ];

  const leadership = [
    {
      name: "Ashish Yadav",
      position: "President",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      bio: "Dr. Thompson brings over 20 years of academic leadership experience.",
    },
    {
      name: "Ankit Yadav",
      position: "Vice President of Academics",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      bio: "Leading our academic excellence initiatives and faculty development.",
    },
    {
      name: "Aryan Yadav",
      position: "Dean of Research",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      bio: "Overseeing groundbreaking research across all disciplines.",
    },
  ];

  const milestones = [
    {
      year: "1965",
      title: "University Founded",
      description:
        "Established with a vision to provide world-class education.",
    },
    {
      year: "1980",
      title: "First Graduate Programs",
      description:
        "Expanded to offer advanced degrees in multiple disciplines.",
    },
    {
      year: "1995",
      title: "Research Excellence",
      description:
        "Became a recognized research institution with major funding.",
    },
    {
      year: "2010",
      title: "Global Expansion",
      description: "Launched international programs and partnerships.",
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Pioneered online learning and digital education platforms.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="About My University"
        subtitle="Discover our rich history, mission, and commitment to academic excellence."
        backgroundImage="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
        height="medium"
      />

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target size={32} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide transformative education that empowers students to
                become innovative leaders, critical thinkers, and responsible
                global citizens who make meaningful contributions to society.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Eye size={32} className="text-amber-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be a world-renowned institution recognized for academic
                excellence, groundbreaking research, and the positive impact of
                our graduates on communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card p-6 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <value.icon
                      size={32}
                      className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our university's history
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full z-10"></div>

                {/* Content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="card p-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet our dedicated leaders who guide our institution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="card text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {leader.name}
                  </h4>
                  <p className="text-blue-600 font-medium mb-3">
                    {leader.position}
                  </p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                By the Numbers
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our achievements and impact speak for themselves. These numbers
                represent our commitment to excellence and the success of our
                community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "60+", label: "Years of Excellence" },
                { number: "25,000+", label: "Students Enrolled" },
                { number: "1,200+", label: "Faculty Members" },
                { number: "150,000+", label: "Alumni Worldwide" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
