'use strict';

// ============================================================
// 维度定义
// To change dimension names/weights/colors, edit DIMENSIONS.
// ============================================================
const DIMENSIONS = {
  finance:     { label: '财务安全',   weight: 0.22, color: '#FF6B6B' },
  career:      { label: '职业价值',   weight: 0.20, color: '#FF9F43' },
  cognition:   { label: '认知水平',   weight: 0.20, color: '#48DBFB' },
  network:     { label: '人脉资源',   weight: 0.14, color: '#1DD1A1' },
  lifeControl: { label: '生活掌控',   weight: 0.14, color: '#FECA57' },
  growth:      { label: '成长潜力',   weight: 0.10, color: '#A29BFE' },
};

// Ordered array of dimension keys (question order matches this)
const DIM_KEYS = ['finance', 'career', 'cognition', 'network', 'lifeControl', 'growth'];

// ============================================================
// LEVELS
// scoreRange: [min, max] inclusive
// ============================================================
const LEVELS = [
  {
    level: 1,
    name: '基础生存层',
    tag: '第1层',
    scoreRange: [0, 24],
    emoji: '🌱',
    tagline: '先解决稳定性，再谈跃迁',
    status: '高风险',
    strength: '你正在生存压力下摸索，光是撑着就已经不容易。',
    risk: '现金流极薄，职业可替代性高，缺乏资源支撑，一旦出现意外极易陷入更深困境。',
    nextSteps: [
      '建立最基本的收入稳定性，哪怕先从铁饭碗或稳定副业开始',
      '停止所有消费性负债，先从不让洞变大开始',
      '找到一件你有能力做到平均水准以上的事，然后坚持一年',
    ],
    shareText: '生活正在推着我走，但我在找方向。',
  },
  {
    level: 2,
    name: '稳定打工层',
    tag: '第2层',
    scoreRange: [25, 39],
    emoji: '⚙️',
    tagline: '不要把稳定误认为安全',
    status: '潜在风险',
    strength: '你有稳定的生活基础，不用担心下个月的饭钱，这是很多人羡慕的起点。',
    risk: '岗位替代性强，收入天花板低，储蓄增长缓慢。稳定感遮蔽了真实的脆弱性。',
    nextSteps: [
      '找到你岗位中最难被替代的那一块，开始深挖',
      '建立3个月应急金，建立财务缓冲',
      '问自己：如果公司明天裁员，我凭什么找到更好的工作？',
    ],
    shareText: '稳定不等于安全，我需要把稳定变成主动权。',
  },
  {
    level: 3,
    name: '技能积累层',
    tag: '第3层',
    scoreRange: [40, 54],
    emoji: '📈',
    tagline: '从努力工作切换到建立稀缺能力',
    status: '成长期',
    strength: '你正在积累中，有方向感，有一定专业能力，比大多数人多了一层主动性。',
    risk: '还处在用时间换钱的阶段。如果不转变成稀缺能力+资产积累，努力只是原地踏步。',
    nextSteps: [
      '把你的技能从"会做"升级为"别人愿意为之付溢价"',
      '开始建立可见度：写作、案例、演讲，让外界知道你的价值',
      '开始储蓄和投资，不只是活期存款',
    ],
    shareText: '努力工作不够，我要建立真正的稀缺能力。',
  },
  {
    level: 4,
    name: '资源交换层',
    tag: '第4层',
    scoreRange: [55, 69],
    emoji: '🔗',
    tagline: '把收入变成资产，把能力变成影响力',
    status: '资源整合',
    strength: '你已经有明确的职业价值，有一定的资源和人脉，能在一定范围内影响结果。',
    risk: '如果不主动把收入变成资产，把能力变成影响力，你可能停在这一层很久。',
    nextSteps: [
      '把收入的20%以上配置到长期资产（不只是存款）',
      '找到3-5个核心高质量人脉，认真经营',
      '把你的能力产品化，让它可以脱离你的时间单独运转',
    ],
    shareText: '能力有了，现在要让能力变成可以复利的资产。',
  },
  {
    level: 5,
    name: '系统掌控层',
    tag: '第5层',
    scoreRange: [70, 84],
    emoji: '⚡',
    tagline: '不要停在舒适区，要扩大结构性优势',
    status: '系统优势',
    strength: '你已经建立了相对系统的优势，财务有缓冲，职业有话语权，生活有主动权。',
    risk: '这个层级最容易陷入的陷阱是满足感——一切都还不错，却不再进攻，结构性优势开始固化。',
    nextSteps: [
      '拓展到你当前圈子外的资源和视野',
      '把个人能力转化成系统能力（团队、平台、机构）',
      '持续扩大你的信息差和决策圈层',
    ],
    shareText: '系统已经运转，但我不想停在舒适区。',
  },
  {
    level: 6,
    name: '规则参与层',
    tag: '第6层',
    scoreRange: [85, 100],
    emoji: '🏆',
    tagline: '真正的高层级不是占有资源，而是创造更大价值',
    status: '结构领先',
    strength: '你在多个维度都处于高水位，具备系统性优势，能影响结果、整合资源、参与规则制定。',
    risk: '格局固化、脱离现实、过度追求控制感，是这个层级少见但致命的陷阱。',
    nextSteps: [
      '持续更新认知，避免在高层级产生信息茧房',
      '把个人优势转化为组织或社会价值',
      '关注身体、家庭和精神状态，不要只有事业复利',
    ],
    shareText: '真正的高层级不是占有，而是让周围的人因为你而变得更好。',
  },
];

// ============================================================
// QUESTIONS
// 30 questions, 5 per dimension, questions 1-5=finance, 6-10=career, etc.
// Each option: { text, score (1-4), tags (array), adviceKey (string) }
// ============================================================
const QUESTIONS = [

  // ──────────────────────────────────────────────
  // DIMENSION: finance (Q1–Q5)
  // ──────────────────────────────────────────────
  {
    dim: 'finance',
    text: '你的月税后收入（含副业）大概是多少？',
    options: [
      {
        text: '5000元以下',
        score: 1,
        tags: ['cashflow_risk', 'single_income'],
        adviceKey: 'emergency_fund',
      },
      {
        text: '5000–12000元',
        score: 2,
        tags: ['single_income'],
        adviceKey: 'save_more',
      },
      {
        text: '12000–30000元',
        score: 3,
        tags: [],
        adviceKey: 'invest_income',
      },
      {
        text: '30000元以上',
        score: 4,
        tags: ['asset_builder'],
        adviceKey: 'scale_income',
      },
    ],
  },
  {
    dim: 'finance',
    text: '如果现在失业，你能撑多久不影响正常生活？',
    options: [
      {
        text: '不到1个月，立刻会有压力',
        score: 1,
        tags: ['cashflow_risk', 'low_saving'],
        adviceKey: 'emergency_fund',
      },
      {
        text: '1–3个月，会比较紧张',
        score: 2,
        tags: ['low_saving'],
        adviceKey: 'emergency_fund',
      },
      {
        text: '3–12个月，有应急储蓄',
        score: 3,
        tags: [],
        adviceKey: 'invest_surplus',
      },
      {
        text: '超过1年，不影响正常节奏',
        score: 4,
        tags: ['asset_builder'],
        adviceKey: 'optimize_assets',
      },
    ],
  },
  {
    dim: 'finance',
    text: '你目前的债务压力（房贷、车贷、信用卡、消费贷）是？',
    options: [
      {
        text: '有网贷或消费贷，压力很大',
        score: 1,
        tags: ['debt_pressure', 'cashflow_risk'],
        adviceKey: 'reduce_debt',
      },
      {
        text: '月供超过收入50%，比较吃力',
        score: 2,
        tags: ['debt_pressure'],
        adviceKey: 'manage_debt',
      },
      {
        text: '有贷款但在可控范围内',
        score: 3,
        tags: [],
        adviceKey: 'optimize_debt',
      },
      {
        text: '基本无债务，或债务极少',
        score: 4,
        tags: ['asset_builder'],
        adviceKey: 'leverage_assets',
      },
    ],
  },
  {
    dim: 'finance',
    text: '除了工资，你有其他收入来源吗？',
    options: [
      {
        text: '没有，只靠工资',
        score: 1,
        tags: ['single_income', 'cashflow_risk'],
        adviceKey: 'build_passive',
      },
      {
        text: '偶尔有，但不稳定',
        score: 2,
        tags: ['single_income'],
        adviceKey: 'start_side_income',
      },
      {
        text: '有一定副业或投资收益',
        score: 3,
        tags: ['passive_income'],
        adviceKey: 'scale_passive',
      },
      {
        text: '有多条相对稳定的被动收入',
        score: 4,
        tags: ['passive_income', 'asset_builder'],
        adviceKey: 'optimize_assets',
      },
    ],
  },
  {
    dim: 'finance',
    text: '遇到突发大额支出（医疗、家庭紧急情况），你的应对能力是？',
    options: [
      {
        text: '需要借钱或刷卡，而且还不上',
        score: 1,
        tags: ['cashflow_risk', 'low_saving'],
        adviceKey: 'emergency_fund',
      },
      {
        text: '会严重消耗储蓄，非常紧张',
        score: 2,
        tags: ['low_saving'],
        adviceKey: 'build_buffer',
      },
      {
        text: '有应急金，基本可以覆盖',
        score: 3,
        tags: [],
        adviceKey: 'diversify',
      },
      {
        text: '备用金充足，不影响整体节奏',
        score: 4,
        tags: ['asset_builder'],
        adviceKey: 'risk_management',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // DIMENSION: career (Q6–Q10)
  // ──────────────────────────────────────────────
  {
    dim: 'career',
    text: '你现在做的工作，换一个人来做，难度有多高？',
    options: [
      {
        text: '大多数人培训一下就能做',
        score: 1,
        tags: ['replaceable'],
        adviceKey: 'build_skill_barrier',
      },
      {
        text: '需要经验，但不难找到替代',
        score: 2,
        tags: ['replaceable'],
        adviceKey: 'differentiate',
      },
      {
        text: '有一定专业门槛，替代成本高',
        score: 3,
        tags: ['skill_barrier'],
        adviceKey: 'strengthen_barrier',
      },
      {
        text: '掌握稀缺技能或资源，很难替代',
        score: 4,
        tags: ['skill_barrier', 'decision_influence'],
        adviceKey: 'leverage_scarcity',
      },
    ],
  },
  {
    dim: 'career',
    text: '你所在的行业，5年后会更好还是更难？',
    options: [
      {
        text: '明显在收缩，或正在被技术替代',
        score: 1,
        tags: ['career_stagnation'],
        adviceKey: 'industry_pivot',
      },
      {
        text: '平稳，但几乎没什么增长',
        score: 2,
        tags: ['career_stagnation'],
        adviceKey: 'upskill',
      },
      {
        text: '有成长空间，机会正在出现',
        score: 3,
        tags: ['industry_tailwind'],
        adviceKey: 'ride_trend',
      },
      {
        text: '明显的红利期，快速增长',
        score: 4,
        tags: ['industry_tailwind', 'skill_barrier'],
        adviceKey: 'lead_trend',
      },
    ],
  },
  {
    dim: 'career',
    text: '在工作环境里，你能影响多少事情的走向？',
    options: [
      {
        text: '只负责执行，没人问我意见',
        score: 1,
        tags: ['weak_bargaining', 'replaceable'],
        adviceKey: 'build_influence',
      },
      {
        text: '偶尔提建议，但决定权不在我',
        score: 2,
        tags: ['weak_bargaining'],
        adviceKey: 'increase_visibility',
      },
      {
        text: '在一定范围内有话语权',
        score: 3,
        tags: ['decision_influence'],
        adviceKey: 'expand_influence',
      },
      {
        text: '能影响重要决策，有实质影响力',
        score: 4,
        tags: ['decision_influence', 'skill_barrier'],
        adviceKey: 'leverage_influence',
      },
    ],
  },
  {
    dim: 'career',
    text: '你想涨薪或谈更好条件时，底气来自哪里？',
    options: [
      {
        text: '没什么底气，市场上比我便宜的太多',
        score: 1,
        tags: ['weak_bargaining', 'replaceable'],
        adviceKey: 'improve_bargaining',
      },
      {
        text: '勉强能谈，但成功率不高',
        score: 2,
        tags: ['weak_bargaining'],
        adviceKey: 'negotiate',
      },
      {
        text: '有竞争力，能谈到不错的条件',
        score: 3,
        tags: ['skill_barrier'],
        adviceKey: 'increase_value',
      },
      {
        text: '有多个选择，可以主动比较挑选',
        score: 4,
        tags: ['skill_barrier', 'industry_tailwind'],
        adviceKey: 'monetize_value',
      },
    ],
  },
  {
    dim: 'career',
    text: '未来3–5年的职业发展，你的清晰程度是？',
    options: [
      {
        text: '看不到，感觉被困在原地',
        score: 1,
        tags: ['career_stagnation', 'replaceable'],
        adviceKey: 'career_pivot',
      },
      {
        text: '有模糊方向，不确定能走多远',
        score: 2,
        tags: ['career_stagnation'],
        adviceKey: 'career_plan',
      },
      {
        text: '相对清晰，路径正在推进',
        score: 3,
        tags: ['skill_barrier'],
        adviceKey: 'accelerate_career',
      },
      {
        text: '方向清晰，且有明显的行业影响力',
        score: 4,
        tags: ['skill_barrier', 'industry_tailwind'],
        adviceKey: 'build_legacy',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // DIMENSION: cognition (Q11–Q15)
  // ──────────────────────────────────────────────
  {
    dim: 'cognition',
    text: '过去6个月，你主动学习的频率是？',
    options: [
      {
        text: '几乎没有，很少主动学习',
        score: 1,
        tags: ['low_learning'],
        adviceKey: 'start_learning',
      },
      {
        text: '偶尔需要用到才查一查',
        score: 2,
        tags: ['low_learning'],
        adviceKey: 'structure_learning',
      },
      {
        text: '有相对稳定的学习习惯',
        score: 3,
        tags: ['trend_sensitive'],
        adviceKey: 'deepen_learning',
      },
      {
        text: '持续高强度学习，是日常状态',
        score: 4,
        tags: ['trend_sensitive', 'long_termism'],
        adviceKey: 'leverage_knowledge',
      },
    ],
  },
  {
    dim: 'cognition',
    text: '遇到不了解的机会或新事物，你的第一反应是？',
    options: [
      {
        text: '凭感觉，或者直接忽略',
        score: 1,
        tags: ['emotional_decision', 'shallow_thinking'],
        adviceKey: 'improve_decision',
      },
      {
        text: '问周围的人，以他们的判断为准',
        score: 2,
        tags: ['emotional_decision'],
        adviceKey: 'build_framework',
      },
      {
        text: '自己研究分析，考虑逻辑和风险再决定',
        score: 3,
        tags: ['clear_goal'],
        adviceKey: 'refine_framework',
      },
      {
        text: '快速拆解核心逻辑，判断价值和介入方式',
        score: 4,
        tags: ['clear_goal', 'long_termism'],
        adviceKey: 'scale_decisions',
      },
    ],
  },
  {
    dim: 'cognition',
    text: '对5年后想过什么样的生活，你的清晰程度是？',
    options: [
      {
        text: '完全没想过，每天过一天算一天',
        score: 1,
        tags: ['shallow_thinking', 'low_learning'],
        adviceKey: 'clarify_goals',
      },
      {
        text: '有模糊的感觉，但说不清楚',
        score: 2,
        tags: ['shallow_thinking'],
        adviceKey: 'set_goals',
      },
      {
        text: '有清晰的方向，并在努力推进',
        score: 3,
        tags: ['clear_goal', 'long_termism'],
        adviceKey: 'refine_goals',
      },
      {
        text: '非常清晰，有阶段目标和执行计划',
        score: 4,
        tags: ['clear_goal', 'long_termism'],
        adviceKey: 'execute_vision',
      },
    ],
  },
  {
    dim: 'cognition',
    text: '做重要决定（跳槽、投资、大额消费）时，你主要依据什么？',
    options: [
      {
        text: '情绪、直觉，或被他人影响',
        score: 1,
        tags: ['emotional_decision', 'shallow_thinking'],
        adviceKey: 'improve_decision2',
      },
      {
        text: '经验判断，不深入分析',
        score: 2,
        tags: ['emotional_decision'],
        adviceKey: 'build_framework2',
      },
      {
        text: '理性分析利弊，有基本判断框架',
        score: 3,
        tags: ['clear_goal'],
        adviceKey: 'refine_framework2',
      },
      {
        text: '有成熟决策体系，独立判断，不受情绪影响',
        score: 4,
        tags: ['clear_goal', 'long_termism'],
        adviceKey: 'scale_decisions2',
      },
    ],
  },
  {
    dim: 'cognition',
    text: '对AI浪潮、产业转移、政策趋势等结构性变化，你的理解是？',
    options: [
      {
        text: '很少关注，感觉跟我关系不大',
        score: 1,
        tags: ['low_learning', 'shallow_thinking'],
        adviceKey: 'read_trends',
      },
      {
        text: '会看新闻，但不深入理解背后逻辑',
        score: 2,
        tags: ['low_learning'],
        adviceKey: 'follow_trends',
      },
      {
        text: '能理解主要趋势，并思考对自己的影响',
        score: 3,
        tags: ['trend_sensitive'],
        adviceKey: 'analyze_trends',
      },
      {
        text: '能提前判断方向，已在做布局',
        score: 4,
        tags: ['trend_sensitive', 'long_termism'],
        adviceKey: 'lead_thinking',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // DIMENSION: network (Q16–Q20)
  // ──────────────────────────────────────────────
  {
    dim: 'network',
    text: '你的社交圈，整体资源质量和信息密度是？',
    options: [
      {
        text: '大家背景层次差不多，信息高度同质',
        score: 1,
        tags: ['closed_circle'],
        adviceKey: 'expand_circle',
      },
      {
        text: '有些不同背景，但整体层次相似',
        score: 2,
        tags: ['closed_circle'],
        adviceKey: 'upgrade_network',
      },
      {
        text: '有明显比我优秀的人，能接触更高质量信息',
        score: 3,
        tags: ['high_quality_network'],
        adviceKey: 'deepen_network',
      },
      {
        text: '核心圈子高质量人脉密集，信息机会远超普通人',
        score: 4,
        tags: ['high_quality_network', 'information_gap'],
        adviceKey: 'leverage_network',
      },
    ],
  },
  {
    dim: 'network',
    text: '职业发展中，有没有人在关键时刻真正帮助过你？',
    options: [
      {
        text: '没有，全靠自己摸索，走了很多弯路',
        score: 1,
        tags: ['weak_resource_mobilization', 'closed_circle'],
        adviceKey: 'find_mentor',
      },
      {
        text: '偶尔有人帮，但影响不大',
        score: 2,
        tags: ['weak_resource_mobilization'],
        adviceKey: 'seek_guidance',
      },
      {
        text: '有过明显帮助，改变了某个关键节点',
        score: 3,
        tags: ['mentor_support'],
        adviceKey: 'maintain_mentors',
      },
      {
        text: '有稳定的支持网络，关键时刻能调动资源',
        score: 4,
        tags: ['mentor_support', 'high_quality_network'],
        adviceKey: 'build_ecosystem',
      },
    ],
  },
  {
    dim: 'network',
    text: '需要完成超出个人能力的事，你调动外部资源的能力是？',
    options: [
      {
        text: '基本没有，只能靠自己硬扛',
        score: 1,
        tags: ['weak_resource_mobilization', 'closed_circle'],
        adviceKey: 'resource_building',
      },
      {
        text: '可以找朋友帮忙，但效果有限',
        score: 2,
        tags: ['weak_resource_mobilization'],
        adviceKey: 'collaborate',
      },
      {
        text: '有资源整合能力，能找到合适的人或信息',
        score: 3,
        tags: ['high_quality_network'],
        adviceKey: 'resource_integration',
      },
      {
        text: '能有效整合人脉、资金、信息等多维资源',
        score: 4,
        tags: ['high_quality_network', 'information_gap'],
        adviceKey: 'orchestrate_resources',
      },
    ],
  },
  {
    dim: 'network',
    text: '你接触到的行业信息和机会，与大多数同行相比：',
    options: [
      {
        text: '差不多，都靠公开渠道',
        score: 1,
        tags: ['closed_circle'],
        adviceKey: 'improve_info',
      },
      {
        text: '稍早一点，但没有质的差别',
        score: 2,
        tags: ['closed_circle'],
        adviceKey: 'diversify_info',
      },
      {
        text: '有信息优势，早于大多数人知道',
        score: 3,
        tags: ['information_gap'],
        adviceKey: 'leverage_info',
      },
      {
        text: '有明显信息差，能提前看到别人还没看到的机会',
        score: 4,
        tags: ['information_gap', 'high_quality_network'],
        adviceKey: 'info_arbitrage',
      },
    ],
  },
  {
    dim: 'network',
    text: '面对比你资历、收入高很多的人，你的状态是？',
    options: [
      {
        text: '紧张，不知道怎么相处，或者自卑',
        score: 1,
        tags: ['closed_circle', 'weak_resource_mobilization'],
        adviceKey: 'social_skills',
      },
      {
        text: '可以接触，但通常比较被动，主要在倾听',
        score: 2,
        tags: ['closed_circle'],
        adviceKey: 'step_up_social',
      },
      {
        text: '能自然交流，有真实的价值交换',
        score: 3,
        tags: ['social_confidence'],
        adviceKey: 'lead_connections',
      },
      {
        text: '能主动建立和维护这类关系，对等合作',
        score: 4,
        tags: ['social_confidence', 'high_quality_network'],
        adviceKey: 'build_reputation',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // DIMENSION: lifeControl (Q21–Q25)
  // ──────────────────────────────────────────────
  {
    dim: 'lifeControl',
    text: '你每天对自己时间的掌控程度是？',
    options: [
      {
        text: '几乎完全被工作打卡和外部安排填满',
        score: 1,
        tags: ['time_trapped', 'life_passive'],
        adviceKey: 'time_audit',
      },
      {
        text: '有一点自由时间，但整体比较被动',
        score: 2,
        tags: ['time_trapped'],
        adviceKey: 'time_optimization',
      },
      {
        text: '有一定自主时间，能安排想做的事',
        score: 3,
        tags: ['autonomy_high'],
        adviceKey: 'time_investment',
      },
      {
        text: '时间高度自由，基本按自己意愿规划',
        score: 4,
        tags: ['autonomy_high', 'choice_power'],
        adviceKey: 'design_life',
      },
    ],
  },
  {
    dim: 'lifeControl',
    text: '你目前被以下因素严重束缚：房贷打卡、育儿家庭、债务压力？',
    options: [
      {
        text: '被多项同时束缚，几乎无腾挪空间',
        score: 1,
        tags: ['time_trapped', 'family_pressure'],
        adviceKey: 'reduce_constraints',
      },
      {
        text: '有1–2项较重束缚，选择受限',
        score: 2,
        tags: ['family_pressure'],
        adviceKey: 'manage_constraints',
      },
      {
        text: '有约束，但有一定腾挪空间',
        score: 3,
        tags: ['autonomy_high'],
        adviceKey: 'leverage_freedom',
      },
      {
        text: '约束很少，或有能力主动驾驭这些约束',
        score: 4,
        tags: ['autonomy_high', 'choice_power'],
        adviceKey: 'expand_freedom',
      },
    ],
  },
  {
    dim: 'lifeControl',
    text: '如果你想换城市、换行业或换生活方式，现实难度是？',
    options: [
      {
        text: '几乎不可能，代价太大',
        score: 1,
        tags: ['mobility_low', 'life_passive'],
        adviceKey: 'increase_mobility',
      },
      {
        text: '理论上可以，但实际障碍很大',
        score: 2,
        tags: ['mobility_low'],
        adviceKey: 'plan_transition',
      },
      {
        text: '有挑战，但可以规划并实现',
        score: 3,
        tags: ['choice_power'],
        adviceKey: 'exercise_choice',
      },
      {
        text: '随时可以，有足够的资本和选择权',
        score: 4,
        tags: ['choice_power', 'autonomy_high'],
        adviceKey: 'design_options',
      },
    ],
  },
  {
    dim: 'lifeControl',
    text: '对未来6个月自己的生活走向，掌控感是？',
    options: [
      {
        text: '几乎没有，感觉被外力决定',
        score: 1,
        tags: ['life_passive', 'time_trapped'],
        adviceKey: 'regain_control',
      },
      {
        text: '一般，只能控制小事，大方向不确定',
        score: 2,
        tags: ['life_passive'],
        adviceKey: 'build_agency',
      },
      {
        text: '较强，清楚自己在做什么、往哪走',
        score: 3,
        tags: ['autonomy_high'],
        adviceKey: 'strengthen_control',
      },
      {
        text: '非常强，在主动设计和推进',
        score: 4,
        tags: ['autonomy_high', 'choice_power'],
        adviceKey: 'proactive_life',
      },
    ],
  },
  {
    dim: 'lifeControl',
    text: '你现在的整体生活状态，你会怎么评价？',
    options: [
      {
        text: '感觉被生活推着走，完全被动',
        score: 1,
        tags: ['life_passive', 'time_trapped'],
        adviceKey: 'life_audit',
      },
      {
        text: '凑合，没什么特别不好，也没什么满意的',
        score: 2,
        tags: ['life_passive'],
        adviceKey: 'incremental_change',
      },
      {
        text: '有方向感，生活在往好的方向走',
        score: 3,
        tags: ['autonomy_high'],
        adviceKey: 'optimize_life',
      },
      {
        text: '满意，基本在过自己想要的生活',
        score: 4,
        tags: ['choice_power', 'autonomy_high'],
        adviceKey: 'scale_wellbeing',
      },
    ],
  },

  // ──────────────────────────────────────────────
  // DIMENSION: growth (Q26–Q30)
  // ──────────────────────────────────────────────
  {
    dim: 'growth',
    text: '遇到需要改变或行动的情况，你的典型反应是？',
    options: [
      {
        text: '知道该做，但容易拖延，迟迟不动',
        score: 1,
        tags: ['procrastination', 'action_gap'],
        adviceKey: 'start_action',
      },
      {
        text: '会行动，但需要外部压力或截止日期推动',
        score: 2,
        tags: ['procrastination'],
        adviceKey: 'build_habits',
      },
      {
        text: '能主动行动，执行力较强',
        score: 3,
        tags: ['self_driven'],
        adviceKey: 'accelerate_action',
      },
      {
        text: '高度自驱，问题出现前就已开始行动',
        score: 4,
        tags: ['self_driven', 'compounding_growth'],
        adviceKey: 'systemize_action',
      },
    ],
  },
  {
    dim: 'growth',
    text: '你是否有定期回顾自己行为和决策的习惯？',
    options: [
      {
        text: '几乎没有，很少主动反思',
        score: 1,
        tags: ['action_gap', 'procrastination'],
        adviceKey: 'start_review',
      },
      {
        text: '偶尔，通常是出了问题才复盘',
        score: 2,
        tags: ['action_gap'],
        adviceKey: 'review_regularly',
      },
      {
        text: '有定期回顾和总结的习惯',
        score: 3,
        tags: ['review_habit'],
        adviceKey: 'deepen_review',
      },
      {
        text: '系统性复盘，持续迭代自己的方法论',
        score: 4,
        tags: ['review_habit', 'compounding_growth'],
        adviceKey: 'build_loop',
      },
    ],
  },
  {
    dim: 'growth',
    text: '面对变化（新技术、新政策、新竞争），你的典型反应是？',
    options: [
      {
        text: '排斥，觉得麻烦，或感到威胁',
        score: 1,
        tags: ['change_resistant', 'action_gap'],
        adviceKey: 'embrace_change',
      },
      {
        text: '观望，等别人先验证再跟进',
        score: 2,
        tags: ['change_resistant'],
        adviceKey: 'manage_change',
      },
      {
        text: '愿意尝试，积极适应',
        score: 3,
        tags: ['self_driven'],
        adviceKey: 'lead_change',
      },
      {
        text: '主动拥抱，走在最前面，推动变化',
        score: 4,
        tags: ['self_driven', 'compounding_growth'],
        adviceKey: 'drive_change',
      },
    ],
  },
  {
    dim: 'growth',
    text: '你现在的努力方向，5年后会积累成什么？',
    options: [
      {
        text: '不确定，感觉在原地踏步，只是在消耗时间',
        score: 1,
        tags: ['action_gap', 'procrastination'],
        adviceKey: 'start_compounding',
      },
      {
        text: '可能有点积累，但不会很明显',
        score: 2,
        tags: ['action_gap'],
        adviceKey: 'stay_course',
      },
      {
        text: '会有清晰的积累，方向是正确的',
        score: 3,
        tags: ['compounding_growth'],
        adviceKey: 'scale_compounding',
      },
      {
        text: '会有明显复利效应，正在建立真正的护城河',
        score: 4,
        tags: ['compounding_growth', 'review_habit'],
        adviceKey: 'master_compound',
      },
    ],
  },
  {
    dim: 'growth',
    text: '对延迟满足（牺牲短期享受换长期回报），你的执行情况是？',
    options: [
      {
        text: '很难做到，倾向即时消费和当下快感',
        score: 1,
        tags: ['procrastination', 'action_gap'],
        adviceKey: 'delay_gratification',
      },
      {
        text: '偶尔能做到，但长期坚持很难',
        score: 2,
        tags: ['procrastination'],
        adviceKey: 'build_discipline',
      },
      {
        text: '大多数时候能做到，有中长期规划',
        score: 3,
        tags: ['self_driven'],
        adviceKey: 'strengthen_discipline',
      },
      {
        text: '延迟满足是习惯，投资未来是生活常态',
        score: 4,
        tags: ['self_driven', 'compounding_growth'],
        adviceKey: 'long_term_mindset',
      },
    ],
  },
];

// ============================================================
// ACTION PLAN
// Based on weakest dimension key.
// ============================================================
const ACTION_PLANS = {
  finance: {
    sevenDays: [
      '列出所有月度固定支出和债务，建立真实的收支表',
      '找出可以立刻削减的1–2项非必要支出',
      '停止所有新增的消费性负债（花呗、白条分期）',
    ],
    thirtyDays: [
      '存下第一笔应急金，哪怕只有1000元也要开始',
      '找到一个可以增加收入的小项目或副业方向',
      '把月储蓄率提升到收入的10%以上',
    ],
    twelveMonths: [
      '建立6个月生活费的现金安全垫',
      '建立第二条收入来源（副业或投资收益）',
      '开始配置长期资产，不只是银行活期存款',
    ],
  },
  career: {
    sevenDays: [
      '写下你当前岗位最容易被替代的3个地方',
      '分析你所在行业未来3年是增长还是收缩',
      '找出1个高市场价值的技能方向',
    ],
    thirtyDays: [
      '做出1个可以对外展示的项目或案例',
      '主动联系1位行业内比你强的人',
      '更新简历或个人介绍，突出你的稀缺性',
    ],
    twelveMonths: [
      '建立清晰的职业标签（别人能用一句话描述你）',
      '进入更有增长性的岗位或行业',
      '把个人能力变成可复制的方法论或产品',
    ],
  },
  cognition: {
    sevenDays: [
      '开始每天30分钟的固定学习时间，不用多，但要固定',
      '找1本行业或商业相关的书开始读',
      '记录本周做了哪3个重要决定，写下决策理由',
    ],
    thirtyDays: [
      '建立基本的信息输入系统（订阅2–3个高质量内容源）',
      '完成1个你一直在拖延的认知升级项目',
      '找1个认知比你高的人进行1次深度交流',
    ],
    twelveMonths: [
      '建立系统的学习框架和知识体系',
      '对1–2个核心领域形成有深度的独立判断',
      '把认知转化成1个可输出的内容或方法',
    ],
  },
  network: {
    sevenDays: [
      '列出你目前最有价值的5个人脉，并评估关系质量',
      '主动联系1位你已经很久没联系的高质量关系',
      '想清楚你现在能给别人提供什么具体价值',
    ],
    thirtyDays: [
      '参加1次你目前圈子以外的高质量活动或交流',
      '与1位比你优秀的人建立新连接',
      '把自己的某个能力变成可见的输出（文章、案例、作品）',
    ],
    twelveMonths: [
      '建立3–5个真正高质量的强关系',
      '进入1个比你当前圈子质量更高的群体或平台',
      '让别人能主动想到你并向你引荐资源',
    ],
  },
  lifeControl: {
    sevenDays: [
      '做1次时间审计：记录这周每天时间的真实分配',
      '找出1件每周占用大量时间但价值很低的事',
      '为自己划出每天30分钟不可被打扰的时间',
    ],
    thirtyDays: [
      '优化或减少最主要的1个时间陷阱',
      '为未来6个月建立1个大方向计划',
      '解决掉1件困扰你但一直拖延处理的事',
    ],
    twelveMonths: [
      '把生活约束降低到可主动管理的状态',
      '获得1个新的重要选择权（职业/城市/工作方式）',
      '建立能持续运转的生活结构，而不是靠意志力维持',
    ],
  },
  growth: {
    sevenDays: [
      '设定本周最重要的1件事，并在72小时内完成',
      '建立每天3分钟的微型复盘习惯：今天做了什么，效果如何',
      '把1件拖延了很久的事拆成最小第一步，今天就做',
    ],
    thirtyDays: [
      '完成1个有明确输出的项目（不只是学，要有成果）',
      '建立固定的周复盘节奏',
      '找到你最大的拖延原因并针对性处理',
    ],
    twelveMonths: [
      '建立持续成长的系统，而不是靠状态好才行动',
      '把1个关键能力从"会了"升级到"熟练变现"',
      '让复利开始发挥作用——今年的努力比去年有明显积累',
    ],
  },
};

// ============================================================
// PROFILE TAG RULES
// Each rule: { condition(tagCounts), label, color }
// ============================================================
const TAG_RULES = [
  {
    label: '现金流紧张型',
    color: '#FF6B6B',
    condition: (t) => (t.cashflow_risk || 0) + (t.low_saving || 0) >= 3,
  },
  {
    label: '技能壁垒型',
    color: '#FF9F43',
    condition: (t) => (t.skill_barrier || 0) >= 2,
  },
  {
    label: '长期主义型',
    color: '#A29BFE',
    condition: (t) => (t.long_termism || 0) + (t.trend_sensitive || 0) >= 3,
  },
  {
    label: '稳定被困型',
    color: '#FECA57',
    condition: (t) => (t.time_trapped || 0) + (t.family_pressure || 0) >= 2,
  },
  {
    label: '资源整合型',
    color: '#1DD1A1',
    condition: (t) => (t.high_quality_network || 0) + (t.mentor_support || 0) >= 2,
  },
  {
    label: '信息差优势型',
    color: '#6C5CE7',
    condition: (t) => (t.information_gap || 0) >= 2,
  },
  {
    label: '高行动力型',
    color: '#00B894',
    condition: (t) => (t.self_driven || 0) + (t.review_habit || 0) >= 3,
  },
  {
    label: '舒适区风险型',
    color: '#E17055',
    condition: (t) => (t.career_stagnation || 0) + (t.change_resistant || 0) >= 2,
  },
  {
    label: '负债压力型',
    color: '#D63031',
    condition: (t) => (t.debt_pressure || 0) >= 2,
  },
  {
    label: '高自主掌控型',
    color: '#00CEC9',
    condition: (t) => (t.autonomy_high || 0) + (t.choice_power || 0) >= 3,
  },
  {
    label: '知行差距型',
    color: '#B2BEC3',
    condition: (t) => (t.procrastination || 0) + (t.action_gap || 0) >= 3,
  },
  {
    label: '资产积累型',
    color: '#FDCB6E',
    condition: (t) => (t.passive_income || 0) + (t.asset_builder || 0) >= 2,
  },
  {
    label: '认知升级急需型',
    color: '#FD79A8',
    condition: (t) => (t.emotional_decision || 0) + (t.shallow_thinking || 0) >= 3,
  },
  {
    label: '高替代风险型',
    color: '#E84393',
    condition: (t) => (t.single_income || 0) + (t.replaceable || 0) >= 3,
  },
];

// ============================================================
// COMBINATION INSIGHT RULES
// condition(dimScores): receives object { finance, career, cognition, ... }
// All scores are 0–100.
// ============================================================
const INSIGHT_RULES = [
  {
    id: 'cog_no_finance',
    condition: (s) => s.cognition >= 70 && s.finance < 45,
    severity: 1,
    title: '认知先行，但现金流还没跟上',
    diag: '你已经能看到很多机会，也具备一定判断力，但现实财务基础还没有支撑你的认知野心。这个阶段最怕的是想得很远，但手里的现金流太薄，导致遇到机会时接不住。',
    recs: [
      '先建立6个月安全现金流',
      '把认知转化成一个可变现技能或副业项目',
      '暂时不要盲目做高风险投资',
      '用12个月做一次收入结构升级',
    ],
  },
  {
    id: 'career_no_network',
    condition: (s) => s.career >= 70 && s.network < 45,
    severity: 2,
    title: '能力不错，但资源连接偏弱',
    diag: '你可能是专业能力不错的人，但更多靠个人努力，而不是靠资源网络放大价值。你不是没有能力，而是缺少让别人知道你有能力的场域。',
    recs: [
      '主动经营行业内3–5个关键关系',
      '多参加高质量线下交流，而不是只在熟人圈打转',
      '学会表达自己的专业价值',
      '把个人能力产品化、案例化，让价值可见',
    ],
  },
  {
    id: 'finance_no_cog',
    condition: (s) => s.finance >= 70 && s.cognition < 45,
    severity: 2,
    title: '收入不错，但认知系统需要升级',
    diag: '你当前可能有不错的收入或资产基础，但如果认知系统没有跟上，未来容易在重大选择、投资、职业转型中踩坑。钱能解决很多问题，但不能代替判断力。',
    recs: [
      '建立长期学习系统',
      '学习商业、产业、投资和技术趋势的基本框架',
      '减少盲目跟风的决策',
      '找到比你认知更高的人定期交流',
    ],
  },
  {
    id: 'growth_no_lifeControl',
    condition: (s) => s.growth >= 70 && s.lifeControl < 45,
    severity: 2,
    title: '你很想改变，但现实约束太多',
    diag: '你有行动力，也愿意成长，但目前被工作、家庭、时间或债务等现实因素限制。这个阶段不是你不努力，而是系统环境消耗了太多精力。',
    recs: [
      '先减少低价值事务对时间的吞噬',
      '用小步快跑代替大规模改变',
      '每天保留30–60分钟不可被打扰的成长时间',
      '优先处理最限制你自由度的那一个约束',
    ],
  },
  {
    id: 'both_weak',
    condition: (s) => s.finance < 40 && s.career < 40,
    severity: 1,
    title: '当前最重要的是提升市场交换价值',
    diag: '你的财务压力和职业价值可能同时偏弱，说明现阶段最关键的不是理财，而是提高你在市场中的交换价值。收入问题的根源通常不是不会省钱，而是单位时间价值太低。',
    recs: [
      '明确一个未来1–2年有市场需求的技能方向',
      '不要频繁换方向，先把一个技能做到能变现',
      '争取进入更高价值的行业或岗位',
      '用真实项目证明自己的能力',
    ],
  },
  {
    id: 'network_no_career',
    condition: (s) => s.network >= 65 && s.career < 45,
    severity: 3,
    title: '认识人不少，但自身价值还要补强',
    diag: '你可能有一定社交能力或资源连接，但如果自身职业价值不足，人脉很难真正转化成机会。关系不是提款机，真正可持续的人脉来自价值交换。',
    recs: [
      '先补强自己的专业标签',
      '明确你能给别人带来什么具体价值',
      '少做无效社交，多做有成果的合作',
      '把人脉转化为具体项目，而不是停留在"认识"层面',
    ],
  },
  {
    id: 'all_high',
    condition: (s) => Object.values(s).every((v) => v >= 65),
    severity: 3,
    title: '结构相对健康，已经进入正循环',
    diag: '你的六个维度都处在较高水平，说明你不是单点优秀，而是结构性优势比较明显。这是真正稀缺的状态。',
    recs: [
      '继续强化最有杠杆的方向',
      '建立长期资产和影响力',
      '把个人能力转化为系统能力',
      '关注身体、家庭和长期精神状态，避免过度透支',
    ],
  },
  {
    id: 'gap_too_big',
    condition: (s) => {
      const vals = Object.values(s);
      return Math.max(...vals) - Math.min(...vals) >= 30;
    },
    severity: 3,
    title: '你最大的限制不是平均水平，而是短板维度',
    diag: '你的整体发展并不是没有亮点，但某个维度明显拖住了你。人生跃迁很多时候不是继续加强优势，而是修复那个反复让你失控的短板。',
    recs: null, // computed dynamically based on weakest dim
  },
];

// Advice for the "gap too big" rule, keyed by dimension
const GAP_ADVICE = {
  finance: [
    '建立应急金是第一优先级，哪怕只有一个月的生活费',
    '停止消费性负债，先从不让洞变大开始',
    '收入提升是根本，理财是之后的事',
  ],
  career: [
    '找到你最难被替代的技能，集中打磨',
    '换一个成长性更强的赛道或岗位',
    '建立可对外展示的职业成果',
  ],
  cognition: [
    '建立每天固定的学习时间，哪怕只有30分钟',
    '减少被动信息消费，开始主动建立知识框架',
    '找1本扎实的书认真读完，比刷100篇文章有用',
  ],
  network: [
    '主动联系1个比你优秀的人，约一次真实交流',
    '清晰表达你能给别人带来的价值，而不只是索取',
    '参加1次你当前圈子以外的高质量活动',
  ],
  lifeControl: [
    '做一次时间审计，找出最大的时间漏洞',
    '找出并优先解决最压制你自由度的那一项约束',
    '每天保留30分钟属于自己的不被打扰的时间',
  ],
  growth: [
    '把最重要的1件事拆成最小行动，今天就开始',
    '建立每周复盘习惯，不用很长，10分钟也有效',
    '找到你拖延的根本原因并正面处理',
  ],
};

// ============================================================
// STATE
// ============================================================
let state = {
  currentIndex: 0,
  answers: new Array(30).fill(null), // each: { score, tags, adviceKey } | null
};

// ============================================================
// HELPERS
// ============================================================

function getLevel(score) {
  return LEVELS.find((l) => score >= l.scoreRange[0] && score <= l.scoreRange[1]) || LEVELS[0];
}

function calcDimScores() {
  const raw = {};
  DIM_KEYS.forEach((k) => { raw[k] = 0; });

  QUESTIONS.forEach((q, i) => {
    const ans = state.answers[i];
    if (ans) raw[q.dim] += ans.score;
  });

  const scores = {};
  DIM_KEYS.forEach((k) => {
    // raw range per dimension: 5–20 (5 questions × 1–4)
    scores[k] = Math.round(((raw[k] - 5) / 15) * 100);
    scores[k] = Math.max(0, Math.min(100, scores[k]));
  });
  return scores;
}

function calcFinalScore(dimScores) {
  let total = 0;
  DIM_KEYS.forEach((k) => {
    total += dimScores[k] * DIMENSIONS[k].weight;
  });
  return Math.round(total * 10) / 10;
}

function collectTagCounts() {
  const counts = {};
  state.answers.forEach((ans) => {
    if (!ans) return;
    ans.tags.forEach((tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });
  return counts;
}

function getProfileTags(tagCounts) {
  const matched = TAG_RULES.filter((r) => r.condition(tagCounts));
  // limit to 5 tags
  return matched.slice(0, 5);
}

function generateCombinationInsights(dimScores) {
  const matched = [];
  INSIGHT_RULES.forEach((rule) => {
    if (rule.condition(dimScores)) {
      matched.push(rule);
    }
  });

  // Sort by severity (ascending = higher priority first)
  matched.sort((a, b) => a.severity - b.severity);

  // Resolve gap_too_big recs dynamically
  return matched.slice(0, 3).map((rule) => {
    if (rule.id === 'gap_too_big') {
      const weakKey = getWeakestDim(dimScores);
      return {
        ...rule,
        recs: GAP_ADVICE[weakKey] || rule.recs,
      };
    }
    return rule;
  });
}

function getWeakestDim(dimScores) {
  let minKey = DIM_KEYS[0];
  let minVal = dimScores[DIM_KEYS[0]];
  DIM_KEYS.forEach((k) => {
    if (dimScores[k] < minVal) {
      minVal = dimScores[k];
      minKey = k;
    }
  });
  return minKey;
}

function getHighestDim(dimScores) {
  let maxKey = DIM_KEYS[0];
  let maxVal = dimScores[DIM_KEYS[0]];
  DIM_KEYS.forEach((k) => {
    if (dimScores[k] > maxVal) {
      maxVal = dimScores[k];
      maxKey = k;
    }
  });
  return maxKey;
}

function dimStatusLabel(score) {
  if (score >= 80) return { label: '优势', cls: 'excellent' };
  if (score >= 60) return { label: '良好', cls: 'good' };
  if (score >= 40) return { label: '待提升', cls: 'fair' };
  return { label: '短板', cls: 'weak' };
}

// ============================================================
// SCREEN MANAGEMENT
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}

// ============================================================
// QUESTION SCREEN
// ============================================================
function renderQuestion(index) {
  const q = QUESTIONS[index];
  const dimInfo = DIMENSIONS[q.dim];
  const pct = ((index) / QUESTIONS.length) * 100;

  // Progress
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('q-counter').textContent = `${index + 1} / ${QUESTIONS.length}`;

  // Dim badge
  const badge = document.getElementById('q-dim-badge');
  badge.textContent = dimInfo.label;
  badge.style.background = dimInfo.color + '33';
  badge.style.color = dimInfo.color;

  // Question text
  document.getElementById('q-text').textContent = q.text;

  // Options
  const container = document.getElementById('q-options');
  container.innerHTML = '';
  const optLabels = ['A', 'B', 'C', 'D'];

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-option';
    btn.textContent = `${optLabels[i]}. ${opt.text}`;

    // Restore selection if user went back
    if (state.answers[index] && state.answers[index].score === opt.score) {
      btn.classList.add('selected');
    }

    btn.addEventListener('click', () => {
      // Mark selected
      container.querySelectorAll('.q-option').forEach((b) => b.classList.remove('selected', 'advancing'));
      btn.classList.add('advancing');

      // Store answer
      state.answers[index] = {
        score: opt.score,
        tags: opt.tags,
        adviceKey: opt.adviceKey,
      };

      // Auto advance after short delay
      setTimeout(() => {
        if (index + 1 < QUESTIONS.length) {
          state.currentIndex = index + 1;
          renderQuestion(state.currentIndex);
        } else {
          // All done — show loading
          showScreen('screen-loading');
          setTimeout(() => {
            buildResult();
            showScreen('screen-result');
          }, 1200);
        }
      }, 300);
    });

    container.appendChild(btn);
  });

  // Back button
  const backBtn = document.getElementById('btn-back');
  if (index > 0) {
    backBtn.style.visibility = 'visible';
  } else {
    backBtn.style.visibility = 'hidden';
  }
}

// ============================================================
// RESULT BUILDER
// ============================================================
function buildResult() {
  const dimScores = calcDimScores();
  const finalScore = calcFinalScore(dimScores);
  const level = getLevel(finalScore);
  const tagCounts = collectTagCounts();
  const profileTags = getProfileTags(tagCounts);
  const insights = generateCombinationInsights(dimScores);
  const weakDim = getWeakestDim(dimScores);
  const highDim = getHighestDim(dimScores);

  // ── Hero card ──
  document.getElementById('hero-score').textContent = finalScore;
  document.getElementById('hero-emoji').textContent = level.emoji;
  document.getElementById('hero-name').textContent = level.name;
  document.getElementById('hero-tag').textContent = `${level.tag} · ${level.scoreRange[0]}–${level.scoreRange[1]}分`;
  document.getElementById('hero-tagline').textContent = `「${level.tagline}」`;

  // ── Radar chart ──
  drawRadar(dimScores);

  // ── Dimension scores ──
  const dimContainer = document.getElementById('dim-scores');
  dimContainer.innerHTML = '';
  DIM_KEYS.forEach((k) => {
    const score = dimScores[k];
    const dim = DIMENSIONS[k];
    const status = dimStatusLabel(score);
    const row = document.createElement('div');
    row.className = 'dim-row';
    row.innerHTML = `
      <div class="dim-row-top">
        <span class="dim-row-name">${dim.label}</span>
        <div class="dim-row-right">
          <span class="dim-row-score">${score}</span>
          <span class="dim-row-weight">权重 ${Math.round(dim.weight * 100)}%</span>
          <span class="dim-status ${status.cls}">${status.label}</span>
        </div>
      </div>
      <div class="dim-bar-track">
        <div class="dim-bar-fill" style="width:0%; background:${dim.color}" data-width="${score}%"></div>
      </div>
    `;
    dimContainer.appendChild(row);
  });

  // Animate bars after a frame
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll('.dim-bar-fill').forEach((bar) => {
        bar.style.width = bar.dataset.width;
      });
    });
  });

  // ── Profile tags ──
  const tagsContainer = document.getElementById('profile-tags');
  tagsContainer.innerHTML = '';
  if (profileTags.length === 0) {
    tagsContainer.innerHTML = '<span style="color:var(--muted);font-size:13px">暂无特质标签</span>';
  } else {
    profileTags.forEach((t) => {
      const chip = document.createElement('span');
      chip.className = 'profile-tag';
      chip.textContent = t.label;
      chip.style.background = t.color;
      tagsContainer.appendChild(chip);
    });
  }

  // ── Insights ──
  const insightsList = document.getElementById('insights-list');
  insightsList.innerHTML = '';
  if (insights.length === 0) {
    insightsList.innerHTML = '<p style="color:var(--muted);font-size:14px">各维度发展较为均衡，保持当前节奏持续推进即可。</p>';
  } else {
    insights.forEach((ins) => {
      const card = document.createElement('div');
      card.className = 'insight-card';
      const recsHtml = (ins.recs || []).map((r) => `<li>${r}</li>`).join('');
      card.innerHTML = `
        <div class="insight-title">${ins.title}</div>
        <p class="insight-diag">${ins.diag}</p>
        <ul class="insight-recs">${recsHtml}</ul>
      `;
      insightsList.appendChild(card);
    });
  }

  // ── Action plan ──
  const plan = ACTION_PLANS[weakDim];
  document.getElementById('action-dim-label').textContent = `针对：${DIMENSIONS[weakDim].label}`;

  // Store plan globally for tab switching
  window._currentPlan = plan;
  renderActionPlan('7');

  // Tab switching
  document.querySelectorAll('.action-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.action-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      renderActionPlan(tab.dataset.period);
    });
  });

  // ── Share card ──
  document.getElementById('share-emoji').textContent = level.emoji;
  document.getElementById('share-level-name').textContent = `${level.name} · ${level.tag}`;
  document.getElementById('share-score').textContent = finalScore;
  document.getElementById('share-high').textContent = `${DIMENSIONS[highDim].label}（${dimScores[highDim]}分）`;
  document.getElementById('share-low').textContent = `${DIMENSIONS[weakDim].label}（${dimScores[weakDim]}分）`;
  document.getElementById('share-quote').textContent = `「${level.shareText}」`;

  // ── Copy share button ──
  const copyBtn = document.getElementById('btn-copy-share');
  copyBtn.onclick = () => {
    const text = buildShareText(level, finalScore, dimScores, highDim, weakDim);
    navigator.clipboard.writeText(text).then(() => {
      showToast('分享文案已复制 ✓');
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('分享文案已复制 ✓');
    });
  };
}

function renderActionPlan(period) {
  const plan = window._currentPlan;
  const content = document.getElementById('action-content');
  let items = [];
  if (period === '7') items = plan.sevenDays;
  else if (period === '30') items = plan.thirtyDays;
  else items = plan.twelveMonths;

  content.innerHTML = `
    <div class="action-items">
      ${items.map((item, i) => `
        <div class="action-item">
          <div class="action-num">${i + 1}</div>
          <div class="action-text">${item}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function buildShareText(level, finalScore, dimScores, highDim, weakDim) {
  return `我刚测了《你当前处在人生发展的哪个层级？》
我的结果是：${level.tag}｜${level.name}
综合分：${finalScore}
最高维度：${DIMENSIONS[highDim].label}（${dimScores[highDim]}分）
最低维度：${DIMENSIONS[weakDim].label}（${dimScores[weakDim]}分）
「${level.shareText}」
你也来测一下？`;
}

// ============================================================
// RADAR CHART
// ============================================================
function drawRadar(dimScores) {
  const canvas = document.getElementById('radar-canvas');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  // Adjust for HiDPI
  const displaySize = Math.min(window.innerWidth - 64, 320);
  canvas.style.width = displaySize + 'px';
  canvas.style.height = displaySize + 'px';
  canvas.width = displaySize * dpr;
  canvas.height = displaySize * dpr;
  ctx.scale(dpr, dpr);

  const size = displaySize;
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 40;
  const sides = 6;
  const labels = DIM_KEYS.map((k) => DIMENSIONS[k].label);
  const colors = DIM_KEYS.map((k) => DIMENSIONS[k].color);
  const values = DIM_KEYS.map((k) => dimScores[k] / 100);

  // Angles: start from top, go clockwise
  const angles = Array.from({ length: sides }, (_, i) => (Math.PI * 2 * i) / sides - Math.PI / 2);

  ctx.clearRect(0, 0, size, size);

  // Draw grid rings
  for (let ring = 1; ring <= 4; ring++) {
    const r = (radius * ring) / 4;
    ctx.beginPath();
    angles.forEach((angle, i) => {
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = 'rgba(0,0,0,0.07)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw axes
  angles.forEach((angle) => {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
    ctx.strokeStyle = 'rgba(0,0,0,0.1)';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Draw filled polygon (animated via requestAnimationFrame)
  let progress = 0;
  const animate = () => {
    progress = Math.min(progress + 0.06, 1);

    // Clear and redraw grid/axes (needed each frame)
    ctx.clearRect(0, 0, size, size);

    // Grid rings
    for (let ring = 1; ring <= 4; ring++) {
      const r = (radius * ring) / 4;
      ctx.beginPath();
      angles.forEach((angle, i) => {
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.strokeStyle = 'rgba(0,0,0,0.07)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Axes
    angles.forEach((angle) => {
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
      ctx.strokeStyle = 'rgba(0,0,0,0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Filled data shape
    const eased = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    ctx.beginPath();
    angles.forEach((angle, i) => {
      const val = values[i] * eased;
      const x = cx + Math.cos(angle) * radius * val;
      const y = cy + Math.sin(angle) * radius * val;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(73, 144, 217, 0.18)';
    ctx.fill();
    ctx.strokeStyle = '#4A90D9';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Dots on each axis
    angles.forEach((angle, i) => {
      const val = values[i] * eased;
      const x = cx + Math.cos(angle) * radius * val;
      const y = cy + Math.sin(angle) * radius * val;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = colors[i];
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Labels (always full position, no animation)
    ctx.font = `600 11px system-ui, "PingFang SC", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    angles.forEach((angle, i) => {
      const labelRadius = radius + 22;
      const x = cx + Math.cos(angle) * labelRadius;
      const y = cy + Math.sin(angle) * labelRadius;
      ctx.fillStyle = colors[i];
      ctx.fillText(labels[i], x, y);

      // Score sub-label
      ctx.font = `500 10px system-ui, "PingFang SC", sans-serif`;
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.fillText(dimScores[DIM_KEYS[i]] + '分', x, y + 13);
      ctx.font = `600 11px system-ui, "PingFang SC", sans-serif`;
    });

    if (progress < 1) requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// ============================================================
// DRAWER
// ============================================================
function openDrawer() {
  document.getElementById('levels-drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  document.getElementById('levels-drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// INIT / EVENT BINDINGS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  // Start button
  document.getElementById('btn-start').addEventListener('click', () => {
    state.currentIndex = 0;
    state.answers = new Array(30).fill(null);
    renderQuestion(0);
    showScreen('screen-question');
  });

  // Back button
  document.getElementById('btn-back').addEventListener('click', () => {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderQuestion(state.currentIndex);
    }
  });

  // Retry button
  document.getElementById('btn-retry').addEventListener('click', () => {
    state.currentIndex = 0;
    state.answers = new Array(30).fill(null);
    showScreen('screen-welcome');
  });

  // Levels drawer
  document.getElementById('btn-levels-open').addEventListener('click', openDrawer);
  document.getElementById('drawer-close').addEventListener('click', closeDrawer);
  document.getElementById('drawer-overlay').addEventListener('click', closeDrawer);

});
