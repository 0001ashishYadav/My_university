import {
  BookOpen,
  Award,
  Users,
  Search,
  Filter,
  ChevronRight,
} from "lucide-react";
import Hero from "../components/Hero";

const Academics = () => {
  const schools = [
    {
      name: "School of Engineering",
      programs: [
        "Computer Science",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
      ],
      image:
        "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
      description:
        "Leading innovation in technology and engineering solutions.",
    },
    {
      name: "School of Business",
      programs: [
        "Business Administration",
        "Marketing",
        "Finance",
        "International Business",
      ],
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      description:
        "Preparing future business leaders for the global marketplace.",
    },
    {
      name: "School of Medicine",
      programs: ["Doctor of Medicine", "Nursing", "Pharmacy", "Public Health"],
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg",
      description: "Advancing healthcare through education and research.",
    },
    {
      name: "School of Liberal Arts",
      programs: ["English Literature", "History", "Psychology", "Philosophy"],
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
      description: "Fostering critical thinking and cultural understanding.",
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Diverse Programs",
      description:
        "Over 200 undergraduate and graduate programs across multiple disciplines.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description:
        "Learn from world-renowned professors and industry professionals.",
    },
    {
      icon: Award,
      title: "Research Opportunities",
      description: "Engage in cutting-edge research projects and innovations.",
    },
  ];

  const faculty = [
    {
      name: "Anu",
      department: "Computer Science",
      specialty: "Artificial Intelligence",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      awards: ["ACM Fellow", "IEEE Distinguished Scientist"],
    },
    {
      name: "Dinesh kumar",
      department: "Business Administration",
      specialty: "International Marketing",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      awards: ["Marketing Excellence Award", "Best Professor 2024"],
    },
    {
      name: "Dr. Pradeep",
      department: "Medicine",
      specialty: "Cardiology",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      awards: ["Medical Innovation Award", "Research Excellence"],
    },
  ];

  const programs = [
    {
      name: "Computer Science",
      level: "Undergraduate",
      duration: "4 years",
      description:
        "Comprehensive program covering programming, algorithms, and software engineering.",
    },
    {
      name: "MBA",
      level: "Graduate",
      duration: "2 years",
      description:
        "Master of Business Administration with focus on leadership and strategy.",
    },
    {
      name: "Mechanical Engineering",
      level: "Undergraduate",
      duration: "4 years",
      description:
        "Hands-on engineering program with state-of-the-art facilities.",
    },
    {
      name: "Medicine",
      level: "Professional",
      duration: "4 years",
      description:
        "Doctor of Medicine program with clinical rotations and research.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Academic Excellence"
        subtitle="Explore our comprehensive range of programs designed to prepare you for success in your chosen field."
        backgroundImage="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
        height="medium"
      />

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <feature.icon
                      size={32}
                      className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Schools
            </h2>
            <p className="text-xl text-gray-600">
              Discover our academic divisions and their specialized programs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {schools.map((school, index) => (
              <div
                key={index}
                className="card group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {school.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{school.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Featured Programs:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {school.programs.map((program, idx) => (
                        <div
                          key={idx}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          {program}
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                  >
                    Explore Programs <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Programs
            </h2>
            <p className="text-xl text-gray-600">
              Explore some of our most sought-after academic programs
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search programs..."
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-80"
              />
            </div>
            <button className="flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors duration-300">
              <Filter size={20} className="mr-2" />
              Filter
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {program.name}
                  </h4>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {program.level}
                  </span>
                </div>
                <div className="text-gray-500 text-sm mb-3">
                  Duration: {program.duration}
                </div>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="flex gap-3">
                  <button className="btn btn-primary flex-1">Apply Now</button>
                  <button className="btn btn-outline flex-1">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Distinguished Faculty
            </h2>
            <p className="text-xl text-gray-600">
              Meet our world-class educators and researchers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <div
                key={index}
                className="card text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 font-medium mb-1">
                    {member.department}
                  </p>
                  <p className="text-gray-600 mb-4">{member.specialty}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.awards.map((award, idx) => (
                      <span
                        key={idx}
                        className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Research Excellence
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our university is at the forefront of groundbreaking research
                across multiple disciplines. From artificial intelligence to
                sustainable energy, our faculty and students are making
                discoveries that shape the future.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { number: "$50M+", label: "Research Funding" },
                  { number: "25+", label: "Research Centers" },
                  { number: "500+", label: "Publications" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary">Explore Research</button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg"
                alt="Research"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
