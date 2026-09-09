import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, GitPullRequest, Users, ExternalLink, Sparkles, BookOpen, Star, Activity } from 'lucide-react';

export default function GitHubActivity() {
  const [stats, setStats] = useState({
    publicRepos: 8,
    followers: 6,
    following: 10,
    loading: true,
  });

  useEffect(() => {
    // Check client-side sessionStorage cache first to avoid GitHub API rate limits
    const cached = sessionStorage.getItem('unnati_github_stats');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        setStats({ ...parsed, loading: false });
        return;
      } catch (e) {
        // Continue to fetch
      }
    }

    fetch('https://api.github.com/users/unnatisuple')
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API rate-limited or error');
        return res.json();
      })
      .then((data) => {
        const newStats = {
          publicRepos: data.public_repos ?? 8,
          followers: data.followers ?? 6,
          following: data.following ?? 10,
          avatarUrl: data.avatar_url,
          bio: data.bio,
          loading: false,
        };
        setStats(newStats);
        sessionStorage.setItem('unnati_github_stats', JSON.stringify(newStats));
      })
      .catch(() => {
        // Fallback gracefully on rate-limit
        setStats((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  return (
    <section id="activity" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-slate-800 bg-amber-200/80 border border-amber-300 shadow-2xs mb-3">
            <span className="text-base">⚡</span>
            <span>CODE ACTIVITY</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Open-Source & GitHub Journey
          </h2>
          <p className="font-handwriting text-brand-coral text-xl sm:text-2xl mt-1">
            "Better Code, Brighter Future"
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Main Activity Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 shadow-glass border-t-4 border-t-amber-400 relative overflow-hidden"
        >
          {/* Header Profile Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-amber-200/60">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white shadow-md shadow-slate-900/20">
                <Github className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Unnati Suple
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Active
                  </span>
                </div>
                <a
                  href="https://github.com/unnatisuple"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-coral hover:underline flex items-center gap-1 mt-0.5"
                >
                  <span>@unnatisuple</span>
                </a>
              </div>
            </div>

            {/* Profile Action Button */}
            <a
              href="https://github.com/unnatisuple?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Repositories</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
            </a>
          </div>

          {/* Live Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8">
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-center hover:border-amber-400 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-amber-200/60 flex items-center justify-center text-amber-800 mx-auto mb-2">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900">
                {stats.publicRepos}+
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1 uppercase tracking-wider">
                Public Repos
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200/80 text-center hover:border-sky-400 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-sky-200/60 flex items-center justify-center text-sky-800 mx-auto mb-2">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900">
                {stats.followers}
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1 uppercase tracking-wider">
                Followers
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-5 rounded-2xl bg-orange-50/70 border border-orange-200/80 text-center hover:border-orange-400 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-orange-200/60 flex items-center justify-center text-orange-800 mx-auto mb-2">
                <Activity className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900">
                Weekly
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1 uppercase tracking-wider">
                Active Commits
              </div>
            </div>
          </div>

          {/* GitHub Contribution Activity Heatmap */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-coral" />
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Contribution Heatmap Calendar
                </h4>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">
                Synced from GitHub
              </span>
            </div>

            {/* Heatmap Graphic Container */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white/95 border border-slate-200/90 shadow-inner overflow-x-auto">
              <div className="min-w-[680px] flex flex-col items-center">
                <img
                  src="https://ghchart.rshah.org/f97316/unnatisuple"
                  alt="Unnati Suple GitHub Contribution Chart"
                  className="w-full h-auto max-h-40 object-contain filter contrast-105"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-center text-xs text-slate-500 mt-4 font-medium flex items-center justify-center gap-1.5">
              <span>Continuous open-source contributions & commits over the past year</span>
              <span className="font-handwriting text-brand-coral text-base ml-1">#CodeEveryday</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
