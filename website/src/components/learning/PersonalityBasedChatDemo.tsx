'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PersonalityProfile {
  id: string;
  name: string;
  traits: {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
  };
  preferredStyle: string;
  color: string;
  icon: string;
}

interface ChatMessage {
  id: string;
  type: 'ai' | 'student';
  content: string;
  timestamp: Date;
  personalityInsight?: string;
  adaptedStyle?: string;
}

const personalityProfiles: PersonalityProfile[] = [
  {
    id: 'introverted_careful',
    name: '内向的・慎重型',
    traits: {
      openness: 60,
      conscientiousness: 85,
      extraversion: 25,
      agreeableness: 70,
      neuroticism: 65
    },
    preferredStyle: '一対一でじっくり対話、段階的アプローチ',
    color: 'bg-blue-500',
    icon: '🤔'
  },
  {
    id: 'extraverted_creative',
    name: '外向的・創造型',
    traits: {
      openness: 90,
      conscientiousness: 45,
      extraversion: 85,
      agreeableness: 80,
      neuroticism: 30
    },
    preferredStyle: 'エネルギッシュな対話、ブレインストーミング',
    color: 'bg-orange-500',
    icon: '🌟'
  },
  {
    id: 'balanced_analytical',
    name: 'バランス・分析型',
    traits: {
      openness: 70,
      conscientiousness: 75,
      extraversion: 55,
      agreeableness: 60,
      neuroticism: 40
    },
    preferredStyle: '構造化された対話、論理的説明、目標志向',
    color: 'bg-green-500',
    icon: '🎯'
  }
];

const chatScenarios: Record<string, ChatMessage[]> = {
  introverted_careful: [
    {
      id: '1',
      type: 'ai',
      content: 'お疲れ様でした。今日のプログラミングはどうでしたか？ゆっくりでいいので、感じたことを教えてくださいね。',
      timestamp: new Date(),
      adaptedStyle: '穏やかなトーン、プレッシャーを与えない表現'
    },
    {
      id: '2',
      type: 'student',
      content: 'うーん...難しかったです。エラーがたくさん出て、直すのに時間がかかって...',
      timestamp: new Date()
    },
    {
      id: '3',
      type: 'ai',
      content: 'エラーと向き合うのは大変だったと思います。でも、最後まで諦めずに取り組んだあなたの粘り強さを見ていました。どのエラーが一番印象に残っていますか？',
      timestamp: new Date(),
      personalityInsight: '慎重さと誠実性を活かし、プロセスを評価してさらなる学習意欲を引き出す',
      adaptedStyle: '共感的アプローチ、プロセス重視の評価'
    }
  ],
  extraverted_creative: [
    {
      id: '1',
      type: 'ai',
      content: 'やったね！今日のプロジェクトはどうだった？何か面白いアイデア浮かんだ？',
      timestamp: new Date(),
      adaptedStyle: 'エネルギッシュなトーン、創造性に焦点'
    },
    {
      id: '2',
      type: 'student',
      content: 'すごく楽しかった！ゲームにもっと面白い仕掛けを入れたいんだ。爆発エフェクトとか、隠しキャラとか！',
      timestamp: new Date()
    },
    {
      id: '3',
      type: 'ai',
      content: 'わー、それ最高じゃない！君のアイデアはいつも僕をワクワクさせるよ。爆発エフェクトって、どんな風に動かしたい？一緒にブレインストーミングしよう！',
      timestamp: new Date(),
      personalityInsight: '高い開放性と外向性を活かし、創造的思考を最大限に刺激する',
      adaptedStyle: '興奮を共有、協働的なアイデア出し'
    }
  ],
  balanced_analytical: [
    {
      id: '1',
      type: 'ai',
      content: 'お疲れ様です。今日の学習目標の達成状況はいかがでしたか？具体的に振り返ってみましょう。',
      timestamp: new Date(),
      adaptedStyle: '構造化されたアプローチ、目標志向'
    },
    {
      id: '2',
      type: 'student',
      content: '目標の70%くらいは達成できたと思います。関数の作成はできましたが、効率性の部分でまだ改善の余地があります。',
      timestamp: new Date()
    },
    {
      id: '3',
      type: 'ai',
      content: '素晴らしい自己分析ですね。70%の達成と改善ポイントの特定、これは確実な成長の証拠です。効率性について、具体的にはどの部分で改善の可能性を感じていますか？',
      timestamp: new Date(),
      personalityInsight: 'バランスの取れた性格特性を活かし、分析的思考と目標達成をサポート',
      adaptedStyle: '客観的評価、具体的なフィードバック'
    }
  ]
};

export default function PersonalityBasedChatDemo() {
  const [selectedProfile, setSelectedProfile] = useState<PersonalityProfile>(personalityProfiles[0]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && currentIndex < chatScenarios[selectedProfile.id].length) {
      const timer = setTimeout(() => {
        console.log('Adding personality message', currentIndex + 1, 'of', chatScenarios[selectedProfile.id].length);
        setMessages(prev => [...prev, chatScenarios[selectedProfile.id][currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 2500);
      return () => clearTimeout(timer);
    } else if (currentIndex >= chatScenarios[selectedProfile.id].length) {
      console.log('Personality demo completed');
      setIsPlaying(false);
    }
  }, [isPlaying, currentIndex, selectedProfile.id]);

  const startDemo = () => {
    setMessages([]);
    setCurrentIndex(0);
    setIsPlaying(true);
    console.log('Personality demo started', selectedProfile.name, chatScenarios[selectedProfile.id].length, 'messages'); // デバッグ用
  };

  const switchProfile = (profile: PersonalityProfile) => {
    setSelectedProfile(profile);
    setMessages([]);
    setCurrentIndex(0);
    setIsPlaying(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* ヘッダー */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-white">Big Five性格診断に基づくパーソナライズ対話</h2>
        <p className="text-gray-300">一人ひとりの性格特性に合わせたAI対話システム</p>
      </div>

      {/* 性格プロファイル選択 */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 p-6 overflow-hidden">
        <h3 className="text-lg font-semibold text-white mb-4">🧬 性格プロファイルを選択</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-full">
          {personalityProfiles.map((profile) => (
            <div key={profile.id} className="min-w-0 max-w-full">
              <button
                onClick={() => switchProfile(profile)}
                className={`p-4 rounded-xl border-2 transition-all hover:scale-[1.01] h-auto flex flex-col w-full max-w-full overflow-hidden ${
                  selectedProfile.id === profile.id
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                }`}
              >
                <div className="flex items-center gap-3 mb-3 w-full min-w-0">
                  <span className="text-2xl flex-shrink-0">{profile.icon}</span>
                  <span className="font-semibold text-white text-left text-sm leading-tight break-words min-w-0 flex-1 overflow-hidden">{profile.name}</span>
                </div>
                <p className="text-xs text-gray-300 text-left leading-relaxed break-words min-w-0 overflow-hidden">{profile.preferredStyle}</p>
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* 選択されたプロファイル詳細 */}
      <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Big Five特性 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">📊 Big Five特性スコア</h4>
            <div className="space-y-3">
              {Object.entries(selectedProfile.traits).map(([trait, score]) => {
                const traitNames: Record<string, string> = {
                  openness: '開放性',
                  conscientiousness: '誠実性',
                  extraversion: '外向性',
                  agreeableness: '協調性',
                  neuroticism: '神経症傾向'
                };
                return (
                  <div key={trait} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{traitNames[trait]}</span>
                      <span className="text-white font-medium">{score}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI対話スタイル */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">🤖 AI対話スタイル</h4>
            <div className="space-y-3 text-gray-300">
              <p><strong>アプローチ:</strong> {selectedProfile.preferredStyle}</p>
              <div className="mt-4">
                <Button
                  onClick={startDemo}
                  disabled={isPlaying}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 disabled:opacity-50"
                >
                  {isPlaying ? `デモ実行中... (${messages.length}/${chatScenarios[selectedProfile.id].length})` : 'パーソナライズ対話デモ開始'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* チャットデモ */}
      <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 min-h-[400px]">
        <div className="p-6">
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 py-8">
                <p>「パーソナライズ対話デモ開始」ボタンを押してデモを確認してください</p>
              </div>
            )}
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'ai' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-xl break-words ${
                      message.type === 'ai'
                        ? 'bg-blue-600/20 border border-blue-500/30'
                        : 'bg-purple-600/20 border border-purple-500/30'
                    }`}
                  >
                    {/* メッセージヘッダー */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                        message.type === 'ai' ? 'bg-blue-500' : 'bg-purple-500'
                      }`}>
                        {message.type === 'ai' ? '🤖' : selectedProfile.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300">
                        {message.type === 'ai' ? 'AI先生' : selectedProfile.name}
                      </span>
                    </div>

                    {/* メッセージ本文 */}
                    <p className="text-gray-200 mb-3 break-words leading-relaxed">{message.content}</p>

                    {/* AI適応スタイル */}
                    {message.adaptedStyle && (
                      <div className="mt-3 p-3 bg-green-900/30 border border-green-500/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-green-400">🎯</span>
                          <span className="text-sm font-semibold text-green-300">適応されたスタイル</span>
                        </div>
                        <p className="text-xs text-gray-300 break-words leading-relaxed">{message.adaptedStyle}</p>
                      </div>
                    )}

                    {/* パーソナリティインサイト */}
                    {message.personalityInsight && (
                      <div className="mt-3 p-3 bg-purple-900/30 border border-purple-500/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-purple-400">🧠</span>
                          <span className="text-sm font-semibold text-purple-300">性格特性の活用</span>
                        </div>
                        <p className="text-xs text-gray-300 break-words leading-relaxed">{message.personalityInsight}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* 技術説明 */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">🔬 パーソナライゼーション技術</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-blue-300 mb-2">🧬 性格分析</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Big Five性格診断を基にした特性分析</li>
              <li>• 行動パターンからの性格推定</li>
              <li>• 学習スタイルの自動識別</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-300 mb-2">適応的対話</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• 性格に応じた質問スタイル調整</li>
              <li>• 個別最適化されたフィードバック</li>
              <li>• 学習者のペースに合わせた進行</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-300 mb-2">📈 継続的改善</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• 対話履歴からの学習</li>
              <li>• 効果測定と戦略調整</li>
              <li>• 成長に伴うスタイル更新</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}