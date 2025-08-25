'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollText, Users, Lightbulb, RefreshCw, BookOpen, Cpu, Target, Sparkles } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  impact: string;
  problems?: string[];
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
}

export default function EducationPolicyTimeline() {
  const timelineData: TimelineItem[] = [
    {
      year: '1947',
      title: '教育基本法制定',
      description: '戦後民主主義教育の礎',
      impact: '「人格の完成」を教育の目的に',
      problems: [
        '急速な制度転換による現場の混乱',
        '教員の意識改革の遅れ',
        '資源不足による教育格差'
      ],
      icon: <ScrollText className="w-5 h-5" />,
      color: 'text-gray-400',
      bgColor: 'bg-gray-500/20',
      borderColor: 'border-gray-500/50'
    },
    {
      year: '1960s',
      title: '高度成長期の教育拡大',
      description: '工業社会の人材需要に対応',
      impact: '高校進学率90%超、大学進学率上昇',
      problems: [
        '詰め込み教育による受験戦争激化',
        '画一的な人材育成',
        '個性や創造性の軽視'
      ],
      icon: <Users className="w-5 h-5" />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/50'
    },
    {
      year: '1980s',
      title: '臨時教育審議会',
      description: '個性重視の教育改革',
      impact: '「生涯学習」概念の導入',
      problems: [
        '理念と実践の乖離',
        '評価システムの未整備',
        '教員研修の不足'
      ],
      icon: <Lightbulb className="w-5 h-5" />,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500/50'
    },
    {
      year: '2002',
      title: 'ゆとり教育本格導入',
      description: '「生きる力」の育成重視',
      impact: '総合的な学習の時間創設',
      problems: [
        '学力低下への懸念と批判',
        '現場教員の理解不足',
        '保護者・社会の不安拡大'
      ],
      icon: <RefreshCw className="w-5 h-5" />,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/50'
    },
    {
      year: '2020',
      title: '新学習指導要領',
      description: '主体的・対話的で深い学び',
      impact: 'プログラミング教育必修化',
      problems: [
        'ICT環境の地域格差',
        '指導できる教員の不足',
        'コロナ禍での実施困難'
      ],
      icon: <BookOpen className="w-5 h-5" />,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/50'
    },
    {
      year: '2019-2025',
      title: 'AI戦略・Society 5.0',
      description: 'デジタル人材25万人育成',
      impact: '全高校生・大学生がAI基礎習得',
      problems: [
        '急速な技術変化への対応遅れ',
        '指導人材の絶対的不足',
        '企業・教育機関の連携不足'
      ],
      icon: <Cpu className="w-5 h-5" />,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500/50'
    },
    {
      year: 'NOW',
      title: 'AI Creator Lab',
      description: '統合的学習理論の実践',
      impact: '科学的根拠に基づく個別最適化',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'text-pink-400',
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20',
      borderColor: 'border-pink-500/50'
    }
  ];

  return (
    <div className="relative max-w-5xl mx-auto py-12">
      {/* メインタイトル */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-white mb-3">
          日本の教育政策 70年の変遷
        </h3>
        <p className="text-gray-400">
          時代の要請に応え、進化し続ける教育理念
        </p>
      </div>

      {/* タイムライン */}
      <div className="relative">
        {/* 中央の縦線 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gray-600 via-blue-500/50 to-purple-500/50"></div>

        {/* タイムラインアイテム */}
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            {/* 年代マーカー（中央） */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className={`w-12 h-12 rounded-full ${item.bgColor} ${item.borderColor} border-2 flex items-center justify-center`}>
                {item.icon}
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <Badge 
                  variant="outline" 
                  className={`${item.color} ${item.borderColor} font-bold text-xs px-2`}
                >
                  {item.year}
                </Badge>
              </div>
            </div>

            {/* コンテンツカード */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <Card 
                className={`${item.bgColor} ${item.borderColor} border backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className="p-5">
                  <h4 className={`font-bold text-lg mb-2 ${item.color}`}>
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${item.bgColor} mb-3`}>
                    <Target className="w-3 h-3" />
                    <span className="text-xs text-gray-400">
                      {item.impact}
                    </span>
                  </div>
                  {item.problems && (
                    <div className="mt-3 pt-3 border-t border-gray-700">
                      <p className="text-xs font-semibold text-red-400 mb-2">🚨 問題点</p>
                      <ul className="space-y-1">
                        {item.problems.map((problem, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-start gap-1">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>

              {/* 接続線 */}
              <div 
                className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 ${
                  index % 2 === 0 ? 'right-0' : 'left-0'
                } bg-gradient-to-r ${
                  index % 2 === 0 
                    ? 'from-transparent to-gray-600' 
                    : 'from-gray-600 to-transparent'
                }`}
              />
            </div>
          </div>
        ))}

        {/* 未来への矢印 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-purple-500/50"></div>
        </div>
      </div>

      {/* 総括メッセージ */}
      <div className="mt-20 text-center">
        <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-purple-500/30 max-w-4xl mx-auto">
          <div className="p-8">
            <h4 className="text-xl font-bold text-white mb-6">
              70年の教育改革の集大成として
            </h4>
            <p className="text-gray-300 mb-6">
              戦後の民主主義教育から始まり、高度成長期の量的拡大、個性重視の質的転換、
              そして現在のデジタル革命まで。各時代の<span className="text-red-400 font-bold">問題点を踏まえ</span>、
              AI Creator Labは、この歴史的蓄積の上に立ち、
              <span className="text-purple-400 font-bold">科学的根拠とAI技術</span>を融合させた
              次世代の教育モデルを実現します。
            </p>
            
            
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                歴史的正統性
              </Badge>
              <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                失敗からの学び
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                政策との整合性
              </Badge>
              <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30">
                未来への革新
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}