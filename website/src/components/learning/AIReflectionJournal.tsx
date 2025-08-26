'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface JournalEntry {
  id: string;
  date: Date;
  title: string;
  content: string;
  mood: 'excited' | 'happy' | 'neutral' | 'confused' | 'frustrated';
  reflectionLevel: number; // 1-5
  aiInsights: AIInsight[];
  tags: string[];
  isPrivate: boolean;
}

interface AIInsight {
  id: string;
  type: 'pattern' | 'growth' | 'suggestion' | 'encouragement' | 'question';
  content: string;
  confidence: number;
  timestamp: Date;
}

interface ReflectionPrompt {
  id: string;
  category: 'daily' | 'weekly' | 'project' | 'challenge' | 'growth';
  question: string;
  followUp?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  personalityType?: string[];
}

interface AIConversation {
  id: string;
  messages: ChatMessage[];
  startedAt: Date;
  topic: string;
  reflectionDepth: number;
}

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
  emotionalTone?: 'supportive' | 'curious' | 'challenging' | 'celebratory';
}

interface AIReflectionJournalProps {
  studentId: string;
  studentName: string;
  personalityProfile?: any;
}

export default function AIReflectionJournal({ studentId, studentName, personalityProfile }: AIReflectionJournalProps) {
  const [currentEntry, setCurrentEntry] = useState<Partial<JournalEntry>>({});
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [activeConversation, setActiveConversation] = useState<AIConversation | null>(null);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedTab, setSelectedTab] = useState('write');
  const [showInsights, setShowInsights] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const aiPersonas = {
    supportive: { name: 'みらい', emoji: '🌸', description: '優しく見守ってくれる' },
    curious: { name: 'ひらめき', emoji: '💡', description: '一緒に考えてくれる' },
    challenging: { name: 'チャレンジャー', emoji: '🚀', description: 'もっと深く考えさせてくれる' }
  };

  const reflectionPrompts: ReflectionPrompt[] = [
    {
      id: 'daily_1',
      category: 'daily',
      question: '今日一番印象に残ったことは何ですか？なぜそれが印象的だったのでしょう？',
      followUp: 'その経験から何か新しく学んだことはありますか？',
      difficulty: 'beginner'
    },
    {
      id: 'daily_2',
      category: 'daily',
      question: '今日うまくいかなかったことがあれば、どう改善できそうですか？',
      followUp: '次回同じ状況になったら、どんなアプローチを試してみたいですか？',
      difficulty: 'intermediate'
    },
    {
      id: 'growth_1',
      category: 'growth',
      question: '今週、前の自分と比べて成長したと感じる部分はありますか？',
      followUp: 'その成長をさらに伸ばすために、どんなことに挑戦してみたいですか？',
      difficulty: 'intermediate',
      personalityType: ['high_openness', 'high_conscientiousness']
    },
    {
      id: 'challenge_1',
      category: 'challenge',
      question: '最近直面した困難や挑戦について教えてください。どう立ち向かいましたか？',
      followUp: 'その経験から、自分の強みや改善点について何が分かりましたか？',
      difficulty: 'advanced'
    }
  ];

  const moodEmojis = {
    excited: '🤩',
    happy: '😊',
    neutral: '😐',
    confused: '🤔',
    frustrated: '😤'
  };

  useEffect(() => {
    // 初期データの読み込み
    const mockEntries: JournalEntry[] = [
      {
        id: '1',
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        title: 'AIと絵を描いた日',
        content: '今日はChatGPTと一緒に物語を考えて、DALL-Eでその場面を描いてもらった。すごく楽しくて、2時間があっという間だった。',
        mood: 'excited',
        reflectionLevel: 4,
        aiInsights: [
          {
            id: 'i1',
            type: 'pattern',
            content: 'クリエイティブな活動に取り組む時間が長くなっていて、集中力が向上していますね。',
            confidence: 0.9,
            timestamp: new Date()
          },
          {
            id: 'i2',
            type: 'growth',
            content: 'AIツールを組み合わせて使うスキルが身についてきています。',
            confidence: 0.85,
            timestamp: new Date()
          }
        ],
        tags: ['AI', '創作', '集中力'],
        isPrivate: false
      }
    ];

    setJournalEntries(mockEntries);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeConversation?.messages]);

  const generateAIResponse = (userMessage: string, conversationHistory: ChatMessage[]) => {
    // シンプルなAI応答生成（実際の実装では適切なAI APIを使用）
    const responses = {
      supportive: [
        'それは素晴らしい経験でしたね！そのときどんな気持ちでしたか？',
        'とても興味深いですね。もう少し詳しく教えてもらえますか？',
        'あなたの感じ方を大切にしたいです。他にも何か感じたことはありますか？'
      ],
      curious: [
        'なるほど！それはなぜそう思ったのでしょう？',
        '面白い視点ですね。他の見方も考えられそうですか？',
        'そこから何か新しいアイデアは浮かびましたか？'
      ],
      challenging: [
        'それは本当にそうでしょうか？別の角度から考えてみませんか？',
        '素晴らしいですね。さらに深く掘り下げてみましょう。',
        'その経験から、次はどんな挑戦をしてみたいですか？'
      ]
    };

    const randomPersona = Object.keys(responses)[Math.floor(Math.random() * 3)] as keyof typeof responses;
    const randomResponse = responses[randomPersona][Math.floor(Math.random() * responses[randomPersona].length)];

    return {
      content: randomResponse,
      emotionalTone: randomPersona as ChatMessage['emotionalTone']
    };
  };

  const startNewConversation = (prompt?: ReflectionPrompt) => {
    const topic = prompt ? prompt.question : '今日の振り返り';
    const newConversation: AIConversation = {
      id: `conv_${Date.now()}`,
      messages: [
        {
          role: 'ai',
          content: prompt 
            ? `${prompt.question} 気軽に思ったことを教えてくださいね。` 
            : 'こんにちは！今日はどんな一日でしたか？何でもお話しください。',
          timestamp: new Date(),
          emotionalTone: 'supportive'
        }
      ],
      startedAt: new Date(),
      topic,
      reflectionDepth: 1
    };
    setActiveConversation(newConversation);
    setSelectedTab('chat');
  };

  const sendMessage = async () => {
    if (!currentMessage.trim() || !activeConversation) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: currentMessage,
      timestamp: new Date()
    };

    setActiveConversation(prev => prev ? {
      ...prev,
      messages: [...prev.messages, userMessage]
    } : null);

    setCurrentMessage('');
    setIsTyping(true);

    // AI応答のシミュレーション
    setTimeout(() => {
      const aiResponse = generateAIResponse(currentMessage, activeConversation.messages);
      const aiMessage: ChatMessage = {
        role: 'ai',
        content: aiResponse.content,
        timestamp: new Date(),
        emotionalTone: aiResponse.emotionalTone
      };

      setActiveConversation(prev => prev ? {
        ...prev,
        messages: [...prev.messages, aiMessage],
        reflectionDepth: prev.reflectionDepth + 0.1
      } : null);

      setIsTyping(false);
    }, 1500);
  };

  const saveConversationAsEntry = () => {
    if (!activeConversation) return;

    const entry: JournalEntry = {
      id: `entry_${Date.now()}`,
      date: new Date(),
      title: activeConversation.topic,
      content: activeConversation.messages
        .filter(m => m.role === 'user')
        .map(m => m.content)
        .join('\n\n'),
      mood: 'happy',
      reflectionLevel: Math.min(5, Math.ceil(activeConversation.reflectionDepth)),
      aiInsights: [
        {
          id: `insight_${Date.now()}`,
          type: 'growth',
          content: '今日の会話から、自己表現力が向上していることが感じられます。',
          confidence: 0.8,
          timestamp: new Date()
        }
      ],
      tags: ['振り返り', 'AI対話'],
      isPrivate: false
    };

    setJournalEntries(prev => [entry, ...prev]);
    setActiveConversation(null);
    setSelectedTab('history');
  };

  const JournalWritingTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>✍️</span>
            <span>今日の振り返り</span>
          </CardTitle>
          <CardDescription>
            自由に今日の学びや気持ちを書いてみましょう
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">タイトル</label>
            <Input
              placeholder="今日の振り返りのタイトルを書いてみよう"
              value={currentEntry.title || ''}
              onChange={(e) => setCurrentEntry(prev => ({ ...prev, title: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">今日の気分</label>
            <div className="flex space-x-3">
              {Object.entries(moodEmojis).map(([mood, emoji]) => (
                <Button
                  key={mood}
                  variant={currentEntry.mood === mood ? "default" : "outline"}
                  className="text-2xl p-3"
                  onClick={() => setCurrentEntry(prev => ({ ...prev, mood: mood as JournalEntry['mood'] }))}
                >
                  {emoji}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">振り返り</label>
            <Textarea
              placeholder="今日はどんな一日でしたか？学んだこと、感じたこと、何でも自由に書いてください..."
              rows={6}
              value={currentEntry.content || ''}
              onChange={(e) => setCurrentEntry(prev => ({ ...prev, content: e.target.value }))}
            />
          </div>

          <div className="flex space-x-3">
            <Button onClick={() => startNewConversation()} variant="outline">
              🤖 AIと対話しながら振り返る
            </Button>
            <Button className="bg-blue-600">
              💾 保存
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 振り返りプロンプト */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>💭</span>
            <span>振り返りのヒント</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {reflectionPrompts.slice(0, 4).map((prompt) => (
              <Card key={prompt.id} className="cursor-pointer hover:bg-gray-50" onClick={() => startNewConversation(prompt)}>
                <CardContent className="p-4">
                  <div className="text-sm font-medium mb-2">{prompt.question}</div>
                  <Badge variant="outline" className="text-xs">
                    {prompt.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const ChatTab = () => (
    <div className="space-y-4">
      {activeConversation ? (
        <>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <span>🤖</span>
                  <span>AI との対話</span>
                </span>
                <Button 
                  onClick={saveConversationAsEntry}
                  size="sm"
                  className="bg-green-600"
                >
                  ジャーナルに保存
                </Button>
              </CardTitle>
              <CardDescription>
                {activeConversation.topic} について話しています
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 overflow-y-auto border rounded-lg p-4 space-y-4">
                {activeConversation.messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="text-sm">{message.content}</div>
                      <div className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString('ja-JP', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              <div className="flex space-x-2 mt-4">
                <Input
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="メッセージを入力..."
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !isTyping) {
                      sendMessage();
                    }
                  }}
                  disabled={isTyping}
                />
                <Button 
                  onClick={sendMessage} 
                  disabled={isTyping || !currentMessage.trim()}
                >
                  送信
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <Card>
          <CardContent className="text-center py-12">
            <div className="text-6xl mb-4">💭</div>
            <CardTitle className="mb-2">AIと一緒に振り返りませんか？</CardTitle>
            <CardDescription className="mb-6">
              AIがあなたの考えを整理する手伝いをします
            </CardDescription>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {Object.entries(aiPersonas).map(([key, persona]) => (
                <Card key={key} className="cursor-pointer hover:bg-gray-50" onClick={() => startNewConversation()}>
                  <CardContent className="text-center py-4">
                    <div className="text-3xl mb-2">{persona.emoji}</div>
                    <div className="font-semibold text-sm">{persona.name}</div>
                    <div className="text-xs text-gray-600">{persona.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const HistoryTab = () => (
    <div className="space-y-4">
      {journalEntries.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <CardTitle className="mb-2">まだジャーナルエントリーがありません</CardTitle>
            <CardDescription>
              振り返りを書いて、成長の記録を始めましょう！
            </CardDescription>
          </CardContent>
        </Card>
      ) : (
        journalEntries.map((entry) => (
          <Card key={entry.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{moodEmojis[entry.mood]}</div>
                  <div>
                    <CardTitle className="text-lg">{entry.title}</CardTitle>
                    <CardDescription>
                      {entry.date.toLocaleDateString('ja-JP')}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">
                    反省レベル {entry.reflectionLevel}/5
                  </Badge>
                  {entry.tags.map((tag) => (
                    <Badge key={tag} className="bg-blue-100 text-blue-800">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-gray-700 mb-4 whitespace-pre-line">
                {entry.content}
              </div>
              
              {entry.aiInsights.length > 0 && (
                <div className="border-t pt-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm font-medium">🤖 AIからの気づき</span>
                  </div>
                  <div className="space-y-2">
                    {entry.aiInsights.map((insight) => (
                      <div key={insight.id} className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm text-blue-800">{insight.content}</div>
                        <div className="text-xs text-blue-600 mt-1">
                          信頼度: {Math.round(insight.confidence * 100)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">📓 AI リフレクションジャーナル</h1>
        <p className="text-gray-600">
          {studentName}さんの学びと成長の記録
        </p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="write">✍️ 書く</TabsTrigger>
          <TabsTrigger value="chat">💬 AI対話</TabsTrigger>
          <TabsTrigger value="history">📚 履歴</TabsTrigger>
        </TabsList>

        <TabsContent value="write" className="mt-6">
          <JournalWritingTab />
        </TabsContent>

        <TabsContent value="chat" className="mt-6">
          <ChatTab />
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <HistoryTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}