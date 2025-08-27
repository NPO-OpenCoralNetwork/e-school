'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

interface PersonalityResult {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

interface SmartGoal {
  specific: string;
  measurable: string;
  achievable: string;
  relevant: string;
  timeBound: string;
  category: 'technical' | 'creative' | 'social' | 'personal';
  difficulty: 'easy' | 'medium' | 'hard';
  aiSuggestions: string[];
}

interface AIChat {
  role: 'ai' | 'user';
  message: string;
  timestamp: Date;
}

interface SmartGoalSettingProps {
  personalityResults?: PersonalityResult;
}

export default function SmartGoalSetting({ personalityResults }: SmartGoalSettingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [chatHistory, setChatHistory] = useState<AIChat[]>([]);
  const [userInput, setUserInput] = useState('');
  const [goal, setGoal] = useState<Partial<SmartGoal>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  const aiPersona = {
    name: 'あいちゃん',
    emoji: '🤖',
    personality: 'friendly'
  };

  const getPersonalizedGreeting = () => {
    if (!personalityResults) {
      return '🌟 こんにちは！あいちゃんです。一緒に素敵な目標を決めましょう！';
    }

    const { openness, extraversion, conscientiousness } = personalityResults;
    
    if (openness >= 70) {
      return '🚀 わぁ！新しいことが大好きなあなたなら、きっとワクワクする目標が作れそう！';
    } else if (extraversion >= 70) {
      return '🎉 みんなと一緒に何かを達成する目標はどうかな？あなたらしい目標を考えよう！';
    } else if (conscientiousness >= 70) {
      return '💪 計画的なあなたなら、きっと素晴らしい目標を立てられるね！一緒に考えよう！';
    }
    
    return '😊 あなたらしい特別な目標を一緒に見つけましょう！どんなことに興味があるかな？';
  };

  const goalCategories = [
    {
      id: 'technical',
      name: 'テクニカル',
      emoji: '💻',
      description: 'プログラミングやAIツールを使いこなす',
      examples: ['Scratchで簡単なゲーム作り', 'ChatGPTで宿題のお手伝い', '画像生成AIでイラスト作成']
    },
    {
      id: 'creative',
      name: 'クリエイティブ',
      emoji: '🎨',
      description: '創造力を活かした作品づくり',
      examples: ['AIと一緒に物語を書く', 'オリジナルキャラクターをデザイン', 'ミュージックビデオを作る']
    },
    {
      id: 'social',
      name: 'ソーシャル',
      emoji: '👥',
      description: 'みんなと協力して何かを成し遂げる',
      examples: ['クラスメイトにAIを教える', 'チームでロボット制作', '学校のイベントで発表']
    },
    {
      id: 'personal',
      name: 'パーソナル',
      emoji: '🌱',
      description: '自分の成長や新しい挑戦',
      examples: ['毎日日記を書く習慣づくり', '新しいスポーツに挑戦', '本を月10冊読む']
    }
  ];

  const steps = [
    {
      title: '目標の種類を選ぼう',
      description: 'どんなことにチャレンジしたい？',
      component: 'categorySelection'
    },
    {
      title: '💭 具体的に決めよう (Specific)',
      description: '「何を」「どのように」やるかを決めよう',
      component: 'specificGoal'
    },
    {
      title: '📏 測り方を決めよう (Measurable)', 
      description: '「どのくらい」「何回」など数で表そう',
      component: 'measurableGoal'
    },
    {
      title: '🎈 現実的かチェック (Achievable)',
      description: '本当にできそうか一緒に考えよう',
      component: 'achievableGoal'
    },
    {
      title: '❤️ 大切な理由 (Relevant)',
      description: 'なぜこれをやりたいのか教えて',
      component: 'relevantGoal'
    },
    {
      title: '⏰ いつまでに？ (Time-bound)',
      description: '期限を決めて計画を立てよう',
      component: 'timeBoundGoal'
    },
    {
      title: '🌟 完成！',
      description: 'あなただけのSMART目標ができました',
      component: 'completion'
    }
  ];

  const addAIMessage = (message: string) => {
    setChatHistory(prev => [...prev, {
      role: 'ai',
      message,
      timestamp: new Date()
    }]);
  };

  const addUserMessage = (message: string) => {
    setChatHistory(prev => [...prev, {
      role: 'user', 
      message,
      timestamp: new Date()
    }]);
  };

  const generateAISuggestions = (category: string, personalityResults?: PersonalityResult) => {
    const baseSuggestions: Record<string, string[]> = {
      technical: [
        '毎週1つずつScratchでミニゲームを作る',
        'ChatGPTに毎日質問して、答えをノートにまとめる',
        '画像生成AIで週に3枚オリジナル絵を作る'
      ],
      creative: [
        'AIと協力して月に1つショートストーリーを完成させる',
        '音楽生成AIで自分だけの歌を作る',
        'デジタルアートで季節をテーマにした作品集を作る'
      ],
      social: [
        '友だち3人にAIの使い方を教える',
        'クラスでAI作品の発表会を開く',
        '家族にAIで作った作品を見せて感想をもらう'
      ],
      personal: [
        'AIと一緒に毎日3行日記を書く',
        '新しいことに毎月1つチャレンジする',
        'AIを使って勉強の計画を立て、実行する'
      ]
    };

    let suggestions = baseSuggestions[category] || [];

    if (personalityResults) {
      const { openness, conscientiousness, extraversion } = personalityResults;

      if (openness >= 70) {
        suggestions.push('誰もやったことがない新しいAI実験に挑戦する');
      }

      if (conscientiousness >= 70) {
        suggestions = suggestions.map(s => s + '（毎日の進捗を記録）');
      }

      if (extraversion >= 70) {
        suggestions.push('みんなの前で成果を発表する機会を作る');
      }
    }

    return suggestions;
  };

  const handleCategorySelect = (categoryId: string) => {
    const category = goalCategories.find(c => c.id === categoryId);
    if (category) {
      setGoal(prev => ({ ...prev, category: categoryId as SmartGoal['category'] }));
      addUserMessage(`${category.emoji} ${category.name}を選んだよ！`);
      addAIMessage(`${category.emoji} 素晴らしい選択！${category.description}ね。例えば、こんなアイデアはどうかな？`);
      
      const suggestions = generateAISuggestions(categoryId, personalityResults);
      setTimeout(() => {
        suggestions.forEach((suggestion, index) => {
          setTimeout(() => {
            addAIMessage(`💡 ${suggestion}`);
          }, index * 1000);
        });
        
        setTimeout(() => {
          addAIMessage('この中から気に入ったものがあるかな？それとも、全然違うアイデアがある？');
          setCurrentStep(1);
        }, suggestions.length * 1000 + 1000);
      }, 1500);
    }
  };

  const handleUserInput = async (input: string) => {
    if (!input.trim()) return;

    setIsProcessing(true);
    addUserMessage(input);

    // AI応答のシミュレーション
    setTimeout(() => {
      const currentStepData = steps[currentStep];
      let aiResponse = '';

      switch (currentStep) {
        case 1: // Specific
          setGoal(prev => ({ ...prev, specific: input }));
          aiResponse = `いいね！「${input}」を具体的にやりたいんだね。今度は、どのくらいできたら「成功！」と言えるか考えてみよう。例えば「3回作る」とか「10個覚える」とか、数で表せるかな？`;
          break;
        case 2: // Measurable
          setGoal(prev => ({ ...prev, measurable: input }));
          aiResponse = `素晴らしい！「${input}」で測るんだね。でも、これって本当にできそう？今のあなたの力を考えて、ちょっと頑張れば達成できそうか確認してみよう！`;
          break;
        case 3: // Achievable
          setGoal(prev => ({ ...prev, achievable: input }));
          aiResponse = `よく考えたね！それじゃあ、なんでこの目標をやりたいのか教えて。あなたにとって大切な理由があるはず。どんな気持ちかな？`;
          break;
        case 4: // Relevant
          setGoal(prev => ({ ...prev, relevant: input }));
          aiResponse = `とても素敵な理由だね！「${input}」という気持ち、大切にしよう。最後に、いつまでに達成したいかな？「来月末まで」とか「夏休みの間に」とか、期限を決めてみて！`;
          break;
        case 5: // Time-bound
          setGoal(prev => ({ ...prev, timeBound: input }));
          aiResponse = `完璧！これで素晴らしいSMART目標ができました！🎉 あなたの目標をまとめてみるね。`;
          break;
      }

      addAIMessage(aiResponse);
      
      setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
        setIsProcessing(false);
      }, 2000);
    }, 1500);

    setUserInput('');
  };

  const renderCurrentStep = () => {
    const step = steps[currentStep];

    switch (step.component) {
      case 'categorySelection':
        return (
          <div className="grid md:grid-cols-2 gap-4">
            {goalCategories.map((category) => (
              <Card 
                key={category.id}
                className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-blue-300"
                onClick={() => handleCategorySelect(category.id)}
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{category.emoji}</div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600">
                    <strong>例：</strong>
                    <ul className="list-disc list-inside mt-1">
                      {category.examples.map((example, index) => (
                        <li key={index}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'completion':
        return (
          <Card className="border-2 border-green-500">
            <CardHeader className="text-center bg-green-50">
              <CardTitle className="text-2xl text-green-600">
                🎉 目標完成！
              </CardTitle>
              <CardDescription>
                あなただけのSMART目標ができました
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
                <h3 className="font-bold text-lg mb-4 text-center">
                  私のSMART目標
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-red-100 text-red-800">S</Badge>
                    <div>
                      <strong>具体的 (Specific):</strong> {goal.specific}
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-orange-100 text-orange-800">M</Badge>
                    <div>
                      <strong>測定可能 (Measurable):</strong> {goal.measurable}
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-yellow-100 text-yellow-800">A</Badge>
                    <div>
                      <strong>達成可能 (Achievable):</strong> {goal.achievable}
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-green-100 text-green-800">R</Badge>
                    <div>
                      <strong>関連性 (Relevant):</strong> {goal.relevant}
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-blue-100 text-blue-800">T</Badge>
                    <div>
                      <strong>期限 (Time-bound):</strong> {goal.timeBound}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 text-lg">
                  🚀 目標に向けて学習開始！
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="ここに答えを書いてね..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !isProcessing) {
                    handleUserInput(userInput);
                  }
                }}
                disabled={isProcessing}
              />
              <Button 
                onClick={() => handleUserInput(userInput)}
                disabled={isProcessing || !userInput.trim()}
              >
                送信
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* ヘッダー */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">SMART目標設定</h1>
        <p className="text-gray-600">AIのあいちゃんと一緒に、達成しやすい目標を作ろう！</p>
      </div>

      {/* 進捗バー */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">進捗</span>
          <span className="text-sm text-gray-500">
            {currentStep + 1} / {steps.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* チャット履歴 */}
        <Card className="lg:col-span-1 h-96 overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center space-x-2">
              <span>{aiPersona.emoji}</span>
              <span>{aiPersona.name}との会話</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-80 overflow-y-auto space-y-2">
            {chatHistory.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <div className="text-4xl mb-2">{aiPersona.emoji}</div>
                <p>{getPersonalizedGreeting()}</p>
              </div>
            ) : (
              chatHistory.map((chat, index) => (
                <div 
                  key={index}
                  className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs p-2 rounded-lg ${
                    chat.role === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <div className="text-sm">{chat.message}</div>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* メインコンテンツ */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{steps[currentStep].title}</CardTitle>
            <CardDescription>{steps[currentStep].description}</CardDescription>
          </CardHeader>
          <CardContent>
            {renderCurrentStep()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}