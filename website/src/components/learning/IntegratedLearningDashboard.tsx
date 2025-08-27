'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// 作成したコンポーネントをインポート
import BigFiveDiagnostic from './BigFiveDiagnostic';
import SmartGoalSetting from './SmartGoalSetting';
import QualitativeGrowthTracker from './QualitativeGrowthTracker';
import GamificationHub from './GamificationHub';
import AIReflectionJournal from './AIReflectionJournal';

interface StudentProfile {
  id: string;
  name: string;
  age: number;
  grade: string;
  joinedAt: Date;
  personalityResults?: any;
  currentGoals: any[];
  completedSetup: {
    personality: boolean;
    goals: boolean;
    firstJournal: boolean;
  };
}

interface LearningSession {
  id: string;
  date: Date;
  duration: number;
  activities: string[];
  reflectionScore: number;
  mood: string;
}

interface IntegratedLearningDashboardProps {
  studentId: string;
  studentName: string;
}

export default function IntegratedLearningDashboard({ studentId, studentName }: IntegratedLearningDashboardProps) {
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [currentPhase, setCurrentPhase] = useState<'setup' | 'active' | 'advanced'>('setup');
  const [selectedTab, setSelectedTab] = useState('overview');
  const [recentSessions, setRecentSessions] = useState<LearningSession[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // 学習者プロフィールの初期化
    const mockProfile: StudentProfile = {
      id: studentId,
      name: studentName,
      age: 10,
      grade: '小学4年生',
      joinedAt: new Date('2024-01-01'),
      completedSetup: {
        personality: false,
        goals: false,
        firstJournal: false
      },
      currentGoals: []
    };

    const mockSessions: LearningSession[] = [
      {
        id: '1',
        date: new Date(),
        duration: 45,
        activities: ['AI対話', 'プログラミング', 'リフレクション'],
        reflectionScore: 4,
        mood: 'happy'
      },
      {
        id: '2',
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        duration: 30,
        activities: ['創作活動', 'AI画像生成'],
        reflectionScore: 5,
        mood: 'excited'
      }
    ];

    setProfile(mockProfile);
    setRecentSessions(mockSessions);

    // セットアップ完了状況に応じてフェーズを決定
    const setupComplete = Object.values(mockProfile.completedSetup).every(Boolean);
    if (setupComplete) {
      setCurrentPhase('active');
    }
  }, [studentId, studentName]);

  const getSetupProgress = () => {
    if (!profile) return 0;
    const completed = Object.values(profile.completedSetup).filter(Boolean).length;
    const total = Object.keys(profile.completedSetup).length;
    return (completed / total) * 100;
  };

  const WelcomeCard = () => (
    <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center space-x-2">
          <span>🌟</span>
          <span>{studentName}さん、ようこそ！</span>
        </CardTitle>
        <CardDescription className="text-purple-100">
          AIと一緒に学び、成長していく特別な旅を始めましょう！
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-medium">まずは3つのステップから始めよう</p>
            <p className="text-purple-200">あなたらしい学習スタイルを見つけます</p>
          </div>
          <Button 
            onClick={() => setShowWelcome(false)}
            className="bg-white text-purple-600 hover:bg-purple-50"
          >
            始める ✨
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const SetupPhase = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>🚀</span>
            <span>学習セットアップ</span>
          </CardTitle>
          <CardDescription>
            あなたに最適な学習環境を作るための準備です
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>セットアップ進捗</span>
              <span className="font-bold">{Math.round(getSetupProgress())}%</span>
            </div>
            <Progress value={getSetupProgress()} className="h-3" />
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className={`cursor-pointer transition-all ${profile?.completedSetup.personality ? 'bg-green-50 border-green-200' : 'hover:shadow-md'}`}>
          <CardHeader className="text-center">
            <div className="text-4xl mb-2">
              {profile?.completedSetup.personality ? '✅' : '🧠'}
            </div>
            <CardTitle className="text-lg">STEP 1: 性格診断</CardTitle>
            <CardDescription>あなたの学習スタイルを知ろう</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            {profile?.completedSetup.personality ? (
              <Badge className="bg-green-100 text-green-800">完了済み</Badge>
            ) : (
              <Button 
                onClick={() => setSelectedTab('personality')}
                className="w-full"
              >
                診断を始める
              </Button>
            )}
          </CardContent>
        </Card>

        <Card className={`cursor-pointer transition-all ${profile?.completedSetup.goals ? 'bg-green-50 border-green-200' : 'hover:shadow-md'}`}>
          <CardHeader className="text-center">
            <div className="text-4xl mb-2">
              {profile?.completedSetup.goals ? '✅' : '🎯'}
            </div>
            <CardTitle className="text-lg">STEP 2: 目標設定</CardTitle>
            <CardDescription>AIと一緒に目標を決めよう</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            {profile?.completedSetup.goals ? (
              <Badge className="bg-green-100 text-green-800">完了済み</Badge>
            ) : (
              <Button 
                onClick={() => setSelectedTab('goals')}
                className="w-full"
                disabled={!profile?.completedSetup.personality}
              >
                目標を立てる
              </Button>
            )}
          </CardContent>
        </Card>

        <Card className={`cursor-pointer transition-all ${profile?.completedSetup.firstJournal ? 'bg-green-50 border-green-200' : 'hover:shadow-md'}`}>
          <CardHeader className="text-center">
            <div className="text-4xl mb-2">
              {profile?.completedSetup.firstJournal ? '✅' : '📓'}
            </div>
            <CardTitle className="text-lg">STEP 3: 初回ジャーナル</CardTitle>
            <CardDescription>今の気持ちを記録してみよう</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            {profile?.completedSetup.firstJournal ? (
              <Badge className="bg-green-100 text-green-800">完了済み</Badge>
            ) : (
              <Button 
                onClick={() => setSelectedTab('journal')}
                className="w-full"
                disabled={!profile?.completedSetup.goals}
              >
                ジャーナルを書く
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

      {getSetupProgress() === 100 && (
        <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <CardContent className="text-center py-6">
            <div className="text-4xl mb-4">🎉</div>
            <CardTitle className="text-xl mb-2">セットアップ完了！</CardTitle>
            <CardDescription className="text-green-100 mb-4">
              さあ、本格的な学習を始めましょう！
            </CardDescription>
            <Button 
              onClick={() => setCurrentPhase('active')}
              className="bg-white text-green-600 hover:bg-green-50"
            >
              学習を始める 🚀
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* 今日の学習サマリー */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="text-center py-4">
            <div className="text-2xl font-bold text-blue-600">45</div>
            <div className="text-sm text-gray-600">分</div>
            <div className="text-xs text-gray-500">今日の学習時間</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center py-4">
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-600">個</div>
            <div className="text-xs text-gray-500">完了した活動</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center py-4">
            <div className="text-2xl font-bold text-purple-600">5</div>
            <div className="text-sm text-gray-600">レベル</div>
            <div className="text-xs text-gray-500">リフレクション深度</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center py-4">
            <div className="text-2xl font-bold text-orange-600">😊</div>
            <div className="text-sm text-gray-600">気分</div>
            <div className="text-xs text-gray-500">今日の調子</div>
          </CardContent>
        </Card>
      </div>

      {/* 最近の学習セッション */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>📚</span>
            <span>最近の学習</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">
                    {session.date.toLocaleDateString('ja-JP')}
                  </div>
                  <div className="text-sm text-gray-600">
                    {session.activities.join(', ')}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600">{session.duration}分</div>
                  <div className="text-xs text-gray-500">
                    リフレクション {session.reflectionScore}/5
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* クイックアクセス */}
      <Card>
        <CardHeader>
          <CardTitle>⚡ クイックスタート</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <Button 
              onClick={() => setSelectedTab('journal')}
              className="h-16 text-left justify-start"
              variant="outline"
            >
              <div>
                <div className="font-semibold">📝 今日の振り返り</div>
                <div className="text-sm text-gray-600">AIと一緒に今日を振り返ろう</div>
              </div>
            </Button>
            <Button 
              onClick={() => setSelectedTab('gamification')}
              className="h-16 text-left justify-start"
              variant="outline"
            >
              <div>
                <div className="font-semibold">🎮 クエストに挑戦</div>
                <div className="text-sm text-gray-600">新しい課題で経験値を獲得</div>
              </div>
            </Button>
            <Button 
              onClick={() => setSelectedTab('growth')}
              className="h-16 text-left justify-start"
              variant="outline"
            >
              <div>
                <div className="font-semibold">🌱 成長を確認</div>
                <div className="text-sm text-gray-600">あなたの成長記録を見てみよう</div>
              </div>
            </Button>
            <Button 
              onClick={() => setSelectedTab('goals')}
              className="h-16 text-left justify-start"
              variant="outline"
            >
              <div>
                <div className="font-semibold">目標を見直す</div>
                <div className="text-sm text-gray-600">目標の進捗をチェック</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  if (currentPhase === 'setup') {
    return (
      <div className="max-w-6xl mx-auto p-6">
        {showWelcome && <WelcomeCard />}
        <SetupPhase />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">🚀 {studentName}さんの学習ダッシュボード</h1>
        <p className="text-gray-600">AIと一緒に学び、成長する特別な場所</p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">📊 概要</TabsTrigger>
          <TabsTrigger value="personality">🧠 性格</TabsTrigger>
          <TabsTrigger value="goals">目標</TabsTrigger>
          <TabsTrigger value="growth">🌱 成長</TabsTrigger>
          <TabsTrigger value="gamification">🎮 ゲーム</TabsTrigger>
          <TabsTrigger value="journal">📓 ジャーナル</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <OverviewTab />
        </TabsContent>

        <TabsContent value="personality" className="mt-6">
          <BigFiveDiagnostic />
        </TabsContent>

        <TabsContent value="goals" className="mt-6">
          <SmartGoalSetting personalityResults={profile?.personalityResults} />
        </TabsContent>

        <TabsContent value="growth" className="mt-6">
          <QualitativeGrowthTracker 
            studentId={studentId} 
            studentName={studentName} 
          />
        </TabsContent>

        <TabsContent value="gamification" className="mt-6">
          <GamificationHub 
            studentId={studentId} 
            studentName={studentName} 
          />
        </TabsContent>

        <TabsContent value="journal" className="mt-6">
          <AIReflectionJournal 
            studentId={studentId} 
            studentName={studentName}
            personalityProfile={profile?.personalityResults}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}