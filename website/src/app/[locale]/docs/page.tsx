"use client";

import { Link } from "@/i18n/routing";
import { useState, useMemo } from "react";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Settings, FileText, Search, Download, Menu, X, Home, ArrowRight, Clock, Users, Star } from "lucide-react";

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const t = useTranslations('docs');

  const documentSections = [
    {
      id: "overview",
      title: t('sections.overview.title'),
      description: t('sections.overview.description'),
      icon: BookOpen,
      priority: "high",
      docs: [
        {
          title: t('documents.projectBackground.title'),
          description: t('documents.projectBackground.description'),
          href: "/docs/project-background",
          color: "bg-indigo-500",
          tags: [t('documents.projectBackground.tag1'), t('documents.projectBackground.tag2'), t('documents.projectBackground.tag3')],
          readTime: "15 min read",
          status: "完成"
        },
        {
          title: t('documents.educationalProposal.title'),
          description: t('documents.educationalProposal.description'),
          href: "/docs/educational-proposal",
          color: "bg-cyan-500",
          tags: [t('documents.educationalProposal.tag1'), t('documents.educationalProposal.tag2'), t('documents.educationalProposal.tag3')],
          readTime: "20 min read",
          status: "完成"
        },
        {
          title: t('documents.readme.title'),
          description: t('documents.readme.description'),
          href: "/docs/readme",
          color: "bg-blue-500",
          tags: [t('documents.readme.tag1'), t('documents.readme.tag2'), t('documents.readme.tag3')],
          readTime: "8 min read",
          status: "完成"
        }
      ]
    },
    {
      id: "strategy",
      title: t('sections.strategy.title'),
      description: t('sections.strategy.description'),
      icon: FileText,
      priority: "high",
      docs: [
        {
          title: t('documents.strategyGuide.title'),
          description: t('documents.strategyGuide.description'),
          href: "/docs/strategy",
          color: "bg-purple-600",
          tags: [t('documents.strategyGuide.tag1'), t('documents.strategyGuide.tag2'), t('documents.strategyGuide.tag3')],
          readTime: "18分",
          status: "準備中"
        },
        {
          title: t('documents.grantsGuide.title'),
          description: t('documents.grantsGuide.description'),
          href: "/docs/grants",
          color: "bg-green-600",
          tags: [t('documents.grantsGuide.tag1'), t('documents.grantsGuide.tag2'), t('documents.grantsGuide.tag3')],
          readTime: "25分",
          status: "準備中"
        },
        {
          title: t('documents.businessPlan.title'),
          description: t('documents.businessPlan.description'),
          href: "/docs/business-plan",
          color: "bg-orange-600",
          tags: [t('documents.businessPlan.tag1'), t('documents.businessPlan.tag2'), t('documents.businessPlan.tag3')],
          readTime: "22分",
          status: "準備中"
        }
      ]
    },
    {
      id: "services",
      title: t('sections.services.title'),
      description: t('sections.services.description'),
      icon: Users,
      priority: "medium",
      docs: [
        {
          title: t('documents.adultSchool.title'),
          description: t('documents.adultSchool.description'),
          href: "/docs/adult-school",
          color: "bg-blue-500",
          tags: [t('documents.adultSchool.tag1'), t('documents.adultSchool.tag2'), t('documents.adultSchool.tag3')],
          readTime: "18分",
          status: "準備中"
        },
        {
          title: t('documents.kidsSchool.title'),
          description: t('documents.kidsSchool.description'),
          href: "/docs/kids-school",
          color: "bg-green-500",
          tags: [t('documents.kidsSchool.tag1'), t('documents.kidsSchool.tag2'), t('documents.kidsSchool.tag3')],
          readTime: "15分",
          status: "準備中"
        },
        {
          title: t('documents.corporateService.title'),
          description: t('documents.corporateService.description'),
          href: "/docs/corporate",
          color: "bg-purple-500",
          tags: [t('documents.corporateService.tag1'), t('documents.corporateService.tag2'), t('documents.corporateService.tag3')],
          readTime: "20分",
          status: "準備中"
        }
      ]
    },
    {
      id: "development",
      title: t('sections.development.title'),
      description: t('sections.development.description'),
      icon: Code,
      priority: "low",
      docs: [
        {
          title: t('documents.setupGuide.title'),
          description: t('documents.setupGuide.description'),
          href: "/docs/setup",
          color: "bg-indigo-500",
          tags: [t('documents.setupGuide.tag1'), t('documents.setupGuide.tag2'), t('documents.setupGuide.tag3')],
          readTime: "30分",
          status: "準備中"
        },
        {
          title: t('documents.apiSpec.title'),
          description: t('documents.apiSpec.description'),
          href: "/docs/api",
          color: "bg-orange-500",
          tags: [t('documents.apiSpec.tag1'), t('documents.apiSpec.tag2'), t('documents.apiSpec.tag3')],
          readTime: "35分",
          status: "準備中"
        }
      ]
    }
  ];

  // 検索フィルタリング
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return documentSections;
    
    return documentSections.map(section => ({
      ...section,
      docs: section.docs.filter(doc => 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    })).filter(section => section.docs.length > 0);
  }, [searchQuery]);

  const totalDocs = documentSections.reduce((acc, section) => acc + section.docs.length, 0);
  const completedDocs = documentSections.reduce((acc, section) => 
    acc + section.docs.filter(doc => doc.status === "完成").length, 0);

  const quickLinks = [
    { name: t('gettingStarted'), href: "/docs/project-background", icon: BookOpen },
    { name: t('setup'), href: "/docs/setup", icon: Settings },
    { name: t('apiSpecs'), href: "/docs/api", icon: Code },
    { name: t('contact'), href: "/contact", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* ヘッダー */}
      <div className="relative bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Home className="w-4 h-4 mr-2" />
                {t('home')}
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-600" />
              <span className="text-white font-medium">{t('documentation')}</span>
            </div>
            
            {/* モバイルメニューボタン */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              {isNavOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {t('subtitle')}
            </p>

            {/* ステータスバッジ */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-gray-800 rounded-full px-4 py-2 flex items-center space-x-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">{t('totalDocs')}: {totalDocs}</span>
              </div>
              <div className="bg-gray-800 rounded-full px-4 py-2 flex items-center space-x-2">
                <Star className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">{t('completed')}: {completedDocs}/{totalDocs}</span>
              </div>
              <div className="bg-gray-800 rounded-full px-4 py-2 flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">{t('lastUpdated')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* サイドナビゲーション */}
          <div className={`lg:w-1/4 ${isNavOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-8 space-y-6">
              {/* 検索バー */}
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder={t('searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* クイックリンク */}
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">{t('quickLinks')}</h3>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg px-3 py-2 transition-colors text-sm"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* セクション目次 */}
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">{t('sectionsTitle')}</h3>
                <div className="space-y-2">
                  {documentSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg px-3 py-2 transition-colors text-sm"
                    >
                      <section.icon className="w-4 h-4" />
                      <span>{section.title}</span>
                      <span className="ml-auto bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                        {section.docs.length}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* アクションボタン */}
              <div className="space-y-3">
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  <Download className="w-4 h-4 mr-2" />
                  {t('pdfDownload')}
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  <FileText className="w-4 h-4 mr-2" />
                  {t('printView')}
                </Button>
              </div>
            </div>
          </div>

          {/* メインコンテンツ */}
          <div className="lg:w-3/4">
            <div className="space-y-12">
              {filteredSections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-8">
                  {/* セクションヘッダー */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${
                        section.priority === 'high' ? 'bg-red-900/30 border border-red-800' :
                        section.priority === 'medium' ? 'bg-yellow-900/30 border border-yellow-800' :
                        'bg-gray-800 border border-gray-700'
                      }`}>
                        <section.icon className={`h-6 w-6 ${
                          section.priority === 'high' ? 'text-red-400' :
                          section.priority === 'medium' ? 'text-yellow-400' :
                          'text-gray-400'
                        }`} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                        <p className="text-gray-400 mt-1">{section.description}</p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center space-x-2">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        section.priority === 'high' ? 'bg-red-900 text-red-300' :
                        section.priority === 'medium' ? 'bg-yellow-900 text-yellow-300' :
                        'bg-gray-800 text-gray-300'
                      }`}>
                        {section.priority === 'high' ? t('highPriority') :
                         section.priority === 'medium' ? t('mediumPriority') : t('lowPriority')}
                      </span>
                    </div>
                  </div>

                  {/* ドキュメントカード */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {section.docs.map((doc) => (
                      <Card key={doc.href} className="bg-gray-800/50 border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02] hover:border-gray-600 group backdrop-blur-sm">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 ${doc.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <FileText className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex flex-col items-end space-y-1">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                doc.status === '完成' ? 'bg-green-900 text-green-300' :
                                'bg-orange-900 text-orange-300'
                              }`}>
                                {doc.status === '完成' ? t('completedStatus') : t('inProgress')}
                              </span>
                              <div className="flex items-center text-gray-400 text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                {doc.readTime}
                              </div>
                            </div>
                          </div>
                          <CardTitle className="text-white group-hover:text-blue-400 transition-colors leading-tight">
                            {doc.title}
                          </CardTitle>
                          <CardDescription className="text-gray-400 text-sm leading-relaxed">
                            {doc.description}
                          </CardDescription>
                          
                          {/* タグ */}
                          <div className="flex flex-wrap gap-1 mt-3">
                            {doc.tags.map((tag) => (
                              <span key={tag} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <Link href={doc.href}>
                            <Button className="w-full bg-gray-700 hover:bg-blue-600 transition-all duration-300 group-hover:shadow-lg">
                              {t('readDocument')}
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}

              {filteredSections.length === 0 && searchQuery && (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{t('noResults')}</h3>
                  <p className="text-gray-400 mb-6">
                    {t('noResultsDesc')} 「{searchQuery}」
                  </p>
                  <Button onClick={() => setSearchQuery("")} variant="outline">
                    {t('clearSearch')}
                  </Button>
                </div>
              )}
            </div>

            {/* フッターセクション */}
            <div className="mt-20 pt-8 border-t border-gray-700">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 text-center backdrop-blur-sm border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4">{t('needSupport')}</h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  {t('supportDesc')}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Users className="w-4 h-4 mr-2" />
                      {t('contact')}
                    </Button>
                  </Link>
                  <Link href="https://github.com/your-username/e-school/issues">
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      <Code className="w-4 h-4 mr-2" />
                      {t('githubIssues')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}