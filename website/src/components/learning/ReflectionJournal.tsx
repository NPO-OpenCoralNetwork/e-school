'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Clock, BookOpen, BarChart, MessageSquare, Target, Lightbulb } from 'lucide-react';

interface ReflectionEntry {
  id: string;
  date: string;
  phase: 'immediate' | 'short-term' | 'long-term';
  content: {
    whatLearned: string;
    insights: string;
    questions: string;
    nextSteps: string;
  };
  aiSuggestions?: string[];
}

export default function ReflectionJournal() {
  const [activePhase, setActivePhase] = useState<'immediate' | 'short-term' | 'long-term'>('immediate');
  const [reflectionContent, setReflectionContent] = useState({
    whatLearned: '',
    insights: '',
    questions: '',
    nextSteps: ''
  });

  const phases = {
    immediate: {
      title: '即時リフレクション',
      subtitle: '学習直後（0-1時間）',
      icon: <Clock className="w-5 h-5" />,
      color: 'bg-blue-500',
      borderColor: 'border-blue-500/50',
      description: '学習直後の新鮮な気づきや感覚を記録しましょう'
    },
    'short-term': {
      title: '短期リフレクション',
      subtitle: '学習後（24-72時間）',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'bg-green-500',
      borderColor: 'border-green-500/50',
      description: '時間をおいて振り返り、理解を深めましょう'
    },
    'long-term': {
      title: '長期リフレクション',
      subtitle: '学習後（1週間）',
      icon: <BarChart className="w-5 h-5" />,
      color: 'bg-purple-500',
      borderColor: 'border-purple-500/50',
      description: '実践での活用と成長を確認しましょう'
    }
  };

  const aiPrompts = {
    immediate: [
      "今日の学習で最も印象に残ったことは何ですか？",
      "なぜそれが印象的だったのでしょうか？",
      "学習前と後で、考え方に変化はありましたか？",
      "疑問に思ったことや、もっと深く知りたいことはありますか？"
    ],
    'short-term': [
      "前回の学習内容で、実際に活用できたものはありますか？",
      "活用する際に感じた課題や困難はありましたか？",
      "新たに気づいたことや発見したことはありますか？",
      "次に取り組みたいことは何ですか？"
    ],
    'long-term': [
      "この1週間で、学んだスキルはどのように成長しましたか？",
      "設定した目標に対する進捗はいかがですか？",
      "今振り返って、最初の理解と現在の理解の違いは何ですか？",
      "次のステップとして、どのような学習計画を立てますか？"
    ]
  };

  const handleSubmit = async () => {
    // AIとの対話処理（将来実装）
    console.log('Reflection submitted:', { phase: activePhase, content: reflectionContent });
    
    // 模擬的なAI応答
    const mockAIResponse = generateMockAIResponse(activePhase, reflectionContent);
    alert(`AI からの応答:\n\n${mockAIResponse}`);
  };

  const generateMockAIResponse = (phase: string, content: any) => {
    const responses = {
      immediate: `素晴らしい振り返りですね！特に「${content.insights}」という気づきが印象的です。この理解をさらに深めるために、明日は具体的な事例で実践してみることをお勧めします。`,
      'short-term': `前回からの成長が感じられます。「${content.whatLearned}」の活用経験は貴重ですね。今回感じた課題を解決するために、次のリソースが役立つかもしれません...`,
      'long-term': `1週間でのこの成長は素晴らしいです！メタ認知的な振り返りから、学習戦略が効果的に機能していることが分かります。次のフェーズでは...`
    };
    return responses[phase as keyof typeof responses];
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* ヘッダー */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          <Brain className="inline-block mr-2 text-purple-600" />
          リフレクション・ジャーナル
        </h1>
        <p className="text-gray-600">
          AIと共に学習を振り返り、成長を可視化しましょう
        </p>
      </div>

      {/* フェーズ選択 */}
      <div className="flex justify-center gap-4 mb-8">
        {Object.entries(phases).map(([key, phase]) => (
          <Button
            key={key}
            variant={activePhase === key ? "default" : "outline"}
            onClick={() => setActivePhase(key as typeof activePhase)}
            className={`flex items-center gap-2 px-6 py-3 ${
              activePhase === key 
                ? `${phase.color} text-white` 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {phase.icon}
            <div className="text-left">
              <div className="font-medium">{phase.title}</div>
              <div className="text-xs opacity-80">{phase.subtitle}</div>
            </div>
          </Button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* メインフォーム */}
        <div className="space-y-6">
          <Card className={`border-2 ${phases[activePhase].borderColor}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {phases[activePhase].icon}
                {phases[activePhase].title}
              </CardTitle>
              <p className="text-sm text-gray-600">
                {phases[activePhase].description}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <Target className="inline w-4 h-4 mr-1" />
                  今日学んだこと
                </label>
                <textarea
                  className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="具体的に何を学びましたか？"
                  value={reflectionContent.whatLearned}
                  onChange={(e) => setReflectionContent({
                    ...reflectionContent,
                    whatLearned: e.target.value
                  })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Lightbulb className="inline w-4 h-4 mr-1" />
                  気づき・発見
                </label>
                <textarea
                  className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="どのような気づきや発見がありましたか？"
                  value={reflectionContent.insights}
                  onChange={(e) => setReflectionContent({
                    ...reflectionContent,
                    insights: e.target.value
                  })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <MessageSquare className="inline w-4 h-4 mr-1" />
                  疑問・質問
                </label>
                <textarea
                  className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={2}
                  placeholder="疑問に思ったことや深く知りたいことは？"
                  value={reflectionContent.questions}
                  onChange={(e) => setReflectionContent({
                    ...reflectionContent,
                    questions: e.target.value
                  })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <BarChart className="inline w-4 h-4 mr-1" />
                  次のステップ
                </label>
                <textarea
                  className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={2}
                  placeholder="次に取り組みたいことや目標は？"
                  value={reflectionContent.nextSteps}
                  onChange={(e) => setReflectionContent({
                    ...reflectionContent,
                    nextSteps: e.target.value
                  })}
                />
              </div>

              <Button 
                onClick={handleSubmit}
                className={`w-full ${phases[activePhase].color} text-white`}
              >
                <Brain className="w-4 h-4 mr-2" />
                AIと対話して深掘りする
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* AIガイダンス */}
        <div className="space-y-6">
          <Card className="bg-gray-50 border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">
                <MessageSquare className="inline w-5 h-5 mr-2 text-purple-600" />
                AIガイド質問
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                以下の質問を参考に振り返ってみましょう：
              </p>
              <div className="space-y-3">
                {aiPrompts[activePhase].map((prompt, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-white rounded-lg border">
                    <Badge variant="secondary" className="mt-0.5">
                      {index + 1}
                    </Badge>
                    <p className="text-sm text-gray-700">{prompt}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 学習理論の説明 */}
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-lg text-purple-800">
                <Brain className="inline w-5 h-5 mr-2" />
                なぜリフレクションが重要？
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-purple-700 space-y-2">
              <p>
                <strong>メタ認知の育成:</strong> 自分の学習プロセスを客観視し、効果的な戦略を見つける
              </p>
              <p>
                <strong>記憶の定着:</strong> 振り返ることで体験が長期記憶として定着する
              </p>
              <p>
                <strong>意味の構築:</strong> 学んだことを自分の経験と結びつけ、深い理解を形成する
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}