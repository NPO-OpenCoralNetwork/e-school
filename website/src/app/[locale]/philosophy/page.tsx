import { getTranslations } from 'next-intl/server';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { 
  Building, 
  Award, 
  TrendingUp, 
  Target,
  Brain,
  Users,
  Sparkles,
  Clock,
  BookOpen,
  BarChart3,
  Lightbulb,
  RefreshCw,
  ScrollText,
  Cpu
} from 'lucide-react';

export default async function PhilosophyPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations('philosophy');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            {t('badge')}
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Government Alignment Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <Building className="inline-block mr-2 text-blue-400" />
            {t('governmentAlignment.title')}
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            {t('governmentAlignment.description')}
          </p>

          {/* Society 5.0 and AI Strategy Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gray-800/50 border-blue-500/30 p-8">
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-blue-500/20 rounded-full mb-4">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('society50.title')}</h3>
                <p className="text-sm text-gray-400">{t('society50.subtitle')}</p>
                <Badge className="mt-2 text-blue-300 border-blue-500/30">
                  {t('society50.source')}
                </Badge>
              </div>
              <div className="space-y-3">
                {['humanCentered', 'personalized', 'socialSolution'].map((key) => (
                  <div key={key} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <div>
                      <p className="text-white font-medium">{t(`society50.${key}.title`)}</p>
                      <p className="text-gray-400 text-sm">{t(`society50.${key}.description`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-gray-800/50 border-purple-500/30 p-8">
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-purple-500/20 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('aiStrategy.title')}</h3>
                <p className="text-sm text-gray-400">{t('aiStrategy.subtitle')}</p>
                <Badge className="mt-2 text-purple-300 border-purple-500/30">
                  {t('aiStrategy.source')}
                </Badge>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium mb-2">{t('aiStrategy.goals.title')}</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-300">• {t('aiStrategy.goals.goal1')}</p>
                    <p className="text-gray-300">• {t('aiStrategy.goals.goal2')}</p>
                    <p className="text-gray-300">• {t('aiStrategy.goals.goal3')}</p>
                  </div>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">{t('aiStrategy.contribution.title')}</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-purple-300">→ {t('aiStrategy.contribution.point1')}</p>
                    <p className="text-purple-300">→ {t('aiStrategy.contribution.point2')}</p>
                    <p className="text-purple-300">→ {t('aiStrategy.contribution.point3')}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Japanese Education Policy Timeline */}
        <section className="mb-20">
          <div className="relative max-w-5xl mx-auto py-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-3">{t('educationHistory.title')}</h3>
              <p className="text-gray-400">{t('educationHistory.subtitle')}</p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gray-600 via-blue-500/50 to-purple-500/50"></div>

              {/* Timeline items */}
              {/* 1947 */}
              <div className="relative flex items-center mb-12 justify-start">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-gray-500/20 border-gray-500/50 border-2 flex items-center justify-center">
                    <ScrollText className="w-5 h-5" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <Badge className="text-gray-400 border-gray-500/50 font-bold text-xs">1947</Badge>
                  </div>
                </div>
                <div className="w-5/12 pr-8 text-right">
                  <Card className="bg-gray-500/20 border-gray-500/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-5">
                      <h4 className="font-bold text-lg mb-2 text-gray-400">{t('educationHistory.timeline.1947.title')}</h4>
                      <p className="text-gray-300 text-sm mb-3">{t('educationHistory.timeline.1947.description')}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-500/20 mb-3">
                        <Target className="w-3 h-3" />
                        <span className="text-xs text-gray-400">{t('educationHistory.timeline.1947.goal')}</span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-700">
                        <p className="text-xs font-semibold text-red-400 mb-2">{t('educationHistory.timeline.1947.problems.title')}</p>
                        <ul className="space-y-1">
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.1947.problems.point1')}</span>
                          </li>
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.1947.problems.point2')}</span>
                          </li>
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.1947.problems.point3')}</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 right-0 bg-gradient-to-r from-transparent to-gray-600"></div>
                </div>
              </div>

              {/* 1960s */}
              <div className="relative flex items-center mb-12 justify-end">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 border-blue-500/50 border-2 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <Badge className="text-blue-400 border-blue-500/50 font-bold text-xs">1960s</Badge>
                  </div>
                </div>
                <div className="w-5/12 pl-8 text-left">
                  <Card className="bg-blue-500/20 border-blue-500/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-5">
                      <h4 className="font-bold text-lg mb-2 text-blue-400">{t('educationHistory.timeline.1960s.title')}</h4>
                      <p className="text-gray-300 text-sm mb-3">{t('educationHistory.timeline.1960s.description')}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 mb-3">
                        <Target className="w-3 h-3" />
                        <span className="text-xs text-gray-400">{t('educationHistory.timeline.1960s.goal')}</span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-700">
                        <p className="text-xs font-semibold text-red-400 mb-2">{t('educationHistory.timeline.1960s.problems.title')}</p>
                        <ul className="space-y-1">
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.1960s.problems.point1')}</span>
                          </li>
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.1960s.problems.point2')}</span>
                          </li>
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.1960s.problems.point3')}</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 left-0 bg-gradient-to-r from-gray-600 to-transparent"></div>
                </div>
              </div>

              {/* 1980s */}
              <div className="relative flex items-center mb-12 justify-start">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 border-yellow-500/50 border-2 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <Badge className="text-yellow-400 border-yellow-500/50 font-bold text-xs">1980s</Badge>
                  </div>
                </div>
                <div className="w-5/12 pr-8 text-right">
                  <Card className="bg-yellow-500/20 border-yellow-500/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-5">
                      <h4 className="font-bold text-lg mb-2 text-yellow-400">{t('educationHistory.timeline.1980s.title')}</h4>
                      <p className="text-gray-300 text-sm mb-3">{t('educationHistory.timeline.1980s.description')}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 mb-3">
                        <Target className="w-3 h-3" />
                        <span className="text-xs text-gray-400">{t('educationHistory.timeline.1980s.goal')}</span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-700">
                        <p className="text-xs font-semibold text-red-400 mb-2">{t('educationHistory.timeline.1980s.problems.title')}</p>
                        <ul className="space-y-1">
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.1980s.problems.point1')}</span>
                          </li>
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.1980s.problems.point2')}</span>
                          </li>
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.1980s.problems.point3')}</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 right-0 bg-gradient-to-r from-transparent to-gray-600"></div>
                </div>
              </div>

              {/* 2002 */}
              <div className="relative flex items-center mb-12 justify-end">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 border-green-500/50 border-2 flex items-center justify-center">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <Badge className="text-green-400 border-green-500/50 font-bold text-xs">2002</Badge>
                  </div>
                </div>
                <div className="w-5/12 pl-8 text-left">
                  <Card className="bg-green-500/20 border-green-500/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-5">
                      <h4 className="font-bold text-lg mb-2 text-green-400">{t('educationHistory.timeline.2002.title')}</h4>
                      <p className="text-gray-300 text-sm mb-3">{t('educationHistory.timeline.2002.description')}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 mb-3">
                        <Target className="w-3 h-3" />
                        <span className="text-xs text-gray-400">{t('educationHistory.timeline.2002.goal')}</span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-700">
                        <p className="text-xs font-semibold text-red-400 mb-2">{t('educationHistory.timeline.2002.problems.title')}</p>
                        <ul className="space-y-1">
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.2002.problems.point1')}</span>
                          </li>
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.2002.problems.point2')}</span>
                          </li>
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.2002.problems.point3')}</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 left-0 bg-gradient-to-r from-gray-600 to-transparent"></div>
                </div>
              </div>

              {/* 2020 */}
              <div className="relative flex items-center mb-12 justify-start">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 border-purple-500/50 border-2 flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <Badge className="text-purple-400 border-purple-500/50 font-bold text-xs">2020</Badge>
                  </div>
                </div>
                <div className="w-5/12 pr-8 text-right">
                  <Card className="bg-purple-500/20 border-purple-500/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-5">
                      <h4 className="font-bold text-lg mb-2 text-purple-400">{t('educationHistory.timeline.2020.title')}</h4>
                      <p className="text-gray-300 text-sm mb-3">{t('educationHistory.timeline.2020.description')}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 mb-3">
                        <Target className="w-3 h-3" />
                        <span className="text-xs text-gray-400">{t('educationHistory.timeline.2020.goal')}</span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-700">
                        <p className="text-xs font-semibold text-red-400 mb-2">{t('educationHistory.timeline.2020.problems.title')}</p>
                        <ul className="space-y-1">
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.2020.problems.point1')}</span>
                          </li>
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.2020.problems.point2')}</span>
                          </li>
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.2020.problems.point3')}</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 right-0 bg-gradient-to-r from-transparent to-gray-600"></div>
                </div>
              </div>

              {/* 2019-2025 */}
              <div className="relative flex items-center mb-12 justify-end">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border-cyan-500/50 border-2 flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <Badge className="text-cyan-400 border-cyan-500/50 font-bold text-xs">2019-2025</Badge>
                  </div>
                </div>
                <div className="w-5/12 pl-8 text-left">
                  <Card className="bg-cyan-500/20 border-cyan-500/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-5">
                      <h4 className="font-bold text-lg mb-2 text-cyan-400">{t('educationHistory.timeline.2019-2025.title')}</h4>
                      <p className="text-gray-300 text-sm mb-3">{t('educationHistory.timeline.2019-2025.description')}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 mb-3">
                        <Target className="w-3 h-3" />
                        <span className="text-xs text-gray-400">{t('educationHistory.timeline.2019-2025.goal')}</span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-700">
                        <p className="text-xs font-semibold text-red-400 mb-2">{t('educationHistory.timeline.2019-2025.problems.title')}</p>
                        <ul className="space-y-1">
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.2019-2025.problems.point1')}</span>
                          </li>
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.2019-2025.problems.point2')}</span>
                          </li>
                          <li className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{t('educationHistory.timeline.2019-2025.problems.point3')}</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 left-0 bg-gradient-to-r from-gray-600 to-transparent"></div>
                </div>
              </div>

              {/* NOW - AI Creator Lab */}
              <div className="relative flex items-center mb-12 justify-start">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-pink-500/50 border-2 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <Badge className="text-pink-400 border-pink-500/50 font-bold text-xs">NOW</Badge>
                  </div>
                </div>
                <div className="w-5/12 pr-8 text-right">
                  <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-pink-500/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-5">
                      <h4 className="font-bold text-lg mb-2 text-pink-400">{t('educationHistory.timeline.now.title')}</h4>
                      <p className="text-gray-300 text-sm mb-3">{t('educationHistory.timeline.now.description')}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-3">
                        <Target className="w-3 h-3" />
                        <span className="text-xs text-gray-400">{t('educationHistory.timeline.now.goal')}</span>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 right-0 bg-gradient-to-r from-transparent to-gray-600"></div>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-purple-500/50"></div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="mt-20 text-center">
              <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-purple-500/30 max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-white mb-6">{t('educationHistory.summary.title')}</h4>
                  <p className="text-gray-300 mb-6">{t('educationHistory.summary.description')}</p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">{t('educationHistory.summary.badges.legitimacy')}</Badge>
                    <Badge className="bg-red-500/20 text-red-300 border-red-500/30">{t('educationHistory.summary.badges.learning')}</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">{t('educationHistory.summary.badges.alignment')}</Badge>
                    <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30">{t('educationHistory.summary.badges.innovation')}</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Integrated Learning Theory Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <Sparkles className="inline-block mr-2 text-yellow-400" />
            {t('learningTheory.title')}
          </h2>
          
          <div className="space-y-6">
            {/* Behaviorist Approach */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t('learningTheory.behaviorist.title')}</h3>
                <p className="text-gray-300 mb-6">{t('learningTheory.behaviorist.description')}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {['habit', 'spacedRepetition', 'immediateFeedback', 'gamification'].map((key) => (
                    <div key={key} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-2 bg-blue-500" />
                      <p className="text-gray-400">{t(`learningTheory.behaviorist.${key}`)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cognitivist Approach */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t('learningTheory.cognitivist.title')}</h3>
                <p className="text-gray-300 mb-6">{t('learningTheory.cognitivist.description')}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {['metacognition', 'personalized', 'visualization', 'informationProcessing'].map((key) => (
                    <div key={key} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-2 bg-purple-500" />
                      <p className="text-gray-400">{t(`learningTheory.cognitivist.${key}`)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Constructivist Approach */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t('learningTheory.constructivist.title')}</h3>
                <p className="text-gray-300 mb-6">{t('learningTheory.constructivist.description')}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {['inquiry', 'meaningConstruction', 'collaboration', 'experiential'].map((key) => (
                    <div key={key} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-2 bg-green-500" />
                      <p className="text-gray-400">{t(`learningTheory.constructivist.${key}`)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 3-Stage Output System */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <Target className="inline-block mr-2 text-blue-400" />
            {t('outputSystem.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Immediate Output */}
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t('outputSystem.immediate.title')}</h3>
                    <p className="text-sm text-gray-400">{t('outputSystem.immediate.timeframe')}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{t('outputSystem.immediate.description')}</p>
                <ul className="space-y-2">
                  {['point1', 'point2', 'point3'].map((point) => (
                    <li key={point} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      {t(`outputSystem.immediate.${point}`)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Short-term Output */}
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t('outputSystem.shortTerm.title')}</h3>
                    <p className="text-sm text-gray-400">{t('outputSystem.shortTerm.timeframe')}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{t('outputSystem.shortTerm.description')}</p>
                <ul className="space-y-2">
                  {['point1', 'point2', 'point3'].map((point) => (
                    <li key={point} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      {t(`outputSystem.shortTerm.${point}`)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Long-term Output */}
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t('outputSystem.longTerm.title')}</h3>
                    <p className="text-sm text-gray-400">{t('outputSystem.longTerm.timeframe')}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{t('outputSystem.longTerm.description')}</p>
                <ul className="space-y-2">
                  {['point1', 'point2', 'point3'].map((point) => (
                    <li key={point} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      {t(`outputSystem.longTerm.${point}`)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI's Role Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <Brain className="inline-block mr-2 text-purple-400" />
            {t('aiRole.title')}
          </h2>

          <div className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">
                  {t('aiRole.selfReflection.title')}
                </h3>
                <p className="text-gray-300 mb-4">{t('aiRole.selfReflection.description')}</p>
                <div className="flex flex-wrap gap-3">
                  {['neutral', 'patience', 'consistency'].map((feature) => (
                    <Badge key={feature} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {t(`aiRole.selfReflection.${feature}`)}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">
                  {t('aiRole.socialReflection.title')}
                </h3>
                <p className="text-gray-300 mb-4">{t('aiRole.socialReflection.description')}</p>
                <div className="flex flex-wrap gap-3">
                  {['multiPerspective', 'constructive', 'unbiased'].map((feature) => (
                    <Badge key={feature} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {t(`aiRole.socialReflection.${feature}`)}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">
                  {t('aiRole.metacognitive.title')}
                </h3>
                <p className="text-gray-300 mb-4">{t('aiRole.metacognitive.description')}</p>
                <div className="flex flex-wrap gap-3">
                  {['dataBasedReflection', 'growthMindset', 'learningOptimization'].map((feature) => (
                    <Badge key={feature} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {t(`aiRole.metacognitive.${feature}`)}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Big Five Personality Analysis */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <Users className="inline-block mr-2 text-green-400" />
            {t('bigFive.title')}
          </h2>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism'].map((trait) => (
                  <div key={trait} className="text-center">
                    <div className="mb-3 p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg">
                      <h4 className="font-bold text-green-400">{t(`bigFive.${trait}.title`)}</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-300">{t(`bigFive.${trait}.high`)}</p>
                      <p className="text-gray-400">{t(`bigFive.${trait}.low`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl text-gray-300 mb-8">{t('cta.subtitle')}</p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-xl transition-all text-lg">
            {t('cta.button')}
          </button>
        </div>
      </div>
    </div>
  );
}