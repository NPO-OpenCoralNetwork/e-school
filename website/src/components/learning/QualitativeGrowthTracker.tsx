'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface GrowthMetric {
  id: string;
  name: string;
  emoji: string;
  description: string;
  category: 'confidence' | 'creativity' | 'collaboration' | 'critical_thinking' | 'communication';
  currentLevel: number;
  maxLevel: number;
  recentObservations: string[];
  achievements: Achievement[];
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  emoji: string;
  unlockedAt: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface AIObservation {
  id: string;
  date: Date;
  metric: string;
  observation: string;
  confidence: number;
  aiPersona: 'supportive' | 'encouraging' | 'analytical';
}

interface QualitativeGrowthTrackerProps {
  studentId: string;
  studentName: string;
}

export default function QualitativeGrowthTracker({ studentId, studentName }: QualitativeGrowthTrackerProps) {
  const [growthMetrics, setGrowthMetrics] = useState<GrowthMetric[]>([]);
  const [recentObservations, setRecentObservations] = useState<AIObservation[]>([]);
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  // 初期データの設定
  useEffect(() => {
    const initialMetrics: GrowthMetric[] = [
      {
        id: 'confidence',
        name: '自信・積極性',
        emoji: '💪',
        description: '新しいことに挑戦する意欲や、自分の意見を表現する力',
        category: 'confidence',
        currentLevel: 3,
        maxLevel: 10,
        recentObservations: [
          '今日は前よりも大きな声で発表できていたね！',
          '分からないことを恥ずかしがらずに質問できるようになったよ',
          '失敗を恐れずに新しいアイデアを試そうとしているね'
        ],
        achievements: [
          {
            id: 'first_presentation',
            title: '初めての発表',
            description: 'みんなの前で作品を発表できました',
            emoji: '🎤',
            unlockedAt: new Date('2024-01-15'),
            rarity: 'common'
          },
          {
            id: 'question_master',
            title: '質問の達人',
            description: '自分から10回質問をしました',
            emoji: '❓',
            unlockedAt: new Date('2024-01-20'),
            rarity: 'rare'
          }
        ]
      },
      {
        id: 'creativity',
        name: '創造性・表現力',
        emoji: '🎨',
        description: 'オリジナルのアイデアを生み出し、表現する能力',
        category: 'creativity',
        currentLevel: 5,
        maxLevel: 10,
        recentObservations: [
          'いつも他の人とは違うユニークなアイデアを思いつくね！',
          '色使いがとても工夫されていて、見ていて楽しい作品だった',
          '物語の展開に意外性があって、最後まで楽しく読めたよ'
        ],
        achievements: [
          {
            id: 'original_character',
            title: 'オリジナルキャラクター誕生',
            description: '完全にオリジナルのキャラクターを作りました',
            emoji: '🦄',
            unlockedAt: new Date('2024-01-10'),
            rarity: 'epic'
          }
        ]
      },
      {
        id: 'collaboration',
        name: '協働・思いやり',
        emoji: '🤝',
        description: '友だちと協力し、お互いを思いやる心',
        category: 'collaboration',
        currentLevel: 4,
        maxLevel: 10,
        recentObservations: [
          '困っているお友だちを自然に助けてくれていたね',
          'チームメンバーの意見をしっかり聞いて取り入れていた',
          '役割分担を上手に提案して、みんなが活躍できるようにしてくれた'
        ],
        achievements: [
          {
            id: 'team_player',
            title: 'チームの力',
            description: 'チームプロジェクトで重要な役割を果たしました',
            emoji: '👥',
            unlockedAt: new Date('2024-01-18'),
            rarity: 'rare'
          }
        ]
      },
      {
        id: 'critical_thinking',
        name: '論理的思考',
        emoji: '🧠',
        description: '問題を分析し、筋道を立てて考える力',
        category: 'critical_thinking',
        currentLevel: 2,
        maxLevel: 10,
        recentObservations: [
          '問題を小さく分けて順番に解決しようとしているね',
          '「なぜ？」「どうして？」と理由を考える習慣がついてきた',
          '複数の解決方法を比較してから選んでいるのが素晴らしい'
        ],
        achievements: []
      },
      {
        id: 'communication',
        name: 'コミュニケーション',
        emoji: '💬',
        description: '相手に分かりやすく伝え、相手の話もよく聞く力',
        category: 'communication',
        currentLevel: 3,
        maxLevel: 10,
        recentObservations: [
          '説明がとても分かりやすくて、みんなも理解できていたよ',
          '相手の気持ちを考えながら話せるようになったね',
          '聞き上手になって、友だちも話しやすそうだった'
        ],
        achievements: [
          {
            id: 'clear_explainer',
            title: '分かりやすい説明者',
            description: '複雑なことを簡単に説明できました',
            emoji: '📝',
            unlockedAt: new Date('2024-01-22'),
            rarity: 'common'
          }
        ]
      }
    ];

    const mockObservations: AIObservation[] = [
      {
        id: '1',
        date: new Date(),
        metric: 'confidence',
        observation: `${studentName}さん、今日は前回より自信を持って発表できていましたね！声も大きくて、みんなに伝わっていました。`,
        confidence: 0.9,
        aiPersona: 'encouraging'
      },
      {
        id: '2',
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        metric: 'creativity',
        observation: `色使いにとても工夫が見られます。特に青と緑の組み合わせが美しくて、見る人の心を落ち着かせる効果がありそうです。`,
        confidence: 0.8,
        aiPersona: 'analytical'
      },
      {
        id: '3',
        date: new Date(Date.now() - 48 * 60 * 60 * 1000),
        metric: 'collaboration',
        observation: `友だちが困っているときに、すぐに手を差し伸べてくれる優しさが素晴らしいです。チームの雰囲気も良くなりました。`,
        confidence: 0.95,
        aiPersona: 'supportive'
      }
    ];

    setGrowthMetrics(initialMetrics);
    setRecentObservations(mockObservations);
  }, [studentName]);

  const getRarityColor = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-800';
      case 'rare': return 'bg-blue-100 text-blue-800';
      case 'epic': return 'bg-purple-100 text-purple-800';
      case 'legendary': return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getRarityBorder = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common': return 'border-gray-300';
      case 'rare': return 'border-blue-300';
      case 'epic': return 'border-purple-300';
      case 'legendary': return 'border-yellow-300 shadow-yellow-200 shadow-lg';
    }
  };

  const getAIPersonaStyle = (persona: AIObservation['aiPersona']) => {
    switch (persona) {
      case 'supportive': return { emoji: '🤗', color: 'text-green-600', bg: 'bg-green-50' };
      case 'encouraging': return { emoji: '🌟', color: 'text-blue-600', bg: 'bg-blue-50' };
      case 'analytical': return { emoji: '🔍', color: 'text-purple-600', bg: 'bg-purple-50' };
    }
  };

  const simulateNewAchievement = (metric: GrowthMetric) => {
    const newAchievements = [
      {
        id: `achievement_${Date.now()}`,
        title: '粘り強さの証',
        description: '難しい問題にも最後まで取り組みました',
        emoji: '🏆',
        unlockedAt: new Date(),
        rarity: 'epic' as const
      },
      {
        id: `achievement_${Date.now() + 1}`,
        title: 'ひらめきマスター',
        description: '創造的な解決方法を見つけました',
        emoji: '💡',
        unlockedAt: new Date(),
        rarity: 'rare' as const
      }
    ];

    const randomAchievement = newAchievements[Math.floor(Math.random() * newAchievements.length)];
    
    setGrowthMetrics(prev => 
      prev.map(m => 
        m.id === metric.id 
          ? { 
              ...m, 
              achievements: [...m.achievements, randomAchievement],
              currentLevel: Math.min(m.currentLevel + 1, m.maxLevel)
            }
          : m
      )
    );

    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 3000);
  };

  const MetricCard = ({ metric }: { metric: GrowthMetric }) => (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-lg ${
        selectedMetric === metric.id ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={() => setSelectedMetric(selectedMetric === metric.id ? null : metric.id)}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{metric.emoji}</div>
            <div>
              <CardTitle className="text-lg">{metric.name}</CardTitle>
              <CardDescription className="text-sm">{metric.description}</CardDescription>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">{metric.currentLevel}</div>
            <div className="text-xs text-gray-500">/ {metric.maxLevel}</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">成長レベル</span>
            <span className="text-sm font-medium">{Math.round((metric.currentLevel / metric.maxLevel) * 100)}%</span>
          </div>
          <Progress value={(metric.currentLevel / metric.maxLevel) * 100} className="h-2" />
        </div>

        {selectedMetric === metric.id && (
          <div className="space-y-4 mt-4 border-t pt-4">
            {/* 最近の観察記録 */}
            <div>
              <h4 className="font-semibold text-sm mb-2 flex items-center space-x-1">
                <span>🔍</span>
                <span>AIからの観察記録</span>
              </h4>
              <div className="space-y-2">
                {metric.recentObservations.slice(0, 2).map((observation, index) => (
                  <div key={index} className="bg-blue-50 p-3 rounded-lg text-sm">
                    {observation}
                  </div>
                ))}
              </div>
            </div>

            {/* 獲得バッジ */}
            {metric.achievements.length > 0 && (
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center space-x-1">
                  <span>🏆</span>
                  <span>獲得バッジ</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {metric.achievements.map((achievement) => (
                    <Badge
                      key={achievement.id}
                      className={`${getRarityColor(achievement.rarity)} border ${getRarityBorder(achievement.rarity)}`}
                    >
                      <span className="mr-1">{achievement.emoji}</span>
                      {achievement.title}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <Button 
              onClick={() => simulateNewAchievement(metric)}
              className="w-full mt-4"
              variant="outline"
            >
              ✨ 新しい成長を記録
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* ヘッダー */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">🌱 {studentName}さんの成長記録</h1>
        <p className="text-gray-600">数字では表せない、あなたの素晴らしい成長を記録しています</p>
      </div>

      {/* 祝福アニメーション */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Card className="p-8 text-center animate-bounce">
            <div className="text-6xl mb-4">🎉</div>
            <CardTitle className="text-2xl text-green-600 mb-2">新しいバッジを獲得！</CardTitle>
            <CardDescription>素晴らしい成長です！</CardDescription>
          </Card>
        </div>
      )}

      {/* 最近のAI観察記録 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>🤖</span>
            <span>最近のAI観察記録</span>
          </CardTitle>
          <CardDescription>AIが気づいたあなたの成長ポイント</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentObservations.slice(0, 3).map((observation) => {
              const style = getAIPersonaStyle(observation.aiPersona);
              return (
                <div key={observation.id} className={`${style.bg} p-4 rounded-lg border-l-4 border-current`}>
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{style.emoji}</div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-600 mb-1">
                        {observation.date.toLocaleDateString('ja-JP')}
                      </div>
                      <p className={`${style.color} font-medium`}>
                        {observation.observation}
                      </p>
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs">
                          信頼度 {Math.round(observation.confidence * 100)}%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* 成長メトリクス */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {growthMetrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      {/* 全体統計 */}
      <Card>
        <CardHeader>
          <CardTitle>📊 全体的な成長サマリー</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {growthMetrics.reduce((sum, m) => sum + m.currentLevel, 0)}
              </div>
              <div className="text-sm text-gray-600">総合成長ポイント</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {growthMetrics.reduce((sum, m) => sum + m.achievements.length, 0)}
              </div>
              <div className="text-sm text-gray-600">獲得バッジ数</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {Math.round(growthMetrics.reduce((sum, m) => sum + (m.currentLevel / m.maxLevel), 0) / growthMetrics.length * 100)}%
              </div>
              <div className="text-sm text-gray-600">平均成長率</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}