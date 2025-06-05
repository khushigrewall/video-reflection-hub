
import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle, Circle, Video, Crown } from 'lucide-react';

const JournalTracker = () => {
  // Simulate current progress - 6 out of 7 days completed
  const daysCompleted = 6;
  const totalDays = 7;
  const daysRemaining = totalDays - daysCompleted;

  const days = Array.from({ length: totalDays }, (_, i) => ({
    day: i + 1,
    completed: i < daysCompleted,
    isToday: i === daysCompleted
  }));

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-8">
      <Card className="bg-white/80 backdrop-blur-sm border-slate-200 p-6 rounded-2xl shadow-sm">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-inter font-semibold text-slate-700 mb-2">
            Your Weekly Progress
          </h3>
          <p className="text-slate-600 font-inter">
            {daysRemaining === 0 
              ? "🎉 Week complete! Your video is being generated."
              : daysRemaining === 1 
                ? "One more day to get your weekly video!"
                : `${daysRemaining} more days to get your weekly video!`
            }
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-slate-600 mb-2">
            <span>Progress</span>
            <span>{daysCompleted}/{totalDays} days</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-slate-400 to-slate-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(daysCompleted / totalDays) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-3 mb-6">
          {days.map((day) => (
            <div key={day.day} className="flex flex-col items-center space-y-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                day.completed 
                  ? 'bg-slate-300 text-slate-700' 
                  : day.isToday 
                    ? 'bg-slate-200 text-slate-600 ring-2 ring-slate-300' 
                    : 'bg-slate-100 text-slate-400'
              }`}>
                {day.completed ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Circle className="w-5 h-5" />
                )}
              </div>
              <span className={`text-xs font-inter ${
                day.completed || day.isToday ? 'text-slate-600' : 'text-slate-400'
              }`}>
                Day {day.day}
              </span>
            </div>
          ))}
        </div>

        {/* Video Generation Status */}
        {daysCompleted >= totalDays && (
          <div className="text-center p-4 bg-slate-100 rounded-xl">
            <Video className="w-8 h-8 text-slate-600 mx-auto mb-2" />
            <p className="text-slate-700 font-inter font-medium">
              Your weekly video is being generated! 
            </p>
            <p className="text-slate-600 text-sm mt-1">
              Check your email in a few minutes.
            </p>
          </div>
        )}

        {/* Subscription Notice */}
        <div className="mt-6 p-4 bg-amber-50/50 rounded-xl border border-amber-200">
          <div className="flex items-center space-x-2 mb-2">
            <Crown className="w-5 h-5 text-amber-600" />
            <span className="text-amber-700 font-inter font-medium">Subscription Required</span>
          </div>
          <p className="text-amber-600 font-inter text-sm font-light">
            After your first month, you'll need a premium subscription to continue receiving weekly videos and access monthly recap videos.
          </p>
        </div>
      </Card>
    </section>
  );
};

export default JournalTracker;
