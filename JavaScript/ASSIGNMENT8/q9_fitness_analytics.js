class FitnessAnalytics {
  constructor(data) {
    if (!Array.isArray(data) || data.length === 0) throw new Error('Dataset cannot be empty');
    this.data = data;
  }
  getActiveUsers() {
    return this.data.filter(d => d.steps > 7000).map(d => d.user);
  }
  getAverageCalories() {
    const total = this.data.reduce((acc, d) => acc + d.calories, 0);
    return total / this.data.length;
  }
  getUserSummary() {
    return this.data.map(d => `${d.user}: ${d.steps} steps, ${d.calories} calories`);
  }
}

const dataset = [
  { user: 'A', steps: 8000, calories: 300 },
  { user: 'B', steps: 12000, calories: 500 },
  { user: 'C', steps: 4000, calories: 200 }
];

const fa = new FitnessAnalytics(dataset);
console.log('Active users:', fa.getActiveUsers());
console.log('Avg calories:', fa.getAverageCalories());
console.log('Summaries:', fa.getUserSummary());
