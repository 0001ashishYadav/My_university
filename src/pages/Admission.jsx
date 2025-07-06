import {
  Calendar,
  FileText,
  DollarSign,
  Users,
  CheckCircle,
  Clock,
  Award,
} from "lucide-react";
import Hero from "../components/Hero";

const Admissions = () => {
  const admissionTypes = [
    {
      title: "Undergraduate",
      description: "Bachelor's degree programs for high school graduates",
      requirements: [
        "High School Diploma",
        "SAT/ACT Scores",
        "Letters of Recommendation",
        "Personal Essay",
      ],
      deadline: "January 15, 2025",
    },
    {
      title: "Graduate",
      description: "Master's and doctoral programs for college graduates",
      requirements: [
        "Bachelor's Degree",
        "GRE/GMAT Scores",
        "Transcripts",
        "Statement of Purpose",
      ],
      deadline: "March 1, 2025",
    },
    {
      title: "International",
      description: "Programs for international students from around the world",
      requirements: [
        "TOEFL/IELTS Scores",
        "Financial Documentation",
        "Passport Copy",
        "Academic Records",
      ],
      deadline: "February 1, 2025",
    },
  ];

  const timeline = [
    {
      step: 1,
      title: "Research Programs",
      description:
        "Explore our academic offerings and find the right fit for your goals.",
      icon: FileText,
    },
    {
      step: 2,
      title: "Prepare Application",
      description:
        "Gather required documents and complete the online application.",
      icon: FileText,
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Submit your completed application before the deadline.",
      icon: CheckCircle,
    },
    {
      step: 4,
      title: "Review Process",
      description:
        "Our admissions committee reviews your application thoroughly.",
      icon: Clock,
    },
    {
      step: 5,
      title: "Decision",
      description: "Receive your admission decision and next steps.",
      icon: Award,
    },
  ];

  const scholarships = [
    {
      name: "Presidential Scholarship",
      amount: "Full Tuition",
      criteria: "Exceptional academic achievement and leadership",
      deadline: "December 1, 2024",
    },
    {
      name: "Merit Scholarship",
      amount: "Up to $15,000",
      criteria: "Outstanding academic performance",
      deadline: "January 15, 2025",
    },
    {
      name: "Need-Based Aid",
      amount: "Varies",
      criteria: "Demonstrated financial need",
      deadline: "February 15, 2025",
    },
    {
      name: "International Scholarship",
      amount: "Up to $10,000",
      criteria: "International students with academic excellence",
      deadline: "January 1, 2025",
    },
  ];

  const tuitionData = [
    {
      category: "Undergraduate (In-State)",
      tuition: "$12,000",
      fees: "$2,000",
      total: "$14,000",
    },
    {
      category: "Undergraduate (Out-of-State)",
      tuition: "$28,000",
      fees: "$2,000",
      total: "$30,000",
    },
    {
      category: "Graduate",
      tuition: "$15,000",
      fees: "$1,500",
      total: "$16,500",
    },
    {
      category: "International",
      tuition: "$32,000",
      fees: "$2,500",
      total: "$34,500",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Join Our Community"
        subtitle="Start your journey to academic excellence and personal growth."
        backgroundImage="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
        height="medium"
      />

      {/* Admission Types */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Admission Categories
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right path for your educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {admissionTypes.map((type, index) => (
              <div key={index} className="card p-6 h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {type.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Requirements:
                  </h4>
                  <ul className="space-y-2">
                    {type.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle
                          size={16}
                          className="text-green-500 mr-2 flex-shrink-0"
                        />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center text-blue-600 mb-6">
                  <Calendar size={16} className="mr-2" />
                  <span className="font-medium">Deadline: {type.deadline}</span>
                </div>
                <button className="btn btn-primary w-full">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600">
              Your step-by-step guide to applying
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:flex justify-between items-center relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2"></div>
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white p-6 rounded-xl shadow-md text-center max-w-48"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="flex justify-center mb-3">
                    <item.icon size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="card p-4 flex-1">
                    <div className="flex items-center mb-2">
                      <item.icon size={20} className="text-blue-600 mr-2" />
                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tuition & Fees
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing for your education investment
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="bg-blue-600 text-white p-4">
              <div className="grid grid-cols-4 gap-4 font-semibold">
                <div>Category</div>
                <div className="text-center">Tuition</div>
                <div className="text-center">Fees</div>
                <div className="text-center">Total per Year</div>
              </div>
            </div>
            {tuitionData.map((row, index) => (
              <div
                key={index}
                className={`p-4 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="font-medium text-gray-900">
                    {row.category}
                  </div>
                  <div className="text-center text-gray-600">{row.tuition}</div>
                  <div className="text-center text-gray-600">{row.fees}</div>
                  <div className="text-center font-bold text-blue-600">
                    {row.total}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-xl mt-8 max-w-4xl mx-auto">
            <p className="text-gray-700">
              <strong>Note:</strong> Tuition and fees are subject to change.
              Additional costs may include room and board, textbooks, and
              personal expenses.
            </p>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Scholarships & Financial Aid
            </h2>
            <p className="text-xl text-gray-600">
              Making education accessible through financial support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="card p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {scholarship.name}
                  </h4>
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {scholarship.amount}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{scholarship.criteria}</p>
                <div className="flex items-center text-blue-600 mb-6">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">
                    Deadline: {scholarship.deadline}
                  </span>
                </div>
                <button className="btn btn-outline w-full">Learn More</button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-6">
              Over 85% of our students receive some form of financial
              assistance. Don't let cost be a barrier to your education.
            </p>
            <button className="btn btn-primary">Calculate Financial Aid</button>
          </div>
        </div>
      </section>

      {/* Contact Admissions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Need Help with Your Application?
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Our admissions counselors are here to guide you through every
                  step of the application process. Contact us for personalized
                  assistance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <strong className="w-20">Phone:</strong> (555) 123-4567
                  </div>
                  <div className="flex items-center text-gray-700">
                    <strong className="w-20">Email:</strong>{" "}
                    admissions@prestigeuniversity.edu
                  </div>
                  <div className="flex items-center text-gray-700">
                    <strong className="w-20">Hours:</strong> Monday - Friday, 9
                    AM - 5 PM
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button className="btn btn-primary">Schedule a Call</button>
                <button className="btn btn-outline">Visit Campus</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
