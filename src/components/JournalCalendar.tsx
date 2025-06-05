
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { CalendarIcon, BookOpen } from 'lucide-react';

const JournalCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  // Simulate journal entries for different dates
  const journalEntries = new Set([
    '2024-12-01',
    '2024-12-02', 
    '2024-12-03',
    '2024-12-04',
    '2024-12-05',
    '2024-12-06'
  ]);

  const hasEntryForDate = (date: Date) => {
    return journalEntries.has(format(date, 'yyyy-MM-dd'));
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-inter font-semibold text-slate-700 mb-2">
          Journal Calendar
        </h2>
        <p className="text-slate-600 font-inter">
          Track your daily reflections and see your consistency
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Calendar */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <CalendarIcon className="w-5 h-5 text-slate-600" />
            <h3 className="text-lg font-inter font-medium text-slate-700">
              Your Journal Days
            </h3>
          </div>
          
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border-0"
            modifiers={{
              hasEntry: (date) => hasEntryForDate(date)
            }}
            modifiersStyles={{
              hasEntry: {
                backgroundColor: '#e2e8f0',
                color: '#475569',
                fontWeight: 'bold'
              }
            }}
          />
          
          <div className="mt-4 text-sm text-slate-600">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-3 h-3 bg-slate-300 rounded"></div>
              <span>Days with journal entries</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-slate-100 rounded border border-slate-200"></div>
              <span>No entry yet</span>
            </div>
          </div>
        </Card>

        {/* Selected Date Info */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <BookOpen className="w-5 h-5 text-slate-600" />
            <h3 className="text-lg font-inter font-medium text-slate-700">
              {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Select a date'}
            </h3>
          </div>
          
          {selectedDate && (
            <div className="space-y-4">
              {hasEntryForDate(selectedDate) ? (
                <div className="p-4 bg-slate-100 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-700 font-medium text-sm">Entry completed</span>
                  </div>
                  <p className="text-slate-600 text-sm italic">
                    "Today I felt grateful for the small moments..."
                  </p>
                </div>
              ) : (
                <div className="p-4 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                  <p className="text-slate-500 text-sm text-center">
                    No journal entry for this date
                  </p>
                </div>
              )}
              
              <div className="text-center">
                <button className="text-slate-600 hover:text-slate-800 text-sm font-medium transition-colors">
                  {hasEntryForDate(selectedDate) ? 'Edit Entry' : 'Add Entry'}
                </button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default JournalCalendar;
