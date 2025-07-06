import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import Hero from "../components/Hero";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "123 University Avenue",
        "Academic City, AC 12345",
        "United States",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Main: (555) 123-4567",
        "Admissions: (555) 123-4568",
        "Emergency: (555) 123-4569",
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@MyUniversity.edu",
        "admissions@myUniversity.edu",
        "support@myUniversity.edu",
      ],
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        "Monday - Friday: 8 AM - 6 PM",
        "Saturday: 9 AM - 2 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const departments = [
    {
      name: "Admissions Office",
      email: "admissions@myUniversity.edu",
      phone: "(555) 123-4568",
      description:
        "Information about applications, requirements, and enrollment",
    },
    {
      name: "Student Services",
      email: "studentservices@myUniversity.edu",
      phone: "(555) 123-4570",
      description: "Support for current students, housing, and campus life",
    },
    {
      name: "Financial Aid",
      email: "financialaid@myUniversity.edu",
      phone: "(555) 123-4571",
      description: "Scholarships, grants, and financial assistance",
    },
    {
      name: "Academic Affairs",
      email: "academics@myUniversity.edu",
      phone: "(555) 123-4572",
      description: "Academic programs, course information, and faculty",
    },
  ];

  const faqs = [
    {
      question: "How do I apply for admission?",
      answer:
        "You can apply online through our admissions portal. Visit our Admissions page for detailed requirements and deadlines.",
    },
    {
      question: "What financial aid options are available?",
      answer:
        "We offer various scholarships, grants, and loan programs. Contact our Financial Aid office for personalized assistance.",
    },
    {
      question: "Can I schedule a campus visit?",
      answer:
        "Yes! We offer guided tours Monday through Friday. You can schedule online or call our admissions office.",
    },
    {
      question: "How do I contact my academic advisor?",
      answer:
        "Current students can find their advisor's contact information through the student portal or by contacting Academic Affairs.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team. We're here to help you succeed."
        backgroundImage="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
        height="medium"
      />

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="card p-6 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <info.icon
                      size={32}
                      className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {info.title}
                </h4>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question or need more information? We'd love to hear from
                you.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions</option>
                    <option value="academics">Academic Programs</option>
                    <option value="financial-aid">Financial Aid</option>
                    <option value="student-life">Student Life</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full">
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Visit Our Campus
              </h3>
              <div className="bg-gray-100 rounded-xl h-64 flex flex-col items-center justify-center text-gray-500 mb-6">
                <MapPin size={48} className="mb-4" />
                <p className="text-lg font-medium">Interactive Campus Map</p>
                <p className="text-center">
                  123 University Avenue
                  <br />
                  Academic City, AC 12345
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  Campus Tours
                </h4>
                <p className="text-gray-600">
                  Join us for a guided tour of our beautiful campus. Tours are
                  available Monday through Friday at 10 AM and 2 PM.
                </p>
                <button className="btn btn-outline w-full">
                  Schedule a Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contact by Department
            </h2>
            <p className="text-xl text-gray-600">
              Reach out to the right department for specialized assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="card p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {dept.name}
                </h4>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Mail size={16} className="mr-3 text-blue-600" />
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                    >
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone size={16} className="mr-3 text-blue-600" />
                    <a
                      href={`tel:${dept.phone}`}
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                    >
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency Contact</h2>
          <p className="text-xl text-blue-100 mb-6">
            For campus emergencies, call our 24/7 emergency line
          </p>
          <div className="flex items-center justify-center text-2xl font-bold mb-4">
            <Phone size={24} className="mr-3" />
            (555) 123-4569
          </div>
          <p className="text-blue-100">
            For non-emergencies, contact Campus Security at (555) 123-4580
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
