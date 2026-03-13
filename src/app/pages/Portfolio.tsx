import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { FloatingCircle, RetroGrid, RetroBlob, RetroStar, WavyLine } from "../components/RetroShapes";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function Portfolio() {
  const projects = [
    {
      title: "PASTEL DREAMS",
      category: "Art & Design",
      image: "https://images.unsplash.com/photo-1769720205071-e5be519aa3f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydHdvcmslMjBwYXN0ZWwlMjBwYWludGluZ3xlbnwxfHx8fDE3NzMyNTA3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#EC7A5E",
    },
    {
      title: "HANDMADE LOVE",
      category: "Crafts",
      image: "https://images.unsplash.com/photo-1764512680129-628347e96dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNyYWZ0cyUyMGNvbG9yZnVsJTIwa25pdHRpbmd8ZW58MXx8fHwxNzczMjUwNzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#F3A6A6",
    },
    {
      title: "WATERCOLOR WHIMSY",
      category: "Illustration",
      image: "https://images.unsplash.com/photo-1734551330916-c02cc559045d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwaWxsdXN0cmF0aW9uJTIwZmVtaW5pbmUlMjBhcnR8ZW58MXx8fHwxNzczMjUwNzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#6BB1AD",
    },
    {
      title: "FLORAL FANTASY",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1727127658528-7307329e073d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBwaG90b2dyYXBoeSUyMHBpbmslMjBmbG93ZXJzfGVufDF8fHx8MTc3MzI1MDc2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#E8ECB9",
    },
    {
      title: "DIGITAL DAYDREAMS",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1763931274678-3e61d1ed81c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwcGFzdGVsJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc3MzI1MDc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#7F9F9F",
    },
    {
      title: "CERAMIC CUTIES",
      category: "Pottery",
      image: "https://images.unsplash.com/photo-1696695563696-a883df5a585e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMHBpbmslMjBwYXN0ZWx8ZW58MXx8fHwxNzczMjUwNzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#F3A6A6",
    },
  ];

  return (
    <div className="min-h-screen pb-20 font-['Space_Grotesk'] relative overflow-hidden">
      <RetroGrid />
      <FloatingCircle color="#EC7A5E" size="400px" top="20%" left="80%" delay={0} />
      <FloatingCircle color="#6BB1AD" size="350px" top="60%" left="5%" delay={1} />
      
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        <RetroBlob color="#E8ECB9" className="top-10 left-10 opacity-20" />
        <RetroStar color="#F3A6A6" size={90} className="absolute top-20 right-32 opacity-20" />
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-7xl font-['Unbounded'] mb-6"
            style={{ fontWeight: 900 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-[#EC7A5E] via-[#F3A6A6] to-[#6BB1AD] bg-clip-text text-transparent">
              MY WORK
            </span>
          </motion.h1>
          <WavyLine color="#EC7A5E" className="w-64 mx-auto mb-6" />
          <p className="text-xl text-[#1a1a1a]/70 font-['DM_Mono'] uppercase tracking-widest">
            ✦ Selected Projects ✦
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-[#EC7A5E] to-[#F3A6A6] p-12 border-4 border-[#1a1a1a] shadow-[16px_16px_0px_0px_rgba(26,26,26,1)] relative overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,0.15) 15px, rgba(255,255,255,0.15) 30px)",
              }}
              animate={{ backgroundPosition: ["0px 0px", "42px 42px"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <motion.div
                className="inline-block mb-4"
                animate={{ rotate: [0, -2, 2, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="bg-white px-6 py-2 border-2 border-[#1a1a1a] font-['DM_Mono'] uppercase tracking-widest">
                  ⭐ Featured
                </div>
              </motion.div>
              
              <h2 className="text-5xl font-['Unbounded'] text-white mb-6 leading-tight" style={{ fontWeight: 900 }}>
                LATEST PROJECT
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                My most recent work that combines bold aesthetics, thoughtful design, and a whole lot of creative energy. This project pushed my boundaries and I'm super proud of it!
              </p>
              <motion.button 
                className="bg-white text-[#EC7A5E] px-8 py-4 font-['Space_Grotesk'] uppercase tracking-wider border-2 border-[#1a1a1a] shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] flex items-center gap-3"
                style={{ fontWeight: 700 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "6px 6px 0px 0px rgba(26,26,26,1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </div>
            
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.03, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="border-3 border-[#1a1a1a] shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] overflow-hidden bg-white p-2">
                <ImageWithFallback
                  src={projects[0].image}
                  alt="Featured Project"
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-['Unbounded'] mb-4" style={{ fontWeight: 800 }}>
              MORE PROJECTS
            </h2>
            <WavyLine color="#6BB1AD" className="w-48 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="border-3 border-[#1a1a1a] shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] transition-all overflow-hidden bg-white">
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>
                    <div 
                      className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#1a1a1a] group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: project.color }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="inline-block bg-[#1a1a1a] text-white px-3 py-1 text-xs font-['DM_Mono'] uppercase tracking-widest mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-['Unbounded'] mb-3" style={{ fontWeight: 700 }}>
                      {project.title}
                    </h3>
                    <p className="text-[#1a1a1a]/70 mb-4">
                      A creative project that showcases my passion for design and attention to detail.
                    </p>
                    <motion.div
                      className="flex items-center gap-2 text-[#EC7A5E] font-['Space_Grotesk'] uppercase tracking-wider"
                      style={{ fontWeight: 600, fontSize: '14px' }}
                      whileHover={{ x: 5 }}
                    >
                      View Details
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#6BB1AD] to-[#7F9F9F] p-12 border-4 border-[#1a1a1a] shadow-[16px_16px_0px_0px_rgba(26,26,26,1)] text-center relative overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 20px)",
              }}
            />
            
            <div className="relative z-10">
              <motion.div
                className="text-6xl mb-6"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✦
              </motion.div>
              <h3 className="text-4xl font-['Unbounded'] text-white mb-6" style={{ fontWeight: 900 }}>
                LET'S CREATE TOGETHER
              </h3>
              <p className="text-white/90 text-lg mb-8">
                Got a cool project in mind? Let's make something awesome!
              </p>
              <motion.button 
                className="bg-white text-[#6BB1AD] px-10 py-4 font-['Space_Grotesk'] uppercase tracking-wider border-2 border-[#1a1a1a] shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
                style={{ fontWeight: 700 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "8px_8px_0px_0px_rgba(26,26,26,1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
