import { motion } from "framer-motion";

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  height = "large",
  children,
}) => {
  const heightClasses = {
    small: "h-64 md:h-80",
    medium: "h-80 md:h-96",
    large: "h-96 md:h-screen",
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center text-white text-center overflow-hidden`}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-600/50"></div>

      <div className="container-custom relative z-10 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-amber-500/20 rounded-full"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-20 w-12 h-12 bg-blue-300/20 rounded-full"
        animate={{
          x: [0, 10, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </section>
  );
};

export default Hero;
