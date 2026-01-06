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
      options: ["Cost leadership", "Differentiation", "Focus strategy", "Diversification"],
      correct: 0,
      funFact: "Cost leadership often involves economies of scale and rigorous cost control."
    },
    {
      question: "Which framework analyzes political, economic, social, technological factors?",
      options: ["PEST analysis", "SWOT analysis", "Porter’s Five Forces", "BCG Matrix"],
      correct: 0,
      funFact: "Variations of PEST include PESTLE, adding Legal and Environmental factors."
    },
    {
      question: "Which type of merger occurs between direct competitors?",
      options: ["Horizontal merger", "Vertical merger", "Conglomerate merger", "Concentric merger"],
      correct: 0,
      funFact: "Horizontal mergers are often scrutinized by antitrust regulators for reducing market competition."
    },
    {
      question: "Which organizational structure reduces functional silos?",
      options: ["Matrix structure", "Hierarchical structure", "Flat structure", "Divisional structure"],
      correct: 0,
      funFact: "Matrix structures often require employees to report to multiple managers."
    },
    {
      question: "What is the main purpose of a business?",
      options: ["Provide jobs", "Generate profit", "Entertain customers", "Pay taxes"],
      correct: 1,
      funFact: "While profit is key, modern businesses also focus on corporate social responsibility."
    },
    {
      question: "What is SWOT analysis?",
      options: ["Strengths, Weaknesses, Opportunities, Threats", "Sales, Work, Operations, Targets", "Stock, Wealth, Options, Taxes", "Strategy, Work, Objectives, Tasks"],
      correct: 0,
      funFact: "SWOT analysis originated in the 1960s at the Stanford Research Institute."
    },
    {
      question: "Which term describes a long-term plan to achieve goals?",
      options: ["Tactics", "Strategy", "Mission statement", "Vision"],
      correct: 1,
      funFact: "Strategy is about the big picture, while tactics are the specific actions to get there."
    },
    {
      question: "Which term describes business expansion internationally?",
      options: ["Globalization", "Franchising", "Licensing", "Outsourcing"],
      correct: 0,
      funFact: "Globalization allows businesses to access new markets and cheaper resources."
    },
    {
      question: "What is corporate governance?",
      options: ["Employee training", "Rules and processes managing a company", "Marketing strategy", "Sales technique"],
      correct: 1,
      funFact: "Good corporate governance promotes transparency and accountability."
    },
    {
      question: "Which term describes daily operational activities?",
      options: ["Operations", "Strategy", "Marketing", "Finance"],
      correct: 0,
      funFact: "Efficient operations management ensures resources are used effectively."
    },
    {
      question: "What is a supply chain?",
      options: ["Employee hierarchy", "Process of delivering products to customers", "Marketing campaign", "Sales funnel"],
      correct: 1,
      funFact: "Supply chain management involves the flow of goods and services."
    },
    {
      question: "What is business ethics?",
      options: ["Company rules", "Moral principles guiding business", "Accounting standards", "Legal codes"],
      correct: 1,
      funFact: "Business ethics examines ethical principles and moral or ethical problems in a business environment."
    },
    {
      question: "What is KPI?",
      options: ["Key Performance Indicator", "Knowledge Process Index", "Known Profit Item", "Key Process Insight"],
      correct: 0,
      funFact: "KPIs help organizations evaluate their success at reaching targets."
    },
    {
      question: "What is business diversification?",
      options: ["Adding new products or markets", "Hiring new employees", "Merging departments", "Cutting costs"],
      correct: 0,
      funFact: "Diversification helps reduce risk by relying on more than one revenue stream."
    },
    {
      question: "Which management theory emphasizes continuous improvement?",
      options: ["Kaizen", "Taylorism", "Scientific management", "Bureaucracy"],
      correct: 0,
      funFact: "Kaizen is a Japanese philosophy that focuses on small, ongoing positive changes."
    },
    {
      question: "Which global standard addresses ESG reporting?",
      options: ["GRI standards", "IFRS 16", "ISO 9001", "GAAP"],
      correct: 0,
      funFact: "ESG stands for Environmental, Social, and Governance."
    },
    {
      question: "Which strategy involves outsourcing non-core activities?",
      options: ["Core competency strategy", "Vertical integration", "Market penetration", "Conglomeration"],
      correct: 0,
      funFact: "Outsourcing allows companies to focus on what they do best."
    }
  ],

  // --------------------------------------------------------
  // ID 16: Business | Marketing Basics
  // --------------------------------------------------------
  16: [
    {
      question: "Which pricing strategy maximizes profits by capturing consumer willingness to pay?",
      options: ["Price discrimination", "Penetration pricing", "Cost-plus pricing", "Skimming"],
      correct: 0,
      funFact: "Price discrimination is commonly seen in airline ticket pricing."
    },
    {
      question: "What is market segmentation?",
      options: ["Dividing market into groups", "Advertising strategy", "Product pricing", "Hiring process"],
      correct: 0,
      funFact: "Common segmentation types include demographic, geographic, and psychographic."
    },
    {
      question: "Which strategy helps businesses reach new customers?",
      options: ["Marketing", "Accounting", "Tax planning", "Manufacturing"],
      correct: 0,
      funFact: "Effective marketing blends creativity with data analytics to target the right audience."
    },
    {
      question: "Which factor is part of the 4Ps of marketing?",
      options: ["Price", "Profit only", "Planning", "Process"],
      correct: 0,
      funFact: "The 4Ps are Product, Price, Place, and Promotion."
    },
    {
      question: "What is a competitor analysis?",
      options: ["Studying rivals in market", "Employee performance review", "Tax filing", "Internal audit"],
      correct: 0,
      funFact: "Understanding competitors' strengths and weaknesses helps identify market opportunities."
    },
    {
      question: "Which business metric measures customer satisfaction?",
      options: ["ROI", "NPS (Net Promoter Score)", "EBIT", "Churn rate"],
      correct: 1,
      funFact: "NPS categorizes customers into Promoters, Passives, and Detractors."
    },
    {
      question: "What does B2B mean?",
      options: ["Business to Business", "Business to Buyer", "Buyer to Buyer", "Business to Bank"],
      correct: 0,
      funFact: "B2B transactions often involve larger volumes than B2C (Business to Consumer)."
    },
    {
      question: "Which tool measures market trends?",
      options: ["Analytics", "Invoice", "Ledger", "Balance sheet"],
      correct: 0,
      funFact: "Data analytics allows businesses to make informed decisions based on market behavior."
    },
    {
      question: "Which KPI measures customer loyalty?",
      options: ["Net Promoter Score", "Customer acquisition cost", "Average order value", "Conversion rate"],
      correct: 0,
      funFact: "A high NPS suggests customers are likely to recommend your business."
    },
    {
      question: "Which concept measures long-term customer profitability?",
      options: ["Customer lifetime value", "Gross margin", "Revenue per user", "Cost per lead"],
      correct: 0,
      funFact: "CLV helps businesses determine how much they should spend to acquire a customer."
    }
  ],

  // --------------------------------------------------------
  // ID 25: Business | Finance
  // --------------------------------------------------------
  25: [
    {
      question: "Which financial metric measures value created above capital cost?",
      options: ["Economic Value Added", "Gross margin", "EBITDA", "Net Income"],
      correct: 0,
      funFact: "EVA is a registered trademark of Stern Stewart & Co."
    },
    {
      question: "Which valuation method discounts future cash flows?",
      options: ["Discounted cash flow", "Comparable multiples", "Book value method", "Liquidation value"],
      correct: 0,
      funFact: "DCF analysis relies heavily on the accuracy of future financial projections."
    },
    {
      question: "Which concept describes reinvesting profits for future growth?",
      options: ["Retained earnings", "Dividends", "Share buyback", "Stock split"],
      correct: 0,
      funFact: "Retained earnings are reported in the shareholders' equity section of the balance sheet."
    },
    {
      question: "Which performance metric excludes financing and accounting effects?",
      options: ["EBITDA", "Net income", "Return on equity", "Gross profit"],
      correct: 0,
      funFact: "EBITDA stands for Earnings Before Interest, Taxes, Depreciation, and Amortization."
    },
    {
      question: "Which term describes ownership in a company?",
      options: ["Stakeholder", "Equity", "Liability", "Asset"],
      correct: 1,
      funFact: "Equity represents the residual interest in the assets of an entity after deducting liabilities."
    },
    {
      question: "What is ROI in business?",
      options: ["Return on Investment", "Rate of Income", "Revenue of Industry", "Risk on Investment"],
      correct: 0,
      funFact: "ROI is a versatile metric used to evaluate the efficiency of an investment."
    },
    {
      question: "Which financial statement shows company profits?",
      options: ["Balance sheet", "Income statement", "Cash flow statement", "Equity statement"],
      correct: 1,
      funFact: "The income statement is also known as the Profit and Loss (P&L) statement."
    },
    {
      question: "What is cash flow?",
      options: ["Money moving in and out", "Profit only", "Debt amount", "Inventory value"],
      correct: 0,
      funFact: "Positive cash flow indicates that a company's liquid assets are increasing."
    },
    {
      question: "Which is an intangible business asset?",
      options: ["Machinery", "Brand reputation", "Office building", "Vehicle"],
      correct: 1,
      funFact: "Intangible assets also include patents, trademarks, and copyrights."
    },
    {
      question: "Which financial ratio measures profitability?",
      options: ["Debt ratio", "Return on Equity (ROE)", "Liquidity ratio", "Solvency ratio"],
      correct: 1,
      funFact: "ROE measures a corporation's profitability in relation to stockholders' equity."
    },
    {
      question: "What is break-even point?",
      options: ["Revenue equals costs", "Profit margin target", "Budget limit", "Loss threshold"],
      correct: 0,
      funFact: "At the break-even point, a business makes neither a profit nor a loss."
    },
    {
      question: "Which corporate action reduces outstanding shares?",
      options: ["Share buyback", "Stock split", "Bonus issue", "IPO"],
      correct: 0,
      funFact: "Share buybacks can increase earnings per share (EPS)."
    },
    {
      question: "Which risk affects a firm’s exposure to interest rate changes?",
      options: ["Financial risk", "Operational risk", "Strategic risk", "Reputational risk"],
      correct: 0,
      funFact: "Financial risk management often involves hedging strategies."
    },
    {
      question: "Which financial statement shows retained earnings?",
      options: ["Balance sheet", "Income statement", "Cash flow statement", "Auditor's report"],
      correct: 0,
      funFact: "Retained earnings are part of shareholder equity on the balance sheet."
    },
    {
      question: "Which corporate finance decision relates to funding sources?",
      options: ["Capital structure decision", "Dividend policy", "Working capital management", "Budgeting"],
      correct: 0,
      funFact: "Capital structure is the mix of debt and equity used to finance operations."
    },
    {
      question: "Which concept measures efficiency of invested capital?",
      options: ["Return on invested capital", "Earnings per share", "Gross profit ratio", "Current ratio"],
      correct: 0,
      funFact: "ROIC is used to assess a company's efficiency at allocating the capital under its control."
    }
  ],

  // --------------------------------------------------------
  // ID 34: Business | Entrepreneurship
  // --------------------------------------------------------
  34: [
    {
      question: "Which term describes a new business venture?",
      options: ["Startup", "Corporation", "Franchise", "Subsidiary"],
      correct: 0,
      funFact: "Startups are often designed to scale very quickly compared to traditional small businesses."
    },
    {
      question: "Which document outlines business goals and strategies?",
      options: ["Business plan", "Invoice", "Employment contract", "Receipt"],
      correct: 0,
      funFact: "A solid business plan is essential for securing funding from investors."
    },
    {
      question: "What is a business model?",
      options: ["Operational plan", "How company makes money", "Employee handbook", "Legal structure"],
      correct: 1,
      funFact: "The subscription model is a popular business model used by companies like Netflix."
    },
    {
      question: "What is an entrepreneur?",
      options: ["Employee", "Business owner or founder", "Investor only", "Manager"],
      correct: 1,
      funFact: "Entrepreneurs often take on significant financial risk in hopes of profit."
    },
    {
      question: "What does 'scaling a business' mean?",
      options: ["Increasing size and revenue", "Hiring employees only", "Reducing costs", "Changing location"],
      correct: 0,
      funFact: "Scaling implies increasing revenue without a substantial increase in resources."
    },
    {
      question: "What is venture capital?",
      options: ["Bank loan", "Investment in startups", "Government grant", "Personal savings"],
      correct: 1,
      funFact: "Venture capital is a form of private equity financing provided to early-stage firms."
    },
    {
      question: "What is a franchise?",
      options: ["Company-owned outlet", "Licensed business model", "Merger", "Partnership"],
      correct: 1,
      funFact: "McDonald's is one of the world's most famous examples of a franchise business."
    },
    {
      question: "Which business structure separates owners from liability?",
      options: ["Sole proprietorship", "Corporation", "Partnership", "Cooperative"],
      correct: 1,
      funFact: "In a corporation, shareholders generally only lose their investment if the business fails."
    },
    {
      question: "Which type of business focuses on social goals?",
      options: ["Social enterprise", "Startup", "Franchise", "Conglomerate"],
      correct: 0,
      funFact: "Social enterprises reinvest profits to achieve their social mission."
    },
    {
      question: "What is a business incubator?",
      options: ["Startup support program", "Office building", "Investor meeting", "Factory"],
      correct: 0,
      funFact: "Incubators often provide mentorship, office space, and funding connections."
    },
    {
      question: "What is a business pivot?",
      options: ["Company closure", "Changing business strategy or product", "New hire", "Rebranding"],
      correct: 1,
      funFact: "Famous pivots include Twitter starting as Odeo and Slack starting as a gaming company."
    },
    {
      question: "Which strategy creates uncontested market space?",
      options: ["Blue Ocean Strategy", "Red Ocean Strategy", "Defensive strategy", "Offensive strategy"],
      correct: 0,
      funFact: "Blue Ocean Strategy involves making the competition irrelevant."
    },
    {
      question: "Which legal structure best protects personal assets of founders?",
      options: ["Limited liability company", "Sole proprietorship", "General partnership", "Joint venture"],
      correct: 0,
      funFact: "An LLC separates personal assets from business debts."
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
      funFact: "Canberra was chosen as a compromise between Sydney and Melbourne."
    },
    {
      question: "What is the capital of Japan?",
      options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
      correct: 2,
      funFact: "Tokyo is the most populous metropolitan area in the world."
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
      correct: 3,
      funFact: "Ottawa was chosen as the capital by Queen Victoria in 1857."
    },
    {
      question: "What is the capital of Brazil?",
      options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
      correct: 2,
      funFact: "Brasília was built in just 41 months, from 1956 to 1960."
    },
    {
      question: "What is the capital of Egypt?",
      options: ["Alexandria", "Cairo", "Giza", "Luxor"],
      correct: 1,
      funFact: "Cairo is known as 'The City of a Thousand Minarets'."
    },
    {
      question: "What is the capital of Germany?",
      options: ["Munich", "Frankfurt", "Hamburg", "Berlin"],
      correct: 3,
      funFact: "Berlin has more bridges than Venice."
    },
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Bangalore"],
      correct: 1,
      funFact: "New Delhi was designed by British architects Edwin Lutyens and Herbert Baker."
    },
    {
      question: "What is the capital of Italy?",
      options: ["Milan", "Venice", "Rome", "Florence"],
      correct: 2,
      funFact: "Rome contains a sovereign state entirely within it: Vatican City."
    },
    {
      question: "What is the capital of Thailand?",
      options: ["Phuket", "Chiang Mai", "Bangkok", "Pattaya"],
      correct: 2,
      funFact: "The ceremonial name of Bangkok is one of the longest city names in the world."
    },
    {
      question: "What is the capital of Spain?",
      options: ["Barcelona", "Madrid", "Seville", "Valencia"],
      correct: 1,
      funFact: "Madrid is the highest capital city in Europe in terms of elevation."
    },
    {
      question: "What is the capital of Russia?",
      options: ["Saint Petersburg", "Moscow", "Kazan", "Sochi"],
      correct: 1,
      funFact: "Moscow is home to the Kremlin and Red Square."
    },
    {
      question: "What is the capital of Argentina?",
      options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
      correct: 0,
      funFact: "Buenos Aires is often called the 'Paris of South America'."
    },
    {
      question: "What is the capital of Turkey?",
      options: ["Istanbul", "Ankara", "Izmir", "Antalya"],
      correct: 1,
      funFact: "Although Istanbul is larger, Ankara has been the capital since 1923."
    },
    {
      question: "What is the capital of South Korea?",
      options: ["Busan", "Incheon", "Seoul", "Daegu"],
      correct: 2,
      funFact: "Seoul has been a major settlement for over 2,000 years."
    },
    {
      question: "What is the capital of Kenya?",
      options: ["Mombasa", "Kisumu", "Nairobi", "Nakuru"],
      correct: 2,
      funFact: "Nairobi is known as the 'Green City in the Sun'."
    },
    {
      question: "What is the capital of Mexico?",
      options: ["Cancún", "Guadalajara", "Mexico City", "Monterrey"],
      correct: 2,
      funFact: "Mexico City was built on the ruins of the Aztec capital, Tenochtitlan."
    },
    {
      question: "What is the capital of France?",
      options: ["Lyon", "Marseille", "Paris", "Nice"],
      correct: 2,
      funFact: "The Eiffel Tower in Paris was originally intended to be a temporary structure."
    },
    {
      question: "What is the capital of Vietnam?",
      options: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hue"],
      correct: 1,
      funFact: "Hanoi recently celebrated its 1,000th anniversary in 2010."
    },
    {
      question: "What is the capital of Poland?",
      options: ["Kraków", "Warsaw", "Gdańsk", "Wrocław"],
      correct: 1,
      funFact: "Warsaw's Old Town was completely rebuilt after World War II."
    },
    {
      question: "What is the capital of Peru?",
      options: ["Cusco", "Lima", "Arequipa", "Trujillo"],
      correct: 1,
      funFact: "Lima is the second driest world capital, after Cairo."
    }
  ],

  // --------------------------------------------------------
  // ID 3: Math And Logic | Puzzles
  // --------------------------------------------------------
  3: [
    {
      question: "What comes next in the sequence: 2, 4, 8, 16...?",
      options: ["24", "32", "20", "18"],
      correct: 1,
      funFact: "This is a geometric progression where each number is multiplied by 2."
    },
    {
      question: "If you have 3 apples and you take away 2, how many do you have?",
      options: ["1", "2", "3", "0"],
      correct: 1,
      funFact: "You have 2 apples because those are the ones you took!"
    },
    {
      question: "Solve: 10 - 2 x 3 = ?",
      options: ["24", "4", "16", "6"],
      correct: 1,
      funFact: "According to BODMAS/PEMDAS, multiplication comes before subtraction."
    },
    {
      question: "You are running a race and pass the person in 2nd place. What place are you in?",
      options: ["1st", "2nd", "3rd", "Last"],
      correct: 1,
      funFact: "You take the place of the person you passed, so you become 2nd."
    },
    {
      question: "How many months have 28 days?",
      options: ["1 (February)", "6", "12", "0"],
      correct: 2,
      funFact: "Every month has at least 28 days."
    },
    {
      question: "I have cities, but no houses. I have mountains, but no trees. What am I?",
      options: ["A dream", "A movie", "A map", "A painting"],
      correct: 2,
      funFact: "Maps use symbols to represent physical features."
    },
    {
      question: "What number comes next? 1, 1, 2, 3, 5, ...",
      options: ["6", "7", "8", "9"],
      correct: 2,
      funFact: "This is the Fibonacci sequence, where each number is the sum of the two preceding ones."
    },
    {
      question: "Mary's father has five daughters: Nana, Nene, Nini, Nono. What is the fifth daughter's name?",
      options: ["Nunu", "Nina", "Mary", "Nancy"],
      correct: 2,
      funFact: "The question states it is Mary's father."
    },
    {
      question: "Which is heavier: A pound of lead or a pound of feathers?",
      options: ["Lead", "Feathers", "They are equal", "Depends on gravity"],
      correct: 2,
      funFact: "Both weigh exactly one pound."
    },
    {
      question: "How many sides does a hexagon have?",
      options: ["5", "6", "7", "8"],
      correct: 1,
      funFact: "Bees build honeycombs in hexagons because it is the most efficient shape for packing."
    },
    {
      question: "What goes up but never comes down?",
      options: ["Rain", "Age", "Hot air balloon", "Elevator"],
      correct: 1,
      funFact: "Age only increases with time."
    },
    {
      question: "Divide 30 by half and add 10. What is the answer?",
      options: ["25", "50", "70", "40"],
      correct: 2,
      funFact: "Dividing by half (0.5) is the same as multiplying by 2. So, 30 * 2 = 60, plus 10 = 70."
    },
    {
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "14"],
      correct: 2,
      funFact: "12 x 12 = 144. It is a gross (a dozen dozens)."
    },
    {
      question: "What is the only even prime number?",
      options: ["0", "1", "2", "4"],
      correct: 2,
      funFact: "2 is the smallest and only even prime number."
    },
    {
      question: "There are 2 ducks in front of 2 ducks, 2 ducks behind 2 ducks, and 2 ducks in the middle. How many ducks?",
      options: ["6", "8", "4", "2"],
      correct: 2,
      funFact: "They are walking in a line of four."
    },
    {
      question: "Look at this series: O, T, T, F, F, S, S, ... What letter comes next?",
      options: ["E", "N", "T", "O"],
      correct: 0,
      funFact: "These are the first letters of numbers: One, Two, Three, Four, Five, Six, Seven, Eight."
    },
    {
      question: "How many degrees are in a full circle?",
      options: ["90", "180", "270", "360"],
      correct: 3,
      funFact: "The division of a circle into 360 degrees dates back to ancient Babylonians."
    },
    {
      question: "A man looks at a painting and says, 'Brothers and sisters I have none, but that man's father is my father's son.' Who is in the painting?",
      options: ["His father", "His son", "Himself", "His uncle"],
      correct: 1,
      funFact: "'My father's son' with no siblings must be the speaker. So, 'that man's father is [me]'. The painting is his son."
    },
    {
      question: "If you roll a standard 6-sided die, what is the probability of rolling a 7?",
      options: ["1/6", "50%", "0", "1"],
      correct: 2,
      funFact: "Standard dice only have numbers 1 through 6."
    },
    {
      question: "What is 70% of 100?",
      options: ["7", "70", "700", "0.7"],
      correct: 1,
      funFact: "Percent means 'per 100', so 70 per 100 is just 70."
    }
  ],
  // --------------------------------------------------------
  // ID 4: Sports | Football
  // --------------------------------------------------------
  4: [
    {
      question: "Which country won the 2018 FIFA World Cup?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      correct: 2,
      funFact: "France defeated Croatia 4-2 in the final to win their second title."
    },
    {
      question: "How long is a standard football match?",
      options: ["60 minutes", "80 minutes", "90 minutes", "100 minutes"],
      correct: 2,
      funFact: "A match consists of two halves of 45 minutes each, plus stoppage time."
    },
    {
      question: "Which nation has won the most World Cups?",
      options: ["Germany", "Italy", "Brazil", "Argentina"],
      correct: 2,
      funFact: "Brazil has won the tournament 5 times (1958, 1962, 1970, 1994, 2002)."
    },
    {
      question: "Who is known as 'The King of Football'?",
      options: ["Maradona", "Pelé", "Messi", "Ronaldo"],
      correct: 1,
      funFact: "Pelé is the only player to have won three World Cups."
    },
    {
      question: "Which club is known as 'The Red Devils'?",
      options: ["Liverpool", "Arsenal", "Manchester United", "Chelsea"],
      correct: 2,
      funFact: "The nickname was adopted by legendary manager Sir Matt Busby."
    },
    {
      question: "How many players start on the pitch for one team?",
      options: ["10", "11", "12", "9"],
      correct: 1,
      funFact: "This includes one goalkeeper and ten outfield players."
    },
    {
      question: "What is a 'hat-trick'?",
      options: ["Scoring 2 goals", "Scoring 3 goals", "Saving a penalty", "Getting a red card"],
      correct: 1,
      funFact: "A 'perfect hat-trick' involves scoring with the left foot, right foot, and head."
    },
    {
      question: "Which country hosted the 2022 FIFA World Cup?",
      options: ["Russia", "Brazil", "Qatar", "USA"],
      correct: 2,
      funFact: "It was the first World Cup ever held in the Arab world."
    },
    {
      question: "Which color card signifies a sending off?",
      options: ["Yellow", "Green", "Red", "Blue"],
      correct: 2,
      funFact: "Two yellow cards in the same match also result in a red card."
    },
    {
      question: "Who won the Ballon d'Or in 2023?",
      options: ["Erling Haaland", "Kylian Mbappé", "Lionel Messi", "Karim Benzema"],
      correct: 2,
      funFact: "This was Lionel Messi's record-extending 8th Ballon d'Or."
    },
    {
      question: "Which club plays at Anfield?",
      options: ["Everton", "Manchester City", "Liverpool", "Tottenham"],
      correct: 2,
      funFact: "Anfield is famous for its 'This is Anfield' sign in the tunnel."
    },
    {
      question: "What country is Cristiano Ronaldo from?",
      options: ["Spain", "Brazil", "Portugal", "Italy"],
      correct: 2,
      funFact: "He is the all-time leading goalscorer in international football."
    },
    {
      question: "Which team won the Champions League in 2023?",
      options: ["Inter Milan", "Real Madrid", "Manchester City", "Bayern Munich"],
      correct: 2,
      funFact: "This victory completed a historic Treble for Manchester City."
    },
    {
      question: "Diego Maradona is a legend of which country?",
      options: ["Brazil", "Spain", "Argentina", "Italy"],
      correct: 2,
      funFact: "He famously scored the 'Hand of God' goal against England in 1986."
    },
    {
      question: "What is the distance of a penalty kick from the goal line?",
      options: ["9 meters", "11 meters (12 yards)", "15 meters", "20 meters"],
      correct: 1,
      funFact: "The penalty spot is exactly 12 yards (10.97m) away from the goal."
    },
    {
      question: "Which country won the very first World Cup in 1930?",
      options: ["Brazil", "Italy", "Uruguay", "Argentina"],
      correct: 2,
      funFact: "Uruguay hosted and won the inaugural tournament, beating Argentina."
    },
    {
      question: "Who is the global governing body of football?",
      options: ["UEFA", "FIFA", "IOC", "FA"],
      correct: 1,
      funFact: "FIFA stands for Fédération Internationale de Football Association."
    },
    {
      question: "Which position can use their hands inside the box?",
      options: ["Defender", "Striker", "Goalkeeper", "Midfielder"],
      correct: 2,
      funFact: "Goalkeepers are the only players allowed to handle the ball within play."
    },
    {
      question: "What is the nickname of Arsenal FC?",
      options: ["The Blues", "The Gunners", "The Hammers", "The Citizens"],
      correct: 1,
      funFact: "Their crest features a cannon, referencing their origins as munitions workers."
    },
    {
      question: "Which stadium is the largest in Europe?",
      options: ["Wembley", "Old Trafford", "Camp Nou", "Santiago Bernabéu"],
      correct: 2,
      funFact: "Camp Nou is the home of FC Barcelona and seats over 99,000 fans."
    }
  ],
  // --------------------------------------------------------
  // ID 5: Math And Logic | Logical Reasoning
  // --------------------------------------------------------
  5: [
    {
      question: "Which number comes next in the series: 2, 6, 12, 20, 30, ...?",
      options: ["40", "42", "44", "48"],
      correct: 1,
      funFact: "The differences between the numbers are increasing even numbers: 4, 6, 8, 10, 12."
    },
    {
      question: "If A is the brother of B; B is the sister of C; and C is the father of D, how is D related to A?",
      options: ["Brother", "Sister", "Nephew/Niece", "Uncle"],
      correct: 2,
      funFact: "Since C is D's father and A is C's brother, A is D's uncle, making D the nephew or niece."
    },
    {
      question: "Which word does not belong in the group?",
      options: ["Apple", "Banana", "Carrot", "Grape"],
      correct: 2,
      funFact: "Carrot is a vegetable (root), while the others are fruits."
    },
    {
      question: "If CAT is coded as 3120, how is DOG coded?",
      options: ["4157", "4158", "4147", "4167"],
      correct: 0,
      funFact: "Letters are replaced by their position in the alphabet: D=4, O=15, G=7."
    },
    {
      question: "Statement: All roses are flowers. Some flowers are red. Conclusion: Some roses are red.",
      options: ["True", "False", "Uncertain", "None of these"],
      correct: 2,
      funFact: "In syllogisms, 'Some' doesn't guarantee an overlap with the specific subset 'roses'."
    },
    {
      question: "What comes next: J, F, M, A, M, J, ...?",
      options: ["J", "A", "S", "O"],
      correct: 0,
      funFact: "These are the first letters of the months: January, February, March, etc. Next is July."
    },
    {
      question: "Melt is to Liquid as Freeze is to:",
      options: ["Ice", "Solid", "Condense", "Push"],
      correct: 1,
      funFact: "Melting changes a state to liquid; freezing changes a state to solid."
    },
    {
      question: "Find the odd one out.",
      options: ["Square", "Triangle", "Rectangle", "Circle"],
      correct: 3,
      funFact: "A circle has no straight edges or corners, unlike the polygons."
    },
    {
      question: "If yesterday was Tuesday, what day is the day after tomorrow?",
      options: ["Friday", "Thursday", "Saturday", "Wednesday"],
      correct: 0,
      funFact: "If yesterday was Tuesday, today is Wednesday. Tomorrow is Thursday, day after is Friday."
    },
    {
      question: "2, 3, 5, 7, 11, ... What is next?",
      options: ["12", "13", "14", "15"],
      correct: 1,
      funFact: "This is the sequence of prime numbers."
    },
    {
      question: "Pointing to a photograph, a man said, 'I have no brother or sister but that man’s father is my father’s son.' Whose photograph was it?",
      options: ["His own", "His son", "His father", "His nephew"],
      correct: 1,
      funFact: "'My father's son' with no siblings is the speaker himself. So, 'that man's father is [me]'. It's his son."
    },
    {
      question: "Which number replaces the question mark? 1, 4, 9, 16, ?",
      options: ["20", "24", "25", "30"],
      correct: 2,
      funFact: "These are square numbers: 1², 2², 3², 4², 5²."
    },
    {
      question: "CUP is to LIP as BIRD is to:",
      options: ["GRASS", "FOREST", "BEAK", "BUSH"],
      correct: 2,
      funFact: "You drink from a cup with your lip; a bird eats/drinks with its beak."
    },
    {
      question: "SCD, TEF, UGH, ____, WKL",
      options: ["CMN", "UJI", "VIJ", "IJT"],
      correct: 2,
      funFact: "The first letter increases by 1 (S, T, U, V, W). The second and third letters follow the alphabet."
    },
    {
      question: "If you rearrange the letters 'CIFAIPC', you would have the name of a(n):",
      options: ["City", "Animal", "Ocean", "Country"],
      correct: 2,
      funFact: "The word is PACIFIC."
    },
    {
      question: "Some months have 30 days, some have 31. How many have 28?",
      options: ["1", "6", "12", "0"],
      correct: 2,
      funFact: "Every month has at least 28 days."
    },
    {
      question: "What is the missing number? 7, 10, 8, 11, 9, 12, ...",
      options: ["7", "10", "12", "13"],
      correct: 1,
      funFact: "The pattern is +3, -2, +3, -2, +3, -2. So 12 - 2 = 10."
    },
    {
      question: "Paw is to Cat as Hoof is to:",
      options: ["Dog", "Horse", "Tiger", "Bird"],
      correct: 1,
      funFact: "Cats have paws; horses have hooves."
    },
    {
      question: "Which of the following can be arranged into a 5-letter English word?",
      options: ["H R G S T", "R I L S A", "T O O M T", "W Q R G S"],
      correct: 1,
      funFact: "R I L S A can be rearranged to form RAILS (or LAIRS)."
    },
    {
      question: "1000, 200, 40, ... What comes next?",
      options: ["8", "10", "20", "4"],
      correct: 0,
      funFact: "Each number is divided by 5."
    }
  ],

  // --------------------------------------------------------
  // ID 6: Travel | Tourist Attractions
  // --------------------------------------------------------
  6: [
    {
      question: "Where is the Eiffel Tower located?",
      options: ["London, UK", "Paris, France", "Rome, Italy", "Berlin, Germany"],
      correct: 1,
      funFact: "The Eiffel Tower grows about 6 inches in the summer due to thermal expansion of the iron."
    },
    {
      question: "The Great Wall is located in which country?",
      options: ["Japan", "India", "China", "Mongolia"],
      correct: 2,
      funFact: "The Great Wall is not a single continuous wall but a collection of walls and fortifications."
    },
    {
      question: "Which city is home to the Colosseum?",
      options: ["Athens", "Rome", "Milan", "Cairo"],
      correct: 1,
      funFact: "The Colosseum could hold between 50,000 and 80,000 spectators."
    },
    {
      question: "Machu Picchu is an ancient city of which civilization?",
      options: ["Mayan", "Aztec", "Inca", "Egyptian"],
      correct: 2,
      funFact: "Machu Picchu was built in the 15th century and later abandoned."
    },
    {
      question: "Where is the Statue of Liberty located?",
      options: ["Washington D.C.", "Los Angeles", "New York City", "Boston"],
      correct: 2,
      funFact: "The statue was a gift of friendship from the people of France to the United States."
    },
    {
      question: "The Taj Mahal is located in which Indian city?",
      options: ["Mumbai", "Jaipur", "Agra", "New Delhi"],
      correct: 2,
      funFact: "It took approximately 20 years and 20,000 workers to build the Taj Mahal."
    },
    {
      question: "Where can you find the Pyramids of Giza?",
      options: ["Sudan", "Libya", "Egypt", "Iraq"],
      correct: 2,
      funFact: "The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World."
    },
    {
      question: "Which city is famous for its canals and gondolas?",
      options: ["Amsterdam", "Venice", "Bruges", "Bangkok"],
      correct: 1,
      funFact: "Venice is built on more than 100 small islands in a lagoon in the Adriatic Sea."
    },
    {
      question: "Christ the Redeemer statue stands overlooking which city?",
      options: ["Buenos Aires", "São Paulo", "Rio de Janeiro", "Lima"],
      correct: 2,
      funFact: "The statue is 30 meters (98 feet) tall, not including its 8-meter pedestal."
    },
    {
      question: "Where is the Sydney Opera House located?",
      options: ["New Zealand", "Australia", "UK", "USA"],
      correct: 1,
      funFact: "The roof structures are often described as 'shells' or 'sails'."
    },
    {
      question: "The Acropolis is an ancient citadel located in:",
      options: ["Rome", "Athens", "Istanbul", "Crete"],
      correct: 1,
      funFact: "The most famous building on the Acropolis is the Parthenon."
    },
    {
      question: "Where is Stonehenge located?",
      options: ["Ireland", "Scotland", "England", "Wales"],
      correct: 2,
      funFact: "The stones are aligned with the sunset of the winter solstice and the sunrise of the summer solstice."
    },
    {
      question: "Petra, the rose-red city, is in which country?",
      options: ["Syria", "Israel", "Jordan", "Egypt"],
      correct: 2,
      funFact: "Petra was established possibly as early as 312 BC as the capital city of the Nabataeans."
    },
    {
      question: "Which U.S. national park is famous for its geysers?",
      options: ["Yosemite", "Grand Canyon", "Yellowstone", "Zion"],
      correct: 2,
      funFact: "Yellowstone was the first national park in the world."
    },
    {
      question: "The Burj Khalifa, the world's tallest building, is in:",
      options: ["Saudi Arabia", "Qatar", "Dubai (UAE)", "Kuwait"],
      correct: 2,
      funFact: "It stands at 828 meters (2,716.5 feet) tall."
    },
    {
      question: "Mount Fuji is an iconic landmark of which country?",
      options: ["China", "South Korea", "Japan", "Vietnam"],
      correct: 2,
      funFact: "Mount Fuji is an active volcano that last erupted in 1707."
    },
    {
      question: "Where is the Louvre Museum located?",
      options: ["London", "Berlin", "Madrid", "Paris"],
      correct: 3,
      funFact: "It is the world's largest art museum and a historic monument in Paris."
    },
    {
      question: "The Golden Gate Bridge is in which city?",
      options: ["Seattle", "San Diego", "San Francisco", "Portland"],
      correct: 2,
      funFact: "The bridge's official color is 'International Orange'."
    },
    {
      question: "Niagara Falls straddles the border between the USA and:",
      options: ["Mexico", "Canada", "Russia", "Cuba"],
      correct: 1,
      funFact: "Niagara Falls is actually three separate waterfalls."
    },
    {
      question: "The Forbidden City is a palace complex in:",
      options: ["Shanghai", "Hong Kong", "Beijing", "Taipei"],
      correct: 2,
      funFact: "It served as the home of emperors for almost 500 years."
    }
  ],

  // --------------------------------------------------------
  // ID 7: Math And Logic | Algebra
  // --------------------------------------------------------
  7: [
    {
      question: "Solve for x: 2x + 5 = 15",
      options: ["5", "10", "2.5", "7.5"],
      correct: 0,
      funFact: "Subtract 5 from both sides, then divide by 2."
    },
    {
      question: "If a = 3 and b = 4, what is a² + b²?",
      options: ["12", "25", "49", "7"],
      correct: 1,
      funFact: "9 + 16 = 25. This is related to the 3-4-5 right triangle."
    },
    {
      question: "Simplify: 3(x + 2) - 2x",
      options: ["x + 6", "5x + 6", "x + 2", "3x + 6"],
      correct: 0,
      funFact: "Distribute the 3: 3x + 6 - 2x = x + 6."
    },
    {
      question: "What is the slope of the line y = 4x - 1?",
      options: ["-1", "1", "4", "x"],
      correct: 2,
      funFact: "In the equation y = mx + c, 'm' represents the slope."
    },
    {
      question: "Solve for y: 5y = 20",
      options: ["2", "4", "5", "100"],
      correct: 1,
      funFact: "Divide both sides by 5."
    },
    {
      question: "Expand: (x + 3)(x - 3)",
      options: ["x² - 9", "x² + 9", "x² - 6x + 9", "x² + 6x - 9"],
      correct: 0,
      funFact: "This is the 'difference of two squares' pattern."
    },
    {
      question: "If x = -2, what is |x|?",
      options: ["-2", "2", "0", "4"],
      correct: 1,
      funFact: "Absolute value represents the distance from zero, so it is always non-negative."
    },
    {
      question: "What is the value of 3⁰?",
      options: ["0", "1", "3", "Undefined"],
      correct: 1,
      funFact: "Any non-zero number raised to the power of 0 is 1."
    },
    {
      question: "Solve for x: x/4 = 3",
      options: ["0.75", "7", "12", "16"],
      correct: 2,
      funFact: "Multiply both sides by 4."
    },
    {
      question: "Which of these is a binomial?",
      options: ["2x", "x + y", "x + y + z", "5"],
      correct: 1,
      funFact: "A binomial is a polynomial with exactly two terms."
    },
    {
      question: "If 4x - 8 = 0, find x.",
      options: ["-2", "0", "2", "4"],
      correct: 2,
      funFact: "Add 8 to both sides, then divide by 4."
    },
    {
      question: "Factorize: x² + 5x + 6",
      options: ["(x+1)(x+6)", "(x+2)(x+3)", "(x-2)(x-3)", "(x+5)(x+1)"],
      correct: 1,
      funFact: "We need two numbers that multiply to 6 and add to 5 (2 and 3)."
    },
    {
      question: "Evaluate 2x + 3y when x=2 and y=1.",
      options: ["5", "6", "7", "8"],
      correct: 2,
      funFact: "2(2) + 3(1) = 4 + 3 = 7."
    },
    {
      question: "What is the y-intercept of y = 2x + 5?",
      options: ["2", "5", "0", "-2.5"],
      correct: 1,
      funFact: "The y-intercept is the constant term (c) in y = mx + c."
    },
    {
      question: "Solve for z: 10 - z = 4",
      options: ["6", "-6", "14", "4"],
      correct: 0,
      funFact: "10 minus what equals 4? The answer is 6."
    },
    {
      question: "Simplify: x⁵ / x²",
      options: ["x^2.5", "x^3", "x^7", "x^10"],
      correct: 1,
      funFact: "When dividing exponents with the same base, subtract the powers (5-2=3)."
    },
    {
      question: "Which of these is a quadratic equation?",
      options: ["y = x + 1", "y = x² + 1", "y = x³", "y = 5"],
      correct: 1,
      funFact: "A quadratic equation involves a variable squared (highest power of 2)."
    },
    {
      question: "If x + y = 10 and x - y = 2, what is x?",
      options: ["4", "5", "6", "8"],
      correct: 2,
      funFact: "Add the two equations: 2x = 12, so x = 6."
    },
    {
      question: "What is the coefficient of x in 5x² - 3x + 2?",
      options: ["5", "3", "-3", "2"],
      correct: 2,
      funFact: "The coefficient includes the sign in front of the number."
    },
    {
      question: "Solve the inequality: x + 2 > 5",
      options: ["x > 3", "x < 3", "x > 7", "x = 3"],
      correct: 0,
      funFact: "Subtract 2 from both sides to isolate x."
    }
  ],

  // --------------------------------------------------------
  // ID 8: World | Famous Landmarks
  // --------------------------------------------------------
  8: [
    {
      question: "The Leaning Tower of Pisa is located in:",
      options: ["France", "Spain", "Italy", "Greece"],
      correct: 2,
      funFact: "The tower began to lean during construction in the 12th century."
    },
    {
      question: "Which landmark is found in Sydney Harbour?",
      options: ["Golden Gate Bridge", "Tower Bridge", "Sydney Opera House", "Brooklyn Bridge"],
      correct: 2,
      funFact: "It is one of the 20th century's most famous and distinctive buildings."
    },
    {
      question: "The Big Ben is located in:",
      options: ["Paris", "New York", "London", "Toronto"],
      correct: 2,
      funFact: "Big Ben is technically the nickname for the Great Bell of the clock, not the tower itself."
    },
    {
      question: "Where is the Blue Mosque located?",
      options: ["Mecca", "Istanbul", "Jerusalem", "Abu Dhabi"],
      correct: 1,
      funFact: "It is known as the Blue Mosque because of the blue tiles surrounding the walls of its interior."
    },
    {
      question: "The Sphinx is located near which other famous landmarks?",
      options: ["The Pyramids of Giza", "The Colosseum", "Petra", "The Acropolis"],
      correct: 0,
      funFact: "The Great Sphinx is one of the world's largest monolithic statues."
    },
    {
      question: "Where is Mount Rushmore located?",
      options: ["Canada", "USA", "Australia", "Russia"],
      correct: 1,
      funFact: "It features the heads of four US presidents carved into granite."
    },
    {
      question: "The Parthenon is dedicated to which Greek goddess?",
      options: ["Hera", "Aphrodite", "Athena", "Artemis"],
      correct: 2,
      funFact: "It sits atop the Acropolis in Athens."
    },
    {
      question: "Which famous wall was torn down in 1989?",
      options: ["Great Wall of China", "Berlin Wall", "Hadrian's Wall", "Western Wall"],
      correct: 1,
      funFact: "The fall of the Berlin Wall symbolized the end of the Cold War."
    },
    {
      question: "Where is the Petronas Twin Towers located?",
      options: ["Tokyo", "Singapore", "Kuala Lumpur", "Jakarta"],
      correct: 2,
      funFact: "They were the tallest buildings in the world from 1998 to 2004."
    },
    {
      question: "The Angkor Wat temple complex is in:",
      options: ["Thailand", "Cambodia", "Vietnam", "Laos"],
      correct: 1,
      funFact: "It is the largest religious monument in the world."
    },
    {
      question: "Where is the Brandenburg Gate?",
      options: ["Munich", "Vienna", "Berlin", "Brussels"],
      correct: 2,
      funFact: "It is an 18th-century neoclassical monument in Berlin."
    },
    {
      question: "Which landmark is a symbol of Rio de Janeiro?",
      options: ["Sugarloaf Mountain", "Christ the Redeemer", "Copacabana", "Amazon River"],
      correct: 1,
      funFact: "It is an Art Deco statue of Jesus Christ."
    },
    {
      question: "The Hollywood Sign is located in which US state?",
      options: ["Florida", "New York", "Texas", "California"],
      correct: 3,
      funFact: "It originally read 'HOLLYWOODLAND' to advertise a housing development."
    },
    {
      question: "Where is the Kremlin located?",
      options: ["Saint Petersburg", "Kiev", "Moscow", "Warsaw"],
      correct: 2,
      funFact: "It is a fortified complex in the center of Moscow."
    },
    {
      question: "The Sagrada Família is a famous church in:",
      options: ["Madrid", "Lisbon", "Barcelona", "Rome"],
      correct: 2,
      funFact: "It has been under construction since 1882 and is still unfinished."
    },
    {
      question: "Which white marble mausoleum was built by Shah Jahan?",
      options: ["Red Fort", "Taj Mahal", "Qutub Minar", "Lotus Temple"],
      correct: 1,
      funFact: "It was built in memory of his favorite wife, Mumtaz Mahal."
    },
    {
      question: "Where is the Alhambra fortress located?",
      options: ["Morocco", "Portugal", "Spain", "Italy"],
      correct: 2,
      funFact: "It is a palace and fortress complex located in Granada, Andalusia."
    },
    {
      question: "The Empire State Building is in:",
      options: ["Chicago", "New York City", "Los Angeles", "Seattle"],
      correct: 1,
      funFact: "It was the world's tallest building for nearly 40 years."
    },
    {
      question: "Where is the Neuschwanstein Castle?",
      options: ["Austria", "Switzerland", "Germany", "France"],
      correct: 2,
      funFact: "This castle inspired the Sleeping Beauty castle in Disneyland."
    },
    {
      question: "The Atomium is a famous landmark in:",
      options: ["Paris", "Brussels", "Berlin", "London"],
      correct: 1,
      funFact: "It was built for the 1958 Brussels World's Fair (Expo 58)."
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
      funFact: "The Newton is named after Sir Isaac Newton."
    },
    {
      question: "What is the speed of light approx?",
      options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "Sound speed"],
      correct: 0,
      funFact: "Light from the sun takes about 8 minutes to reach Earth."
    },
    {
      question: "Which particle has a negative charge?",
      options: ["Proton", "Neutron", "Electron", "Photon"],
      correct: 2,
      funFact: "Electrons orbit the nucleus of an atom."
    },
    {
      question: "What is the formula for force?",
      options: ["F = mv", "F = ma", "E = mc²", "F = m/a"],
      correct: 1,
      funFact: "This is Newton's Second Law of Motion."
    },
    {
      question: "Energy due to motion is called:",
      options: ["Potential Energy", "Kinetic Energy", "Thermal Energy", "Chemical Energy"],
      correct: 1,
      funFact: "The faster an object moves, the more kinetic energy it has."
    },
    {
      question: "What is the pull of gravity on Earth?",
      options: ["9.8 m/s²", "5.5 m/s²", "1.6 m/s²", "12 m/s²"],
      correct: 0,
      funFact: "Gravity on the Moon is about 1/6th of that on Earth."
    },
    {
      question: "Which state of matter has no fixed shape or volume?",
      options: ["Solid", "Liquid", "Gas", "Crystal"],
      correct: 2,
      funFact: "Gases expand to fill whatever container they are in."
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Newton", "Einstein", "Tesla", "Galileo"],
      correct: 1,
      funFact: "Einstein won the Nobel Prize for the photoelectric effect, not relativity."
    },
    {
      question: "Sound cannot travel through:",
      options: ["Water", "Air", "Steel", "A vacuum"],
      correct: 3,
      funFact: "Space is silent because there is no air to carry sound waves."
    },
    {
      question: "What is the unit of power?",
      options: ["Joule", "Volt", "Watt", "Ampere"],
      correct: 2,
      funFact: "One horsepower is approximately equal to 746 Watts."
    },
    {
      question: "Which color has the longest wavelength?",
      options: ["Blue", "Violet", "Green", "Red"],
      correct: 3,
      funFact: "Red light is scattered the least by air molecules, which is why sunsets are red."
    },
    {
      question: "What measures electric current?",
      options: ["Voltmeter", "Ammeter", "Barometer", "Thermometer"],
      correct: 1,
      funFact: "Current is measured in Amperes (Amps)."
    },
    {
      question: "What is the boiling point of water at sea level?",
      options: ["90°C", "100°C", "110°C", "212°C"],
      correct: 1,
      funFact: "At higher altitudes, water boils at a lower temperature due to lower pressure."
    },
    {
      question: "Which law states 'For every action, there is an equal and opposite reaction'?",
      options: ["1st Law", "2nd Law", "3rd Law", "Law of Gravity"],
      correct: 2,
      funFact: "This principle is what allows rockets to launch into space."
    },
    {
      question: "What is the center of an atom called?",
      options: ["Electron", "Shell", "Nucleus", "Proton"],
      correct: 2,
      funFact: "The nucleus contains almost all of the atom's mass."
    },
    {
      question: "Which planet has the strongest gravity?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correct: 2,
      funFact: "Jupiter is so massive that its gravity is 2.4 times stronger than Earth's."
    },
    {
      question: "Friction is a force that acts in which direction?",
      options: ["Same as motion", "Opposite to motion", "Perpendicular", "Downwards"],
      correct: 1,
      funFact: "Without friction, you wouldn't be able to walk without slipping."
    },
    {
      question: "What is the energy of position called?",
      options: ["Kinetic", "Potential", "Thermal", "Solar"],
      correct: 1,
      funFact: "A raised object has gravitational potential energy."
    },
    {
      question: "Which material is a good conductor of electricity?",
      options: ["Rubber", "Wood", "Copper", "Glass"],
      correct: 2,
      funFact: "Silver is actually the best conductor, but copper is cheaper and widely used."
    },
    {
      question: "Density is defined as:",
      options: ["Mass x Volume", "Mass / Volume", "Volume / Mass", "Weight / Area"],
      correct: 1,
      funFact: "Oil floats on water because it has a lower density."
    }
  ],

  // --------------------------------------------------------
  // ID 10: Entertainment | Movies
  // --------------------------------------------------------
  10: [
    {
      question: "Which movie features the character 'Jack Sparrow'?",
      options: ["Titanic", "Pirates of the Caribbean", "Lord of the Rings", "Avatar"],
      correct: 1,
      funFact: "Johnny Depp famously modeled the character after Keith Richards."
    },
    {
      question: "Who directed 'Jurassic Park'?",
      options: ["James Cameron", "George Lucas", "Steven Spielberg", "Christopher Nolan"],
      correct: 2,
      funFact: "The dinosaur sounds were made from a mix of animal noises, including tortoises."
    },
    {
      question: "What is the highest-grossing movie of all time (unadjusted)?",
      options: ["Avengers: Endgame", "Avatar", "Titanic", "Star Wars"],
      correct: 1,
      funFact: "Avatar reclaimed the top spot after a re-release in China."
    },
    {
      question: "Which movie is set in the fictional land of Wakanda?",
      options: ["Iron Man", "Black Panther", "Thor", "Captain America"],
      correct: 1,
      funFact: "Wakanda is a technologically advanced nation in the Marvel universe."
    },
    {
      question: "Who played the Joker in 'The Dark Knight'?",
      options: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"],
      correct: 2,
      funFact: "Heath Ledger won a posthumous Oscar for this role."
    },
    {
      question: "Which movie features a lion cub named Simba?",
      options: ["Tarzan", "Madagascar", "The Lion King", "Jungle Book"],
      correct: 2,
      funFact: "The story is influenced by Shakespeare's Hamlet."
    },
    {
      question: "What is the name of the toy cowboy in 'Toy Story'?",
      options: ["Buzz", "Woody", "Jessie", "Andy"],
      correct: 1,
      funFact: "Woody was originally going to be a ventriloquist's dummy."
    },
    {
      question: "Which film won the first Best Animated Feature Oscar?",
      options: ["Toy Story", "Shrek", "Finding Nemo", "Monsters, Inc."],
      correct: 1,
      funFact: "Shrek won the award in 2002, the year the category was introduced."
    },
    {
      question: "Who played Iron Man in the MCU?",
      options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
      correct: 2,
      funFact: "RDJ improvised the famous line 'I am Iron Man'."
    },
    {
      question: "In 'The Matrix', which pill does Neo take?",
      options: ["Blue", "Red", "Green", "Yellow"],
      correct: 1,
      funFact: "The red pill represents truth; the blue pill represents blissful ignorance."
    },
    {
      question: "Which movie features the quote 'May the Force be with you'?",
      options: ["Star Trek", "Star Wars", "Galaxy Quest", "Guardians of the Galaxy"],
      correct: 1,
      funFact: "The phrase is often misattributed to Obi-Wan, but Han Solo says it too."
    },
    {
      question: "Who directed 'Inception'?",
      options: ["Quentin Tarantino", "Martin Scorsese", "Christopher Nolan", "Ridley Scott"],
      correct: 2,
      funFact: "The film explores the concept of dream espionage."
    },
    {
      question: "Which movie is about a sinking ship?",
      options: ["Poseidon", "Titanic", "Life of Pi", "Pearl Harbor"],
      correct: 1,
      funFact: "James Cameron drew the sketch of Rose wearing the necklace."
    },
    {
      question: "What is the name of the hobbit who carries the ring?",
      options: ["Samwise", "Frodo", "Merry", "Pippin"],
      correct: 1,
      funFact: "Elijah Wood was only 18 when filming began."
    },
    {
      question: "Which actor played Wolverine?",
      options: ["Hugh Jackman", "Ryan Reynolds", "Ben Affleck", "Henry Cavill"],
      correct: 0,
      funFact: "Hugh Jackman holds the record for the longest career as a live-action Marvel superhero."
    },
    {
      question: "What is the name of the ogre in 'Shrek'?",
      options: ["Donkey", "Fiona", "Shrek", "Farquaad"],
      correct: 2,
      funFact: "Mike Myers recorded Shrek's voice in a Scottish accent."
    },
    {
      question: "Which movie features a shark terrorizing a beach?",
      options: ["The Meg", "Jaws", "Deep Blue Sea", "Sharknado"],
      correct: 1,
      funFact: "The mechanical shark was named 'Bruce' after Spielberg's lawyer."
    },
    {
      question: "Who is the villain in 'Avengers: Infinity War'?",
      options: ["Loki", "Ultron", "Thanos", "Red Skull"],
      correct: 2,
      funFact: "Thanos's snap is referred to as 'The Blip' in the MCU."
    },
    {
      question: "Which movie features blue aliens called Na'vi?",
      options: ["E.T.", "Alien", "Avatar", "Arrival"],
      correct: 2,
      funFact: "James Cameron waited years for technology to catch up to his vision for Avatar."
    },
    {
      question: "Which animation studio produced 'Finding Nemo'?",
      options: ["DreamWorks", "Disney", "Pixar", "Illumination"],
      correct: 2,
      funFact: "Pixar animators studied fish in an aquarium to get the movement right."
    }
  ],

  // --------------------------------------------------------
  // ID 11: History | Ancient Civilizations
  // --------------------------------------------------------
  11: [
    {
      question: "Which civilization built the Pyramids?",
      options: ["Roman", "Greek", "Egyptian", "Mayan"],
      correct: 2,
      funFact: "The Great Pyramid of Giza is the only surviving wonder of the ancient world."
    },
    {
      question: "Who was the first Emperor of Rome?",
      options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
      correct: 1,
      funFact: "Augustus was originally named Octavian."
    },
    {
      question: "Which civilization invented paper?",
      options: ["Egyptians", "Greeks", "Chinese", "Persians"],
      correct: 2,
      funFact: "Paper was invented during the Han Dynasty."
    },
    {
      question: "Which river was vital to Ancient Egypt?",
      options: ["Amazon", "Nile", "Tigris", "Euphrates"],
      correct: 1,
      funFact: "The Nile floods provided fertile soil for farming."
    },
    {
      question: "Where were the first Olympic Games held?",
      options: ["Rome", "Athens", "Olympia", "Sparta"],
      correct: 2,
      funFact: "The ancient games were held in honor of Zeus."
    },
    {
      question: "Which civilization is known for its calendar ending in 2012?",
      options: ["Aztec", "Inca", "Maya", "Olmec"],
      correct: 2,
      funFact: "The Maya calendar didn't predict the end of the world, just a new cycle."
    },
    {
      question: "Who conquered the Persian Empire?",
      options: ["Julius Caesar", "Alexander the Great", "Genghis Khan", "Napoleon"],
      correct: 1,
      funFact: "Alexander was tutored by Aristotle."
    },
    {
      question: "The Parthenon is located in which city?",
      options: ["Rome", "Athens", "Cairo", "Istanbul"],
      correct: 1,
      funFact: "It was a temple dedicated to the goddess Athena."
    },
    {
      question: "Which civilization invented the wheel?",
      options: ["Sumerians (Mesopotamia)", "Egyptians", "Greeks", "Romans"],
      correct: 0,
      funFact: "The wheel was first used for pottery, not transport."
    },
    {
      question: "Who was the famous queen of Ancient Egypt?",
      options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Isis"],
      correct: 1,
      funFact: "Cleopatra was actually of Greek descent."
    },
    {
      question: "The Colosseum is a landmark of which civilization?",
      options: ["Greek", "Roman", "Ottoman", "Persian"],
      correct: 1,
      funFact: "It was used for gladiatorial contests and public spectacles."
    },
    {
      question: "Which civilization built Machu Picchu?",
      options: ["Aztec", "Maya", "Inca", "Toltec"],
      correct: 2,
      funFact: "Machu Picchu is located high in the Andes Mountains."
    },
    {
      question: "What form of writing did Egyptians use?",
      options: ["Cuneiform", "Hieroglyphics", "Latin", "Sanskrit"],
      correct: 1,
      funFact: "Hieroglyphs were deciphered using the Rosetta Stone."
    },
    {
      question: "The Trojan War was fought between the Greeks and:",
      options: ["Romans", "Persians", "Trojans", "Spartans"],
      correct: 2,
      funFact: "The war is famous for the story of the wooden Trojan Horse."
    },
    {
      question: "Which philosopher was forced to drink poison?",
      options: ["Plato", "Aristotle", "Socrates", "Pythagoras"],
      correct: 2,
      funFact: "Socrates was sentenced to death for 'corrupting the youth'."
    },
    {
      question: "Hammurabi is famous for his code of:",
      options: ["Laws", "War", "Conduct", "Trade"],
      correct: 0,
      funFact: "The Code of Hammurabi is one of the oldest deciphered writings of significant length."
    },
    {
      question: "Which civilization used chocolate as currency?",
      options: ["Egyptians", "Aztecs", "Romans", "Chinese"],
      correct: 1,
      funFact: "Cacao beans were considered valuable and sacred."
    },
    {
      question: "Where is the Indus Valley Civilization located?",
      options: ["Modern India/Pakistan", "Egypt", "China", "Iraq"],
      correct: 0,
      funFact: "They had advanced urban planning with drainage systems."
    },
    {
      question: "Who was the god of the sea in Greek mythology?",
      options: ["Zeus", "Hades", "Poseidon", "Apollo"],
      correct: 2,
      funFact: "His Roman equivalent is Neptune."
    },
    {
      question: "The Terracotta Army was built to protect which emperor?",
      options: ["Genghis Khan", "Qin Shi Huang", "Kublai Khan", "Sun Tzu"],
      correct: 1,
      funFact: "There are over 8,000 soldiers, and each has a unique face."
    }
  ],

  // --------------------------------------------------------
  // ID 12: Sports | Basketball
  // --------------------------------------------------------
  12: [
    {
      question: "How many players are on a basketball court per team?",
      options: ["4", "5", "6", "7"],
      correct: 1,
      funFact: "A team usually has 12-15 players on the roster."
    },
    {
      question: "Who is the NBA all-time leading scorer?",
      options: ["Michael Jordan", "Kobe Bryant", "LeBron James", "Kareem Abdul-Jabbar"],
      correct: 2,
      funFact: "LeBron James broke Kareem's long-standing record in 2023."
    },
    {
      question: "What is a shot made outside the arc worth?",
      options: ["1 point", "2 points", "3 points", "4 points"],
      correct: 2,
      funFact: "The 3-point line was introduced to the NBA in 1979."
    },
    {
      question: "Which team did Michael Jordan play for mainly?",
      options: ["Lakers", "Celtics", "Bulls", "Warriors"],
      correct: 2,
      funFact: "Jordan won 6 championships with the Chicago Bulls."
    },
    {
      question: "What is the height of a standard basketball hoop?",
      options: ["9 feet", "10 feet", "11 feet", "12 feet"],
      correct: 1,
      funFact: "This height was decided by James Naismith because the gym railing was 10 feet high."
    },
    {
      question: "Which team is based in Los Angeles?",
      options: ["Knicks", "Heat", "Lakers", "Bulls"],
      correct: 2,
      funFact: "The Lakers share their arena with the Clippers."
    },
    {
      question: "What does NBA stand for?",
      options: ["National Basketball Association", "National Ball Alliance", "New Basketball Association", "North Basketball Area"],
      correct: 0,
      funFact: "The NBA was founded in 1946."
    },
    {
      question: "Who is known as 'King James'?",
      options: ["James Harden", "LeBron James", "Kevin Durant", "Stephen Curry"],
      correct: 1,
      funFact: "LeBron was drafted straight out of high school."
    },
    {
      question: "How many quarters are in an NBA game?",
      options: ["2", "3", "4", "5"],
      correct: 2,
      funFact: "Each quarter is 12 minutes long in the NBA."
    },
    {
      question: "What happens if a player gets 6 fouls?",
      options: ["Ejected from game", "Free throw", "Suspended", "Warning"],
      correct: 0,
      funFact: "This is called 'fouling out'."
    },
    {
      question: "Who invented basketball?",
      options: ["James Naismith", "Abner Doubleday", "Walter Camp", "Alexander Cartwright"],
      correct: 0,
      funFact: "He used peach baskets as the first hoops."
    },
    {
      question: "Which player famously died in a helicopter crash?",
      options: ["Shaq", "Kobe Bryant", "Magic Johnson", "Wilt Chamberlain"],
      correct: 1,
      funFact: "Kobe spent his entire 20-year career with the Lakers."
    },
    {
      question: "What is a 'double-double'?",
      options: ["20 points", "Double digits in 2 stats", "2 fouls", "2 overtime periods"],
      correct: 1,
      funFact: "Example: 10 points and 10 rebounds."
    },
    {
      question: "Which team has the most NBA championships (tied)?",
      options: ["Bulls & Heat", "Lakers & Celtics", "Warriors & Spurs", "Knicks & Nets"],
      correct: 1,
      funFact: "Both the Celtics and Lakers have 17 championships each."
    },
    {
      question: "Who is known for shooting 3-pointers?",
      options: ["Shaq", "Stephen Curry", "Giannis", "Zion"],
      correct: 1,
      funFact: "Steph Curry changed the way modern basketball is played."
    },
    {
      question: "What is the free throw line distance?",
      options: ["10 feet", "12 feet", "15 feet", "20 feet"],
      correct: 2,
      funFact: "A free throw is worth 1 point."
    },
    {
      question: "Which term refers to passing the ball to a scorer?",
      options: ["Rebound", "Assist", "Steal", "Block"],
      correct: 1,
      funFact: "John Stockton holds the NBA record for most assists."
    },
    {
      question: "What is it called when you take steps without dribbling?",
      options: ["Foul", "Traveling", "Double Dribble", "Goaltending"],
      correct: 1,
      funFact: "Traveling results in a turnover."
    },
    {
      question: "The 'Dream Team' played in which Olympics?",
      options: ["1988", "1992", "1996", "2000"],
      correct: 1,
      funFact: "It was the first US team to feature active NBA players."
    },
    {
      question: "What color is a standard basketball?",
      options: ["White", "Orange", "Black", "Yellow"],
      correct: 1,
      funFact: "The orange color makes it more visible to players and spectators."
    }
  ],
  13: [
  {
    question: "Which of the following is considered a 'low-level' programming language?",
    options: ["Python", "Assembly", "JavaScript", "Ruby"],
    correct: 1,
    funFact: "Assembly language is specific to a particular computer architecture, whereas high-level languages are portable."
  },
  {
    question: "What is the primary purpose of a compiler?",
    options: ["To run the code line by line", "To convert source code into machine code", "To style the user interface", "To manage database connections"],
    correct: 1,
    funFact: "Unlike compilers, interpreters execute code directly, line by line, without creating a separate machine code file."
  },
  {
    question: "In object-oriented programming, what is a 'blueprint' for creating objects called?",
    options: ["Function", "Variable", "Class", "Array"],
    correct: 2,
    funFact: "The concept of a 'Class' allows for inheritance, letting one blueprint base itself on another."
  },
  {
    question: "Which data structure operates on a 'Last-In, First-Out' (LIFO) basis?",
    options: ["Queue", "Stack", "Linked List", "Hash Map"],
    correct: 1,
    funFact: "A stack is like a pile of plates; the last plate you put on top is the first one you take off."
  },
  {
    question: "What does 'API' stand for in software development?",
    options: ["Application Programming Interface", "Automated Process Integration", "Applied Program Intelligence", "Abstract Protocol Instruction"],
    correct: 0,
    funFact: "APIs allow different software systems to communicate with each other without knowing how they are implemented internally."
  },
  {
    question: "Which of these is a widely used version control system?",
    options: ["Docker", "Git", "Kubernetes", "Nginx"],
    correct: 1,
    funFact: "Git was created by Linus Torvalds in 2005 to manage the development of the Linux kernel."
  },
  {
    question: "What is the term for a function that calls itself?",
    options: ["Iteration", "Recursion", "Looping", "Encapsulation"],
    correct: 1,
    funFact: "Recursion must always have a 'base case' to prevent it from calling itself infinitely."
  },
  {
    question: "Which programming paradigm is based on the concept of 'objects' containing data and code?",
    options: ["Procedural", "Functional", "Object-Oriented", "Logic"],
    correct: 2,
    funFact: "Java and C++ are among the most popular languages that use the Object-Oriented paradigm."
  },
  {
    question: "What is 'CSS' primarily used for in web development?",
    options: ["Defining database logic", "Handling server requests", "Describing the presentation of a document", "Performing complex math"],
    correct: 2,
    funFact: "CSS allows developers to separate the content (HTML) from the design (colors, fonts, layout)."
  },
  {
    question: "Which symbol is typically used for the assignment operator in most languages?",
    options: ["==", ":=", "=", "=>"],
    correct: 2,
    funFact: "In many languages, '=' assigns a value, while '==' is used to check if two values are equal."
  }
],
14: [
  {
    question: "Who wrote the 1813 novel 'Pride and Prejudice'?",
    options: ["Charlotte Brontë", "Jane Austen", "Mary Shelley", "George Eliot"],
    correct: 1,
    funFact: "Jane Austen originally titled the manuscript 'First Impressions' before changing it."
  },
  {
    question: "In 'Moby-Dick', who is the narrator of the story?",
    options: ["Captain Ahab", "Starbuck", "Ishmael", "Queequeg"],
    correct: 2,
    funFact: "The book begins with one of the most famous opening lines in literature: 'Call me Ishmael.'"
  },
  {
    question: "Which dystopian novel features 'Big Brother' and 'Thought Police'?",
    options: ["Brave New World", "Fahrenheit 451", "1984", "Animal Farm"],
    correct: 2,
    funFact: "George Orwell wrote '1984' while suffering from tuberculosis on a remote Scottish island."
  },
  {
    question: "Victor Frankenstein is the protagonist of a novel written by whom?",
    options: ["Bram Stoker", "Mary Shelley", "H.G. Wells", "Oscar Wilde"],
    correct: 1,
    funFact: "Mary Shelley wrote 'Frankenstein' when she was just 18 years old during a rainy summer in Switzerland."
  },
  {
    question: "Which novel by F. Scott Fitzgerald explores themes of wealth and the American Dream?",
    options: ["The Great Gatsby", "The Grapes of Wrath", "Of Mice and Men", "The Sun Also Rises"],
    correct: 0,
    funFact: "The Great Gatsby was not a commercial success during Fitzgerald's lifetime and only became popular after his death."
  },
  {
    question: "Who wrote 'The Adventures of Huckleberry Finn'?",
    options: ["Herman Melville", "Mark Twain", "Nathaniel Hawthorne", "Jack London"],
    correct: 1,
    funFact: "Mark Twain's real name was Samuel Langhorne Clemens; 'Mark Twain' is a riverboat term."
  },
  {
    question: "What is the name of the main character in Charlotte Brontë's most famous novel?",
    options: ["Catherine Earnshaw", "Jane Eyre", "Elizabeth Bennet", "Emma Woodhouse"],
    correct: 1,
    funFact: "Charlotte Brontë originally published the novel under the male pseudonym 'Currer Bell'."
  },
  {
    question: "In 'The Catcher in the Rye', what is the name of the protagonist?",
    options: ["Holden Caulfield", "Jay Gatsby", "Atticus Finch", "Tom Sawyer"],
    correct: 0,
    funFact: "The novel has been frequently banned in schools due to its use of profanity and rebellious themes."
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Truman Capote", "John Steinbeck", "William Faulkner"],
    correct: 0,
    funFact: "Harper Lee won the Pulitzer Prize for this novel, which was her only published book for over 50 years."
  },
  {
    question: "Which Russian author wrote 'War and Peace' and 'Anna Karenina'?",
    options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Vladimir Nabokov"],
    correct: 1,
    funFact: "Tolstoy's 'War and Peace' is famous for its length, consisting of over 1,200 pages."
  }
],
15: [
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correct: 1,
    funFact: "The name Japan comes from the Chinese word 'Riben', which literally means 'sun origin'."
  },
  {
    question: "Which of these countries has a flag that is NOT rectangular?",
    options: ["Switzerland", "Belgium", "Nepal", "Vatican City"],
    correct: 2,
    funFact: "Nepal's flag is the only national flag in the world that is not a quadrilateral; it is made of two stacked triangles."
  },
  {
    question: "The flag of Canada features which leaf as its central emblem?",
    options: ["Oak", "Maple", "Birch", "Pine"],
    correct: 1,
    funFact: "The 11-pointed maple leaf on the flag does not represent any specific number of provinces; it was chosen for visual clarity."
  },
  {
    question: "Which country has the most stars on its national flag?",
    options: ["Brazil", "China", "United States", "European Union"],
    correct: 2,
    funFact: "The US flag has 50 stars, while the Brazilian flag is second with 27 stars representing its states."
  },
  {
    question: "Which country is both a continent and a country?",
    options: ["Greenland", "Australia", "Iceland", "Madagascar"],
    correct: 1,
    funFact: "Australia is the world's smallest continent and the largest country without land borders."
  },
  {
    question: "What colors are found on the national flag of Germany?",
    options: ["Blue, White, Red", "Black, Red, Gold", "Green, White, Red", "Yellow, Blue, Red"],
    correct: 1,
    funFact: "The colors are associated with republican democracy and were used by student volunteers during the Napoleonic Wars."
  },
  {
    question: "Which country is the smallest in the world by land area?",
    options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    correct: 2,
    funFact: "Vatican City is an enclave within the city of Rome, Italy, and covers only about 100 acres."
  },
  {
    question: "The 'Union Jack' is the nickname for the flag of which country?",
    options: ["United States", "Australia", "United Kingdom", "New Zealand"],
    correct: 2,
    funFact: "The flag combines the crosses of three patron saints: St. George, St. Andrew, and St. Patrick."
  },
  {
    question: "Which country has a giant red circle in the center of its flag representing the sun?",
    options: ["Bangladesh", "Palau", "Japan", "Greenland"],
    correct: 2,
    funFact: "The Japanese flag is officially called 'Nisshōki', which means 'sun-mark flag'."
  },
  {
    question: "Which African country's flag features a black star and has the same colors as the Ethiopian flag?",
    options: ["Nigeria", "Ghana", "Kenya", "South Africa"],
    correct: 1,
    funFact: "Ghana was the first African nation to use the Pan-African colors of red, yellow, and green."
  }
],
// --------------------------------------------------------
  // ID 17: Science | Chemistry
  // --------------------------------------------------------
  17: [
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      correct: 0,
      funFact: "Water covers about 71% of the Earth's surface."
    },
    {
      question: "What is the symbol for Gold?",
      options: ["Au", "Ag", "Fe", "Go"],
      correct: 0,
      funFact: "Au comes from the Latin word 'Aurum'."
    },
    {
      question: "What is the atomic number of Hydrogen?",
      options: ["1", "2", "8", "12"],
      correct: 0,
      funFact: "Hydrogen is the most abundant element in the universe."
    },
    {
      question: "Which gas do plants absorb?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      correct: 1,
      funFact: "Plants use CO2 for photosynthesis."
    },
    {
      question: "What is the pH of pure water?",
      options: ["0", "7", "14", "10"],
      correct: 1,
      funFact: "7 is considered neutral on the pH scale."
    },
    {
      question: "Which element is O?",
      options: ["Osmium", "Oxygen", "Oganesson", "Oxide"],
      correct: 1,
      funFact: "Oxygen makes up about 21% of Earth's atmosphere."
    },
    {
      question: "What is NaCl commonly known as?",
      options: ["Sugar", "Salt", "Pepper", "Vinegar"],
      correct: 1,
      funFact: "Sodium Chloride is table salt."
    },
    {
      question: "Which particle has a positive charge?",
      options: ["Electron", "Proton", "Neutron", "Atom"],
      correct: 1,
      funFact: "Protons are found in the nucleus of the atom."
    },
    {
      question: "What is the lightest element?",
      options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
      correct: 1,
      funFact: "Hydrogen gas is lighter than air."
    },
    {
      question: "Which element is liquid at room temperature?",
      options: ["Iron", "Mercury", "Gold", "Lead"],
      correct: 1,
      funFact: "Mercury is the only metal that is liquid at room temperature."
    },
    {
      question: "What is the center of an atom?",
      options: ["Shell", "Nucleus", "Orbit", "Core"],
      correct: 1,
      funFact: "The nucleus contains protons and neutrons."
    },
    {
      question: "What gas is used in balloons to make them float?",
      options: ["Oxygen", "Helium", "Hydrogen", "Nitrogen"],
      correct: 1,
      funFact: "Helium is lighter than air."
    },
    {
      question: "Rust is the result of iron reacting with:",
      options: ["Water", "Oxygen", "Nitrogen", "Carbon"],
      correct: 1,
      funFact: "Rust is chemically known as Iron Oxide."
    },
    {
      question: "What is the hardest natural substance?",
      options: ["Gold", "Iron", "Diamond", "Granite"],
      correct: 2,
      funFact: "Diamond is a form of pure carbon."
    },
    {
      question: "Which acid is found in lemons?",
      options: ["Sulfuric", "Citric", "Hydrochloric", "Acetic"],
      correct: 1,
      funFact: "Citric acid gives lemons their sour taste."
    },
    {
      question: "What is the symbol for Iron?",
      options: ["Ir", "Fe", "In", "I"],
      correct: 1,
      funFact: "Fe comes from the Latin word 'Ferrum'."
    },
    {
      question: "The Periodic Table lists:",
      options: ["Countries", "Elements", "Animals", "Planets"],
      correct: 1,
      funFact: "Dmitri Mendeleev created the first periodic table."
    },
    {
      question: "What is dry ice?",
      options: ["Frozen Water", "Solid Carbon Dioxide", "Liquid Nitrogen", "Hard Ice"],
      correct: 1,
      funFact: "Dry ice sublimates directly from solid to gas."
    },
    {
      question: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correct: 2,
      funFact: "Nitrogen makes up about 78% of the air we breathe."
    },
    {
      question: "What is C on the periodic table?",
      options: ["Calcium", "Carbon", "Chlorine", "Copper"],
      correct: 1,
      funFact: "Carbon is the basis for all known life."
    }
  ],

  // --------------------------------------------------------
  // ID 18: Entertainment | Music
  // --------------------------------------------------------
  18: [
    {
      question: "Who is known as the 'King of Pop'?",
      options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
      correct: 1,
      funFact: "Thriller is the best-selling album of all time."
    },
    {
      question: "Which band sang 'Yellow Submarine'?",
      options: ["The Rolling Stones", "The Beatles", "Queen", "Pink Floyd"],
      correct: 1,
      funFact: "Ringo Starr sang the lead vocals on this track."
    },
    {
      question: "How many strings does a standard guitar have?",
      options: ["4", "5", "6", "7"],
      correct: 2,
      funFact: "Bass guitars typically have 4 strings."
    },
    {
      question: "Who sang 'Rolling in the Deep'?",
      options: ["Taylor Swift", "Adele", "Beyoncé", "Lady Gaga"],
      correct: 1,
      funFact: "Adele wrote the song after a breakup."
    },
    {
      question: "Which instrument has 88 keys?",
      options: ["Organ", "Piano", "Synthesizer", "Accordion"],
      correct: 1,
      funFact: "There are 52 white keys and 36 black keys."
    },
    {
      question: "Who is the lead singer of Queen?",
      options: ["Mick Jagger", "Freddie Mercury", "David Bowie", "Elton John"],
      correct: 1,
      funFact: "Freddie Mercury was born Farrokh Bulsara."
    },
    {
      question: "What genre is Eminem famous for?",
      options: ["Rock", "Country", "Rap/Hip Hop", "Jazz"],
      correct: 2,
      funFact: "Eminem won an Oscar for the song 'Lose Yourself'."
    },
    {
      question: "Which pop star fans are called 'Swifties'?",
      options: ["Katy Perry", "Taylor Swift", "Ariana Grande", "Selena Gomez"],
      correct: 1,
      funFact: "Taylor Swift began her career in country music."
    },
    {
      question: "Who played the violin?",
      options: ["Mozart", "Beethoven", "Bach", "Vivaldi"],
      correct: 3,
      funFact: "Vivaldi composed 'The Four Seasons'."
    },
    {
      question: "What is the name of Beyonce's fandom?",
      options: ["Navy", "Beyhive", "Little Monsters", "Beliebers"],
      correct: 1,
      funFact: "Beyoncé was formerly in the group Destiny's Child."
    },
    {
      question: "Which country is K-Pop from?",
      options: ["China", "Japan", "South Korea", "Thailand"],
      correct: 2,
      funFact: "BTS and Blackpink are global K-Pop stars."
    },
    {
      question: "Who sang 'Bohemian Rhapsody'?",
      options: ["Queen", "The Beatles", "Led Zeppelin", "Aerosmith"],
      correct: 0,
      funFact: "The song has no chorus."
    },
    {
      question: "Which instrument is a percussion instrument?",
      options: ["Violin", "Flute", "Drum", "Trumpet"],
      correct: 2,
      funFact: "Percussion instruments make sound by being hit or shaken."
    },
    {
      question: "Who is the 'Material Girl'?",
      options: ["Madonna", "Cher", "Britney Spears", "Cyndi Lauper"],
      correct: 0,
      funFact: "Madonna is the best-selling female recording artist of all time."
    },
    {
      question: "What does 'DJ' stand for?",
      options: ["Disc Jockey", "Dance Jockey", "Digital Jam", "Drum Jam"],
      correct: 0,
      funFact: "The term originated in radio broadcasting."
    },
    {
      question: "Which band features Angus Young?",
      options: ["Metallica", "AC/DC", "Guns N' Roses", "Nirvana"],
      correct: 1,
      funFact: "He is famous for wearing a schoolboy uniform on stage."
    },
    {
      question: "What is the highest female singing voice?",
      options: ["Alto", "Soprano", "Tenor", "Bass"],
      correct: 1,
      funFact: "Bass is the lowest male voice."
    },
    {
      question: "Who sang 'I Will Always Love You'?",
      options: ["Whitney Houston", "Mariah Carey", "Celine Dion", "Dolly Parton"],
      correct: 0,
      funFact: "Dolly Parton wrote the song, but Whitney made it a massive hit."
    },
    {
      question: "Which festival was famous in 1969?",
      options: ["Coachella", "Woodstock", "Glastonbury", "Lollapalooza"],
      correct: 1,
      funFact: "It was advertised as '3 Days of Peace & Music'."
    },
    {
      question: "Who is a famous Reggae artist?",
      options: ["Bob Dylan", "Bob Marley", "Bob Seger", "Bob Ross"],
      correct: 1,
      funFact: "Marley helped spread Jamaican music to the world."
    }
  ],

  // --------------------------------------------------------
  // ID 19: History | World Wars
  // --------------------------------------------------------
  19: [
    {
      question: "When did World War I begin?",
      options: ["1914", "1918", "1939", "1945"],
      correct: 0,
      funFact: "It was triggered by the assassination of Archduke Franz Ferdinand."
    },
    {
      question: "Who was the leader of Nazi Germany?",
      options: ["Mussolini", "Adolf Hitler", "Stalin", "Churchill"],
      correct: 1,
      funFact: "He wrote 'Mein Kampf' while in prison."
    },
    {
      question: "Which country was NOT an Axis power in WWII?",
      options: ["Germany", "Japan", "Italy", "Soviet Union"],
      correct: 3,
      funFact: "The Soviet Union fought with the Allies after being invaded by Germany."
    },
    {
      question: "What event caused the US to enter WWII?",
      options: ["D-Day", "Pearl Harbor", "Blitzkrieg", "The Holocaust"],
      correct: 1,
      funFact: "Japan attacked Pearl Harbor on December 7, 1941."
    },
    {
      question: "When did World War II end?",
      options: ["1940", "1944", "1945", "1950"],
      correct: 2,
      funFact: "The war ended with the surrender of Japan."
    },
    {
      question: "Which bomb was dropped on Hiroshima?",
      options: ["Fat Man", "Little Boy", "Trinity", "Czar Bomba"],
      correct: 1,
      funFact: "'Fat Man' was dropped on Nagasaki."
    },
    {
      question: "Who was the British Prime Minister during WWII?",
      options: ["Chamberlain", "Churchill", "Thatcher", "Blair"],
      correct: 1,
      funFact: "He famously said 'We shall never surrender'."
    },
    {
      question: "What was the 'Holocaust'?",
      options: ["A battle", "A treaty", "Genocide of Jews", "A weapon"],
      correct: 2,
      funFact: "Six million Jews were murdered by the Nazi regime."
    },
    {
      question: "Which treaty ended WWI?",
      options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of London", "Treaty of Ghent"],
      correct: 1,
      funFact: "It imposed harsh reparations on Germany."
    },
    {
      question: "What was D-Day?",
      options: ["Attack on Pearl Harbor", "Allied invasion of Normandy", "End of the war", "Atomic bombing"],
      correct: 1,
      funFact: "It occurred on June 6, 1944."
    },
    {
      question: "Which country was invaded to start WWII?",
      options: ["France", "Poland", "Belgium", "Russia"],
      correct: 1,
      funFact: "Germany invaded Poland on September 1, 1939."
    },
    {
      question: "Who was the US President during most of WWII?",
      options: ["Truman", "FDR (Roosevelt)", "Eisenhower", "JFK"],
      correct: 1,
      funFact: "He is the only president to serve more than two terms."
    },
    {
      question: "What does 'Blitzkrieg' mean?",
      options: ["Lightning War", "Trench War", "Air War", "Tank War"],
      correct: 0,
      funFact: "It involved fast-moving tanks and aircraft."
    },
    {
      question: "Which side won WWI?",
      options: ["Central Powers", "Axis Powers", "Allied Powers", "Neutral Powers"],
      correct: 2,
      funFact: "The Allies included Britain, France, Russia, and later the US."
    },
    {
      question: "The Cold War began after which war?",
      options: ["WWI", "WWII", "Civil War", "Vietnam War"],
      correct: 1,
      funFact: "It was a period of tension between the USA and USSR."
    },
    {
      question: "In WWI, fighting mostly took place in:",
      options: ["Trenches", "Cities", "Castles", "Deserts"],
      correct: 0,
      funFact: "The Western Front barely moved for years."
    },
    {
      question: "What was the Manhattan Project?",
      options: ["Building skyscrapers", "Developing the atomic bomb", "Spy ring", "Rocket science"],
      correct: 1,
      funFact: "Robert Oppenheimer was the lead scientist."
    },
    {
      question: "Which country surrendered last in WWII?",
      options: ["Germany", "Italy", "Japan", "Russia"],
      correct: 2,
      funFact: "Japan surrendered in August 1945."
    },
    {
      question: "Who was Anne Frank?",
      options: ["A nurse", "A soldier", "A diarist", "A spy"],
      correct: 2,
      funFact: "Her diary documents her life in hiding during the Nazi occupation."
    },
    {
      question: "What symbol did the Nazis use?",
      options: ["Cross", "Swastika", "Star", "Eagle"],
      correct: 1,
      funFact: "It was originally an ancient symbol of peace before the Nazis adopted it."
    }
  ],

  // --------------------------------------------------------
  // ID 20: Sports | Tennis
  // --------------------------------------------------------
  20: [
    {
      question: "Which tournament is played on grass?",
      options: ["US Open", "French Open", "Wimbledon", "Australian Open"],
      correct: 2,
      funFact: "Wimbledon is the oldest tennis tournament in the world."
    },
    {
      question: "What is a score of zero called in tennis?",
      options: ["Zero", "Nil", "Love", "Duck"],
      correct: 2,
      funFact: "The term 'love' may come from the French 'l'oeuf' meaning egg (zero shape)."
    },
    {
      question: "How many Grand Slam tournaments are there?",
      options: ["3", "4", "5", "6"],
      correct: 1,
      funFact: "They are the Australian Open, French Open, Wimbledon, and US Open."
    },
    {
      question: "Who has won the most men's Grand Slams (as of 2023)?",
      options: ["Federer", "Nadal", "Djokovic", "Murray"],
      correct: 2,
      funFact: "Novak Djokovic holds the record for most major titles."
    },
    {
      question: "Which court surface is used at the French Open?",
      options: ["Grass", "Hard", "Clay", "Carpet"],
      correct: 2,
      funFact: "Rafael Nadal is known as the 'King of Clay'."
    },
    {
      question: "What is 'Deuce'?",
      options: ["40-40 score", "Game point", "Match point", "Tie-break"],
      correct: 0,
      funFact: "A player must win two consecutive points from deuce to win the game."
    },
    {
      question: "Who is a famous female tennis player?",
      options: ["Serena Williams", "Megan Rapinoe", "Ronda Rousey", "Simone Biles"],
      correct: 0,
      funFact: "Serena has won 23 Grand Slam singles titles."
    },
    {
      question: "What is an 'Ace'?",
      options: ["A good serve untouched by opponent", "A volley", "A smash", "A fault"],
      correct: 0,
      funFact: "Top players can serve at speeds over 140 mph."
    },
    {
      question: "What color are tennis balls usually?",
      options: ["White", "Yellow", "Green", "Orange"],
      correct: 1,
      funFact: "They used to be white or black until yellow was introduced for TV visibility."
    },
    {
      question: "How many sets do men play in Grand Slams?",
      options: ["Best of 3", "Best of 5", "1 set", "Best of 7"],
      correct: 1,
      funFact: "Women play best of 3 sets in Grand Slams."
    },
    {
      question: "What is a 'Double Fault'?",
      options: ["Missing two shots", "Missing two serves", "Hitting net twice", "Dropping racket"],
      correct: 1,
      funFact: "A double fault results in a point for the opponent."
    },
    {
      question: "Which country hosts the US Open?",
      options: ["UK", "USA", "France", "Australia"],
      correct: 1,
      funFact: "It is played in New York City."
    },
    {
      question: "What do you use to hit the ball?",
      options: ["Bat", "Club", "Racket", "Paddle"],
      correct: 2,
      funFact: "Modern rackets are made of graphite or carbon fiber."
    },
    {
      question: "Roger Federer is from which country?",
      options: ["Spain", "Serbia", "Switzerland", "Germany"],
      correct: 2,
      funFact: "He spent 310 weeks as the world number 1."
    },
    {
      question: "What is the line at the back of the court called?",
      options: ["Sideline", "Baseline", "Service line", "Net"],
      correct: 1,
      funFact: "Players often rally from the baseline."
    },
    {
      question: "Which sisters are famous tennis legends?",
      options: ["Olsen sisters", "Williams sisters", "Kardashians", "Hadid sisters"],
      correct: 1,
      funFact: "Venus and Serena Williams have faced each other in many finals."
    },
    {
      question: "What divides the court in half?",
      options: ["A wall", "A line", "A net", "A fence"],
      correct: 2,
      funFact: "The net is 3 feet high at the center."
    },
    {
      question: "In scoring, what comes after 15?",
      options: ["20", "30", "40", "45"],
      correct: 1,
      funFact: "The points are 15, 30, 40, Game."
    },
    {
      question: "What is a 'Volley'?",
      options: ["Hitting ball before it bounces", "Serving", "Hitting ball out", "Smashing"],
      correct: 0,
      funFact: "Volleys are usually played near the net."
    },
    {
      question: "Who won the 'Battle of the Sexes' match?",
      options: ["Bobby Riggs", "Billie Jean King", "Martina Navratilova", "John McEnroe"],
      correct: 1,
      funFact: "Billie Jean King defeated Bobby Riggs in 1973."
    }
  ],
  // --------------------------------------------------------
  // ID 21: Math | Geometry
  // --------------------------------------------------------
  21: [
    {
      question: "How many degrees are in a right angle?",
      options: ["45", "90", "180", "360"],
      correct: 1,
      funFact: "A right angle creates a square corner."
    },
    {
      question: "What is the formula for the area of a circle?",
      options: ["2πr", "πr²", "πd", "2πr²"],
      correct: 1,
      funFact: "π (pi) is approximately equal to 3.14159."
    },
    {
      question: "A triangle with all three sides equal is called:",
      options: ["Isosceles", "Scalene", "Equilateral", "Right-angled"],
      correct: 2,
      funFact: "In an equilateral triangle, all angles are also equal (60 degrees)."
    },
    {
      question: "What is the sum of angles in a triangle?",
      options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
      correct: 1,
      funFact: "This rule applies to all triangles in Euclidean geometry."
    },
    {
      question: "How many sides does a pentagon have?",
      options: ["4", "5", "6", "8"],
      correct: 1,
      funFact: "The US Department of Defense headquarters is named The Pentagon."
    },
    {
      question: "What is the perimeter of a square with side length 5?",
      options: ["20", "25", "10", "15"],
      correct: 0,
      funFact: "Perimeter is the total distance around the outside of a shape."
    },
    {
      question: "What do you call a line that touches a circle at only one point?",
      options: ["Chord", "Radius", "Tangent", "Diameter"],
      correct: 2,
      funFact: "A tangent line is perpendicular to the radius at the point of tangency."
    },
    {
      question: "Which shape has no corners?",
      options: ["Square", "Triangle", "Circle", "Rectangle"],
      correct: 2,
      funFact: "A circle is defined as the set of all points equidistant from a center."
    },
    {
      question: "What is the Pythagorean theorem?",
      options: ["a² + b² = c²", "a + b = c", "a² - b² = c²", "2a + 2b = c"],
      correct: 0,
      funFact: "It only applies to right-angled triangles."
    },
    {
      question: "An angle greater than 90 degrees but less than 180 is:",
      options: ["Acute", "Obtuse", "Reflex", "Right"],
      correct: 1,
      funFact: "An acute angle is 'sharp', while obtuse is 'blunt'."
    },
    {
      question: "How many faces does a cube have?",
      options: ["4", "6", "8", "12"],
      correct: 1,
      funFact: "A cube is a regular hexahedron."
    },
    {
      question: "What is the longest side of a right triangle called?",
      options: ["Adjacent", "Opposite", "Hypotenuse", "Vertex"],
      correct: 2,
      funFact: "The hypotenuse is always opposite the right angle."
    },
    {
      question: "Two lines that never meet are called:",
      options: ["Perpendicular", "Parallel", "Intersecting", "Tangent"],
      correct: 1,
      funFact: "Train tracks are a common real-world example of parallel lines."
    },
    {
      question: "What is the volume of a cube with side length 3?",
      options: ["9", "18", "27", "81"],
      correct: 2,
      funFact: "Volume is length × width × height (3 × 3 × 3)."
    },
    {
      question: "A polygon with 8 sides is an:",
      options: ["Hexagon", "Heptagon", "Octagon", "Nonagon"],
      correct: 2,
      funFact: "Stop signs in many countries are octagons."
    },
    {
      question: "What is the diameter of a circle with radius 4?",
      options: ["2", "4", "8", "16"],
      correct: 2,
      funFact: "The diameter is always twice the length of the radius."
    },
    {
      question: "The distance around a circle is called the:",
      options: ["Area", "Diameter", "Circumference", "Radius"],
      correct: 2,
      funFact: "It is the equivalent of the perimeter for polygons."
    },
    {
      question: "How many degrees are in a straight line?",
      options: ["90", "180", "270", "360"],
      correct: 1,
      funFact: "A straight angle creates a flat line."
    },
    {
      question: "Which 3D shape looks like a ball?",
      options: ["Cube", "Cylinder", "Sphere", "Cone"],
      correct: 2,
      funFact: "Planets are roughly spherical due to gravity."
    },
    {
      question: "A quadrilateral with exactly one pair of parallel sides is a:",
      options: ["Square", "Rhombus", "Trapezium (Trapezoid)", "Parallelogram"],
      correct: 2,
      funFact: "In the UK it's called a Trapezium; in the US, a Trapezoid."
    }
  ],

  // --------------------------------------------------------
  // ID 22: Technology | AI & Machine Learning
  // --------------------------------------------------------
  22: [
    {
      question: "What does AI stand for?",
      options: ["Automated Interface", "Artificial Intelligence", "Advanced Input", "Analog Information"],
      correct: 1,
      funFact: "The term 'Artificial Intelligence' was coined in 1956."
    },
    {
      question: "Which company created ChatGPT?",
      options: ["Google", "Microsoft", "OpenAI", "Amazon"],
      correct: 2,
      funFact: "ChatGPT reached 100 million users just two months after launch."
    },
    {
      question: "What is 'Machine Learning'?",
      options: ["Robots learning to walk", "Computers learning from data", "Hardware manufacturing", "Typing code"],
      correct: 1,
      funFact: "It allows computers to improve without being explicitly programmed."
    },
    {
      question: "Who is often called the father of AI?",
      options: ["Alan Turing", "Elon Musk", "Bill Gates", "Steve Jobs"],
      correct: 0,
      funFact: "The Turing Test measures a machine's ability to exhibit intelligent behavior."
    },
    {
      question: "What is a 'Neural Network' modeled after?",
      options: ["The internet", "The human brain", "A spider web", "Computer chips"],
      correct: 1,
      funFact: "Neural networks consist of layers of interconnected nodes or 'neurons'."
    },
    {
      question: "What does NLP stand for in AI?",
      options: ["Natural Language Processing", "New Logic Programming", "Neural Learning Protocol", "Network Language Path"],
      correct: 0,
      funFact: "NLP enables computers to understand, interpret, and generate human language."
    },
    {
      question: "Which AI beat the world champion at the game Go?",
      options: ["Deep Blue", "AlphaGo", "Watson", "Siri"],
      correct: 1,
      funFact: "AlphaGo made a move (Move 37) that was considered highly creative for a machine."
    },
    {
      question: "What is 'Deep Learning'?",
      options: ["Learning while sleeping", "A subset of ML with many layers", "Reading long books", "Low-level coding"],
      correct: 1,
      funFact: "Deep learning powers technologies like facial recognition and self-driving cars."
    },
    {
      question: "Which is a virtual assistant by Amazon?",
      options: ["Siri", "Alexa", "Cortana", "Google Assistant"],
      correct: 1,
      funFact: "Alexa was inspired by the computer voice on Star Trek."
    },
    {
      question: "What is 'Computer Vision'?",
      options: ["Screens for computers", "AI that sees and interprets images", "VR goggles", "Webcam technology"],
      correct: 1,
      funFact: "It allows self-driving cars to identify pedestrians and traffic signs."
    },
    {
      question: "Which of these is a Python library for AI?",
      options: ["React", "TensorFlow", "jQuery", "Laravel"],
      correct: 1,
      funFact: "TensorFlow was developed by the Google Brain team."
    },
    {
      question: "What is a 'chatbot'?",
      options: ["A robot that walks", "Software that simulates conversation", "A computer virus", "A coding error"],
      correct: 1,
      funFact: "ELIZA, created in the 1960s, was one of the first chatbots."
    },
    {
      question: "What is 'Supervised Learning'?",
      options: ["AI with a teacher/labels", "AI learning on its own", "AI watching videos", "AI checking code"],
      correct: 0,
      funFact: "The model learns from labeled training data (input-output pairs)."
    },
    {
      question: "Which robot received citizenship in Saudi Arabia?",
      options: ["Asimo", "Sophia", "Atlas", "Pepper"],
      correct: 1,
      funFact: "Sophia was activated in 2016 and modeled after Audrey Hepburn."
    },
    {
      question: "What is the 'Singularity'?",
      options: ["A black hole", "When AI surpasses human intelligence", "A single line of code", "One computer"],
      correct: 1,
      funFact: "Futurists predict this could lead to rapid, uncontrollable technological growth."
    },
    {
      question: "IBM's Watson is famous for winning which game show?",
      options: ["Wheel of Fortune", "Jeopardy!", "Survivor", "Who Wants to Be a Millionaire"],
      correct: 1,
      funFact: "Watson defeated legendary champions Ken Jennings and Brad Rutter."
    },
    {
      question: "What is a CAPTCHA used for?",
      options: ["To train AI", "To tell humans and bots apart", "To encrypt data", "To speed up internet"],
      correct: 1,
      funFact: "It stands for Completely Automated Public Turing test to tell Computers and Humans Apart."
    },
    {
      question: "Which car company is famous for its Autopilot AI?",
      options: ["Ford", "Tesla", "Toyota", "BMW"],
      correct: 1,
      funFact: "Tesla uses cameras and neural networks to enable autonomous driving features."
    },
    {
      question: "What is 'Bias' in AI?",
      options: ["A software bug", "Unfair prejudice in results", "A battery issue", "Faster processing"],
      correct: 1,
      funFact: "Bias often comes from the data used to train the AI model."
    },
    {
      question: "What does 'IoT' stand for?",
      options: ["Internet of Things", "Input of Text", "Internal of Tech", "Image of Time"],
      correct: 0,
      funFact: "IoT connects everyday devices like fridges and thermostats to the internet."
    }
  ],

  // --------------------------------------------------------
  // ID 23: Literature | Poetry
  // --------------------------------------------------------
  23: [
    {
      question: "Who wrote 'I Wandered Lonely as a Cloud'?",
      options: ["John Keats", "William Wordsworth", "Lord Byron", "Percy Shelley"],
      correct: 1,
      funFact: "The poem is commonly known as 'Daffodils'."
    },
    {
      question: "A poem with 14 lines is called a:",
      options: ["Haiku", "Sonnet", "Limerick", "Epic"],
      correct: 1,
      funFact: "Shakespeare is famous for writing 154 sonnets."
    },
    {
      question: "Who wrote 'The Raven'?",
      options: ["Walt Whitman", "Emily Dickinson", "Edgar Allan Poe", "Robert Frost"],
      correct: 2,
      funFact: "The raven in the poem only says one word: 'Nevermore'."
    },
    {
      question: "How many lines are in a Haiku?",
      options: ["3", "4", "5", "7"],
      correct: 0,
      funFact: "A Haiku follows a 5-7-5 syllable structure."
    },
    {
      question: "Who is the author of 'The Road Not Taken'?",
      options: ["T.S. Eliot", "Robert Frost", "Sylvia Plath", "Maya Angelou"],
      correct: 1,
      funFact: "It is often misinterpreted as a celebration of non-conformity."
    },
    {
      question: "What is a 'stanza'?",
      options: ["A type of rhyme", "A paragraph in a poem", "A poet's pen name", "A metaphor"],
      correct: 1,
      funFact: "Stanza is Italian for 'room' or 'stopping place'."
    },
    {
      question: "Which poet wrote 'Still I Rise'?",
      options: ["Maya Angelou", "Langston Hughes", "Alice Walker", "Toni Morrison"],
      correct: 0,
      funFact: "Maya Angelou recited a poem at Bill Clinton's inauguration."
    },
    {
      question: "What is 'alliteration'?",
      options: ["Comparing two things", "Repetition of initial sounds", "Rhyming at the end", "Exaggeration"],
      correct: 1,
      funFact: "Example: 'She sells seashells by the seashore'."
    },
    {
      question: "Who wrote the 'Iliad' and the 'Odyssey'?",
      options: ["Virgil", "Homer", "Sophocles", "Ovid"],
      correct: 1,
      funFact: "Homer was a blind bard from Ancient Greece."
    },
    {
      question: "A Limerick has how many lines?",
      options: ["3", "4", "5", "6"],
      correct: 2,
      funFact: "Limericks are usually humorous and follow an AABBA rhyme scheme."
    },
    {
      question: "Who is the 'Bard of Avon'?",
      options: ["Chaucer", "Milton", "Shakespeare", "Dickens"],
      correct: 2,
      funFact: "He was born and buried in Stratford-upon-Avon."
    },
    {
      question: "Which poetic device uses 'like' or 'as'?",
      options: ["Metaphor", "Simile", "Personification", "Irony"],
      correct: 1,
      funFact: "Example: 'Brave as a lion'."
    },
    {
      question: "Who wrote 'O Captain! My Captain!'?",
      options: ["Walt Whitman", "Ralph Waldo Emerson", "Henry David Thoreau", "Mark Twain"],
      correct: 0,
      funFact: "The poem is an elegy for President Abraham Lincoln."
    },
    {
      question: "What is 'free verse'?",
      options: ["Poetry that costs nothing", "Poetry without rhyme/meter", "Poetry for freedom", "Ancient poetry"],
      correct: 1,
      funFact: "Walt Whitman is considered the father of free verse."
    },
    {
      question: "Who wrote 'How Do I Love Thee?'",
      options: ["Elizabeth Barrett Browning", "Jane Austen", "Emily Brontë", "Sylvia Plath"],
      correct: 0,
      funFact: "It is Sonnet 43 from 'Sonnets from the Portuguese'."
    },
    {
      question: "The 'Divine Comedy' was written by:",
      options: ["Dante Alighieri", "Machiavelli", "Petrarch", "Boccaccio"],
      correct: 0,
      funFact: "It describes Dante's journey through Hell, Purgatory, and Paradise."
    },
    {
      question: "What is 'hyperbole'?",
      options: ["Understatement", "Exaggeration", "Comparison", "Rhythm"],
      correct: 1,
      funFact: "Example: 'I'm so hungry I could eat a horse'."
    },
    {
      question: "Who wrote 'The Waste Land'?",
      options: ["W.B. Yeats", "T.S. Eliot", "Ezra Pound", "James Joyce"],
      correct: 1,
      funFact: "It is considered one of the most important poems of the 20th century."
    },
    {
      question: "Which poet was a recluse who wore white?",
      options: ["Emily Dickinson", "Virginia Woolf", "Charlotte Brontë", "Louisa May Alcott"],
      correct: 0,
      funFact: "She wrote nearly 1,800 poems but published fewer than a dozen in her life."
    },
    {
      question: "What is an 'epic'?",
      options: ["A short funny poem", "A long narrative poem", "A love poem", "A song"],
      correct: 1,
      funFact: "Epics usually tell stories of heroic deeds and adventures."
    }
  ],

  // --------------------------------------------------------
  // ID 24: Geography | Oceans & Seas
  // --------------------------------------------------------
  24: [
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      correct: 2,
      funFact: "The Pacific Ocean covers more area than all Earth's landmasses combined."
    },
    {
      question: "Which ocean is the saltiest?",
      options: ["Pacific", "Atlantic", "Indian", "Southern"],
      correct: 1,
      funFact: "The high evaporation rate makes the Atlantic slightly saltier."
    },
    {
      question: "The Mariana Trench is located in which ocean?",
      options: ["Atlantic", "Pacific", "Indian", "Arctic"],
      correct: 1,
      funFact: "It contains the deepest point on Earth, the Challenger Deep."
    },
    {
      question: "Which sea borders Israel and Jordan?",
      options: ["Red Sea", "Dead Sea", "Black Sea", "Caspian Sea"],
      correct: 1,
      funFact: "The Dead Sea is so salty that you can float in it effortlessly."
    },
    {
      question: "Which ocean separates America from Europe?",
      options: ["Pacific", "Atlantic", "Indian", "Arctic"],
      correct: 1,
      funFact: "The Titanic sank in the North Atlantic Ocean."
    },
    {
      question: "What is the smallest ocean?",
      options: ["Indian", "Southern", "Arctic", "Atlantic"],
      correct: 2,
      funFact: "The Arctic Ocean is located around the North Pole."
    },
    {
      question: "The Great Barrier Reef is in which ocean?",
      options: ["Pacific", "Atlantic", "Indian", "Southern"],
      correct: 0,
      funFact: "It is the world's largest coral reef system, located off Australia."
    },
    {
      question: "Which sea separates Europe from Africa?",
      options: ["Caribbean Sea", "Mediterranean Sea", "Baltic Sea", "North Sea"],
      correct: 1,
      funFact: "The name Mediterranean comes from Latin 'mediterraneus', meaning 'inland'."
    },
    {
      question: "Which ocean surrounds Antarctica?",
      options: ["Arctic", "Southern (Antarctic)", "Indian", "Pacific"],
      correct: 1,
      funFact: "It was officially recognized as the fifth ocean in 2000."
    },
    {
      question: "The Bermuda Triangle is in which ocean?",
      options: ["Pacific", "Atlantic", "Indian", "Arctic"],
      correct: 1,
      funFact: "It connects Miami, Bermuda, and Puerto Rico."
    },
    {
      question: "Which canal connects the Atlantic and Pacific oceans?",
      options: ["Suez Canal", "Panama Canal", "Kiel Canal", "Erie Canal"],
      correct: 1,
      funFact: "Before the canal, ships had to sail around South America."
    },
    {
      question: "What causes tides in the ocean?",
      options: ["Wind", "Moon's gravity", "Earth's rotation", "Sun's heat"],
      correct: 1,
      funFact: "The Sun also affects tides, but the Moon has a stronger influence."
    },
    {
      question: "Which sea is the largest in the world?",
      options: ["Caribbean Sea", "Mediterranean Sea", "South China Sea", "Bering Sea"],
      correct: 2,
      funFact: "Some sources cite the Philippine Sea or Coral Sea, but South China is widely recognized."
    },
    {
      question: "The Ring of Fire is in which ocean?",
      options: ["Atlantic", "Pacific", "Indian", "Arctic"],
      correct: 1,
      funFact: "It is home to 75% of the world's active volcanoes."
    },
    {
      question: "Which ocean is the warmest?",
      options: ["Pacific", "Atlantic", "Indian", "Arctic"],
      correct: 2,
      funFact: "The Indian Ocean is largely enclosed by land masses which helps retain heat."
    },
    {
      question: "What is a Tsunami?",
      options: ["A hurricane", "A giant wave caused by earthquakes", "A whirlpool", "A thunderstorm"],
      correct: 1,
      funFact: "Tsunami is a Japanese word meaning 'harbor wave'."
    },
    {
      question: "Which country has the longest coastline?",
      options: ["Russia", "Australia", "Canada", "USA"],
      correct: 2,
      funFact: "Canada's coastline is over 202,000 kilometers long."
    },
    {
      question: "The Red Sea separates Africa from:",
      options: ["Europe", "Asia", "Australia", "Antarctica"],
      correct: 1,
      funFact: "It is one of the saltiest bodies of water connected to the ocean."
    },
    {
      question: "Which current warms Western Europe?",
      options: ["Gulf Stream", "Labrador Current", "Humboldt Current", "Canary Current"],
      correct: 0,
      funFact: "It originates in the Gulf of Mexico."
    },
    {
      question: "How much of the Earth's surface is covered by water?",
      options: ["50%", "60%", "71%", "85%"],
      correct: 2,
      funFact: "About 96.5% of all Earth's water is contained within the oceans."
    }
  ],
  // --------------------------------------------------------
  // ID 26: Science | Biology
  // --------------------------------------------------------
  26: [
    {
      question: "What is the basic unit of life?",
      options: ["Atom", "Cell", "Tissue", "Organ"],
      correct: 1,
      funFact: "The word 'cell' comes from the Latin 'cella', meaning 'small room'."
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
      correct: 2,
      funFact: "Mitochondria generate most of the chemical energy needed to power the cell's biochemical reactions. "
    },
    {
      question: "Which molecule carries genetic information?",
      options: ["RNA", "Protein", "DNA", "Lipid"],
      correct: 2,
      funFact: "DNA stands for Deoxyribonucleic Acid."
    },
    {
      question: "What is the process by which plants make food?",
      options: ["Respiration", "Digestion", "Photosynthesis", "Fermentation"],
      correct: 2,
      funFact: "Photosynthesis uses sunlight to convert carbon dioxide and water into glucose and oxygen."
    },
    {
      question: "Which organ pumps blood throughout the body?",
      options: ["Brain", "Lungs", "Heart", "Liver"],
      correct: 2,
      funFact: "The human heart beats about 100,000 times a day."
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Liver", "Brain", "Skin", "Heart"],
      correct: 2,
      funFact: "The skin protects the body from external factors like bacteria, chemicals, and temperature."
    },
    {
      question: "How many bones are in the adult human body?",
      options: ["206", "300", "150", "250"],
      correct: 0,
      funFact: "Babies are born with around 300 bones, but many fuse together as they"
    },
    {
      question: "Which blood cells fight infection?",
      options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
      correct: 1,
      funFact: "White blood cells are a key part of the immune system."
    },
    {
      question: "What do red blood cells carry?",
      options: ["Water", "Nutrients", "Oxygen", "Waste"],
      correct: 2,
      funFact: "Hemoglobin is the protein in red blood cells that carries oxygen."
    },
    {
      question: "Which vitamin is produced when skin is exposed to sunlight?",
      options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
      correct: 2,
      funFact: "Vitamin D is crucial for bone health and immune function."
    },
    {
      question: "What is the control center of the nervous system?",
      options: ["Spinal cord", "Nerves", "Brain", "Heart"],
      correct: 2,
      funFact: "The brain contains approximately 86 billion neurons."
    },
    {
      question: "Which part of the plant absorbs water?",
      options: ["Leaves", "Stem", "Roots", "Flowers"],
      correct: 2,
      funFact: "Roots also anchor the plant into the ground."
    },
    {
      question: "What is the green pigment in plants called?",
      options: ["Melanin", "Chlorophyll", "Hemoglobin", "Carotene"],
      correct: 1,
      funFact: "Chlorophyll is essential for photosynthesis."
    },
    {
      question: "Which animal group lays eggs and has scales?",
      options: ["Mammals", "Birds", "Reptiles", "Amphibians"],
      correct: 2,
      funFact: "Reptiles are cold-blooded animals."
    },
    {
      question: "What is the process of a caterpillar turning into a butterfly?",
      options: ["Evolution", "Metamorphosis", "Growth", "Adaptation"],
      correct: 1,
      funFact: "The pupal stage of a butterfly is called a chrysalis."
    },
    {
      question: "Which organ filters blood?",
      options: ["Heart", "Lungs", "Kidneys", "Stomach"],
      correct: 2,
      funFact: "Kidneys filter about 120-150 quarts of blood daily to produce urine. "
    },
    {
      question: "What is the study of living organisms called?",
      options: ["Geology", "Chemistry", "Biology", "Physics"],
      correct: 2,
      funFact: "Biology encompasses diverse fields like botany, zoology, and ecology."
    },
    {
      question: "What connects muscles to bones?",
      options: ["Ligaments", "Tendons", "Joints", "Cartilage"],
      correct: 1,
      funFact: "The Achilles tendon is the largest tendon in the body."
    },
    {
      question: "Which gas do humans exhale?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correct: 2,
      funFact: "Carbon dioxide is a waste product of cellular respiration."
    },
    {
      question: "What is the structural unit of the nervous system?",
      options: ["Neuron", "Nephron", "Alveoli", "Villi"],
      correct: 0,
      funFact: "Neurons transmit information through electrical and chemical signals."
    }
  ],

  // --------------------------------------------------------
  // ID 27: Entertainment | TV Shows
  // --------------------------------------------------------
  27: [
    {
      question: "Who is the chemistry teacher in 'Breaking Bad'?",
      options: ["Jesse Pinkman", "Walter White", "Saul Goodman", "Gustavo Fring"],
      correct: 1,
      funFact: "Walter White's alias is 'Heisenberg'."
    },
    {
      question: "Which show is set in the fictional continent of Westeros?",
      options: ["The Witcher", "Game of Thrones", "Lord of the Rings", "Vikings"],
      correct: 1,
      funFact: "The show is based on George R.R. Martin's 'A Song of Ice and Fire' series."
    },
    {
      question: "What is the name of the coffee shop in 'Friends'?",
      options: ["Central Perk", "Monk's Cafe", "Luke's Diner", "MacLaren's Pub"],
      correct: 0,
      funFact: "The orange couch in Central Perk was found in the Warner Bros. basement."
    },
    {
      question: "Who lives in a pineapple under the sea?",
      options: ["Patrick Star", "Squidward", "SpongeBob SquarePants", "Mr. Krabs"],
      correct: 2,
      funFact: "SpongeBob was created by marine biologist Stephen Hillenburg."
    },
    {
      question: "In 'The Office' (US), who is the regional manager?",
      options: ["Jim Halpert", "Dwight Schrute", "Michael Scott", "Pam Beesly"],
      correct: 2,
      funFact: "Steve Carell played Michael Scott for seven seasons."
    },
    {
      question: "Which show features a family named the Starks?",
      options: ["Succession", "Game of Thrones", "Modern Family", "Shameless"],
      correct: 1,
      funFact: "The Stark family motto is 'Winter is Coming'."
    },
    {
      question: "What is the longest-running animated sitcom?",
      options: ["Family Guy", "South Park", "The Simpsons", "Bob's Burgers"],
      correct: 2,
      funFact: "The Simpsons has been running since 1989."
    },
    {
      question: "Which show follows the lives of survivors of a plane crash?",
      options: ["Lost", "Manifest", "The 100", "Yellowjackets"],
      correct: 0,
      funFact: "The flight number in 'Lost' was Oceanic 815."
    },
    {
      question: "Who is the main character in 'Grey's Anatomy'?",
      options: ["Cristina Yang", "Meredith Grey", "Derek Shepherd", "Alex Karev"],
      correct: 1,
      funFact: "Ellen Pompeo has played Meredith Grey since the show began in 2005."
    },
    {
      question: "Which show is about a group of nerds and their neighbor Penny?",
      options: ["The IT Crowd", "Silicon Valley", "The Big Bang Theory", "Community"],
      correct: 2,
      funFact: "The show popularized the catchphrase 'Bazinga!'."
    },
    {
      question: "In 'Stranger Things', what is the alternate dimension called?",
      options: ["The Upside Down", "The Nether", "The Void", "The Shadow Realm"],
      correct: 0,
      funFact: "The Upside Down is a dark mirror of our world."
    },
    {
      question: "Who plays the lead role in 'The Witcher' series?",
      options: ["Henry Cavill", "Chris Hemsworth", "Jason Momoa", "Tom Hardy"],
      correct: 0,
      funFact: "Henry Cavill is a huge fan of 'The Witcher' video games and books."
    },
    {
      question: "Which show features a character named 'Eleven'?",
      options: ["Stranger Things", "Doctor Who", "Black Mirror", "Dark"],
      correct: 0,
      funFact: "Millie Bobby Brown plays Eleven, a girl with psychokinetic abilities."
    },
    {
      question: "What is the name of the paper company in 'The Office'?",
      options: ["Dunder Mifflin", "Wernham Hogg", "Sabre", "Michael Scott Paper Co."],
      correct: 0,
      funFact: "Dunder Mifflin is located in Scranton, Pennsylvania."
    },
    {
      question: "Which show is set in the 1960s advertising world?",
      options: ["Mad Men", "Suits", "The Newsroom", "Boardwalk Empire"],
      correct: 0,
      funFact: "Don Draper is the charismatic but troubled protagonist."
    },
    {
      question: "Who is the mother of dragons in 'Game of Thrones'?",
      options: ["Cersei Lannister", "Sansa Stark", "Daenerys Targaryen", "Arya Stark"],
      correct: 2,
      funFact: "She has three dragons: Drogon, Rhaegal, and Viserion."
    },
    {
      question: "Which sitcom features characters named Jerry, George, Elaine, and Kramer?",
      options: ["Friends", "Seinfeld", "Cheers", "Frasier"],
      correct: 1,
      funFact: "Seinfeld is often described as 'a show about nothing'."
    },
    {
      question: "What profession does Sherlock Holmes have in 'Sherlock'?",
      options: ["Consulting Detective", "Police Officer", "Lawyer", "Doctor"],
      correct: 0,
      funFact: "Benedict Cumberbatch plays a modern-day Sherlock Holmes."
    },
    {
      question: "Which show is about a high school chemistry teacher turning to crime?",
      options: ["Ozark", "Breaking Bad", "Better Call Saul", "Narcos"],
      correct: 1,
      funFact: "Breaking Bad is widely considered one of the greatest TV shows of all time."
    },
    {
      question: "Which show features zombies called 'walkers'?",
      options: ["The Walking Dead", "Z Nation", "Fear the Walking Dead", "All of Us Are Dead"],
      correct: 0,
      funFact: "The word 'zombie' is never actually used in the show."
    }
  ],

  // --------------------------------------------------------
  // ID 28: History | Renaissance
  // --------------------------------------------------------
  28: [
    {
      question: "In which country did the Renaissance begin?",
      options: ["France", "England", "Italy", "Spain"],
      correct: 2,
      funFact: "It started in Florence, Italy, in the 14th century."
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
      correct: 2,
      funFact: "The Mona Lisa is famous for her enigmatic smile. "
    },
    {
      question: "Who sculpted David?",
      options: ["Leonardo da Vinci", "Michelangelo", "Botticelli", "Titian"],
      correct: 1,
      funFact: "The statue of David is a masterpiece of Renaissance sculpture. "
    },
    {
      question: "Which family was a major patron of the arts in Florence?",
      options: ["The Borgias", "The Medicis", "The Tudors", "The Habsburgs"],
      correct: 1,
      funFact: "The Medici family produced four Popes and two queens of France."
    },
    {
      question: "Who wrote 'The Prince'?",
      options: ["Dante", "Machiavelli", "Petrarch", "Erasmus"],
      correct: 1,
      funFact: "'Machiavellian' is now a term used to describe cunning and duplicity."
    },
    {
      question: "Who painted the ceiling of the Sistine Chapel?",
      options: ["Raphael", "Leonardo da Vinci", "Michelangelo", "Caravaggio"],
      correct: 2,
      funFact: "He painted it lying on his back on scaffolding. "
    },
    {
      question: "Which invention by Gutenberg revolutionized spreading knowledge?",
      options: ["Telescope", "Compass", "Printing Press", "Gunpowder"],
      correct: 2,
      funFact: "The printing press allowed for mass production of books. "
    },
    {
      question: "Who was a famous English playwright of the Renaissance?",
      options: ["Chaucer", "Milton", "Shakespeare", "Dickens"],
      correct: 2,
      funFact: "Shakespeare wrote 37 plays and 154 sonnets."
    },
    {
      question: "What does the word 'Renaissance' mean?",
      options: ["Rebirth", "Reform", "Revolution", "Review"],
      correct: 0,
      funFact: "It refers to the revival of art and learning from classical Greece and Rome."
    },
    {
      question: "Who proposed that the Earth revolves around the Sun?",
      options: ["Ptolemy", "Aristotle", "Copernicus", "Newton"],
      correct: 2,
      funFact: "This heliocentric model challenged the geocentric view. "
    },
    {
      question: "Which artist is known for 'The Last Supper'?",
      options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Titian"],
      correct: 2,
      funFact: "It is a mural painting in Milan. "
    },
    {
      question: "Who was the 'Renaissance Man' known for inventions and art?",
      options: ["Leonardo da Vinci", "Michelangelo", "Galileo", "Donatello"],
      correct: 0,
      funFact: "He designed flying machines and tanks centuries before they were built. "
    },
    {
      question: "Which explorer sailed to the Americas in 1492?",
      options: ["Magellan", "Vasco da Gama", "Christopher Columbus", "Marco Polo"],
      correct: 2,
      funFact: "He was searching for a westward route to Asia."
    },
    {
      question: "Which city is considered the birthplace of the Renaissance?",
      options: ["Rome", "Venice", "Florence", "Milan"],
      correct: 2,
      funFact: "Florence was a center of trade and finance."
    },
    {
      question: "Who wrote 'Utopia'?",
      options: ["Thomas More", "Erasmus", "Machiavelli", "Luther"],
      correct: 0,
      funFact: "Utopia describes an ideal island society."
    },
    {
      question: "Which scientist improved the telescope and observed moons of Jupiter?",
      options: ["Kepler", "Copernicus", "Galileo", "Brahe"],
      correct: 2,
      funFact: "He discovered the four largest moons of Jupiter, now called Galilean moons. "
    },
    {
      question: "The Protestant Reformation was started by:",
      options: ["Henry VIII", "John Calvin", "Martin Luther", "The Pope"],
      correct: 2,
      funFact: "Luther posted his 95 Theses on a church door in 1517."
    },
    {
      question: "Who painted 'The School of Athens'?",
      options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Botticelli"],
      correct: 2,
      funFact: "The painting features figures representing famous Greek philosophers. "
    },
    {
      question: "Which English king broke away from the Catholic Church?",
      options: ["Henry VII", "Henry VIII", "Edward VI", "James I"],
      correct: 1,
      funFact: "He wanted to annul his marriage to Catherine of Aragon."
    },
    {
      question: "Which female monarch ruled England during its Golden Age?",
      options: ["Mary I", "Elizabeth I", "Victoria", "Anne"],
      correct: 1,
      funFact: "The Elizabethan Era is often considered the height of the English Renaissance."
    }
  ],

  // --------------------------------------------------------
  // ID 29: Sports | Olympics
  // --------------------------------------------------------
  29: [
    {
      question: "How often are the Summer Olympic Games held?",
      options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
      correct: 2,
      funFact: "The ancient Olympics were also held every four years."
    },
    {
      question: "What do the five Olympic rings represent?",
      options: ["Five sports", "Five continents", "Five oceans", "Five founders"],
      correct: 1,
      funFact: "The continents are Africa, Americas, Asia, Europe, and Oceania."
    },
    {
      question: "Where were the first modern Olympics held in 1896?",
      options: ["Paris", "London", "Athens", "Rome"],
      correct: 2,
      funFact: "Athens was chosen to honor the ancient origins of the Games."
    },
    {
      question: "Which metal is the gold medal mostly made of?",
      options: ["Gold", "Silver", "Bronze", "Copper"],
      correct: 1,
      funFact: "Olympic gold medals are mostly silver, plated with gold."
    },
    {
      question: "Which sport has been in every Summer Olympics?",
      options: ["Football", "Tennis", "Athletics", "Golf"],
      correct: 2,
      funFact: "Athletics, swimming, fencing, and gymnastics have been in every modern Games."
    },
    {
      question: "Who has won the most Olympic medals in history?",
      options: ["Usain Bolt", "Carl Lewis", "Michael Phelps", "Mark Spitz"],
      correct: 2,
      funFact: "Michael Phelps has won a total of 28 medals."
    },
    {
      question: "Which city hosted the 2012 Summer Olympics?",
      options: ["Beijing", "London", "Rio de Janeiro", "Tokyo"],
      correct: 1,
      funFact: "London became the first city to host the Olympics three times."
    },
    {
      question: "What is the Olympic motto?",
      options: ["Faster, Higher, Stronger", "Unity in Diversity", "Play to Win", "World Peace"],
      correct: 0,
      funFact: "The Latin motto is 'Citius, Altius, Fortius'."
    },
    {
      question: "Which country always marches first in the opening ceremony?",
      options: ["The host country", "USA", "Greece", "France"],
      correct: 2,
      funFact: "Greece marches first to honor the ancient origins of the Olympics."
    },
    {
      question: "Who is the fastest man in history (100m record)?",
      options: ["Carl Lewis", "Jesse Owens", "Usain Bolt", "Tyson Gay"],
      correct: 2,
      funFact: "Usain Bolt holds the world record of 9.58 seconds."
    },
    {
      question: "Which sport was reintroduced in 2016 after 112 years?",
      options: ["Golf", "Rugby", "Tennis", "Archery"],
      correct: 0,
      funFact: "Rugby Sevens was also introduced in 2016."
    },
    {
      question: "In which year were the Tokyo Olympics held (delayed)?",
      options: ["2019", "2020", "2021", "2022"],
      correct: 2,
      funFact: "They were still branded as Tokyo 2020 despite the delay due to COVID-19."
    },
    {
      question: "What flame is lit during the opening ceremony?",
      options: ["Eternal Flame", "Olympic Torch", "Unity Fire", "Victory Blaze"],
      correct: 1,
      funFact: "The torch relay brings the flame from Olympia, Greece, to the host city. "
    },
    {
      question: "Which country has won the most Summer Olympic medals?",
      options: ["China", "Russia", "USA", "Great Britain"],
      correct: 2,
      funFact: "The USA has won over 2,500 medals in Summer Olympics history."
    },
    {
      question: "Which gymnastics event is performed by women only?",
      options: ["Vault", "Floor Exercise", "Balance Beam", "Parallel Bars"],
      correct: 2,
      funFact: "Men compete on the parallel bars, while women compete on the uneven bars."
    },
    {
      question: "Who is the most decorated female Olympian?",
      options: ["Simone Biles", "Larisa Latynina", "Katie Ledecky", "Allyson Felix"],
      correct: 1,
      funFact: "Latynina, a gymnast, won 18 medals for the Soviet Union."
    },
    {
      question: "Which city hosted the 2008 Summer Olympics?",
      options: ["Sydney", "Athens", "Beijing", "London"],
      correct: 2,
      funFact: "The 'Bird's Nest' stadium was the centerpiece of the Beijing Games. "
    },
    {
      question: "What happens if an athlete tests positive for banned substances?",
      options: ["Warning", "Disqualification", "Fine", "Nothing"],
      correct: 1,
      funFact: "Doping undermines the integrity of fair competition."
    },
    {
      question: "Which new sport debuted at Tokyo 2020?",
      options: ["Skateboarding", "Bowling", "Cricket", "Squash"],
      correct: 0,
      funFact: "Surfing, sport climbing, and karate also debuted."
    },
    {
      question: "The Winter Olympics are held:",
      options: ["Same year as Summer", "2 years apart from Summer", "Every year", "Every 3 years"],
      correct: 1,
      funFact: "They used to be in the same year until 1992."
    }
  ],
  // --------------------------------------------------------
  // ID 30: Math | Statistics
  // --------------------------------------------------------
  30: [
    {
      question: "What is the 'average' of a data set formally called?",
      options: ["Median", "Mode", "Mean", "Range"],
      correct: 2,
      funFact: "The mean is sensitive to extreme values (outliers), while the median is not."
    },
    {
      question: "Which value appears most frequently in a data set?",
      options: ["Mean", "Mode", "Median", "Standard Deviation"],
      correct: 1,
      funFact: "A set of data can have more than one mode (bimodal) or no mode at all."
    },
    {
      question: "What is the middle number in a sorted list of numbers?",
      options: ["Mean", "Mode", "Median", "Range"],
      correct: 2,
      funFact: "If there is an even number of values, the median is the average of the two middle numbers."
    },
    {
      question: "What is the difference between the highest and lowest values?",
      options: ["Range", "Variance", "Mean", "Frequency"],
      correct: 0,
      funFact: "The range gives a quick sense of the spread of the data."
    },
    {
      question: "What is the probability of flipping heads on a fair coin?",
      options: ["25%", "50%", "75%", "100%"],
      correct: 1,
      funFact: "Even if you flip heads 10 times in a row, the probability of the next flip is still 50%."
    },
    {
      question: "Which chart uses slices to show data proportions?",
      options: ["Bar chart", "Line graph", "Pie chart", "Scatter plot"],
      correct: 2,
      funFact: "Pie charts are best used when you have 6 or fewer categories."
    },
    {
      question: "What does a correlation of 0 mean?",
      options: ["Perfect relationship", "Negative relationship", "No relationship", "Strong relationship"],
      correct: 2,
      funFact: "Correlation does not imply causation."
    },
    {
      question: "What is an 'outlier'?",
      options: ["The average value", "A value far from others", "The middle value", "A missing value"],
      correct: 1,
      funFact: "Outliers can skew statistical results significantly."
    },
    {
      question: "What is a 'census'?",
      options: ["A sample survey", "Data from the entire population", "A medical test", "A type of graph"],
      correct: 1,
      funFact: "Most countries conduct a census every 10 years."
    },
    {
      question: "What is the probability of rolling a 7 on a standard 6-sided die?",
      options: ["1/6", "1/2", "0", "1"],
      correct: 2,
      funFact: "A standard die only goes up to 6, so rolling a 7 is impossible."
    },
    {
      question: "Which graph is used to show frequency distribution?",
      options: ["Histogram", "Pie chart", "Venn diagram", "Flowchart"],
      correct: 0,
      funFact: "Histograms look like bar charts but group numbers into ranges."
    },
    {
      question: "What does standard deviation measure?",
      options: ["The center", "The total sum", "The spread/dispersion", "The max value"],
      correct: 2,
      funFact: "A low standard deviation means data points are close to the mean."
    },
    {
      question: "In probability, what is an 'impossible event'?",
      options: ["Probability = 1", "Probability = 0.5", "Probability = 0", "Probability = -1"],
      correct: 2,
      funFact: "Probabilities always range between 0 (impossible) and 1 (certain)."
    },
    {
      question: "What is a 'sample' in statistics?",
      options: ["The whole group", "A subset of the population", "A computer simulation", "An error"],
      correct: 1,
      funFact: "Using a sample saves time and money compared to surveying an entire population."
    },
    {
      question: "Which variable is usually plotted on the X-axis?",
      options: ["Dependent", "Independent", "Random", "Control"],
      correct: 1,
      funFact: "The independent variable is the one you change or control."
    },
    {
      question: "What is the 50th percentile also known as?",
      options: ["Mean", "Mode", "Median", "Max"],
      correct: 2,
      funFact: "Percentiles are often used in standardized test scores."
    },
    {
      question: "Data that describes qualities (e.g., color) is called:",
      options: ["Quantitative", "Qualitative", "Numerical", "Continuous"],
      correct: 1,
      funFact: "Qualitative data is descriptive and conceptual."
    },
    {
      question: "If you roll two dice, what is the most likely sum?",
      options: ["2", "7", "12", "6"],
      correct: 1,
      funFact: "There are 6 different combinations that add up to 7 (1+6, 2+5, 3+4, etc.)."
    },
    {
      question: "What is a 'false positive'?",
      options: ["A correct rejection", "A Type I error", "A correct hit", "A Type II error"],
      correct: 1,
      funFact: "It's like a fire alarm going off when there is no fire."
    },
    {
      question: "Which of these is a measure of central tendency?",
      options: ["Range", "Variance", "Mean", "Standard Deviation"],
      correct: 2,
      funFact: "Mean, Median, and Mode are the three main measures of central tendency."
    }
  ],

  // --------------------------------------------------------
  // ID 31: Technology | Web Development
  // --------------------------------------------------------
  31: [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "HyperTech Main Line", "Home Tool Markup Language", "Hard Text Mode Link"],
      correct: 0,
      funFact: "HTML provides the basic structure of sites."
    },
    {
      question: "Which tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<h>", "<p>"],
      correct: 1,
      funFact: "The 'a' stands for 'anchor'."
    },
    {
      question: "What does CSS do?",
      options: ["Structure content", "Style and layout", "Handle logic", "Store data"],
      correct: 1,
      funFact: "CSS was first proposed in 1994."
    },
    {
      question: "Which status code means 'Not Found'?",
      options: ["200", "500", "404", "301"],
      correct: 2,
      funFact: "Status 200 means 'OK' or success."
    },
    {
      question: "What does the 'S' in HTTPS stand for?",
      options: ["Standard", "Secure", "Simple", "System"],
      correct: 1,
      funFact: "HTTPS encrypts the data sent between the browser and the website."
    },
    {
      question: "Which language makes websites interactive?",
      options: ["HTML", "CSS", "JavaScript", "SQL"],
      correct: 2,
      funFact: "JavaScript was created in just 10 days in 1995."
    },
    {
      question: "What is 'Responsive Design'?",
      options: ["Fast loading", "Voice control", "Adapting to screen size", "High security"],
      correct: 2,
      funFact: "It allows websites to look good on both phones and desktops."
    },
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Mode", "Digital Ordinance Map", "Disk Operating Mode"],
      correct: 0,
      funFact: "The DOM represents the page so programs can change the document structure, style, and content."
    },
    {
      question: "Which of these is a backend language?",
      options: ["HTML", "CSS", "PHP", "XML"],
      correct: 2,
      funFact: "PHP powers a large portion of the web, including WordPress."
    },
    {
      question: "What is a 'cookie' in web terms?",
      options: ["A reward", "A small data file", "A virus", "A password"],
      correct: 1,
      funFact: "Cookies are used to remember user sessions and preferences."
    },
    {
      question: "What does DNS stand for?",
      options: ["Domain Name System", "Digital Network Service", "Data Name Source", "Direct Net Server"],
      correct: 0,
      funFact: "DNS is like the phonebook of the internet, translating names to IP addresses."
    },
    {
      question: "Which tag is used for the largest heading?",
      options: ["<h6>", "<head>", "<h1>", "<header>"],
      correct: 2,
      funFact: "Headings go from h1 (largest) to h6 (smallest)."
    },
    {
      question: "What is 'Bootstrap'?",
      options: ["A CSS framework", "A backend server", "A browser", "A virus"],
      correct: 0,
      funFact: "Bootstrap was originally created by Twitter."
    },
    {
      question: "Where should the <title> tag be placed?",
      options: ["<body>", "<head>", "<footer>", "<div>"],
      correct: 1,
      funFact: "The title appears in the browser tab, not on the page itself."
    },
    {
      question: "What is an IP address?",
      options: ["Internet Protocol", "Internal Program", "Instant Post", "Image Path"],
      correct: 0,
      funFact: "IPv4 addresses ran out, so the world is moving to IPv6."
    },
    {
      question: "Which is a popular JavaScript framework?",
      options: ["Laravel", "Django", "React", "Rails"],
      correct: 2,
      funFact: "React allows developers to build reusable UI components."
    },
    {
      question: "What does URL stand for?",
      options: ["Uniform Resource Locator", "Universal Reference Link", "Under Resource Link", "Uniform Rapid Load"],
      correct: 0,
      funFact: "A URL is the address of a specific resource on the web."
    },
    {
      question: "Which tag inserts an image?",
      options: ["<pic>", "<img>", "<image>", "<src>"],
      correct: 1,
      funFact: "The <img> tag is self-closing and does not have an end tag."
    },
    {
      question: "What is the purpose of 'alt' text in images?",
      options: ["Make it load faster", "Accessibility/Screen readers", "Change color", "Hide the image"],
      correct: 1,
      funFact: "Alt text is also important for SEO."
    },
    {
      question: "What is 'hosting'?",
      options: ["A party", "Designing a logo", "Storing website files on a server", "Writing code"],
      correct: 2,
      funFact: "Without hosting, your website files would just sit on your local computer."
    }
  ],

  // --------------------------------------------------------
  // ID 32: Literature | Shakespeare
  // --------------------------------------------------------
  32: [
    {
      question: "Who are the 'Star-crossed lovers'?",
      options: ["Antony & Cleopatra", "Romeo & Juliet", "Hamlet & Ophelia", "Macbeth & Lady Macbeth"],
      correct: 1,
      funFact: "The play is set in Verona, Italy. "
    },
    {
      question: "Which play features the quote 'To be, or not to be'?",
      options: ["Macbeth", "Othello", "Hamlet", "King Lear"],
      correct: 2,
      funFact: "Hamlet is Shakespeare's longest play."
    },
    {
      question: "What was the name of Shakespeare's theater?",
      options: ["The Rose", "The Globe", "The Crown", "The Swan"],
      correct: 1,
      funFact: "The original Globe Theatre burned down in 1613 during a performance."
    },
    {
      question: "Who is the villain in 'Othello'?",
      options: ["Iago", "Cassio", "Roderigo", "Brabantio"],
      correct: 0,
      funFact: "Iago is considered one of literature's most sinister villains."
    },
    {
      question: "Which play is known as 'The Scottish Play'?",
      options: ["Hamlet", "Macbeth", "The Tempest", "Henry V"],
      correct: 1,
      funFact: "Actors believe it is bad luck to say the name 'Macbeth' inside a theater."
    },
    {
      question: "What is Shakespeare's first name?",
      options: ["William", "Walter", "George", "Thomas"],
      correct: 0,
      funFact: "He was born in Stratford-upon-Avon."
    },
    {
      question: "How many sonnets did Shakespeare write?",
      options: ["100", "154", "200", "50"],
      correct: 1,
      funFact: "His sonnets deal with themes of love, beauty, time, and mortality."
    },
    {
      question: "Which character says 'Et tu, Brute?'",
      options: ["Mark Antony", "Julius Caesar", "Cassius", "Octavius"],
      correct: 1,
      funFact: "It means 'And you, Brutus?' signifying the ultimate betrayal."
    },
    {
      question: "Who is the King of the Fairies in 'A Midsummer Night's Dream'?",
      options: ["Puck", "Oberon", "Bottom", "Theseus"],
      correct: 1,
      funFact: "Titania is the Queen of the Fairies."
    },
    {
      question: "In which play does a character ask for 'A pound of flesh'?",
      options: ["The Merchant of Venice", "Twelfth Night", "As You Like It", "The Tempest"],
      correct: 0,
      funFact: "The character Shylock demands this as payment for a debt."
    },
    {
      question: "What was the name of Shakespeare's wife?",
      options: ["Mary Arden", "Anne Hathaway", "Judith Quiney", "Elizabeth I"],
      correct: 1,
      funFact: "She was 8 years older than Shakespeare."
    },
    {
      question: "Which king has three daughters: Goneril, Regan, and Cordelia?",
      options: ["King John", "King Lear", "King Richard", "King Henry"],
      correct: 1,
      funFact: "King Lear goes mad after misjudging his daughters' love."
    },
    {
      question: "Who kills Macbeth?",
      options: ["Banquo", "Duncan", "Macduff", "Malcolm"],
      correct: 2,
      funFact: "Macduff was 'from his mother's womb untimely ripped' (C-section), fulfilling the prophecy."
    },
    {
      question: "What genre is 'Much Ado About Nothing'?",
      options: ["Tragedy", "Comedy", "History", "Romance"],
      correct: 1,
      funFact: "It features the witty verbal sparring of Beatrice and Benedick."
    },
    {
      question: "Who says 'All the world's a stage'?",
      options: ["Hamlet", "Jaques (As You Like It)", "Romeo", "Prospero"],
      correct: 1,
      funFact: "The speech describes the 'Seven Ages of Man'."
    },
    {
      question: "Which play features a wizard named Prospero?",
      options: ["The Tempest", "Cymbeline", "Pericles", "Winter's Tale"],
      correct: 0,
      funFact: "The Tempest is believed to be the last play Shakespeare wrote alone."
    },
    {
      question: "What family is Juliet from?",
      options: ["Montague", "Capulet", "Benvolio", "Escalus"],
      correct: 1,
      funFact: "Romeo is a Montague, the rival family."
    },
    {
      question: "Who provides comic relief in many tragedies?",
      options: [" The King", "The Fool/Clown", "The Soldier", "The Ghost"],
      correct: 1,
      funFact: "The Fool often speaks the truth to power."
    },
    {
      question: "Which historical figure did Shakespeare NOT write a play about?",
      options: ["Julius Caesar", "Henry V", "Napoleon", "Richard III"],
      correct: 2,
      funFact: "Napoleon lived long after Shakespeare died."
    },
    {
      question: "The phrase 'Green-eyed monster' refers to:",
      options: ["Anger", "Jealousy", "Greed", "Envy"],
      correct: 1,
      funFact: "The phrase was coined by Shakespeare in Othello."
    }
  ],

  // --------------------------------------------------------
  // ID 33: Geography | Mountains
  // --------------------------------------------------------
  33: [
    {
      question: "What is the highest mountain in the world?",
      options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
      correct: 1,
      funFact: "Everest stands at 8,848 meters (29,029 ft) above sea level."
    },
    {
      question: "Which mountain range separates Europe and Asia?",
      options: ["The Alps", "The Rockies", "The Urals", "The Andes"],
      correct: 2,
      funFact: "The Ural Mountains run through western Russia."
    },
    {
      question: "Where is Mount Kilimanjaro located?",
      options: ["Kenya", "Tanzania", "South Africa", "Uganda"],
      correct: 1,
      funFact: "It is the highest mountain in Africa and is a dormant volcano. "
    },
    {
      question: "What is the longest mountain range in the world?",
      options: ["Himalayas", "Andes", "Rockies", "Alps"],
      correct: 1,
      funFact: "The Andes stretch about 7,000 km along the west coast of South America."
    },
    {
      question: "Which is the highest mountain in North America?",
      options: ["Mount Logan", "Denali (Mt. McKinley)", "Mount Rainier", "Mount Whitney"],
      correct: 1,
      funFact: "It is located in Alaska."
    },
    {
      question: "Mount Fuji is an iconic volcano in which country?",
      options: ["China", "Japan", "Vietnam", "Korea"],
      correct: 1,
      funFact: "It last erupted in 1707."
    },
    {
      question: "Which mountain is known as the 'Savage Mountain'?",
      options: ["Everest", "K2", "Annapurna", "Nanga Parbat"],
      correct: 1,
      funFact: "K2 is the second highest mountain but considered harder to climb than Everest."
    },
    {
      question: "The Alps are located in which continent?",
      options: ["Asia", "South America", "Europe", "North America"],
      correct: 2,
      funFact: "They stretch across eight Alpine countries including France and Switzerland."
    },
    {
      question: "What type of mountain is formed by volcanoes?",
      options: ["Fold", "Block", "Volcanic", "Dome"],
      correct: 2,
      funFact: "Mauna Kea in Hawaii is a volcanic mountain."
    },
    {
      question: "Where is Table Mountain located?",
      options: ["Sydney", "Cape Town", "Rio de Janeiro", "Vancouver"],
      correct: 1,
      funFact: "It is famous for its flat top which overlooks Cape Town."
    },
    {
      question: "The Matterhorn is famous for its shape. What shape?",
      options: ["Dome", "Pyramid", "Flat", "Spiral"],
      correct: 1,
      funFact: "It is one of the most recognizable peaks in the Alps. "
    },
    {
      question: "Which mountain range contains Mount Everest?",
      options: ["Andes", "Rockies", "Himalayas", "Karakoram"],
      correct: 2,
      funFact: "Himalaya means 'Abode of Snow' in Sanskrit."
    },
    {
      question: "What is the 'Death Zone' in mountaineering?",
      options: ["Base camp", "Above 8,000 meters", "Glacier crevasses", "Dense forest"],
      correct: 1,
      funFact: "At this altitude, there is not enough oxygen for humans to survive for long."
    },
    {
      question: "Which is the highest mountain in Europe?",
      options: ["Mont Blanc", "Mount Elbrus", "Matterhorn", "Mount Olympus"],
      correct: 1,
      funFact: "Mount Elbrus is in the Caucasus Mountains in Russia."
    },
    {
      question: "What is a 'sherpa'?",
      options: ["A type of rope", "A mountain guide/porter", "A climbing tool", "A snowy peak"],
      correct: 1,
      funFact: "Sherpas are an ethnic group from Nepal known for their climbing skills."
    },
    {
      question: "Which US state contains the Rocky Mountains?",
      options: ["Florida", "Colorado", "New York", "Texas"],
      correct: 1,
      funFact: "The Rockies stretch more than 3,000 miles."
    },
    {
      question: "What is the highest mountain in Japan?",
      options: ["Mount Kita", "Mount Fuji", "Mount Aso", "Mount Haku"],
      correct: 1,
      funFact: "It is considered one of Japan's three holy mountains."
    },
    {
      question: "Which mountain range runs through Italy?",
      options: ["Pyrenees", "Apennines", "Carpathians", "Atlas"],
      correct: 1,
      funFact: "The Apennines form the 'spine' of the Italian peninsula."
    },
    {
      question: "Olympus Mons, the largest volcano in the solar system, is on:",
      options: ["Earth", "Mars", "Venus", "Moon"],
      correct: 1,
      funFact: "It is about two and a half times as tall as Mount Everest."
    },
    {
      question: "What causes Altitude Sickness?",
      options: ["Cold wind", "Lack of oxygen", "Too much sun", "Dehydration"],
      correct: 1,
      funFact: "It is also known as Acute Mountain Sickness (AMS)."
    }
  ],
  // --------------------------------------------------------
  // ID 35: Science | Astronomy
  // --------------------------------------------------------
  35: [
    {
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Mercury", "Mars", "Earth"],
      correct: 1,
      funFact: "Mercury has no atmosphere to retain heat, so it is freezing at night."
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
      correct: 1,
      funFact: "Jupiter is so big that all other planets could fit inside it."
    },
    {
      question: "Which galaxy is Earth located in?",
      options: ["Andromeda", "Milky Way", "Triangulum", "Sombrero"],
      correct: 1,
      funFact: "The Milky Way is a barred spiral galaxy containing billions of stars."
    },
    {
      question: "What is the 'Red Planet'?",
      options: ["Jupiter", "Mars", "Venus", "Saturn"],
      correct: 1,
      funFact: "The red color comes from iron oxide (rust) on its surface. "
    },
    {
      question: "What celestial body was demoted from planet status in 2006?",
      options: ["Eris", "Pluto", "Ceres", "Makemake"],
      correct: 1,
      funFact: "Pluto is now classified as a 'dwarf planet'."
    },
    {
      question: "Which planet has the most prominent ring system?",
      options: ["Jupiter", "Uranus", "Saturn", "Neptune"],
      correct: 2,
      funFact: "Saturn's rings are made mostly of ice particles and rock."
    },
    {
      question: "What is the name of the first human to walk on the Moon?",
      options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
      correct: 2,
      funFact: "He famously said, 'That's one small step for man, one giant leap for mankind'."
    },
    {
      question: "What powers the Sun?",
      options: ["Burning Coal", "Nuclear Fission", "Nuclear Fusion", "Chemical Reactions"],
      correct: 2,
      funFact: "The Sun fuses hydrogen into helium at its core."
    },
    {
      question: "Which planet is known as Earth's twin?",
      options: ["Mars", "Venus", "Mercury", "Neptune"],
      correct: 1,
      funFact: "Venus is similar in size but has a toxic atmosphere and extreme heat."
    },
    {
      question: "What is a light-year?",
      options: ["A measure of time", "A measure of brightness", "A measure of distance", "A measure of speed"],
      correct: 2,
      funFact: "One light-year is about 9.46 trillion kilometers."
    },
    {
      question: "Which star is at the center of our Solar System?",
      options: ["Proxima Centauri", "The Sun", "Sirius", "Betelgeuse"],
      correct: 1,
      funFact: "The Sun accounts for 99.86% of the mass in the Solar System."
    },
    {
      question: "What causes a solar eclipse?",
      options: ["Sun blocks Moon", "Moon blocks Sun", "Earth blocks Sun", "Venus blocks Sun"],
      correct: 1,
      funFact: "A total solar eclipse can only happen during a New Moon."
    },
    {
      question: "Which space telescope was launched in 1990?",
      options: ["James Webb", "Hubble", "Spitzer", "Kepler"],
      correct: 1,
      funFact: "Hubble has taken some of the most famous images of deep space."
    },
    {
      question: "What is the Great Red Spot on Jupiter?",
      options: ["A volcano", "A storm", "An ocean", "A crater"],
      correct: 1,
      funFact: "It is a giant storm larger than Earth that has raged for centuries."
    },
    {
      question: "Which planet spins on its side?",
      options: ["Uranus", "Neptune", "Saturn", "Mars"],
      correct: 0,
      funFact: "Uranus has an axial tilt of 98 degrees."
    },
    {
      question: "What is a Black Hole?",
      options: ["A dark star", "A region of infinite density", "A hole in a planet", "A shadow"],
      correct: 1,
      funFact: "Nothing, not even light, can escape a black hole's gravity. "
    },
    {
      question: "How many moons does Earth have?",
      options: ["1", "2", "0", "4"],
      correct: 0,
      funFact: "Earth's moon is the fifth largest moon in the solar system."
    },
    {
      question: "What is the name of the galaxy closest to ours?",
      options: ["Andromeda", "Triangulum", "Whirlpool", "Sombrero"],
      correct: 0,
      funFact: "Andromeda is on a collision course with the Milky Way in 4 billion years."
    },
    {
      question: "Who was the first person in space?",
      options: ["Neil Armstrong", "John Glenn", "Yuri Gagarin", "Alan Shepard"],
      correct: 2,
      funFact: "Gagarin orbited the Earth in 1961."
    },
    {
      question: "What are comets mostly made of?",
      options: ["Rock and Iron", "Ice and Dust", "Gas", "Lava"],
      correct: 1,
      funFact: "Comets are often called 'dirty snowballs'."
    }
  ],

  // --------------------------------------------------------
  // ID 36: Entertainment | Gaming
  // --------------------------------------------------------
  36: [
    {
      question: "Which character is a plumber?",
      options: ["Link", "Sonic", "Mario", "Master Chief"],
      correct: 2,
      funFact: "Mario first appeared in the game Donkey Kong as 'Jumpman'."
    },
    {
      question: "What is the best-selling video game of all time?",
      options: ["GTA V", "Minecraft", "Tetris", "Wii Sports"],
      correct: 1,
      funFact: "Minecraft has sold over 238 million copies worldwide."
    },
    {
      question: "Which game features a 'Battle Royale' mode?",
      options: ["The Sims", "Fortnite", "FIFA", "Street Fighter"],
      correct: 1,
      funFact: "Fortnite became a cultural phenomenon with its dances and live events."
    },
    {
      question: "Who is the hero of 'The Legend of Zelda'?",
      options: ["Zelda", "Ganon", "Link", "Sheik"],
      correct: 2,
      funFact: "Link is the playable character; Zelda is the princess he usually rescues."
    },
    {
      question: "Which company created the PlayStation?",
      options: ["Microsoft", "Sega", "Nintendo", "Sony"],
      correct: 3,
      funFact: "The original PlayStation was released in Japan in 1994."
    },
    {
      question: "What color is Pac-Man?",
      options: ["Red", "Blue", "Yellow", "Green"],
      correct: 2,
      funFact: "Pac-Man was inspired by a pizza with a slice missing."
    },
    {
      question: "Which game involves catching 'Pocket Monsters'?",
      options: ["Digimon", "Pokémon", "Yu-Gi-Oh", "Monster Hunter"],
      correct: 1,
      funFact: "Pokémon is the highest-grossing media franchise in history."
    },
    {
      question: "What does 'FPS' stand for?",
      options: ["First-Person Shooter", "Frames Per Second", "Fast Player Speed", "Full Power Shot"],
      correct: 0,
      funFact: "Doom and Wolfenstein 3D pioneered the FPS genre."
    },
    {
      question: "Who is the mascot of Sega?",
      options: ["Mario", "Crash Bandicoot", "Sonic the Hedgehog", "Spyro"],
      correct: 2,
      funFact: "Sonic was created to compete with Nintendo's Mario."
    },
    {
      question: "Which game series features 'Master Chief'?",
      options: ["Call of Duty", "Halo", "Destiny", "Gears of War"],
      correct: 1,
      funFact: "Halo: Combat Evolved was a launch title for the original Xbox."
    },
    {
      question: "What is the name of the virtual world in 'The Matrix' games?",
      options: ["The Grid", "The Oasis", "The Matrix", "Azeroth"],
      correct: 2,
      funFact: "The Matrix concept questions the nature of reality."
    },
    {
      question: "In which game do you build with blocks?",
      options: ["Roblox", "Minecraft", "Lego Star Wars", "Terraria"],
      correct: 1,
      funFact: "Minecraft was created by Markus Persson, also known as 'Notch'."
    },
    {
      question: "Which console introduced motion control with remotes?",
      options: ["Xbox 360", "PS3", "Wii", "GameCube"],
      correct: 2,
      funFact: "Wii Sports is one of the best-selling games because it came bundled with the console."
    },
    {
      question: "What does 'RPG' stand for?",
      options: ["Rocket Propelled Grenade", "Role-Playing Game", "Real Player Game", "Rapid Play Game"],
      correct: 1,
      funFact: "RPGs often focus on story, character development, and stats."
    },
    {
      question: "Which female character raids tombs?",
      options: ["Samus Aran", "Lara Croft", "Princess Peach", "Chun-Li"],
      correct: 1,
      funFact: "Lara Croft is the protagonist of the Tomb Raider series."
    },
    {
      question: "Which game features a car soccer match?",
      options: ["FIFA", "Rocket League", "Need for Speed", "Gran Turismo"],
      correct: 1,
      funFact: "Rocket League is described as 'soccer with rocket-powered cars'."
    },
    {
      question: "Who is the villain in the Mario series?",
      options: ["Wario", "Bowser", "Donkey Kong", "King Dedede"],
      correct: 1,
      funFact: "Bowser is also known as King Koopa."
    },
    {
      question: "What is the currency in Fortnite?",
      options: ["Gold", "V-Bucks", "Coins", "Diamonds"],
      correct: 1,
      funFact: "V-Bucks can be used to buy skins and battle passes."
    },
    {
      question: "Which studio makes 'Grand Theft Auto'?",
      options: ["EA", "Ubisoft", "Rockstar Games", "Activision"],
      correct: 2,
      funFact: "GTA V is one of the most profitable entertainment products ever."
    },
    {
      question: "What is the name of Link's horse in Zelda?",
      options: ["Epona", "Agro", "Roach", "Shadowfax"],
      correct: 0,
      funFact: "Epona first appeared in The Legend of Zelda: Ocarina of Time."
    }
  ],

  // --------------------------------------------------------
  // ID 37: History | Medieval Times
  // --------------------------------------------------------
  37: [
    {
      question: "What was the system of land ownership called?",
      options: ["Democracy", "Feudalism", "Socialism", "Capitalism"],
      correct: 1,
      funFact: "Feudalism organized society into lords, vassals, and serfs. "
    },
    {
      question: "Who fought in the Crusades?",
      options: ["Romans vs Greeks", "Christians vs Muslims", "French vs English", "Vikings vs Saxons"],
      correct: 1,
      funFact: "The Crusades were a series of religious wars over the Holy Land."
    },
    {
      question: "What disease killed 1/3 of Europe's population?",
      options: ["Smallpox", "The Black Death (Plague)", "Cholera", "Spanish Flu"],
      correct: 1,
      funFact: "The plague was spread by fleas on rats. "
    },
    {
      question: "What is a knight's armor made of?",
      options: ["Leather", "Iron/Steel", "Bronze", "Gold"],
      correct: 1,
      funFact: "A full suit of plate armor could weigh 20-25 kg (45-55 lbs). "
    },
    {
      question: "Which document limited the King's power in 1215?",
      options: ["Constitution", "Magna Carta", "Declaration of Independence", "Treaty of Versailles"],
      correct: 1,
      funFact: "King John of England was forced to sign it by his barons."
    },
    {
      question: "Who was the first Holy Roman Emperor?",
      options: ["Charlemagne", "Napoleon", "Julius Caesar", "Constantine"],
      correct: 0,
      funFact: "Charlemagne was crowned on Christmas Day, 800 AD. "
    },
    {
      question: "What is a castle moat filled with?",
      options: ["Sand", "Water", "Oil", "Stones"],
      correct: 1,
      funFact: "Moats served as a defensive barrier against attack. "
    },
    {
      question: "Who was Joan of Arc?",
      options: ["A queen", "A French peasant/warrior", "A witch", "A nun"],
      correct: 1,
      funFact: "She led the French army to victory at Orléans aged 17."
    },
    {
      question: "What was a joust?",
      options: ["A dance", "A feast", "A combat sport on horseback", "A type of sword"],
      correct: 2,
      funFact: "Knights used lances to try and unhorse their opponent. "
    },
    {
      question: "Which weapon was used to shoot arrows?",
      options: ["Sword", "Longbow", "Mace", "Spear"],
      correct: 1,
      funFact: "The English longbow played a decisive role in the Hundred Years' War."
    },
    {
      question: "What were the warriors from Scandinavia called?",
      options: ["Samurai", "Spartans", "Vikings", "Mongols"],
      correct: 2,
      funFact: "Vikings were known for their longships and exploration. "
    },
    {
      question: "Which war lasted 116 years?",
      options: ["Thirty Years' War", "Hundred Years' War", "The Crusades", "War of the Roses"],
      correct: 1,
      funFact: "It was fought between England and France."
    },
    {
      question: "What is a 'serf'?",
      options: ["A noble", "A knight", "A peasant bound to the land", "A merchant"],
      correct: 2,
      funFact: "Serfs were not slaves but couldn't leave their lord's land without permission."
    },
    {
      question: "Who lived in monasteries?",
      options: ["Knights", "Kings", "Monks", "Merchants"],
      correct: 2,
      funFact: "Monks copied books by hand, preserving knowledge."
    },
    {
      question: "What is heraldry?",
      options: ["Creating coats of arms", "Building castles", "Shooting arrows", "Cooking food"],
      correct: 0,
      funFact: "Coats of arms helped identify knights covered in armor."
    },
    {
      question: "Which city was the capital of the Byzantine Empire?",
      options: ["Rome", "Constantinople", "Athens", "Jerusalem"],
      correct: 1,
      funFact: "It is now known as Istanbul."
    },
    {
      question: "What is a guild?",
      options: ["A type of sword", "An association of craftsmen/merchants", "A gold coin", "A part of a castle"],
      correct: 1,
      funFact: "Guilds controlled the quality and price of goods."
    },
    {
      question: "Who was William the Conqueror?",
      options: ["King of France", "First Norman King of England", "A Viking leader", "A Pope"],
      correct: 1,
      funFact: "He won the Battle of Hastings in 1066."
    },
    {
      question: "What is a trebuchet?",
      options: ["A type of siege engine/catapult", "A French dish", "A type of armor", "A musical instrument"],
      correct: 0,
      funFact: "Trebuchets could hurl massive stones to smash castle walls. "
    },
    {
      question: "What ended the Middle Ages?",
      options: ["The Renaissance", "The Industrial Revolution", "World War I", "The Roman Empire"],
      correct: 0,
      funFact: "The Renaissance marked a rebirth of art, culture, and science."
    }
  ],

// --------------------------------------------------------
  // ID 38: Sports | Cricket
  // --------------------------------------------------------
  38: [
    {
      question: "How many balls are in a standard over?",
      options: ["5", "6", "8", "10"],
      correct: 1,
      funFact: "In the past, overs sometimes consisted of 4 or 8 balls depending on the rules."
    },
    {
      question: "Who is known as the 'God of Cricket'?",
      options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Don Bradman"],
      correct: 2,
      funFact: "Sachin Tendulkar is the only player to have scored one hundred international centuries."
    },
    {
      question: "What is the length of a cricket pitch?",
      options: ["20 yards", "22 yards", "24 yards", "18 yards"],
      correct: 1,
      funFact: "22 yards is exactly 1 chain, an old unit of measurement. "
    },
    {
      question: "Which country won the first Cricket World Cup in 1975?",
      options: ["Australia", "India", "West Indies", "England"],
      correct: 2,
      funFact: "The West Indies beat Australia in the final at Lord's."
    },
    {
      question: "What is it called when a bowler takes 3 wickets in consecutive balls?",
      options: ["Century", "Hat-trick", "Duck", "Golden over"],
      correct: 1,
      funFact: "The term originated in cricket in 1858."
    },
    {
      question: "What does LBW stand for?",
      options: ["Leg Before Wicket", "Long Ball Wide", "Left Behind Wicket", "Last Ball Win"],
      correct: 0,
      funFact: "LBW is one of the most controversial ways to get out."
    },
    {
      question: "How many players are on a cricket team?",
      options: ["9", "10", "11", "12"],
      correct: 2,
      funFact: "Like football (soccer), a standard team has 11 players."
    },
    {
      question: "Who has the highest individual score in ODIs?",
      options: ["Rohit Sharma", "Chris Gayle", "Martin Guptill", "Virender Sehwag"],
      correct: 0,
      funFact: "Rohit Sharma scored 264 runs against Sri Lanka in 2014."
    },
    {
      question: "Which trophy is played for between England and Australia?",
      options: ["The Urn", "The Ashes", "The Border-Gavaskar", "The Wisden"],
      correct: 1,
      funFact: "The trophy contains the ashes of a burnt cricket bail."
    },
    {
      question: "What is a 'Duck' in cricket?",
      options: ["A slow ball", "Scoring 0 runs", "A dropped catch", "A rain delay"],
      correct: 1,
      funFact: "A 'Golden Duck' is getting out on the very first ball faced."
    },
    {
      question: "Which format of cricket lasts up to 5 days?",
      options: ["T20", "ODI", "Test Cricket", "The Hundred"],
      correct: 2,
      funFact: "Test cricket is considered the purest form of the game."
    },
    {
      question: "Where is the 'Home of Cricket' located?",
      options: ["MCG", "Eden Gardens", "Lord's", "The Oval"],
      correct: 2,
      funFact: "Lord's Cricket Ground is in London."
    },
    {
      question: "What is the maximum number of runs you can run?",
      options: ["3", "4", "There is no limit", "6"],
      correct: 2,
      funFact: "While rare, players have run 4 or even 5 runs, though boundaries usually limit this."
    },
    {
      question: "Who bowled the fastest delivery ever recorded?",
      options: ["Brett Lee", "Shoaib Akhtar", "Shaun Tait", "Mitchell Starc"],
      correct: 1,
      funFact: "He clocked 161.3 km/h (100.2 mph) against England in 2003."
    },
    {
      question: "What is the term for a ball bowled too wide for the batsman to reach?",
      options: ["No-ball", "Wide", "Bye", "Leg-bye"],
      correct: 1,
      funFact: "A wide adds one run to the batting team's score."
    },
    {
      question: "Which Indian captain won the 1983 World Cup?",
      options: ["Sunil Gavaskar", "Kapil Dev", "MS Dhoni", "Sourav Ganguly"],
      correct: 1,
      funFact: "India defeated the mighty West Indies, who had won the previous two World Cups."
    },
    {
      question: "How many stumps are at one end of the pitch?",
      options: ["2", "3", "4", "1"],
      correct: 1,
      funFact: "Two bails sit on top of the three stumps. "
    },
    {
      question: "What is the IPL?",
      options: ["Indian Premier League", "International Pro League", "Indian Player List", "International Pace League"],
      correct: 0,
      funFact: "The IPL is the most-attended cricket league in the world."
    },
    {
      question: "Who is 'Captain Cool'?",
      options: ["Kane Williamson", "MS Dhoni", "Eoin Morgan", "Steve Waugh"],
      correct: 1,
      funFact: "Dhoni is the only captain to win all three major ICC trophies."
    },
    {
      question: "A 'Googly' is a type of delivery by a:",
      options: ["Fast bowler", "Leg spinner", "Off spinner", "Wicketkeeper"],
      correct: 1,
      funFact: "A googly spins the opposite way to a standard leg-break delivery."
    }
  ],

  // --------------------------------------------------------
  // ID 39: Math | Calculus
  // --------------------------------------------------------
  39: [
    {
      question: "Who is credited with inventing Calculus?",
      options: ["Einstein & Tesla", "Newton & Leibniz", "Euler & Gauss", "Pythagoras"],
      correct: 1,
      funFact: "They developed it independently around the same time in the 17th century."
    },
    {
      question: "What does the derivative measure?",
      options: ["Area under a curve", "Rate of change", "Total volume", "Average value"],
      correct: 1,
      funFact: "On a graph, the derivative represents the slope of the tangent line."
    },
    {
      question: "What is the derivative of a constant (e.g., f(x) = 5)?",
      options: ["1", "5", "0", "x"],
      correct: 2,
      funFact: "Since a constant value never changes, its rate of change is zero."
    },
    {
      question: "What is the opposite operation of differentiation?",
      options: ["Integration", "Multiplication", "Limitation", "Factorization"],
      correct: 0,
      funFact: "Integration is often used to calculate area."
    },
    {
      question: "What is the derivative of x²?",
      options: ["x", "2x", "x²", "2"],
      correct: 1,
      funFact: "Using the power rule: multiply by the power, then subtract 1 from the power."
    },
    {
      question: "What symbol represents an integral?",
      options: ["∑", "∫", "∂", "∆"],
      correct: 1,
      funFact: "The symbol is a stylized 'S' for 'Sum' (Summa)."
    },
    {
      question: "What concept describes a value a function approaches?",
      options: ["Derivative", "Limit", "Integral", "Tangent"],
      correct: 1,
      funFact: "Limits are fundamental to defining both derivatives and integrals."
    },
    {
      question: "What is the derivative of sin(x)?",
      options: ["cos(x)", "-cos(x)", "tan(x)", "sin(x)"],
      correct: 0,
      funFact: "The rate of change of a sine wave follows a cosine wave."
    },
    {
      question: "What is the integral of 1 dx?",
      options: ["0", "1", "x + C", "x²"],
      correct: 2,
      funFact: "'C' stands for the constant of integration."
    },
    {
      question: "Which rule is used to differentiate composite functions?",
      options: ["Power Rule", "Chain Rule", "Product Rule", "Quotient Rule"],
      correct: 1,
      funFact: "The Chain Rule is essential for handling functions inside functions, like f(g(x))."
    },
    {
      question: "What does 'dx' stand for?",
      options: ["Derivative of x", "Differential of x", "Distance x", "Difference x"],
      correct: 1,
      funFact: "It represents an infinitesimally small change in x."
    },
    {
      question: "If velocity is the derivative of position, what is the derivative of velocity?",
      options: ["Speed", "Acceleration", "Jerk", "Momentum"],
      correct: 1,
      funFact: "Acceleration measures how quickly velocity changes."
    },
    {
      question: "What is the area under the curve y=x from 0 to 2?",
      options: ["1", "2", "3", "4"],
      correct: 1,
      funFact: "The shape forms a triangle with base 2 and height 2. Area = 0.5 * 2 * 2 = 2."
    },
    {
      question: "Who introduced the notation dy/dx?",
      options: ["Isaac Newton", "Gottfried Leibniz", "Rene Descartes", "Leonhard Euler"],
      correct: 1,
      funFact: "Leibniz's notation is widely used because it intuitively shows the ratio of differences."
    },
    {
      question: "The 'Product Rule' is used for:",
      options: ["Adding functions", "Multiplying functions", "Dividing functions", "Subtracting functions"],
      correct: 1,
      funFact: "The rule is: (uv)' = u'v + uv'."
    },
    {
      question: "What is a 'tangent line'?",
      options: ["A line crossing a curve twice", "A line touching a curve at one point", "A curved line", "A parallel line"],
      correct: 1,
      funFact: "The slope of the tangent line equals the derivative at that point."
    },
    {
      question: "What is the derivative of e^x?",
      options: ["x", "e", "e^x", "xe^(x-1)"],
      correct: 2,
      funFact: "e^x is the only non-zero function that is its own derivative."
    },
    {
      question: "Calculus is primarily the study of:",
      options: ["Static shapes", "Change and motion", "Algebraic equations", "Prime numbers"],
      correct: 1,
      funFact: "Before calculus, math could effectively calculate objects at rest, but not in motion."
    },
    {
      question: "What is a 'definite integral'?",
      options: ["An integral with limits", "An integral with no answer", "An infinite sum", "A general solution"],
      correct: 0,
      funFact: "A definite integral results in a number (usually representing area), not a function."
    },
    {
      question: "What is the second derivative?",
      options: ["The derivative of the derivative", "The square of the derivative", "Two derivatives added", "The integral"],
      correct: 0,
      funFact: "The second derivative tells you about the concavity (curvature) of a function."
    }
  ],

  // --------------------------------------------------------
  // ID 40: Technology | Cybersecurity
  // --------------------------------------------------------
  40: [
    {
      question: "What does 'Phishing' mean?",
      options: ["Fishing online", "Fake emails stealing data", "Virus scanning", "Password protection"],
      correct: 1,
      funFact: "Phishing attacks often try to create a sense of urgency to trick you. "
    },
    {
      question: "What is a 'Firewall'?",
      options: ["A wall that burns", "Software blocking unauthorized access", "A virus", "A password manager"],
      correct: 1,
      funFact: "A firewall acts as a barrier between a trusted network and an untrusted network like the internet."
    },
    {
      question: "What does 'DDoS' stand for?",
      options: ["Direct Denial of Service", "Distributed Denial of Service", "Digital Data on Server", "Double Data of Security"],
      correct: 1,
      funFact: "DDoS attacks overwhelm a site with traffic from many sources (botnets) to crash it."
    },
    {
      question: "Which of these is a strong password?",
      options: ["password123", "admin", "P@ssw0rd!", "Tr0ub4dour&3"],
      correct: 3,
      funFact: "Length is often more important than complexity for password strength."
    },
    {
      question: "What is 'Malware'?",
      options: ["Hardware malfunction", "Malicious Software", "Male Software", "Manual Wear"],
      correct: 1,
      funFact: "Viruses, worms, trojans, and spyware are all types of malware."
    },
    {
      question: "What does VPN stand for?",
      options: ["Virtual Public Network", "Virtual Private Network", "Visual Private Net", "Very Private Network"],
      correct: 1,
      funFact: "A VPN encrypts your internet connection, hiding your activity from ISPs."
    },
    {
      question: "What is 'Ransomware'?",
      options: ["Free software", "Malware holding data hostage", "Antivirus tool", "Stolen hardware"],
      correct: 1,
      funFact: "Victims are asked to pay a ransom (often in Bitcoin) to get their files decrypted."
    },
    {
      question: "Two-Factor Authentication (2FA) requires:",
      options: ["Two passwords", "Two users", "Two forms of ID", "Two computers"],
      correct: 2,
      funFact: "Usually something you know (password) and something you have (phone)."
    },
    {
      question: "Who is a 'White Hat' hacker?",
      options: ["A malicious hacker", "An ethical hacker", "A beginner", "A government spy"],
      correct: 1,
      funFact: "They hack systems with permission to find and fix vulnerabilities."
    },
    {
      question: "What is 'Social Engineering'?",
      options: ["Manipulating people into giving info", "Building social networks", "Coding for social media", "Hardware engineering"],
      correct: 0,
      funFact: "Hacking the human is often easier than hacking the computer."
    },
    {
      question: "What does HTTPS ensure?",
      options: ["Faster speed", "Encrypted communication", "Free access", "More images"],
      correct: 1,
      funFact: "The 'S' stands for Secure. Always look for the padlock icon."
    },
    {
      question: "What is a 'Trojan Horse' in computing?",
      options: ["A virus scanner", "Malware disguised as legitimate software", "A fast processor", "A firewall"],
      correct: 1,
      funFact: "Named after the Greek myth, it sneaks in by looking harmless."
    },
    {
      question: "What is 'Encryption'?",
      options: ["Deleting data", "Scrambling data to unreadable format", "Copying data", "Sending data"],
      correct: 1,
      funFact: "Only someone with the correct key can decrypt and read the message."
    },
    {
      question: "Which represents a 'Zero-Day' vulnerability?",
      options: ["No risk", "A flaw known to vendor for 0 days", "A flaw fixed immediately", "A virus with 0 payload"],
      correct: 1,
      funFact: "Hackers exploit these flaws before developers have a chance to patch them."
    },
    {
      question: "What is a 'Botnet'?",
      options: ["A robot network", "A network of infected computers", "A fast internet", "A chat bot"],
      correct: 1,
      funFact: "Hackers control botnets remotely to launch DDoS attacks or send spam."
    },
    {
      question: "What is 'Spyware'?",
      options: ["James Bond gear", "Software spying on user activity", "Camera software", "GPS tracking"],
      correct: 1,
      funFact: "Keyloggers are a type of spyware that record every keystroke."
    },
    {
      question: "What does 'IoT' security refer to?",
      options: ["Internet of Time", "Input of Text", "Internet of Things", "Image of Tech"],
      correct: 2,
      funFact: "Smart fridges and cameras are often less secure and easy targets for hackers."
    },
    {
      question: "What is a 'Brute Force' attack?",
      options: ["Physically breaking a server", "Guessing every possible password", "Using a supercomputer", "Stealing a laptop"],
      correct: 1,
      funFact: "Complex passwords take exponentially longer to brute force."
    },
    {
      question: "Which of these is a biometrics example?",
      options: ["Password", "PIN", "Fingerprint", "Security Question"],
      correct: 2,
      funFact: "Biometrics use unique physical traits for identification."
    },
    {
      question: "What is a 'Bug Bounty'?",
      options: ["Killing insects", "Reward for finding security flaws", "Cost of a virus", "Hacking software"],
      correct: 1,
      funFact: "Companies like Google and Facebook pay millions to hackers who report bugs."
    }
  ],

  // --------------------------------------------------------
  // ID 41: Literature | Modern Fiction
  // --------------------------------------------------------
  41: [
    {
      question: "Who wrote 'The Handmaid's Tale'?",
      options: ["Margaret Atwood", "J.K. Rowling", "Virginia Woolf", "Toni Morrison"],
      correct: 0,
      funFact: "The novel explores themes of women in subjugation in a dystopian society."
    },
    {
      question: "Which series features 'The Hunger Games'?",
      options: ["Divergent", "Maze Runner", "The Hunger Games", "Twilight"],
      correct: 2,
      funFact: "The author, Suzanne Collins, was inspired by reality TV and war coverage."
    },
    {
      question: "Who wrote 'A Game of Thrones'?",
      options: ["J.R.R. Tolkien", "George R.R. Martin", "Stephen King", "Neil Gaiman"],
      correct: 1,
      funFact: "The book is the first in the 'A Song of Ice and Fire' series."
    },
    {
      question: "Which book features a tiger named Richard Parker?",
      options: ["The Jungle Book", "Life of Pi", "Tiger Tiger", "White Fang"],
      correct: 1,
      funFact: "The novel explores spirituality and survival at sea."
    },
    {
      question: "Who wrote 'The Da Vinci Code'?",
      options: ["James Patterson", "Dan Brown", "John Grisham", "Stephen King"],
      correct: 1,
      funFact: "The book sparked worldwide controversy and debate about religious history."
    },
    {
      question: "What is the name of the wizarding school in Harry Potter?",
      options: ["Durmstrang", "Beauxbatons", "Hogwarts", "Ilvermorny"],
      correct: 2,
      funFact: "The school motto means 'Never Tickle a Sleeping Dragon'."
    },
    {
      question: "Who wrote 'The Kite Runner'?",
      options: ["Khaled Hosseini", "Salman Rushdie", "Orhan Pamuk", "Yann Martel"],
      correct: 0,
      funFact: "It was the first novel to be written in English by an Afghan writer."
    },
    {
      question: "Which novel is set in a dystopian Panem?",
      options: ["The Giver", "Divergent", "The Hunger Games", "1984"],
      correct: 2,
      funFact: "Panem is derived from the Latin phrase 'panem et circenses' (bread and circuses)."
    },
    {
      question: "Who is the author of 'It' and 'The Shining'?",
      options: ["Dean Koontz", "R.L. Stine", "Stephen King", "H.P. Lovecraft"],
      correct: 2,
      funFact: "Stephen King threw the manuscript for 'Carrie' in the trash; his wife saved it."
    },
    {
      question: "Which book is narrated by Death?",
      options: ["The Book Thief", "The Lovely Bones", "Beloved", "Room"],
      correct: 0,
      funFact: "The story is set in Nazi Germany."
    },
    {
      question: "Who wrote 'The Alchemist'?",
      options: ["Gabriel Garcia Marquez", "Paulo Coelho", "Isabel Allende", "Jorge Luis Borges"],
      correct: 1,
      funFact: "It holds the Guinness World Record for most translated book by a living author."
    },
    {
      question: "In 'Twilight', what is Edward Cullen?",
      options: ["Werewolf", "Vampire", "Human", "Wizard"],
      correct: 1,
      funFact: "Vampires in this series sparkle in the sunlight."
    },
    {
      question: "Who wrote 'Gone Girl'?",
      options: ["Gillian Flynn", "Paula Hawkins", "Liane Moriarty", "Agatha Christie"],
      correct: 0,
      funFact: "The book uses unreliable narrators to twist the plot."
    },
    {
      question: "Which book features the character Katniss Everdeen?",
      options: ["Divergent", "The Hunger Games", "Twilight", "The Maze Runner"],
      correct: 1,
      funFact: "Katniss is named after an edible aquatic plant."
    },
    {
      question: "Who wrote 'The Girl with the Dragon Tattoo'?",
      options: ["Stieg Larsson", "Jo Nesbo", "Henning Mankell", "Camilla Lackberg"],
      correct: 0,
      funFact: "Larsson died before the books were published and became bestsellers."
    },
    {
      question: "What is the pen name of J.K. Rowling for crime novels?",
      options: ["Robert Galbraith", "Richard Bachman", "Mary Westmacott", "J.D. Robb"],
      correct: 0,
      funFact: "She wanted to release a book without the hype of her name attached."
    },
    {
      question: "Which novel involves a 'msg' found in a bottle?",
      options: ["Message in a Bottle", "The Notebook", "A Walk to Remember", "Dear John"],
      correct: 0,
      funFact: "Written by Nicholas Sparks, known for romance novels."
    },
    {
      question: "Who wrote 'The Fault in Our Stars'?",
      options: ["John Green", "Rainbow Rowell", "David Levithan", "Jenny Han"],
      correct: 0,
      funFact: "The title comes from Shakespeare's play 'Julius Caesar'."
    },
    {
      question: "Which book is about a dystopian future where books are burned?",
      options: ["1984", "Fahrenheit 451", "Brave New World", "The Road"],
      correct: 1,
      funFact: "451°F is said to be the temperature at which book paper burns."
    },
    {
      question: "Who wrote 'American Gods'?",
      options: ["Neil Gaiman", "Terry Pratchett", "Alan Moore", "Clive Barker"],
      correct: 0,
      funFact: "The book blends Americana, fantasy, and ancient mythology."
    }
  ],

  // --------------------------------------------------------
  // ID 42: Geography | Climate & Weather
  // --------------------------------------------------------
  42: [
    {
      question: "What is the instrument used to measure temperature?",
      options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
      correct: 1,
      funFact: "Galileo Galilei is often credited with discovering the principle of the thermometer."
    },
    {
      question: "Which instrument measures atmospheric pressure?",
      options: ["Thermometer", "Barometer", "Rain Gauge", "Wind Vane"],
      correct: 1,
      funFact: "A drop in pressure often indicates a storm is coming."
    },
    {
      question: "What is the study of weather called?",
      options: ["Geology", "Meteorology", "Astronomy", "Ecology"],
      correct: 1,
      funFact: "Meteorology comes from the Greek word 'meteoros', meaning 'high in the air'."
    },
    {
      question: "What is the center of a hurricane called?",
      options: ["The Core", "The Eye", "The Heart", "The Spot"],
      correct: 1,
      funFact: "The eye of a hurricane is surprisingly calm and clear. "
    },
    {
      question: "Which scale measures the strength of tornadoes?",
      options: ["Richter Scale", "Fujita Scale", "Saffir-Simpson Scale", "Beaufort Scale"],
      correct: 1,
      funFact: "The Enhanced Fujita (EF) scale ranges from EF0 to EF5."
    },
    {
      question: "What is the main gas responsible for the Greenhouse Effect?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correct: 1,
      funFact: "CO2 traps heat in the atmosphere, keeping Earth warm enough for life."
    },
    {
      question: "Which cloud type is associated with thunderstorms?",
      options: ["Cirrus", "Stratus", "Cumulonimbus", "Cumulus"],
      correct: 2,
      funFact: "These massive clouds can reach heights of over 50,000 feet."
    },
    {
      question: "What is the driest place on Earth?",
      options: ["Sahara Desert", "Atacama Desert", "Gobi Desert", "Mojave Desert"],
      correct: 1,
      funFact: "Some parts of the Atacama in Chile haven't seen rain for centuries."
    },
    {
      question: "Which line of latitude receives the most direct sunlight?",
      options: ["Arctic Circle", "Tropic of Cancer", "The Equator", "Prime Meridian"],
      correct: 2,
      funFact: "This is why the equatorial region is generally the hottest."
    },
    {
      question: "What is 'El Niño'?",
      options: ["A storm", "Warming of ocean surface temperatures", "Cooling of ocean", "A tornado"],
      correct: 1,
      funFact: "El Niño affects weather patterns globally, causing floods or droughts."
    },
    {
      question: "What is the layer of gases surrounding Earth called?",
      options: ["Hydrosphere", "Atmosphere", "Lithosphere", "Biosphere"],
      correct: 1,
      funFact: "The atmosphere protects us from UV rays and meteors."
    },
    {
      question: "Which instrument measures wind speed?",
      options: ["Thermometer", "Anemometer", "Barometer", "Radar"],
      correct: 1,
      funFact: "Anemometers often use spinning cups to catch the wind."
    },
    {
      question: "What forms when rain falls through freezing air?",
      options: ["Snow", "Sleet", "Hail", "Dew"],
      correct: 1,
      funFact: "Sleet is frozen raindrops, while hail forms inside thunderstorm clouds."
    },
    {
      question: "The ozone layer protects us from:",
      options: ["Visible light", "UV Radiation", "Infrared", "Radio waves"],
      correct: 1,
      funFact: "The ozone hole over Antarctica is slowly healing."
    },
    {
      question: "What climate zone is cold all year round?",
      options: ["Tropical", "Temperate", "Polar", "Arid"],
      correct: 2,
      funFact: "Polar climates are found near the North and South Poles."
    },
    {
      question: "What causes lightning?",
      options: ["Wind", "Static electricity discharge", "Solar flares", "Tectonic movement"],
      correct: 1,
      funFact: "Lightning can heat the air to 50,000 degrees Fahrenheit, causing thunder."
    },
    {
      question: "Which scale measures hurricane intensity?",
      options: ["Richter", "Fujita", "Saffir-Simpson", "Kelvin"],
      correct: 2,
      funFact: "Category 5 is the strongest rating for a hurricane."
    },
    {
      question: "What is the water cycle process where water turns to vapor?",
      options: ["Condensation", "Precipitation", "Evaporation", "Runoff"],
      correct: 2,
      funFact: "Heat from the sun drives evaporation."
    },
    {
      question: "High pressure systems usually bring what kind of weather?",
      options: ["Stormy", "Clear and fair", "Snowy", "Tornadoes"],
      correct: 1,
      funFact: "Sinking air in high pressure prevents clouds from forming."
    },
    {
      question: "What is humidity?",
      options: ["Temperature of air", "Amount of water vapor in air", "Speed of wind", "Air pressure"],
      correct: 1,
      funFact: "High humidity makes it feel hotter because sweat evaporates slower."
    }
  ]

  // ... You simply repeat this for all IDs up to 42
};