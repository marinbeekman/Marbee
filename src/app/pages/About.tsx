import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { FloatingCircle, RetroGrid, RetroBlob, RetroStar, WavyLine } from "../components/RetroShapes";
import { Coffee, BookOpen, Camera, Sparkles, Heart, Zap } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const interests = [
    { icon: Coffee, label: "COFFEE ADDICT", color: "#EC7A5E" },
    { icon: BookOpen, label: "BOOK LOVER", color: "#6BB1AD" },
    { icon: Camera, label: "PHOTOGRAPHER", color: "#F3A6A6" },
    { icon: Sparkles, label: "CREATOR", color: "#E8ECB9" },
    { icon: Heart, label: "DESIGNER", color: "#7F9F9F" },
    { icon: Zap, label: "DREAMER", color: "#EC7A5E" },
  ];

  return (
    <div className="min-h-screen pb-20 font-['Space_Grotesk'] relative overflow-hidden">
      <RetroGrid />
      <FloatingCircle color="#F3A6A6" size="350px" top="5%" left="70%" delay={0} />
      <FloatingCircle color="#6BB1AD" size="400px" top="50%" left="10%" delay={1.5} />
      
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        <RetroBlob color="#E8ECB9" className="top-20 right-10 opacity-20" />
        <RetroStar color="#EC7A5E" size={100} className="absolute top-0 left-20 opacity-20" />
        
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
              ABOUT ME
            </span>
          </motion.h1>
          <WavyLine color="#EC7A5E" className="w-64 mx-auto mb-6" />
          <p className="text-xl text-[#1a1a1a]/70 font-['DM_Mono'] uppercase tracking-widest">
            ✦ Get to know me ✦
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ rotate: 3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="border-4 border-[#1a1a1a] shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1629654858857-615c2c8be8a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhc3RlbCUyMGdyYWRpZW50JTIwd2F0ZXJjb2xvcnxlbnwxfHx8fDE3NzMyNTA2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="About"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 bg-[#6BB1AD] p-6 border-3 border-[#1a1a1a] shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="font-['Unbounded'] text-5xl text-white" style={{ fontWeight: 800 }}>✦</div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-[#EC7A5E] to-[#F3A6A6] p-8 border-3 border-[#1a1a1a] shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 20px)",
                }}
              />
              <h2 className="text-3xl font-['Unbounded'] text-white mb-4" style={{ fontWeight: 800 }}>
                HEY THERE! 👋
              </h2>
              <p className="text-white/90 leading-relaxed text-lg">
                I'm a creative soul who loves all things design, coffee, and making the digital world more beautiful. When I'm not creating, you'll find me exploring new places or getting lost in a good book.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#E8ECB9] p-8 border-3 border-[#1a1a1a] shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-['Unbounded'] text-[#1a1a1a] mb-4" style={{ fontWeight: 700 }}>
                MY JOURNEY
              </h3>
              <p className="text-[#1a1a1a]/80 leading-relaxed text-lg">
                Started as a dreamer with a sketchbook, evolved into a creator with a purpose. Every project is a new adventure, every design tells a story.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 border-3 border-[#1a1a1a] shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-['Unbounded'] text-[#1a1a1a] mb-4" style={{ fontWeight: 700 }}>
                WHAT I DO
              </h3>
              <p className="text-[#1a1a1a]/80 leading-relaxed text-lg">
                Design. Create. Repeat. I bring ideas to life through thoughtful design, bold colors, and a whole lot of passion.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Interests Grid */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h2 className="text-5xl font-['Unbounded'] text-center mb-4" style={{ fontWeight: 900 }}>
            <span className="bg-gradient-to-r from-[#6BB1AD] to-[#EC7A5E] bg-clip-text text-transparent">
              THINGS I LOVE
            </span>
          </h2>
          <WavyLine color="#F3A6A6" className="w-48 mx-auto mb-12" />
          
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              
              return (
                <motion.div
                  key={interest.label}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: index % 2 === 0 ? 3 : -3
                  }}
                >
                  <div 
                    className="p-8 border-3 border-[#1a1a1a] shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] group-hover:shadow-[10px_10px_0px_0px_rgba(26,26,26,1)] transition-all"
                    style={{ backgroundColor: interest.color }}
                  >
                    <Icon className="w-12 h-12 text-white mb-4" strokeWidth={2.5} />
                    <h4 className="text-xl font-['Unbounded'] text-white" style={{ fontWeight: 700 }}>
                      {interest.label}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto bg-white p-12 border-4 border-[#1a1a1a] shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] relative">
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#F3A6A6] px-8 py-3 border-3 border-[#1a1a1a]"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-['Unbounded'] text-white text-xl" style={{ fontWeight: 800 }}>
                FUN FACTS
              </span>
            </motion.div>
            
            <div className="space-y-6 mt-8">
              {[
                "📚 Obsessed with collecting notebooks (yes, I have a problem)",
                "☕ Coffee is my creative fuel—iced or hot, doesn't matter",
                "✨ Believe every day deserves a little sparkle",
                "🎨 Can't resist a good color palette",
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-[#EC7A5E] mt-3 flex-shrink-0"></div>
                  <p className="text-[#1a1a1a]">{fact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
