'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface DiagnosticQuestion {
  id: string;
  question: string;
  trait: 'openness' | 'conscientiousness' | 'extraversion' | 'agreeableness' | 'neuroticism';
  reverse?: boolean;
  childFriendlyOptions: {
    value: number;
    text: string;
    emoji: string;
    description: string;
  }[];
}

interface PersonalityResult {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: 'open_1',
    question: '新しいゲームやアプリを試すのが好きですか？',
    trait: 'openness',
    childFriendlyOptions: [
      { value: 5, text: '大好き！', emoji: '🤩', description: 'いつも新しいことを試したい' },
      { value: 4, text: '好き', emoji: '😊', description: '面白そうなら試してみる' },
      { value: 3, text: 'ふつう', emoji: '😐', description: 'どちらでもない' },
      { value: 2, text: 'あまり好きじゃない', emoji: '😕', description: '慣れたものの方が安心' },
      { value: 1, text: '嫌い', emoji: '😰', description: '新しいものは怖い' }
    ]
  },
  {
    id: 'con_1',
    question: '宿題や約束を忘れることがありますか？',
    trait: 'conscientiousness',
    reverse: true,
    childFriendlyOptions: [
      { value: 5, text: 'よく忘れる', emoji: '🤦‍♂️', description: 'ついつい他のことを考えちゃう' },
      { value: 4, text: 'たまに忘れる', emoji: '😅', description: '忙しい時は忘れることも' },
      { value: 3, text: 'ふつう', emoji: '😐', description: 'どちらでもない' },
      { value: 2, text: 'あまり忘れない', emoji: '😌', description: 'だいたい覚えてる' },
      { value: 1, text: 'ぜったい忘れない', emoji: '💪', description: 'いつもきちんと覚えてる' }
    ]
  },
  {
    id: 'ext_1',
    question: 'みんなの前で発表するのは好きですか？',
    trait: 'extraversion',
    childFriendlyOptions: [
      { value: 5, text: '大好き！', emoji: '🎤', description: 'みんなに見てもらいたい' },
      { value: 4, text: '好き', emoji: '😄', description: '緊張するけど楽しい' },
      { value: 3, text: 'ふつう', emoji: '😐', description: 'どちらでもない' },
      { value: 2, text: 'あまり好きじゃない', emoji: '😰', description: 'ちょっと恥ずかしい' },
      { value: 1, text: '嫌い', emoji: '🙈', description: 'とても恥ずかしい' }
    ]
  },
  {
    id: 'agr_1',
    question: '友だちが困っているとき、どうしますか？',
    trait: 'agreeableness',
    childFriendlyOptions: [
      { value: 5, text: 'すぐに助ける', emoji: '🤝', description: '困ってる人は放っておけない' },
      { value: 4, text: '声をかける', emoji: '😊', description: 'どうしたか聞いてみる' },
      { value: 3, text: 'ふつう', emoji: '😐', description: '様子を見る' },
      { value: 2, text: 'あまり関わらない', emoji: '😕', description: '自分のことで精一杯' },
      { value: 1, text: '気づかない', emoji: '😶', description: '他の人のことはよく分からない' }
    ]
  },
  {
    id: 'neu_1',
    question: 'テストの前、どんな気持ちになりますか？',
    trait: 'neuroticism',
    childFriendlyOptions: [
      { value: 5, text: 'とても不安', emoji: '😰', description: 'ドキドキして眠れない' },
      { value: 4, text: '不安', emoji: '😟', description: '心配になる' },
      { value: 3, text: 'ふつう', emoji: '😐', description: 'どちらでもない' },
      { value: 2, text: 'あまり気にしない', emoji: '😌', description: 'そんなに心配じゃない' },
      { value: 1, text: '全然気にしない', emoji: '😎', description: 'いつも通り' }
    ]
  }
];

export default function BigFiveDiagnostic() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [results, setResults] = useState<PersonalityResult | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const progress = (currentQuestion / diagnosticQuestions.length) * 100;

  const handleAnswer = (value: number) => {
    setSelectedOption(value);
    
    setTimeout(() => {
      const question = diagnosticQuestions[currentQuestion];
      const actualValue = question.reverse ? 6 - value : value;
      
      setAnswers(prev => ({
        ...prev,
        [question.id]: actualValue
      }));

      if (currentQuestion < diagnosticQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        calculateResults();
      }
    }, 1000);
  };

  const calculateResults = () => {
    const traits = ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism'] as const;
    const results: PersonalityResult = {} as PersonalityResult;

    traits.forEach(trait => {
      const traitQuestions = diagnosticQuestions.filter(q => q.trait === trait);
      const traitSum = traitQuestions.reduce((sum, q) => {
        return sum + (answers[q.id] || 3);
      }, 0);
      results[trait] = Math.round((traitSum / traitQuestions.length) * 20); // Convert to 0-100 scale
    });

    setResults(results);
    setIsCompleted(true);
  };

  const getPersonalityDescription = (trait: keyof PersonalityResult, score: number) => {
    const descriptions = {
      openness: {
        high: '🌟 新しいことが大好きな冒険家！創造的で想像力豊かです。',
        medium: '🎨 バランスの良い探求者。新しいことも慣れたことも両方楽しめます。',
        low: '🏠 安定を好む現実主義者。慣れ親しんだことを大切にします。'
      },
      conscientiousness: {
        high: '💪 責任感が強くてきちんとしている頼れる人！',
        medium: '⚖️ バランスの取れた計画性を持っています。',
        low: '🎭 自由で柔軟、その場の雰囲気を大切にします。'
      },
      extraversion: {
        high: '🎤 みんなと一緒にいるのが大好きな人気者！',
        medium: '👥 一人の時間も友だちとの時間も両方楽しめます。',
        low: '📚 静かで落ち着いた環境を好む思慮深い人。'
      },
      agreeableness: {
        high: '🤗 思いやりがあって友だち思いの優しい人！',
        medium: '🤝 協調性と自己主張のバランスが取れています。',
        low: '🎯 自分の意見をしっかり持った独立心旺盛な人。'
      },
      neuroticism: {
        high: '💭 感受性が豊かで、いろいろなことを深く感じる人。',
        medium: '🌤️ 感情のバランスが取れています。',
        low: '😎 いつも冷静で、ストレスに強い安定した人。'
      }
    };

    if (score >= 70) return descriptions[trait].high;
    if (score >= 40) return descriptions[trait].medium;
    return descriptions[trait].low;
  };

  const getAILearningRecommendations = (results: PersonalityResult) => {
    const recommendations = [];

    if (results.openness >= 70) {
      recommendations.push('🚀 新しいAIツールをどんどん試してみよう！創造的なプロジェクトがおすすめ。');
    }

    if (results.conscientiousness >= 70) {
      recommendations.push('📋 学習計画を立てて、毎日コツコツと進めるスタイルが向いています。');
    } else if (results.conscientiousness <= 40) {
      recommendations.push('🎮 ゲーム感覚で楽しく学べる方法を取り入れましょう。');
    }

    if (results.extraversion >= 70) {
      recommendations.push('👥 友だちと一緒にプロジェクトを進めたり、発表する機会を作りましょう。');
    } else if (results.extraversion <= 40) {
      recommendations.push('🤫 一人でじっくり考える時間を大切に、自分のペースで学習しましょう。');
    }

    if (results.agreeableness >= 70) {
      recommendations.push('🤝 チームワークを活かしたプロジェクトや、人助けにAIを使う方法を学びましょう。');
    }

    if (results.neuroticism >= 70) {
      recommendations.push('🧘‍♂️ リラックスできる環境で学習し、小さな成功を積み重ねていきましょう。');
    } else if (results.neuroticism <= 40) {
      recommendations.push('⚡ チャレンジングな課題にも積極的に取り組んでみましょう。');
    }

    return recommendations;
  };

  if (isCompleted && results) {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center">🎉 診断完了！</CardTitle>
            <CardDescription className="text-center text-gray-100">
              あなたの性格とAI学習スタイルが分かりました！
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(results).map(([trait, score]) => (
            <Card key={trait} className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="capitalize">
                    {trait === 'openness' && '開放性'}
                    {trait === 'conscientiousness' && '誠実性'}
                    {trait === 'extraversion' && '外向性'}
                    {trait === 'agreeableness' && '協調性'}
                    {trait === 'neuroticism' && '神経症傾向'}
                  </span>
                  <span className="text-2xl font-bold">{score}点</span>
                </CardTitle>
                <Progress value={score} className="h-3" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {getPersonalityDescription(trait as keyof PersonalityResult, score)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 border-blue-500">
          <CardHeader>
            <CardTitle className="text-blue-600">🤖 あなたにおすすめのAI学習方法</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {getAILearningRecommendations(results).map((rec, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            onClick={() => {
              // ここで次のステップ（SMART目標設定）に進む
              console.log('診断結果:', results);
            }}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 text-lg"
          >
            🎯 次は目標を決めよう！
          </Button>
        </div>
      </div>
    );
  }

  const question = diagnosticQuestions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">🧠 性格診断</h2>
          <span className="text-gray-500">
            {currentQuestion + 1} / {diagnosticQuestions.length}
          </span>
        </div>
        <Progress value={progress} className="h-3" />
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-xl text-center">
            {question.question}
          </CardTitle>
          <CardDescription className="text-center">
            あなたの気持ちに一番近いものを選んでください
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {question.childFriendlyOptions.map((option) => (
              <Button
                key={option.value}
                variant={selectedOption === option.value ? "default" : "outline"}
                className={`h-auto p-4 text-left justify-start ${
                  selectedOption === option.value 
                    ? 'bg-blue-500 text-white transform scale-105' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => handleAnswer(option.value)}
                disabled={selectedOption !== null}
              >
                <div className="flex items-center space-x-4 w-full">
                  <span className="text-3xl">{option.emoji}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{option.text}</div>
                    <div className="text-sm opacity-80">{option.description}</div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}