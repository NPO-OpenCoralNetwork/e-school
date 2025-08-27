'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ChatMessage {
  id: string;
  type: 'ai' | 'student';
  content: string;
  timestamp: Date;
  growthObservation?: {
    dimension: 'confidence' | 'creativity' | 'collaboration' | 'criticalThinking' | 'communication';
    change: string;
    badge?: string;
  };
  insights?: string[];
}

const mockChatHistory: ChatMessage[] = [
  {
    id: '1',
    type: 'ai',
    content: 'こんにちは！\n今日はどんなことを学びましたか？',
    timestamp: new Date('2024-01-15 14:00'),
  },
  {
    id: '2',
    type: 'student',
    content: 'プログラミングでゲームを作りました。\nでも、うまくいかない部分が\nたくさんあって...',
    timestamp: new Date('2024-01-15 14:01'),
  },
  {
    id: '3',
    type: 'ai',
    content: '最後まで取り組んだのが素晴らしいです！\n今日は前より大きな声で発表できてました。\n難しかった部分はどこですか？',
    timestamp: new Date('2024-01-15 14:02'),
    growthObservation: {
      dimension: 'confidence',
      change: '発表時の声の大きさ\n20%向上',
      badge: '自信アップ'
    }
  },
  {
    id: '4',
    type: 'student',
    content: 'キャラクターの動きを作るところです。\nでも、友だちのアイデアを聞いて、\n新しい方法を思いつきました！',
    timestamp: new Date('2024-01-15 14:03'),
  },
  {
    id: '5',
    type: 'ai',
    content: 'すごい！友だちの意見を聞いて活かす\nなんて、とても上手な協働ですね。\n質問する回数も増えています。\n新しい方法はどんなものですか？',
    timestamp: new Date('2024-01-15 14:04'),
    growthObservation: {
      dimension: 'collaboration',
      change: '他者の意見を活用する\n行動が増加',
      badge: '協力プロ'
    },
    insights: [
      '他者に相談する頻度：\n3週間で40%増加',
      '創造的解決策：今週3回\n（先週は1回）'
    ]
  },
  {
    id: '6',
    type: 'student',
    content: '物理演算を使って、もっとリアルな\n動きを作ってみようと思います。\n難しそうだけど、やってみたいです。',
    timestamp: new Date('2024-01-15 14:05'),
  },
  {
    id: '7',
    type: 'ai',
    content: '挑戦する姿勢が素晴らしいです！\n3週間前と比べて説明が上手に\nなりましたね。物理演算、面白そうです！\nどんな動きを作りたいですか？',
    timestamp: new Date('2024-01-15 14:06'),
    growthObservation: {
      dimension: 'creativity',
      change: '新アイデアへの\n挑戦意欲向上',
      badge: '探求者'
    }
  }
];

const growthDimensions = {
  confidence: { name: '自信・積極性', color: 'bg-purple-500', icon: '🌟' },
  creativity: { name: '創造性・表現力', color: 'bg-pink-500', icon: '🎨' },
  collaboration: { name: '協働・思いやり', color: 'bg-blue-500', icon: '🤝' },
  criticalThinking: { name: '論理的思考', color: 'bg-green-500', icon: '🧠' },
  communication: { name: 'コミュニケーション', color: 'bg-orange-500', icon: '💬' }
};

export default function AIGrowthObservationDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && currentIndex < mockChatHistory.length) {
      const timer = setTimeout(() => {
        console.log('Adding message', currentIndex + 1, 'of', mockChatHistory.length);
        setMessages(prev => [...prev, mockChatHistory[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (currentIndex >= mockChatHistory.length) {
      console.log('Demo completed');
      setIsPlaying(false);
    }
  }, [isPlaying, currentIndex]);

  const startDemo = () => {
    setMessages([]);
    setCurrentIndex(0);
    setIsPlaying(true);
    console.log('Demo started', mockChatHistory.length, 'messages available'); // デバッグ用
  };

  const resetDemo = () => {
    setMessages([]);
    setCurrentIndex(0);
    setIsPlaying(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* ヘッダー */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-white">AIによる成長観察システム</h2>
        <p className="text-gray-300">リアルタイムで子どもの質的成長を観察・可視化・報酬化</p>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={startDemo}
            disabled={isPlaying}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:opacity-90 disabled:opacity-50 transition-all"
          >
            {isPlaying ? `デモ実行中... (${messages.length}/${mockChatHistory.length})` : 'デモ開始'}
          </button>
          <button
            onClick={resetDemo}
            className="px-6 py-3 bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-600 transition-all"
          >
            リセット
          </button>
        </div>
      </div>

      {/* 成長指標レジェンド */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">🎯 多次元成長指標</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {Object.entries(growthDimensions).map(([key, dimension]) => (
            <div key={key} className="flex items-center gap-2 min-w-0">
              <span className="text-lg flex-shrink-0">{dimension.icon}</span>
              <span className="text-sm text-gray-300 break-words">{dimension.name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* チャットUI */}
      <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 min-h-[500px]">
        <div className="p-6">
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {messages.length === 0 && !isPlaying && (
              <div className="text-center text-gray-400 py-8">
                <p>「デモ開始」ボタンを押してAI成長観察システムの動作を確認してください</p>
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'ai' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl break-words overflow-hidden ${
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
                      {message.type === 'ai' ? '🤖' : '👤'}
                    </div>
                    <span className="text-sm font-medium text-gray-300">
                      {message.type === 'ai' ? 'AI先生' : '生徒'}
                    </span>
                    <span className="text-xs text-gray-500">
                      {message.timestamp.toLocaleTimeString('ja-JP', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>

                  {/* メッセージ本文 */}
                  <p className="text-gray-200 mb-3 break-words leading-relaxed text-sm whitespace-pre-line">{message.content}</p>

                  {/* 成長観察 */}
                  {message.growthObservation && (
                    <div className="mt-3 p-3 bg-green-900/30 border border-green-500/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-400">📈</span>
                        <span className="text-sm font-semibold text-green-300">成長を検出！</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 flex-wrap">
                          <span className="text-base flex-shrink-0">
                            {growthDimensions[message.growthObservation.dimension].icon}
                          </span>
                          <div className="min-w-0 flex-1">
                            <span className="text-xs text-gray-300 break-words">
                              {growthDimensions[message.growthObservation.dimension].name}:
                            </span>
                            <br />
                            <span className="text-xs text-green-300 break-words">
                              {message.growthObservation.change}
                            </span>
                          </div>
                        </div>
                        {message.growthObservation.badge && (
                          <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 text-xs max-w-full break-words">
                            🏆 {message.growthObservation.badge}
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  {/* AIインサイト */}
                  {message.insights && (
                    <div className="mt-3 p-3 bg-purple-900/30 border border-purple-500/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-purple-400">🔍</span>
                        <span className="text-sm font-semibold text-purple-300">パターン分析</span>
                      </div>
                      <ul className="space-y-1">
                        {message.insights.map((insight, index) => (
                          <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5 flex-shrink-0">•</span>
                            <span className="break-words leading-relaxed">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* 成長統計パネル */}
      {messages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-green-900/30 to-green-800/30 border-green-700 p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-xl">
                🏆
              </div>
              <div>
                <p className="text-green-300 font-semibold">獲得バッジ</p>
                <p className="text-2xl font-bold text-white">3個</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-blue-700 p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-xl">
                📈
              </div>
              <div>
                <p className="text-blue-300 font-semibold">成長検出</p>
                <p className="text-2xl font-bold text-white">5回</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border-purple-700 p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-xl">
                🧠
              </div>
              <div>
                <p className="text-purple-300 font-semibold">AIインサイト</p>
                <p className="text-2xl font-bold text-white">2件</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* 技術説明 */}
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">🤖 AI観察技術</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-blue-300 mb-2">🎤 音声・対話分析</h4>
            <ul className="space-y-1 text-gray-300 text-sm whitespace-pre-line">
              <li>• 声の大きさ・トーンから\n自信度測定</li>
              <li>• 発言頻度・積極性の数値化</li>
              <li>• 説明の明瞭さ・相手理解度</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-300 mb-2">📝 内容・行動分析</h4>
            <ul className="space-y-1 text-gray-300 text-sm whitespace-pre-line">
              <li>• アイデアの独創性・\n多様性評価</li>
              <li>• 協働行動・支援行動の検出</li>
              <li>• 振り返りの質・自己洞察力</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}