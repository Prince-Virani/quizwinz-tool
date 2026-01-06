// app/data/quizData.ts

export interface Question {
  question: string;
  options: string[];
  correct: number;
  funFact: string;
}

export const allQuizQuestions: Record<number, Question[]> = {
  // --------------------------------------------------------
  // ID 1: Business And Economics | Companies
  // --------------------------------------------------------
  1: [
    {
      question: "Which strategy focuses on achieving the lowest operational cost in an industry?",
      options: [
        "Cost leadership",
        "Differentiation",
        "Focus strategy",
        "Diversification"
      ],
      correct: 0,
      funFact: "Cost leadership often involves economies of scale and rigorous cost control."
    },
    {
      question: "Which financial metric measures value created above capital cost?",
      options: ["Economic Value Added", "Gross margin", "EBITDA", "Net Income"],
      correct: 0,
      funFact: "EVA is a registered trademark of Stern Stewart & Co."
    },
    {
      question: "Which framework analyzes political, economic, social, technological factors?",
      options: [
        "PEST analysis",
        "SWOT analysis",
        "Porter’s Five Forces",
        "BCG Matrix"
      ],
      correct: 0,
      funFact: "Variations of PEST include PESTLE, adding Legal and Environmental factors."
    },
    {
      question: "Which type of merger occurs between direct competitors?",
      options: [
        "Horizontal merger",
        "Vertical merger",
        "Conglomerate merger",
        "Concentric merger"
      ],
      correct: 0,
      funFact: "Horizontal mergers are often scrutinized by antitrust regulators for reducing market competition."
    },
    {
      question: "Which KPI best reflects operational efficiency?",
      options: [
        "Asset turnover",
        "Net profit margin",
        "Market capitalization",
        "Current ratio"
      ],
      correct: 0,
      funFact: "Asset turnover indicates how much revenue a company generates for every dollar of assets."
    },
    {
      question: "Which governance principle protects minority shareholders?",
      options: [
        "Equitable treatment",
        "Managerial entrenchment",
        "Dual-class voting",
        "Hostile takeover"
      ],
      correct: 0,
      funFact: "Equitable treatment ensures all shareholders of the same class are treated equally."
    },
    {
      question: "Which valuation method discounts future cash flows?",
      options: [
        "Discounted cash flow",
        "Comparable multiples",
        "Book value method",
        "Liquidation value"
      ],
      correct: 0,
      funFact: "DCF analysis relies heavily on the accuracy of future financial projections."
    },
    {
      question: "Which organizational structure reduces functional silos?",
      options: [
        "Matrix structure",
        "Hierarchical structure",
        "Flat structure",
        "Divisional structure"
      ],
      correct: 0,
      funFact: "Matrix structures often require employees to report to multiple managers."
    },
    {
      question: "Which pricing strategy maximizes profits by capturing consumer willingness to pay?",
      options: [
        "Price discrimination",
        "Penetration pricing",
        "Cost-plus pricing",
        "Skimming"
      ],
      correct: 0,
      funFact: "Price discrimination is commonly seen in airline ticket pricing."
    },
    {
      question: "Which concept describes reinvesting profits for future growth?",
      options: [
        "Retained earnings",
        "Dividends",
        "Share buyback",
        "Stock split"
      ],
      correct: 0,
      funFact: "Retained earnings are reported in the shareholders' equity section of the balance sheet."
    },
    {
      question: "Which performance metric excludes financing and accounting effects?",
      options: [
        "EBITDA",
        "Net income",
        "Return on equity",
        "Gross profit"
      ],
      correct: 0,
      funFact: "EBITDA stands for Earnings Before Interest, Taxes, Depreciation, and Amortization."
    },
    {
      question: "What is the main purpose of a business?",
      options: [
        "Provide jobs",
        "Generate profit",
        "Entertain customers",
        "Pay taxes"
      ],
      correct: 1,
      funFact: "While profit is key, modern businesses also focus on corporate social responsibility."
    },
    {
      question: "Which term describes a new business venture?",
      options: [
        "Startup",
        "Corporation",
        "Franchise",
        "Subsidiary"
      ],
      correct: 0,
      funFact: "Startups are often designed to scale very quickly compared to traditional small businesses."
    },
    {
      question: "What is market segmentation?",
      options: [
        "Dividing market into groups",
        "Advertising strategy",
        "Product pricing",
        "Hiring process"
      ],
      correct: 0,
      funFact: "Common segmentation types include demographic, geographic, and psychographic."
    },
    {
      question: "Which document outlines business goals and strategies?",
      options: [
        "Business plan",
        "Invoice",
        "Employment contract",
        "Receipt"
      ],
      correct: 0,
      funFact: "A solid business plan is essential for securing funding from investors."
    },
    {
      question: "What is SWOT analysis?",
      options: [
        "Strengths, Weaknesses, Opportunities, Threats",
        "Sales, Work, Operations, Targets",
        "Stock, Wealth, Options, Taxes",
        "Strategy, Work, Objectives, Tasks"
      ],
      correct: 0,
      funFact: "SWOT analysis originated in the 1960s at the Stanford Research Institute."
    },
    {
      question: "Which term describes ownership in a company?",
      options: [
        "Stakeholder",
        "Equity",
        "Liability",
        "Asset"
      ],
      correct: 1,
      funFact: "Equity represents the residual interest in the assets of an entity after deducting liabilities."
    },
    {
      question: "What is ROI in business?",
      options: [
        "Return on Investment",
        "Rate of Income",
        "Revenue of Industry",
        "Risk on Investment"
      ],
      correct: 0,
      funFact: "ROI is a versatile metric used to evaluate the efficiency of an investment."
    },
    {
      question: "Which strategy helps businesses reach new customers?",
      options: [
        "Marketing",
        "Accounting",
        "Tax planning",
        "Manufacturing"
      ],
      correct: 0,
      funFact: "Effective marketing blends creativity with data analytics to target the right audience."
    },
    {
      question: "What is a business model?",
      options: [
        "Operational plan",
        "How company makes money",
        "Employee handbook",
        "Legal structure"
      ],
      correct: 1,
      funFact: "The subscription model is a popular business model used by companies like Netflix."
    },
    {
      question: "Which term describes a long-term plan to achieve goals?",
      options: [
        "Tactics",
        "Strategy",
        "Mission statement",
        "Vision"
      ],
      correct: 1,
      funFact: "Strategy is about the big picture, while tactics are the specific actions to get there."
    },
    {
      question: "What is an entrepreneur?",
      options: [
        "Employee",
        "Business owner or founder",
        "Investor only",
        "Manager"
      ],
      correct: 1,
      funFact: "Entrepreneurs often take on significant financial risk in hopes of profit."
    },
    {
      question: "Which factor is part of the 4Ps of marketing?",
      options: [
        "Price",
        "Profit only",
        "Planning",
        "Process"
      ],
      correct: 0,
      funFact: "The 4Ps are Product, Price, Place, and Promotion."
    },
    {
      question: "What does 'scaling a business' mean?",
      options: [
        "Increasing size and revenue",
        "Hiring employees only",
        "Reducing costs",
        "Changing location"
      ],
      correct: 0,
      funFact: "Scaling implies increasing revenue without a substantial increase in resources."
    },
    {
      question: "Which financial statement shows company profits?",
      options: [
        "Balance sheet",
        "Income statement",
        "Cash flow statement",
        "Equity statement"
      ],
      correct: 1,
      funFact: "The income statement is also known as the Profit and Loss (P&L) statement."
    },
    {
      question: "What is a competitor analysis?",
      options: [
        "Studying rivals in market",
        "Employee performance review",
        "Tax filing",
        "Internal audit"
      ],
      correct: 0,
      funFact: "Understanding competitors' strengths and weaknesses helps identify market opportunities."
    },
    {
      question: "What is venture capital?",
      options: [
        "Bank loan",
        "Investment in startups",
        "Government grant",
        "Personal savings"
      ],
      correct: 1,
      funFact: "Venture capital is a form of private equity financing provided to early-stage firms."
    },
    {
      question: "Which term describes business expansion internationally?",
      options: [
        "Globalization",
        "Franchising",
        "Licensing",
        "Outsourcing"
      ],
      correct: 0,
      funFact: "Globalization allows businesses to access new markets and cheaper resources."
    },
    {
      question: "What is a franchise?",
      options: [
        "Company-owned outlet",
        "Licensed business model",
        "Merger",
        "Partnership"
      ],
      correct: 1,
      funFact: "McDonald's is one of the world's most famous examples of a franchise business."
    },
    {
      question: "Which business structure separates owners from liability?",
      options: [
        "Sole proprietorship",
        "Corporation",
        "Partnership",
        "Cooperative"
      ],
      correct: 1,
      funFact: "In a corporation, shareholders generally only lose their investment if the business fails."
    },
    {
      question: "What is corporate governance?",
      options: [
        "Employee training",
        "Rules and processes managing a company",
        "Marketing strategy",
        "Sales technique"
      ],
      correct: 1,
      funFact: "Good corporate governance promotes transparency and accountability."
    },
    {
      question: "Which term refers to business risk?",
      options: [
        "Chance of loss or gain",
        "Revenue only",
        "Employee error",
        "Profit margin"
      ],
      correct: 0,
      funFact: "Risk management strategies are crucial for business stability."
    },
    {
      question: "What is cash flow?",
      options: [
        "Money moving in and out",
        "Profit only",
        "Debt amount",
        "Inventory value"
      ],
      correct: 0,
      funFact: "Positive cash flow indicates that a company's liquid assets are increasing."
    },
    {
      question: "Which business metric measures customer satisfaction?",
      options: [
        "ROI",
        "NPS (Net Promoter Score)",
        "EBIT",
        "Churn rate"
      ],
      correct: 1,
      funFact: "NPS categorizes customers into Promoters, Passives, and Detractors."
    },
    {
      question: "What is a merger?",
      options: [
        "Combining two companies",
        "Buying equipment",
        "Launching product",
        "Closing a branch"
      ],
      correct: 0,
      funFact: "Mergers can be friendly or hostile, depending on the agreement of the target company."
    },
    {
      question: "Which term describes daily operational activities?",
      options: [
        "Operations",
        "Strategy",
        "Marketing",
        "Finance"
      ],
      correct: 0,
      funFact: "Efficient operations management ensures resources are used effectively."
    },
    {
      question: "Which is an intangible business asset?",
      options: [
        "Machinery",
        "Brand reputation",
        "Office building",
        "Vehicle"
      ],
      correct: 1,
      funFact: "Intangible assets also include patents, trademarks, and copyrights."
    },
    {
      question: "What is a supply chain?",
      options: [
        "Employee hierarchy",
        "Process of delivering products to customers",
        "Marketing campaign",
        "Sales funnel"
      ],
      correct: 1,
      funFact: "Supply chain management involves the flow of goods and services."
    },
    {
      question: "Which financial ratio measures profitability?",
      options: [
        "Debt ratio",
        "Return on Equity (ROE)",
        "Liquidity ratio",
        "Solvency ratio"
      ],
      correct: 1,
      funFact: "ROE measures a corporation's profitability in relation to stockholders' equity."
    },
    {
      question: "What is business ethics?",
      options: [
        "Company rules",
        "Moral principles guiding business",
        "Accounting standards",
        "Legal codes"
      ],
      correct: 1,
      funFact: "Business ethics examines ethical principles and moral or ethical problems in a business environment."
    },
    {
      question: "Which strategy focuses on cost reduction?",
      options: [
        "Differentiation",
        "Cost leadership",
        "Innovation",
        "Niche focus"
      ],
      correct: 1,
      funFact: "Walmart is a classic example of a company using a cost leadership strategy."
    },
    {
      question: "What is break-even point?",
      options: [
        "Revenue equals costs",
        "Profit margin target",
        "Budget limit",
        "Loss threshold"
      ],
      correct: 0,
      funFact: "At the break-even point, a business makes neither a profit nor a loss."
    },
    {
      question: "Which type of business focuses on social goals?",
      options: [
        "Social enterprise",
        "Startup",
        "Franchise",
        "Conglomerate"
      ],
      correct: 0,
      funFact: "Social enterprises reinvest profits to achieve their social mission."
    },
    {
      question: "What is a business incubator?",
      options: [
        "Startup support program",
        "Office building",
        "Investor meeting",
        "Factory"
      ],
      correct: 0,
      funFact: "Incubators often provide mentorship, office space, and funding connections."
    },
    {
      question: "Which term describes short-term action plan?",
      options: [
        "Tactics",
        "Strategy",
        "Mission",
        "Vision"
      ],
      correct: 0,
      funFact: "Tactics are the concrete steps taken to implement a strategy."
    },
    {
      question: "What is KPI?",
      options: [
        "Key Performance Indicator",
        "Knowledge Process Index",
        "Known Profit Item",
        "Key Process Insight"
      ],
      correct: 0,
      funFact: "KPIs help organizations evaluate their success at reaching targets."
    },
    {
      question: "What does B2B mean?",
      options: [
        "Business to Business",
        "Business to Buyer",
        "Buyer to Buyer",
        "Business to Bank"
      ],
      correct: 0,
      funFact: "B2B transactions often involve larger volumes than B2C (Business to Consumer)."
    },
    {
      question: "What is business diversification?",
      options: [
        "Adding new products or markets",
        "Hiring new employees",
        "Merging departments",
        "Cutting costs"
      ],
      correct: 0,
      funFact: "Diversification helps reduce risk by relying on more than one revenue stream."
    },
    {
      question: "Which term describes ownership of a company?",
      options: [
        "Stakeholder",
        "Equity",
        "Debt",
        "Loan"
      ],
      correct: 1,
      funFact: "Shareholders hold equity in a company, giving them a claim on assets and earnings."
    },
    {
      question: "Which tool measures market trends?",
      options: [
        "Analytics",
        "Invoice",
        "Ledger",
        "Balance sheet"
      ],
      correct: 0,
      funFact: "Data analytics allows businesses to make informed decisions based on market behavior."
    },
    {
      question: "What is a business pivot?",
      options: [
        "Company closure",
        "Changing business strategy or product",
        "New hire",
        "Rebranding"
      ],
      correct: 1,
      funFact: "Famous pivots include Twitter starting as Odeo and Slack starting as a gaming company."
    },
    {
      question: "Which strategy creates uncontested market space?",
      options: [
        "Blue Ocean Strategy",
        "Red Ocean Strategy",
        "Defensive strategy",
        "Offensive strategy"
      ],
      correct: 0,
      funFact: "Blue Ocean Strategy involves making the competition irrelevant."
    },
    {
      question: "Which legal structure best protects personal assets of founders?",
      options: [
        "Limited liability company",
        "Sole proprietorship",
        "General partnership",
        "Joint venture"
      ],
      correct: 0,
      funFact: "An LLC separates personal assets from business debts."
    },
    {
      question: "Which supply chain strategy minimizes inventory holding costs?",
      options: [
        "Just-in-time",
        "Bulk stocking",
        "Safety stock buffering",
        "Warehousing"
      ],
      correct: 0,
      funFact: "Just-in-time (JIT) manufacturing originated in Japan, largely with Toyota."
    },
    {
      question: "Which KPI measures customer loyalty?",
      options: [
        "Net Promoter Score",
        "Customer acquisition cost",
        "Average order value",
        "Conversion rate"
      ],
      correct: 0,
      funFact: "A high NPS suggests customers are likely to recommend your business."
    },
    {
      question: "Which corporate action reduces outstanding shares?",
      options: [
        "Share buyback",
        "Stock split",
        "Bonus issue",
        "IPO"
      ],
      correct: 0,
      funFact: "Share buybacks can increase earnings per share (EPS)."
    },
    {
      question: "Which management theory emphasizes continuous improvement?",
      options: [
        "Kaizen",
        "Taylorism",
        "Scientific management",
        "Bureaucracy"
      ],
      correct: 0,
      funFact: "Kaizen is a Japanese philosophy that focuses on small, ongoing positive changes."
    },
    {
      question: "Which market structure has a single dominant seller?",
      options: [
        "Monopoly",
        "Oligopoly",
        "Perfect competition",
        "Monopsony"
      ],
      correct: 0,
      funFact: "In a monopoly, the single seller controls the price."
    },
    {
      question: "Which risk affects a firm’s exposure to interest rate changes?",
      options: [
        "Financial risk",
        "Operational risk",
        "Strategic risk",
        "Reputational risk"
      ],
      correct: 0,
      funFact: "Financial risk management often involves hedging strategies."
    },
    {
      question: "Which concept measures long-term customer profitability?",
      options: [
        "Customer lifetime value",
        "Gross margin",
        "Revenue per user",
        "Cost per lead"
      ],
      correct: 0,
      funFact: "CLV helps businesses determine how much they should spend to acquire a customer."
    },
    {
      question: "Which leadership style decentralizes decision-making?",
      options: [
        "Transformational leadership",
        "Autocratic leadership",
        "Transactional leadership",
        "Laissez-faire"
      ],
      correct: 0,
      funFact: "Transformational leaders inspire employees to innovate and create change."
    },
    {
      question: "Which financial statement shows retained earnings?",
      options: [
        "Balance sheet",
        "Income statement",
        "Cash flow statement",
        "Auditor's report"
      ],
      correct: 0,
      funFact: "Retained earnings are part of shareholder equity on the balance sheet."
    },
    {
      question: "Which competitive force relates to supplier power?",
      options: [
        "Porter’s Five Forces",
        "SWOT analysis",
        "BCG matrix",
        "Ansoff matrix"
      ],
      correct: 0,
      funFact: "Supplier power is high when there are few suppliers and many buyers."
    },
    {
      question: "Which KPI reflects a company’s growth efficiency?",
      options: [
        "Revenue growth rate",
        "Debt ratio",
        "Current ratio",
        "Inventory turnover"
      ],
      correct: 0,
      funFact: "Consistent revenue growth is a strong indicator of market demand."
    },
    {
      question: "Which strategy involves outsourcing non-core activities?",
      options: [
        "Core competency strategy",
        "Vertical integration",
        "Market penetration",
        "Conglomeration"
      ],
      correct: 0,
      funFact: "Outsourcing allows companies to focus on what they do best."
    },
    {
      question: "Which corporate finance decision relates to funding sources?",
      options: [
        "Capital structure decision",
        "Dividend policy",
        "Working capital management",
        "Budgeting"
      ],
      correct: 0,
      funFact: "Capital structure is the mix of debt and equity used to finance operations."
    },
    {
      question: "Which global standard addresses ESG reporting?",
      options: [
        "GRI standards",
        "IFRS 16",
        "ISO 9001",
        "GAAP"
      ],
      correct: 0,
      funFact: "ESG stands for Environmental, Social, and Governance."
    },
    {
      question: "Which concept measures efficiency of invested capital?",
      options: [
        "Return on invested capital",
        "Earnings per share",
        "Gross profit ratio",
        "Current ratio"
      ],
      correct: 0,
      funFact: "ROIC is used to assess a company's efficiency at allocating the capital under its control."
    },
    {
      question: "Which business risk arises from technological disruption?",
      options: [
        "Strategic risk",
        "Liquidity risk",
        "Compliance risk",
        "Credit risk"
      ],
      correct: 0,
      funFact: "Blockbuster's failure to adapt to streaming is a classic example of strategic risk from disruption."
    }
  ],

  // --------------------------------------------------------
  // ID 2: Travel | World Capitals
  // --------------------------------------------------------
  2: [
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correct: 2,
      funFact: "Canberra was chosen as a compromise between Sydney and Melbourne.",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
      correct: 2,
      funFact: "Tokyo is the most populous metropolitan area in the world.",
    }
  ],

  // --------------------------------------------------------
  // ID 9: Science | Physics Basics
  // --------------------------------------------------------
  9: [
    {
      question: "What is the unit of force?",
      options: ["Joule", "Watt", "Newton", "Pascal"],
      correct: 2,
      funFact: "The Newton is named after Sir Isaac Newton.",
    },
    {
      question: "What is the speed of light approx?",
      options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "Sound speed"],
      correct: 0,
      funFact: "Light from the sun takes about 8 minutes to reach Earth.",
    }
  ],

  // --------------------------------------------------------
  // ID 38: Sports | Cricket
  // --------------------------------------------------------
  38: [
    {
      question: "How many balls are in an over?",
      options: ["5", "6", "8", "10"],
      correct: 1,
      funFact: "In the past, overs sometimes consisted of 4 or 8 balls depending on the rules.",
    },
    {
      question: "Who is known as the 'God of Cricket'?",
      options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Don Bradman"],
      correct: 2,
      funFact: "Sachin Tendulkar has scored 100 international centuries.",
    }
  ],

  // ... You simply repeat this for all IDs up to 42
};