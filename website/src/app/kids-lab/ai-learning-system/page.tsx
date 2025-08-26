import { Metadata } from 'next';
import IntegratedLearningDashboard from '@/components/learning/IntegratedLearningDashboard';

export const metadata: Metadata = {
  title: 'AI学習システム | AI Kids Lab',
  description: 'Big Five性格診断、SMART目標設定、質的成長可視化、ゲーミフィケーション、AIリフレクションジャーナルを統合した革新的な学習プラットフォーム',
};

export default function AILearningSystemPage() {
  // 実際の実装では、ログインユーザーの情報を取得
  const studentId = "demo_student_001";
  const studentName = "太郎";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <IntegratedLearningDashboard 
        studentId={studentId}
        studentName={studentName}
      />
    </div>
  );
}