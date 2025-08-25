'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Users, Target, Lightbulb, BookOpen, BarChart, Sparkles, Clock, Building, Award, TrendingUp } from 'lucide-react';
import EducationPolicyTimeline from '@/components/timeline/EducationPolicyTimeline';

export default function PhilosophyPage() {
  const [activeTheory, setActiveTheory] = useState<'behaviorist' | 'cognitive' | 'constructivist'>('behaviorist');

  const theories = {
    behaviorist: {
      title: '行動主義的アプローチ',
      icon: <Target className="w-6 h-6" />,
      description: '習慣化メカニズムとスペースド・リピティションで確実な定着を実現',
      features: [
        '毎日のAI対話習慣の形成',
        '分散学習による長期記憶定着',
        '即時フィードバックシステム',
        'ストリーク機能とゲーミフィケーション'
      ],
      color: 'bg-blue-500'
    },
    cognitive: {
      title: '認知主義的アプローチ',
      icon: <Brain className="w-6 h-6" />,
      description: 'メタ認知の育成とBig Five性格分析による個別最適化',
      features: [
        '自己の学習プロセスの客観的理解',
        'Big Five性格分析による個別化',
        '情報処理パターンの可視化',
        '認知の歪み検出と修正'
      ],
      color: 'bg-purple-500'
    },
    constructivist: {
      title: '構成主義的アプローチ',
      icon: <Lightbulb className="w-6 h-6" />,
      description: '探究型学習とプロジェクトベースの実践',
      features: [
        '学習者主導の問い立て',
        '個人の経験に基づく知識構築',
        'コミュニティでの協働学習',
        '実世界の問題解決への応用'
      ],
      color: 'bg-green-500'
    }
  };

  const outputPhases = [
    {
      phase: '即時アウトプット',
      timing: '0-1時間',
      icon: <Clock className="w-5 h-5" />,
      description: '学習直後の感覚・気づきを言語化',
      activities: [
        'リフレクティブ・ライティング',
        'AIとの対話で思考整理',
        '新鮮な気づきの記録'
      ]
    },
    {
      phase: '短期アウトプット',
      timing: '24-72時間',
      icon: <BookOpen className="w-5 h-5" />,
      description: '分散学習による記憶定着',
      activities: [
        '遅延再生効果の活用',
        'AIによる復習リマインダー',
        '実践課題への応用'
      ]
    },
    {
      phase: '長期アウトプット',
      timing: '1週間後',
      icon: <BarChart className="w-5 h-5" />,
      description: '深い理解の確認と実践',
      activities: [
        'スキルの実践適用',
        '成長の可視化',
        'ポートフォリオ作成'
      ]
    }
  ];

  const aiRoles = [
    {
      role: 'セルフ・リフレクション支援',
      description: '24時間365日利用可能な振り返りパートナー',
      features: ['中立的フィードバック', '無限の忍耐', '一貫性のある対応']
    },
    {
      role: 'ソーシャル・リフレクション代替',
      description: '他者視点のシミュレーション',
      features: ['多角的な質問生成', '建設的な対話', '偏りのない視点']
    },
    {
      role: 'メタ認知コーチ',
      description: '認知の歪み検出と修正',
      features: ['客観的データに基づく振り返り', '成長マインドセット育成', '学習戦略の最適化']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600">
            教育理念
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            AIを「学びの鏡」として
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            行動主義・認知主義・構成主義を統合したハイブリッド学習理論で、
            すべての人が自己の可能性を最大限に開花させる
          </p>
        </div>

        {/* 政府方針との整合性 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <Building className="inline-block mr-2 text-blue-400" />
            政府方針との整合性
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            日本政府が推進する重要政策と完全に整合し、国家戦略の実現を加速させます
          </p>

          {/* 教育政策の歴史的変遷タイムライン */}
          <div className="mb-16">
            <EducationPolicyTimeline />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Society 5.0 */}
            <Card className="bg-gray-800/50 border-blue-500/30 p-8">
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-blue-500/20 rounded-full mb-4">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Society 5.0</h3>
                <p className="text-sm text-gray-400">人間中心の超スマート社会</p>
                <Badge variant="outline" className="mt-2 text-blue-300 border-blue-500/30">
                  内閣府 第5期科学技術基本計画（2016年）
                </Badge>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <div>
                    <p className="text-white font-medium">人間中心設計</p>
                    <p className="text-gray-400 text-sm">AIを道具として、人の可能性を最大限に引き出す</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <div>
                    <p className="text-white font-medium">個別最適化</p>
                    <p className="text-gray-400 text-sm">一人ひとりの特性に応じた学習パスの提供</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <div>
                    <p className="text-white font-medium">社会課題解決</p>
                    <p className="text-gray-400 text-sm">地域格差・教育格差の解消に貢献</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* AI戦略2019 */}
            <Card className="bg-gray-800/50 border-purple-500/30 p-8">
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-purple-500/20 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI戦略2019</h3>
                <p className="text-sm text-gray-400">デジタル人材25万人育成計画</p>
                <Badge variant="outline" className="mt-2 text-purple-300 border-purple-500/30">
                  内閣府・文部科学省（2019年3月）
                </Badge>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium mb-2">政府目標（2025年まで）</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-300">• 年間25万人：AI活用人材</p>
                    <p className="text-gray-300">• 年間2,000人：AIエキスパート</p>
                    <p className="text-gray-300">• 全高校生・大学生がAI基礎習得</p>
                  </div>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">当プラットフォームの貢献</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-purple-300">→ 3日間集中講座で即戦力人材育成</p>
                    <p className="text-purple-300">→ 小1〜高校生の段階的AI教育</p>
                    <p className="text-purple-300">→ 企業研修で組織的スキルアップ</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* 文科省教育DXとの連動 */}
          <Card className="bg-gray-800/50 border-green-500/30 p-8">
            <h3 className="text-xl font-bold text-center mb-6 text-green-400">
              文部科学省「教育DX」政策との連動
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-block p-2 bg-green-500/20 rounded-lg mb-3">
                  <Target className="w-5 h-5 text-green-400" />
                </div>
                <h4 className="font-bold text-white mb-2">標準化</h4>
                <p className="text-sm text-gray-400">学習データの意味・定義統一</p>
                <p className="text-xs text-green-300 mt-2">→ 学習分析機能で実現</p>
              </div>
              <div className="text-center">
                <div className="inline-block p-2 bg-green-500/20 rounded-lg mb-3">
                  <Brain className="w-5 h-5 text-green-400" />
                </div>
                <h4 className="font-bold text-white mb-2">ツール</h4>
                <p className="text-sm text-gray-400">基盤ツール開発</p>
                <p className="text-xs text-green-300 mt-2">→ AIリフレクション機能</p>
              </div>
              <div className="text-center">
                <div className="inline-block p-2 bg-green-500/20 rounded-lg mb-3">
                  <BarChart className="w-5 h-5 text-green-400" />
                </div>
                <h4 className="font-bold text-white mb-2">活用</h4>
                <p className="text-sm text-gray-400">教育データ分析・活用</p>
                <p className="text-xs text-green-300 mt-2">→ Big Five個別最適化</p>
              </div>
            </div>
          </Card>
        </section>

        {/* 統合的学習理論 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <Sparkles className="inline-block mr-2 text-yellow-400" />
            統合的学習理論アプローチ
          </h2>
          
          {/* 理論タブ */}
          <div className="flex justify-center gap-4 mb-8">
            {Object.entries(theories).map(([key, theory]) => (
              <button
                key={key}
                onClick={() => setActiveTheory(key as keyof typeof theories)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTheory === key
                    ? `${theory.color} text-white shadow-lg`
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {theory.icon}
                <span className="ml-2">{theory.title}</span>
              </button>
            ))}
          </div>

          {/* 理論詳細 */}
          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <h3 className="text-2xl font-bold mb-4">{theories[activeTheory].title}</h3>
            <p className="text-gray-300 mb-6">{theories[activeTheory].description}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {theories[activeTheory].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${theories[activeTheory].color}`} />
                  <p className="text-gray-400">{feature}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* 3段階アウトプットシステム */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <Target className="inline-block mr-2 text-blue-400" />
            3段階アウトプットシステム
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {outputPhases.map((phase, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 p-6 hover:bg-gray-800/70 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    {phase.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{phase.phase}</h3>
                    <p className="text-sm text-gray-400">{phase.timing}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* AIの役割 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <Brain className="inline-block mr-2 text-purple-400" />
            AIの教育的役割：学びの鏡として
          </h2>
          <div className="space-y-6">
            {aiRoles.map((role, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">{role.role}</h3>
                <p className="text-gray-300 mb-4">{role.description}</p>
                <div className="flex flex-wrap gap-3">
                  {role.features.map((feature, i) => (
                    <Badge key={i} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Big Five パーソナライゼーション */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <Users className="inline-block mr-2 text-green-400" />
            Big Five性格分析による個別最適化
          </h2>
          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { trait: '開放性', high: '新しい概念への挑戦', low: '構造化された学習' },
                { trait: '誠実性', high: '詳細な学習計画', low: '柔軟なペース' },
                { trait: '外向性', high: 'グループワーク重視', low: '個人学習重視' },
                { trait: '協調性', high: 'チームプロジェクト', low: '個人の成果重視' },
                { trait: '神経症傾向', high: '頻繁な励まし', low: 'チャレンジ課題' }
              ].map((trait, index) => (
                <div key={index} className="text-center">
                  <div className="mb-3 p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg">
                    <h4 className="font-bold text-green-400">{trait.trait}</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-300">高: {trait.high}</p>
                    <p className="text-gray-400">低: {trait.low}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            科学的根拠に基づいた学習体験を始めましょう
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            あなたの個性に最適化された学習パスで、確実な成長を実現
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-xl transition-all text-lg">
            無料体験を始める
          </button>
        </div>
      </div>
    </div>
  );
}