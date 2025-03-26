import React from "react";
import "./Learn.css";
import { FaChartLine, FaShieldAlt, FaBalanceScale, FaMoneyBillWave, FaGlobe, FaCalculator } from "react-icons/fa";

const tradingArticles = [
  {
    id: 1,
    title: "Index Funds: The Smart Investor's Secret Weapon",
    icon: <FaChartLine size={24} />,
    summary: "Discover how index funds outperform most actively managed funds over time and why they should form the core of your portfolio.",
    content: `Index funds are passive investments that track a market index like the Nifty 50 or S&P 500. They offer:
    - Instant diversification across hundreds of stocks
    - Extremely low expense ratios (0.1-0.5% vs 1-2% for active funds)
    - Consistent market-matching returns
    Studies show 80-90% of active fund managers fail to beat their benchmark index over 10+ years.`,
    readTime: "8 min read",
    category: "Passive Investing"
  },
  {
    id: 2,
    title: "Technical Analysis: Reading Market Psychology",
    icon: <FaBalanceScale size={24} />,
    summary: "Learn to interpret price charts and volume data to identify trends and potential reversals.",
    content: `Key technical analysis concepts:
    • Support/Resistance Levels: Price zones where buying/selling pressure emerges
    • Moving Averages: 50-day and 200-day MAs act as dynamic support/resistance
    • RSI Indicator: Identifies overbought (>70) and oversold (<30) conditions
    • Volume Analysis: Confirms trend strength when rising with price movement`,
    readTime: "10 min read",
    category: "Trading Strategies"
  },
  {
    id: 3,
    title: "Risk Management: The Professional's Edge",
    icon: <FaShieldAlt size={24} />,
    summary: "Why proper position sizing and stop losses separate successful traders from gamblers.",
    content: `Golden rules of risk management:
    1. Never risk >2% of capital on a single trade
    2. Maintain 3:1 reward-to-risk ratio minimum
    3. Use stop-loss orders on EVERY position
    4. Diversify across uncorrelated assets
    5. Reduce position size during high volatility`,
    readTime: "7 min read",
    category: "Risk Management"
  },
  {
    id: 4,
    title: "Sector Rotation: Capitalizing on Economic Cycles",
    icon: <FaGlobe size={24} />,
    summary: "How to identify which market sectors will outperform at different stages of the business cycle.",
    content: `Typical sector performance during economic phases:
    • Early Recovery: Financials, Consumer Discretionary
    • Mid Expansion: Technology, Industrials
    • Late Cycle: Energy, Materials
    • Recession: Utilities, Consumer Staples, Healthcare
    Tools: Analyze relative strength ratios and moving average crossovers`,
    readTime: "9 min read",
    category: "Market Analysis"
  },
  {
    id: 5,
    title: "Options Trading: Hedging Your Portfolio",
    icon: <FaCalculator size={24} />,
    summary: "Practical options strategies to protect your investments and generate income.",
    content: `Essential options strategies:
    - Covered Calls: Generate income on stocks you own
    - Protective Puts: Insurance against market downturns
    - Credit Spreads: Profit from range-bound markets
    Key Greeks to understand: Delta, Gamma, Theta, Vega
    Rule: Never risk >5% of capital on options positions`,
    readTime: "12 min read",
    category: "Derivatives"
  },
  {
    id: 6,
    title: "Behavioral Finance: Overcoming Cognitive Biases",
    icon: <FaMoneyBillWave size={24} />,
    summary: "How psychological traps destroy returns and how elite investors avoid them.",
    content: `Most damaging biases:
    • Loss Aversion: Holding losers too long/selling winners too early
    • Confirmation Bias: Only seeking information that supports your view
    • Herd Mentality: Following crowds at market tops/bottoms
    • Overconfidence: Trading too frequently
    Solution: Maintain a trading journal with predefined rules`,
    readTime: "6 min read",
    category: "Psychology"
  }
];

export default function Learn() {
  return (
    <div className="learn-container">
      <section className="learn-hero">
        <h1>Trading & Market Education</h1>
        <p>Master the markets with professional-grade investment knowledge</p>
      </section>
      
      <div className="article-grid">
        {tradingArticles.map(article => (
          <div key={article.id} className="article-card">
            <div className="article-icon" style={{ color: getCategoryColor(article.category) }}>
              {article.icon}
            </div>
            <div className="article-content">
              <span className="article-category">{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <div className="article-details">
                <p className="preview-content">{article.content}</p>
              </div>
              <div className="article-footer">
                <span className="read-time">{article.readTime}</span>
                <button className="read-button">Continue Reading</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getCategoryColor(category) {
  const colors = {
    "Passive Investing": "#4CAF50",
    "Trading Strategies": "#2196F3",
    "Risk Management": "#FF5722",
    "Market Analysis": "#9C27B0",
    "Derivatives": "#FF9800",
    "Psychology": "#E91E63"
  };
  return colors[category] || "#333";
}