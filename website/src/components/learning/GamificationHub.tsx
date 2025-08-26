'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface GameProfile {
  id: string;
  studentName: string;
  level: number;
  currentXP: number;
  nextLevelXP: number;
  totalXP: number;
  streak: number;
  lastActive: Date;
  avatar: string;
  title: string;
  coins: number;
}

interface Quest {
  id: string;
  title: string;
  description: string;
  category: 'daily' | 'weekly' | 'special' | 'challenge';
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  xpReward: number;
  coinReward: number;
  progress: number;
  maxProgress: number;
  isCompleted: boolean;
  expiresAt?: Date;
  requirements: string[];
  emoji: string;
}

interface CollectibleBadge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
  category: 'achievement' | 'milestone' | 'event' | 'skill';
  unlockCondition: string;
  isUnlocked: boolean;
  unlockedAt?: Date;
  series?: string;
}

interface LeaderboardEntry {
  rank: number;
  studentName: string;
  avatar: string;
  level: number;
  totalXP: number;
  isCurrentUser: boolean;
}

interface GamificationHubProps {
  studentId: string;
  studentName: string;
}

export default function GamificationHub({ studentId, studentName }: GamificationHubProps) {
  const [profile, setProfile] = useState<GameProfile | null>(null);
  const [activeQuests, setActiveQuests] = useState<Quest[]>([]);
  const [badges, setBadges] = useState<CollectibleBadge[]>([]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [selectedTab, setSelectedTab] = useState('profile');

  // 初期データの設定
  useEffect(() => {
    const mockProfile: GameProfile = {
      id: studentId,
      studentName,
      level: 12,
      currentXP: 750,
      nextLevelXP: 1000,
      totalXP: 11750,
      streak: 7,
      lastActive: new Date(),
      avatar: '🧑‍💻',
      title: 'AIクリエイター見習い',
      coins: 1250
    };

    const mockQuests: Quest[] = [
      {
        id: 'daily_1',
        title: '毎日のAI対話',
        description: 'AIと今日の学習について話してみよう',
        category: 'daily',
        difficulty: 'easy',
        xpReward: 50,
        coinReward: 10,
        progress: 1,
        maxProgress: 1,
        isCompleted: true,
        emoji: '💬',
        requirements: ['AIチャットボットと5分以上会話']
      },
      {
        id: 'daily_2',
        title: 'コードチャレンジ',
        description: '今日のプログラミング問題に挑戦しよう',
        category: 'daily',
        difficulty: 'medium',
        xpReward: 100,
        coinReward: 20,
        progress: 0,
        maxProgress: 1,
        isCompleted: false,
        emoji: '💻',
        requirements: ['プログラミング問題を1問解く']
      },
      {
        id: 'weekly_1',
        title: 'クリエイティブ週間',
        description: 'この週に3つの作品を完成させよう',
        category: 'weekly',
        difficulty: 'hard',
        xpReward: 300,
        coinReward: 100,
        progress: 2,
        maxProgress: 3,
        isCompleted: false,
        expiresAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        emoji: '🎨',
        requirements: ['デジタル作品を3つ完成', '各作品にAI要素を含める']
      },
      {
        id: 'challenge_1',
        title: 'AI協力プロジェクト',
        description: 'AIと協力して大作を作り上げよう',
        category: 'challenge',
        difficulty: 'expert',
        xpReward: 500,
        coinReward: 200,
        progress: 3,
        maxProgress: 10,
        isCompleted: false,
        emoji: '🚀',
        requirements: [
          'プロジェクト企画を立てる',
          'AIツールを3つ以上活用',
          '10日間継続して作業',
          '他の学習者と協力'
        ]
      }
    ];

    const mockBadges: CollectibleBadge[] = [
      {
        id: 'first_steps',
        name: 'はじめの一歩',
        description: '初めてのAI体験を完了しました',
        emoji: '👶',
        rarity: 'common',
        category: 'milestone',
        unlockCondition: '初回ログイン',
        isUnlocked: true,
        unlockedAt: new Date('2024-01-01')
      },
      {
        id: 'ai_whisperer',
        name: 'AIの囁き手',
        description: 'AIと100回以上対話しました',
        emoji: '🗣️',
        rarity: 'rare',
        category: 'achievement',
        unlockCondition: 'AI対話100回',
        isUnlocked: true,
        unlockedAt: new Date('2024-01-15')
      },
      {
        id: 'creative_genius',
        name: '創造の天才',
        description: '革新的なアイデアで周りを驚かせました',
        emoji: '🧠',
        rarity: 'epic',
        category: 'skill',
        unlockCondition: '独創性評価で最高点獲得',
        isUnlocked: true,
        unlockedAt: new Date('2024-01-20')
      },
      {
        id: 'master_teacher',
        name: '若き指導者',
        description: '他の学習者に教えることで共に成長しました',
        emoji: '👨‍🏫',
        rarity: 'legendary',
        category: 'achievement',
        unlockCondition: '他者に10回以上指導',
        isUnlocked: false
      },
      {
        id: 'ai_pioneer',
        name: 'AI開拓者',
        description: '未踏のAI領域を探索した冒険者',
        emoji: '🏴‍☠️',
        rarity: 'mythic',
        category: 'event',
        unlockCondition: '新機能のβテスター',
        isUnlocked: false,
        series: 'パイオニア'
      }
    ];

    const mockLeaderboard: LeaderboardEntry[] = [
      { rank: 1, studentName: 'あかりちゃん', avatar: '👩‍🎨', level: 15, totalXP: 14500, isCurrentUser: false },
      { rank: 2, studentName: 'たくみくん', avatar: '👨‍💻', level: 14, totalXP: 13200, isCurrentUser: false },
      { rank: 3, studentName: studentName, avatar: '🧑‍💻', level: 12, totalXP: 11750, isCurrentUser: true },
      { rank: 4, studentName: 'みさきちゃん', avatar: '👩‍🔬', level: 11, totalXP: 10800, isCurrentUser: false },
      { rank: 5, studentName: 'けんたくん', avatar: '👨‍🎨', level: 10, totalXP: 9950, isCurrentUser: false }
    ];

    setProfile(mockProfile);
    setActiveQuests(mockQuests);
    setBadges(mockBadges);
    setLeaderboard(mockLeaderboard);
  }, [studentId, studentName]);

  const getRarityColor = (rarity: CollectibleBadge['rarity']) => {
    switch (rarity) {
      case 'common': return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300' };
      case 'rare': return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' };
      case 'epic': return { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-300' };
      case 'legendary': return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' };
      case 'mythic': return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300 shadow-lg' };
    }
  };

  const getDifficultyColor = (difficulty: Quest['difficulty']) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'hard': return 'text-orange-600';
      case 'expert': return 'text-red-600';
    }
  };

  const completeQuest = (questId: string) => {
    setActiveQuests(prev => 
      prev.map(quest => 
        quest.id === questId 
          ? { ...quest, isCompleted: true, progress: quest.maxProgress }
          : quest
      )
    );

    if (profile) {
      const quest = activeQuests.find(q => q.id === questId);
      if (quest) {
        const newXP = profile.currentXP + quest.xpReward;
        const newCoins = profile.coins + quest.coinReward;
        let newLevel = profile.level;
        let leveledUp = false;

        if (newXP >= profile.nextLevelXP) {
          newLevel++;
          leveledUp = true;
          setShowLevelUp(true);
          setTimeout(() => setShowLevelUp(false), 4000);
        }

        setProfile(prev => prev ? {
          ...prev,
          currentXP: newXP >= profile.nextLevelXP ? newXP - profile.nextLevelXP : newXP,
          totalXP: prev.totalXP + quest.xpReward,
          level: newLevel,
          coins: newCoins
        } : null);
      }
    }
  };

  const ProfileCard = () => (
    <div className="space-y-6">
      {profile && (
        <>
          {/* プロフィール概要 */}
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="text-6xl">{profile.avatar}</div>
                <div className="flex-1">
                  <CardTitle className="text-2xl">{profile.studentName}</CardTitle>
                  <CardDescription className="text-blue-100 text-lg">{profile.title}</CardDescription>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge className="bg-white text-blue-600 text-sm">
                      Lv.{profile.level}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-300">🪙</span>
                      <span className="font-bold">{profile.coins}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>次のレベルまで</span>
                  <span className="font-bold">{profile.nextLevelXP - profile.currentXP} XP</span>
                </div>
                <Progress 
                  value={(profile.currentXP / profile.nextLevelXP) * 100} 
                  className="h-3"
                />
                <div className="text-center text-sm opacity-90">
                  {profile.currentXP} / {profile.nextLevelXP} XP
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 統計情報 */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-orange-600">{profile.streak}</div>
                <div className="text-sm text-gray-600">連続学習日数 🔥</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-green-600">{profile.totalXP}</div>
                <div className="text-sm text-gray-600">総獲得 XP ⭐</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-purple-600">
                  {badges.filter(b => b.isUnlocked).length}
                </div>
                <div className="text-sm text-gray-600">獲得バッジ数 🏆</div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );

  const QuestsCard = () => (
    <div className="space-y-4">
      {activeQuests.map((quest) => (
        <Card key={quest.id} className={`${quest.isCompleted ? 'bg-green-50 border-green-200' : ''}`}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{quest.emoji}</div>
                <div>
                  <CardTitle className="text-lg">{quest.title}</CardTitle>
                  <CardDescription>{quest.description}</CardDescription>
                </div>
              </div>
              <div className="text-right">
                <Badge className={getDifficultyColor(quest.difficulty)}>
                  {quest.difficulty}
                </Badge>
                {quest.category === 'daily' && <Badge variant="outline" className="ml-1">毎日</Badge>}
                {quest.category === 'weekly' && <Badge variant="outline" className="ml-1">週間</Badge>}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* 進捗バー */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">進捗</span>
                <span className="text-sm font-medium">
                  {quest.progress} / {quest.maxProgress}
                </span>
              </div>
              <Progress value={(quest.progress / quest.maxProgress) * 100} className="h-2" />
            </div>

            {/* 報酬 */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <span className="text-blue-500">⭐</span>
                <span>{quest.xpReward} XP</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-500">🪙</span>
                <span>{quest.coinReward}</span>
              </div>
              {quest.expiresAt && (
                <div className="flex items-center space-x-1 text-orange-600">
                  <span>⏰</span>
                  <span>{Math.ceil((quest.expiresAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24))}日</span>
                </div>
              )}
            </div>

            {/* 要件 */}
            <div className="text-xs text-gray-600">
              <div className="font-medium mb-1">クリア条件:</div>
              <ul className="list-disc list-inside space-y-0.5">
                {quest.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            {/* アクションボタン */}
            {!quest.isCompleted && (
              <Button 
                onClick={() => completeQuest(quest.id)}
                className="w-full"
                disabled={quest.progress < quest.maxProgress}
              >
                {quest.progress >= quest.maxProgress ? '完了する' : '進行中'}
              </Button>
            )}

            {quest.isCompleted && (
              <div className="text-center text-green-600 font-medium">
                ✅ 完了しました！
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const BadgesCard = () => (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {badges.map((badge) => {
          const colors = getRarityColor(badge.rarity);
          return (
            <Card 
              key={badge.id} 
              className={`${colors.border} ${badge.isUnlocked ? 'border-2' : 'opacity-50 border-gray-200'}`}
            >
              <CardContent className="text-center py-4">
                <div className="text-4xl mb-2">{badge.emoji}</div>
                <div className="font-semibold text-sm mb-1">{badge.name}</div>
                <div className="text-xs text-gray-600 mb-2">{badge.description}</div>
                <Badge className={`${colors.bg} ${colors.text} text-xs`}>
                  {badge.rarity}
                </Badge>
                {badge.series && (
                  <Badge variant="outline" className="ml-1 text-xs">
                    {badge.series}
                  </Badge>
                )}
                {badge.isUnlocked && badge.unlockedAt && (
                  <div className="text-xs text-gray-500 mt-2">
                    {badge.unlockedAt.toLocaleDateString('ja-JP')}
                  </div>
                )}
                {!badge.isUnlocked && (
                  <div className="text-xs text-gray-400 mt-2">
                    条件: {badge.unlockCondition}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  const LeaderboardCard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>🏆</span>
          <span>リーダーボード</span>
        </CardTitle>
        <CardDescription>今週のトップランキング</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {leaderboard.map((entry) => (
            <div 
              key={entry.rank}
              className={`flex items-center justify-between p-3 rounded-lg ${
                entry.isCurrentUser ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                  entry.rank === 1 ? 'bg-yellow-500' :
                  entry.rank === 2 ? 'bg-gray-400' :
                  entry.rank === 3 ? 'bg-orange-500' : 'bg-gray-300'
                }`}>
                  {entry.rank}
                </div>
                <div className="text-2xl">{entry.avatar}</div>
                <div>
                  <div className="font-semibold">
                    {entry.studentName}
                    {entry.isCurrentUser && <span className="text-blue-600 ml-1">（あなた）</span>}
                  </div>
                  <div className="text-sm text-gray-600">Lv.{entry.level}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-blue-600">{entry.totalXP.toLocaleString()}</div>
                <div className="text-xs text-gray-500">XP</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* レベルアップ祝福 */}
      {showLevelUp && profile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Card className="p-8 text-center animate-bounce">
            <div className="text-6xl mb-4">🎉</div>
            <CardTitle className="text-3xl text-yellow-600 mb-2">
              レベルアップ！
            </CardTitle>
            <CardDescription className="text-xl">
              レベル {profile.level} になりました！
            </CardDescription>
          </Card>
        </div>
      )}

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">🎮 ゲーミング＆アチーブメント</h1>
        <p className="text-gray-600">楽しみながら学び、成長を実感しよう！</p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">👤 プロフィール</TabsTrigger>
          <TabsTrigger value="quests">🎯 クエスト</TabsTrigger>
          <TabsTrigger value="badges">🏆 バッジ</TabsTrigger>
          <TabsTrigger value="leaderboard">📊 ランキング</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <ProfileCard />
        </TabsContent>

        <TabsContent value="quests" className="mt-6">
          <QuestsCard />
        </TabsContent>

        <TabsContent value="badges" className="mt-6">
          <BadgesCard />
        </TabsContent>

        <TabsContent value="leaderboard" className="mt-6">
          <LeaderboardCard />
        </TabsContent>
      </Tabs>
    </div>
  );
}