'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  Palette, 
  Users, 
  Cloud, 
  Smartphone, 
  Globe, 
  Accessibility,
  Code2,
  FileText,
  CheckCircle,
  BarChart3,
  CloudIcon,
  Settings,
  Layers,
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface Feature {
  id: string;
  key: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface FeatureCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  features: Feature[];
  accentColor: string;
  bgGradient: string;
}

const PlatformFeaturesUI = () => {
  const t = useTranslations('platformFeatures');
  const [showCodeView, setShowCodeView] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const platformFeatures: FeatureCategory[] = [
    {
      id: 'design',
      title: t('design.title'),
      subtitle: t('design.subtitle'),
      icon: <Palette className="w-6 h-6" />,
      accentColor: 'from-purple-400 to-pink-400',
      bgGradient: 'from-purple-500/5 via-pink-500/5 to-purple-500/5',
      features: [
        {
          id: 'intuitive',
          key: 'intuitive',
          value: t('design.features.intuitive.value'),
          description: t('design.features.intuitive.description'),
          icon: <Smartphone className="w-5 h-5" />,
          color: 'text-purple-400'
        },
        {
          id: 'accessible',
          key: 'accessible',
          value: t('design.features.accessible.value'),
          description: t('design.features.accessible.description'),
          icon: <Accessibility className="w-5 h-5" />,
          color: 'text-blue-400'
        },
        {
          id: 'multilingual',
          key: 'multilingual',
          value: t('design.features.multilingual.value'),
          description: t('design.features.multilingual.description'),
          icon: <Globe className="w-5 h-5" />,
          color: 'text-green-400'
        },
        {
          id: 'responsive',
          key: 'responsive',
          value: t('design.features.responsive.value'),
          description: t('design.features.responsive.description'),
          icon: <Layers className="w-5 h-5" />,
          color: 'text-orange-400'
        }
      ]
    },
    {
      id: 'educator_tools',
      title: t('educatorTools.title'),
      subtitle: t('educatorTools.subtitle'),
      icon: <Users className="w-6 h-6" />,
      accentColor: 'from-blue-400 to-cyan-400',
      bgGradient: 'from-blue-500/5 via-cyan-500/5 to-blue-500/5',
      features: [
        {
          id: 'no_coding',
          key: 'no_coding',
          value: t('educatorTools.features.noCoding.value'),
          description: t('educatorTools.features.noCoding.description'),
          icon: <Code2 className="w-5 h-5" />,
          color: 'text-blue-400'
        },
        {
          id: 'template_library',
          key: 'template_library',
          value: t('educatorTools.features.templateLibrary.value'),
          description: t('educatorTools.features.templateLibrary.description'),
          icon: <FileText className="w-5 h-5" />,
          color: 'text-cyan-400'
        },
        {
          id: 'auto_assessment',
          key: 'auto_assessment',
          value: t('educatorTools.features.autoAssessment.value'),
          description: t('educatorTools.features.autoAssessment.description'),
          icon: <CheckCircle className="w-5 h-5" />,
          color: 'text-green-400'
        },
        {
          id: 'progress_analytics',
          key: 'progress_analytics',
          value: t('educatorTools.features.progressAnalytics.value'),
          description: t('educatorTools.features.progressAnalytics.description'),
          icon: <BarChart3 className="w-5 h-5" />,
          color: 'text-purple-400'
        }
      ]
    },
    {
      id: 'deployment',
      title: t('deployment.title'),
      subtitle: t('deployment.subtitle'),
      icon: <Cloud className="w-6 h-6" />,
      accentColor: 'from-green-400 to-blue-400',
      bgGradient: 'from-green-500/5 via-blue-500/5 to-green-500/5',
      features: [
        {
          id: 'cloud',
          key: 'cloud',
          value: t('deployment.features.cloud.value'),
          description: t('deployment.features.cloud.description'),
          icon: <CloudIcon className="w-5 h-5" />,
          color: 'text-blue-400'
        },
        {
          id: 'hybrid',
          key: 'hybrid',
          value: t('deployment.features.hybrid.value'),
          description: t('deployment.features.hybrid.description'),
          icon: <Zap className="w-5 h-5" />,
          color: 'text-yellow-400'
        },
        {
          id: 'scalable',
          key: 'scalable',
          value: t('deployment.features.scalable.value'),
          description: t('deployment.features.scalable.description'),
          icon: <Layers className="w-5 h-5" />,
          color: 'text-indigo-400'
        },
        {
          id: 'customizable',
          key: 'customizable',
          value: t('deployment.features.customizable.value'),
          description: t('deployment.features.customizable.description'),
          icon: <Settings className="w-5 h-5" />,
          color: 'text-gray-400'
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(platformFeatures[0].id);
  const currentCategory = platformFeatures.find(cat => cat.id === activeCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full border border-purple-500/20 mb-4 sm:mb-6"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
          <span className="text-sm sm:text-base text-purple-300 font-medium">{t('badge')}</span>
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4"
        >
          {t('title')}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4"
        >
          {t('subtitle')}
        </motion.p>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center mb-6 sm:mb-8 px-4">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1 flex w-full max-w-xs sm:max-w-none sm:w-auto">
          <button
            onClick={() => setShowCodeView(false)}
            className={`
              px-3 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 flex-1 sm:flex-initial justify-center text-sm sm:text-base
              ${!showCodeView 
                ? 'bg-white/10 text-white shadow-lg' 
                : 'text-gray-400 hover:text-gray-300'
              }
            `}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">{t('visualView')}</span>
            <span className="sm:hidden">Visual</span>
          </button>
          <button
            onClick={() => setShowCodeView(true)}
            className={`
              px-3 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 flex-1 sm:flex-initial justify-center text-sm sm:text-base
              ${showCodeView 
                ? 'bg-white/10 text-white shadow-lg' 
                : 'text-gray-400 hover:text-gray-300'
              }
            `}
          >
            <Code2 className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">TypeScript</span>
            <span className="sm:hidden">Code</span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!showCodeView ? (
          <motion.div
            key="visual"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category Tabs */}
            <div className="flex flex-col sm:flex-row justify-center mb-8 sm:mb-12 gap-2 sm:gap-4 px-4">
              {platformFeatures.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    relative px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium transition-all duration-300
                    flex items-center gap-2 sm:gap-3 min-w-0 sm:min-w-[200px] justify-center text-sm sm:text-base
                    ${activeCategory === category.id 
                      ? 'bg-white/15 text-white shadow-2xl border border-white/30' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 border border-white/10'
                    }
                  `}
                >
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 bg-gradient-to-r ${category.accentColor} opacity-20 rounded-2xl`}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                    <span className="flex-shrink-0">{category.icon}</span>
                    <span className="font-semibold truncate">{category.title}</span>
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Main Content Area */}
            <AnimatePresence mode="wait">
              {currentCategory && (
                <motion.div
                  key={currentCategory.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-gradient-to-br ${currentCategory.bgGradient} rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-6 lg:p-8 mx-4 sm:mx-0`}
                >
                  {/* Category Header */}
                  <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                    <motion.div 
                      className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r ${currentCategory.accentColor} bg-opacity-20 border border-white/20 mb-3 sm:mb-4`}
                    >
                      {currentCategory.icon}
                      <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">
                        {currentCategory.title}
                      </span>
                    </motion.div>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg px-4">
                      {currentCategory.subtitle}
                    </p>
                  </div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {currentCategory.features.map((feature, index) => (
                      <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onHoverStart={() => setHoveredFeature(feature.id)}
                        onHoverEnd={() => setHoveredFeature(null)}
                        className={`
                          relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 
                          bg-white/5 backdrop-blur-sm w-full max-w-full
                          hover:border-white/30 transition-all duration-300
                          hover:transform hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-2xl
                          cursor-pointer group
                        `}
                      >
                        {/* TypeScript-style property display */}
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <div className={`
                            flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 
                            rounded-lg sm:rounded-xl ${feature.color}
                            bg-white/10 group-hover:bg-white/20 transition-all duration-300
                            shadow-lg flex-shrink-0
                          `}>
                            {feature.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-mono text-xs sm:text-sm text-gray-400 mb-1">
                              {feature.key}:
                            </div>
                            <h4 className="font-bold text-white text-base sm:text-lg group-hover:text-white transition-colors leading-tight break-words hyphens-auto">
                              "{feature.value}"
                            </h4>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base whitespace-pre-line">
                          {feature.description}
                        </p>

                        {/* Hover Arrow */}
                        <div className="flex justify-end">
                          <div className={`
                            ${feature.color} opacity-0 group-hover:opacity-100 
                            transition-all duration-300 transform translate-x-2 group-hover:translate-x-0
                          `}>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <AnimatePresence>
                          {hoveredFeature === feature.id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl sm:rounded-2xl pointer-events-none"
                            />
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="code"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/70 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl mx-4 sm:mx-0"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="font-mono text-xs sm:text-sm text-gray-400">TypeScript Interface</span>
              </div>
            </div>
            
            <pre className="text-xs sm:text-sm text-gray-300 font-mono overflow-x-auto leading-relaxed">
              <code className="text-blue-300">interface</code>{' '}
              <code className="text-green-300">InclusivePlatform</code>{' '}
              <code className="text-white">{'{'}</code>
              {'\n  '}
              <code className="text-gray-500">// {t('codeView.commentDesign')}</code>
              {'\n  '}
              <code className="text-yellow-300">design</code>
              <code className="text-white">: {'{'}</code>
              {'\n    '}
              <code className="text-cyan-300">intuitive</code>
              <code className="text-white">:</code>{' '}
              <code className="text-orange-300">"{t('design.features.intuitive.value')}"</code>
              <code className="text-white">,</code>
              {'\n    '}
              <code className="text-cyan-300">accessible</code>
              <code className="text-white">:</code>{' '}
              <code className="text-orange-300">"{t('design.features.accessible.value')}"</code>
              <code className="text-white">,</code>
              {'\n    '}
              <code className="text-cyan-300">multilingual</code>
              <code className="text-white">:</code>{' '}
              <code className="text-orange-300">"{t('design.features.multilingual.value')}"</code>
              <code className="text-white">,</code>
              {'\n    '}
              <code className="text-cyan-300">responsive</code>
              <code className="text-white">:</code>{' '}
              <code className="text-orange-300">"{t('design.features.responsive.value')}"</code>
              {'\n  '}
              <code className="text-white">{'}'}</code>
              <code className="text-white">,</code>
              {'\n\n  '}
              <code className="text-gray-500">// {t('codeView.commentEducator')}</code>
              {'\n  '}
              <code className="text-yellow-300">educator_tools</code>
              <code className="text-white">: {'{'}</code>
              {'\n    '}
              <code className="text-cyan-300">no_coding</code>
              <code className="text-white">:</code>{' '}
              <code className="text-orange-300">"{t('educatorTools.features.noCoding.value')}"</code>
              <code className="text-white">,</code>
              {'\n    '}
              <code className="text-cyan-300">template_library</code>
              <code className="text-white">:</code>{' '}
              <code className="text-orange-300">"{t('educatorTools.features.templateLibrary.value')}"</code>
              <code className="text-white">,</code>
              {'\n    '}
              <code className="text-cyan-300">auto_assessment</code>
              <code className="text-white">:</code>{' '}
              <code className="text-orange-300">"{t('educatorTools.features.autoAssessment.value')}"</code>
              <code className="text-white">,</code>
              {'\n    '}
              <code className="text-cyan-300">progress_analytics</code>
              <code className="text-white">:</code>{' '}
              <code className="text-orange-300">"{t('educatorTools.features.progressAnalytics.value')}"</code>
              {'\n  '}
              <code className="text-white">{'}'}</code>
              <code className="text-white">,</code>
              {'\n\n  '}
              <code className="text-gray-500">// {t('codeView.commentDeployment')}</code>
              {'\n  '}
              <code className="text-yellow-300">deployment</code>
              <code className="text-white">: {'{'}</code>
              {'\n    '}
              <code className="text-cyan-300">cloud</code>
              <code className="text-white">:</code>{' '}
              <code className="text-orange-300">"{t('deployment.features.cloud.value')}"</code>
              <code className="text-white">,</code>
              {'\n    '}
              <code className="text-cyan-300">hybrid</code>
              <code className="text-white">:</code>{' '}
              <code className="text-orange-300">"{t('deployment.features.hybrid.value')}"</code>
              <code className="text-white">,</code>
              {'\n    '}
              <code className="text-cyan-300">scalable</code>
              <code className="text-white">:</code>{' '}
              <code className="text-orange-300">"{t('deployment.features.scalable.value')}"</code>
              <code className="text-white">,</code>
              {'\n    '}
              <code className="text-cyan-300">customizable</code>
              <code className="text-white">:</code>{' '}
              <code className="text-orange-300">"{t('deployment.features.customizable.value')}"</code>
              {'\n  '}
              <code className="text-white">{'}'}</code>
              {'\n'}
              <code className="text-white">{'}'}</code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlatformFeaturesUI;