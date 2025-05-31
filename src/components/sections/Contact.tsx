"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, Clock, ArrowRight, ExternalLink } from "lucide-react";
import teamData from "@/data/team.json";
import Button from "@/components/ui/Button";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const contactOptions = [
    {
      title: "Partnership Opportunities",
      description: "Interested in sponsoring our journey to the World Finals?",
      action: "Discuss Partnership",
      href: "mailto:hello@silverstonerevolutionracing.com?subject=Partnership Opportunity",
      color: "from-brand-red/10 to-red-100",
      icon: "🤝",
    },
    {
      title: "Media & Press Inquiries",
      description:
        "Press interviews, media coverage, and promotional opportunities",
      action: "Media Contact",
      href: "mailto:hello@silverstonerevolutionracing.com?subject=Media Inquiry",
      color: "from-brand-blue/10 to-blue-100",
      icon: "📰",
    },
    {
      title: "General Questions",
      description: "Questions about our team, competitions, or STEM Racing",
      action: "Ask a Question",
      href: "mailto:hello@silverstonerevolutionracing.com?subject=General Inquiry",
      color: "from-gray-50 to-gray-100",
      icon: "💬",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-brand-black mb-4 font-exo2"
          >
            Get in Touch
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-brand-red mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto font-inter leading-relaxed"
          >
            Ready to join our journey to the World Finals? Choose how you&apos;d
            like to connect with us.
          </motion.p>
        </motion.div>

        {/* Direct Contact Section - Email and Location */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-6 mb-12"
        >
          {/* Email Contact */}
          <motion.div variants={cardVariants}>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 h-full">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-brand-red" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-black font-exo2 mb-2">
                    Email Us Directly
                  </h3>
                  <p className="text-gray-600 font-inter mb-4">
                    For all inquiries, partnerships, and media requests
                  </p>
                  <a
                    href="mailto:hello@silverstonerevolutionracing.com"
                    className="text-brand-red hover:text-red-600 font-semibold font-inter transition-colors break-all"
                  >
                    hello@silverstonerevolutionracing.com
                  </a>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 font-inter mt-2">
                    <Clock size={16} />
                    <span>Response within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div variants={cardVariants}>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 h-full">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-blue" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-black font-exo2 mb-2">
                    Our Location
                  </h3>
                  <p className="text-gray-600 font-inter mb-4">
                    Based at the heart of British Motorsport
                  </p>
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-700 font-inter">
                      {teamData.teamInfo.school}
                    </p>
                    <p className="text-gray-600 font-inter">
                      {teamData.teamInfo.location}
                    </p>
                    <p className="text-sm text-gray-500 font-inter">
                      Established {teamData.teamInfo.founded}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Options Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {contactOptions.map((option) => (
            <motion.div
              key={option.title}
              variants={cardVariants}
              className="group"
            >
              <Link href={option.href}>
                <div
                  className={`bg-gradient-to-br ${option.color} rounded-xl p-8 h-full border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105 cursor-pointer`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{option.icon}</div>
                    <h3 className="text-xl font-bold text-brand-black font-exo2 mb-4">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 font-inter mb-6 leading-relaxed">
                      {option.description}
                    </p>
                    <div className="inline-flex items-center space-x-2 text-brand-red font-semibold font-inter group-hover:text-red-600 transition-colors">
                      <span>{option.action}</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action - Same Width Container, No Border */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-r from-brand-blue/5 to-brand-red/5 rounded-xl p-8 md:p-12"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-black font-exo2 mb-4">
                Ready to Support Our Journey?
              </h3>
              <p className="text-lg text-gray-700 font-inter mb-8 leading-relaxed max-w-3xl mx-auto">
                From the heart of British Motorsport, we&apos;re racing towards
                excellence. Partner with us and be part of something
                extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:hello@silverstonerevolutionracing.com?subject=Partnership Inquiry">
                  <Button variant="primary" className="w-full sm:w-auto">
                    <Mail size={20} className="mr-2" />
                    Start Conversation
                  </Button>
                </Link>
                <Link href="/partners">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    <span>View Our Partners</span>
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
