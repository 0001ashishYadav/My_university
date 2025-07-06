import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Heart,
  Eye,
  Calendar,
  MapPin,
  Users,
  Camera,
  Filter,
  Search,
} from "lucide-react";
import Hero from "../components/Hero";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [likedImages, setLikedImages] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Photos", count: 48 },
    { id: "campus", name: "Campus Life", count: 12 },
    { id: "events", name: "Events", count: 15 },
    { id: "academics", name: "Academics", count: 8 },
    { id: "sports", name: "Sports", count: 7 },
    { id: "graduation", name: "Graduation", count: 6 },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
      title: "Main Campus Building",
      category: "campus",
      date: "2024-03-15",
      location: "Main Campus",
      photographer: "John Smith",
      views: 1250,
      likes: 89,
      description:
        "Beautiful view of our historic main campus building during golden hour.",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
      title: "Graduation Ceremony 2024",
      category: "graduation",
      date: "2024-05-20",
      location: "University Stadium",
      photographer: "Sarah Johnson",
      views: 2100,
      likes: 156,
      description:
        "Celebrating our graduates as they embark on their next journey.",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      title: "Music Performance",
      category: "events",
      date: "2024-04-10",
      location: "Concert Hall",
      photographer: "Mike Davis",
      views: 890,
      likes: 67,
      description: "Student orchestra performing at the annual spring concert.",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
      title: "Engineering Lab",
      category: "academics",
      date: "2024-03-25",
      location: "Engineering Building",
      photographer: "Lisa Chen",
      views: 756,
      likes: 45,
      description:
        "Students working on innovative projects in our state-of-the-art engineering lab.",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg",
      title: "Basketball Championship",
      category: "sports",
      date: "2024-02-28",
      location: "Sports Arena",
      photographer: "Tom Wilson",
      views: 1890,
      likes: 134,
      description:
        "Our team celebrating victory in the regional championship game.",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
      title: "Student Festival",
      category: "events",
      date: "2024-04-15",
      location: "Central Quad",
      photographer: "Emma Brown",
      views: 1456,
      likes: 98,
      description:
        "Annual student festival bringing together our diverse campus community.",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      title: "Library Study Space",
      category: "campus",
      date: "2024-03-08",
      location: "Central Library",
      photographer: "Alex Rodriguez",
      views: 623,
      likes: 34,
      description: "Modern study spaces designed for collaborative learning.",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
      title: "Research Laboratory",
      category: "academics",
      date: "2024-03-12",
      location: "Science Building",
      photographer: "Dr. Patricia Lee",
      views: 934,
      likes: 72,
      description:
        "Cutting-edge research facilities supporting groundbreaking discoveries.",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      title: "Student Housing",
      category: "campus",
      date: "2024-02-20",
      location: "Residence Hall",
      photographer: "Kevin Park",
      views: 567,
      likes: 28,
      description:
        "Comfortable and modern living spaces for our residential students.",
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      title: "Business Presentation",
      category: "academics",
      date: "2024-04-05",
      location: "Business School",
      photographer: "Rachel Green",
      views: 812,
      likes: 56,
      description:
        "MBA students presenting their capstone projects to industry leaders.",
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      title: "Homecoming Parade",
      category: "events",
      date: "2024-10-15",
      location: "University Avenue",
      photographer: "Mark Thompson",
      views: 2345,
      likes: 187,
      description:
        "Alumni and students celebrating our university spirit during homecoming.",
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg",
      title: "Medical Training",
      category: "academics",
      date: "2024-03-30",
      location: "Medical Center",
      photographer: "Dr. James Wilson",
      views: 1123,
      likes: 89,
      description:
        "Medical students gaining hands-on experience in our teaching hospital.",
    },
  ];

  const filteredImages = galleryImages.filter((img) => {
    const matchesCategory =
      selectedCategory === "all" || img.category === selectedCategory;
    const matchesSearch =
      img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex =
        currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex =
        currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  const toggleLike = (imageId, e) => {
    e.stopPropagation();
    setLikedImages((prev) => {
      const newLiked = new Set(prev);
      if (newLiked.has(imageId)) {
        newLiked.delete(imageId);
      } else {
        newLiked.add(imageId);
      }
      return newLiked;
    });
  };

  const handleKeyDown = (e) => {
    if (!selectedImage) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateImage("prev");
    if (e.key === "ArrowRight") navigateImage("next");
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title="Campus Gallery"
        subtitle="Explore the vibrant life and beautiful moments captured across our university campus."
        backgroundImage="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
        height="medium"
      />

      {/* Gallery Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "500+", label: "Photos" },
              { number: "50+", label: "Events Covered" },
              { number: "25K+", label: "Total Views" },
              { number: "1.2K+", label: "Likes" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-2"
              >
                <motion.div
                  className="text-3xl font-bold text-blue-600"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our collection of campus memories organized by
              category
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-80 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variants={categoryVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg"
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">
                  ({category.count})
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory + searchTerm}
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  layout
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-white"
                  onClick={() => openLightbox(image)}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <motion.h3
                          className="font-semibold text-lg mb-1"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {image.title}
                        </motion.h3>
                        <motion.div
                          className="flex items-center justify-between text-sm"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {image.views}
                            </span>
                            <span className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {image.likes}
                            </span>
                          </div>
                          <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                            {
                              categories.find(
                                (cat) => cat.id === image.category
                              )?.name
                            }
                          </span>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Like Button */}
                    <motion.button
                      onClick={(e) => toggleLike(image.id, e)}
                      className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 ${
                        likedImages.has(image.id)
                          ? "bg-red-500 text-white"
                          : "bg-white/80 text-gray-700 hover:bg-white"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          likedImages.has(image.id) ? "fill-current" : ""
                        }`}
                      />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No photos found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Photographers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Photographers
            </h2>
            <p className="text-xl text-gray-600">
              Meet the talented individuals behind these amazing captures
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Student Photographer",
                photos: 45,
                image:
                  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
              },
              {
                name: "Mike Davis",
                role: "Events Coordinator",
                photos: 38,
                image:
                  "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
              },
              {
                name: "Lisa Chen",
                role: "Campus Media Team",
                photos: 52,
                image:
                  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
              },
            ].map((photographer, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={photographer.image}
                  alt={photographer.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {photographer.name}
                </h3>
                <p className="text-blue-600 mb-2">{photographer.role}</p>
                <p className="text-gray-600">
                  {photographer.photos} photos contributed
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-200"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-200"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              {/* Image */}
              <div className="flex items-center justify-center w-full h-full">
                <motion.img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </div>

              {/* Image Info */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {selectedImage.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-6 text-sm">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(selectedImage.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {selectedImage.location}
                      </span>
                      <span className="flex items-center">
                        <Camera className="w-4 h-4 mr-2" />
                        {selectedImage.photographer}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <span className="flex items-center text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        {selectedImage.views}
                      </span>
                      <span className="flex items-center text-sm">
                        <Heart className="w-4 h-4 mr-1" />
                        {selectedImage.likes}
                      </span>
                      <motion.button
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
