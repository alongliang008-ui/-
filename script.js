'use strict';

// ============================================================
// 维度定义
// ============================================================
const DIMENSIONS = [
  { name: '财务安全', color: '#FF6B6B' },
  { name: '职业价值', color: '#FF9F43' },
  { name: '认知水平', color: '#48DBFB' },
  { name: '人脉资源', color: '#1DD1A1' },
  { name: '生活掌控', color: '#FECA57' },
  { name: '成长潜力', color: '#A29BFE' },
];

// ============================================================
// 题库（30题，每维度5题，每题4选项，分值1-4）
// ============================================================
const QUESTIONS = [
  // ── 维度0：财务安全 ──────────────────────────────────────
  {
    dim: 0,
    text: '你目前的月收入（税后到手）大概在哪个范围？',
    options: [
      { text: '5000元以下，或收入不稳定', score: 1 },
      { text: '5000–12000元之间', score: 2 },
      { text: '12000–30000元之间', score: 3 },
      { text: '30000元以上', score: 4 },
    ],
  },
  {
    dim: 0,
    text: '如果现在突然失业，你的存款能撑多久不改变生活质量？',
    options: [
      { text: '不到1个月，压力会立刻显现', score: 1 },
      { text: '1–3个月，紧张但能撑', score: 2 },
      { text: '3–12个月，有缓冲空间', score: 3 },
      { text: '1年以上，基本不受影响', score: 4 },
    ],
  },
  {
    dim: 0,
    text: '你目前的负债压力（房贷、车贷、消费贷等）是？',
    options: [
      { text: '有网贷或信用卡债，还款压力明显', score: 1 },
      { text: '有房贷或车贷，月还款占收入50%以上', score: 2 },
      { text: '有贷款但可控，不影响生活质量', score: 3 },
      { text: '基本无债务，或资产远大于负债', score: 4 },
    ],
  },
  {
    dim: 0,
    text: '除了工资，你有其他收入来源吗？',
    options: [
      { text: '没有，完全依赖工资', score: 1 },
      { text: '偶尔有一点副业或理财，但很少', score: 2 },
      { text: '有一定规模的副业或投资收益', score: 3 },
      { text: '有稳定被动收入，能覆盖部分或全部生活支出', score: 4 },
    ],
  },
  {
    dim: 0,
    text: '遇到突发大额支出（医疗、紧急家庭状况），你的应对是？',
    options: [
      { text: '需要借钱或刷信用卡，短期内还不上', score: 1 },
      { text: '会很紧张，需要动用大部分存款', score: 2 },
      { text: '有应急资金，可以处理，储蓄会减少', score: 3 },
      { text: '备用资金充足，不影响日常节奏', score: 4 },
    ],
  },

  // ── 维度1：职业价值 ──────────────────────────────────────
  {
    dim: 1,
    text: '你对自己当前工作岗位的可替代性判断是？',
    options: [
      { text: '大多数人都能做，随时可以被替换', score: 1 },
      { text: '有一定门槛，但替代成本不高', score: 2 },
      { text: '有明显专业壁垒，替代需要较高成本', score: 3 },
      { text: '掌握稀缺技能或资源，几乎无法被简单替代', score: 4 },
    ],
  },
  {
    dim: 1,
    text: '你所在的行业，未来5年的发展趋势是？',
    options: [
      { text: '在萎缩或正在被自动化/AI加速替代', score: 1 },
      { text: '平稳，不会消失但也没什么增长', score: 2 },
      { text: '有成长空间，新机会在出现', score: 3 },
      { text: '快速增长或有结构性红利，风口期', score: 4 },
    ],
  },
  {
    dim: 1,
    text: '在你的工作圈内，你是否有影响他人决策或资源分配的能力？',
    options: [
      { text: '几乎没有，我主要是执行者', score: 1 },
      { text: '偶尔有建议权，但实际影响有限', score: 2 },
      { text: '在一定范围内有话语权', score: 3 },
      { text: '能影响重要决策或较大规模的资源分配', score: 4 },
    ],
  },
  {
    dim: 1,
    text: '当你想换工作时，市场对你的需求程度是？',
    options: [
      { text: '同类候选人很多，竞争激烈', score: 1 },
      { text: '有一定竞争力，但不算突出', score: 2 },
      { text: '有明显优势，offer选择较多', score: 3 },
      { text: '稀缺人才，通常是机会主动找来', score: 4 },
    ],
  },
  {
    dim: 1,
    text: '你的职业发展，在可预见范围内是？',
    options: [
      { text: '感觉上升空间有限，甚至在走下坡路', score: 1 },
      { text: '基本稳定，但不确定能到哪一步', score: 2 },
      { text: '有清晰的上升路径，正在按计划推进', score: 3 },
      { text: '已在行业建立较强影响力，有多种发展可能', score: 4 },
    ],
  },

  // ── 维度2：认知水平 ──────────────────────────────────────
  {
    dim: 2,
    text: '过去6个月，你主动学习（阅读、课程、研究行业动态）的频率是？',
    options: [
      { text: '几乎没有，工作之外不怎么学', score: 1 },
      { text: '偶尔，有需要才会去查', score: 2 },
      { text: '比较规律，有固定学习时间', score: 3 },
      { text: '高强度持续学习，是生活的重要部分', score: 4 },
    ],
  },
  {
    dim: 2,
    text: '面对一个新机会或新信息，你的判断方式是？',
    options: [
      { text: '凭直觉或情绪反应，不太分析', score: 1 },
      { text: '依赖经验，不做深入分析', score: 2 },
      { text: '主动分析逻辑和风险，再做判断', score: 3 },
      { text: '能快速拆解底层逻辑，判断机会价值和参与方式', score: 4 },
    ],
  },
  {
    dim: 2,
    text: '在日常决策（职业、消费、投资）中，你的思维方式是？',
    options: [
      { text: '容易被情绪、他人意见或短期利益左右', score: 1 },
      { text: '一般，大事还行，但经常被细节干扰', score: 2 },
      { text: '大多数时候能理性分析，有一定框架', score: 3 },
      { text: '有成熟决策体系，情绪独立，长期主义', score: 4 },
    ],
  },
  {
    dim: 2,
    text: '对于"5年后自己想过什么样的生活"，你的清晰程度是？',
    options: [
      { text: '完全没想过，活一天算一天', score: 1 },
      { text: '有模糊感觉，但说不清楚', score: 2 },
      { text: '有比较具体的方向，并在往这个方向努力', score: 3 },
      { text: '非常清晰，有阶段目标和具体执行计划', score: 4 },
    ],
  },
  {
    dim: 2,
    text: '你对当前社会结构性变化（技术趋势、政策、产业变迁）的理解是？',
    options: [
      { text: '不太关注，感觉跟自己关系不大', score: 1 },
      { text: '关注新闻，但不深入理解背后逻辑', score: 2 },
      { text: '能理解宏观趋势，并思考对自己的影响', score: 3 },
      { text: '能提前判断方向并布局，有超前认知', score: 4 },
    ],
  },

  // ── 维度3：人脉资源 ──────────────────────────────────────
  {
    dim: 3,
    text: '你当前的社交圈，整体资源和信息质量是？',
    options: [
      { text: '比较封闭，大家背景差不多，信息同质化', score: 1 },
      { text: '有一些不同背景的人，但层次相近', score: 2 },
      { text: '圈子中有部分比我强很多的人', score: 3 },
      { text: '核心圈子有大量高质量人脉，信息密度远超普通人', score: 4 },
    ],
  },
  {
    dim: 3,
    text: '在职业发展中，是否有"贵人"给过你关键帮助？',
    options: [
      { text: '没有，全靠自己摸索', score: 1 },
      { text: '偶尔有人帮忙，但影响不大', score: 2 },
      { text: '有过关键节点的帮助，改变了某个方向', score: 3 },
      { text: '有稳定的高质量关系网络，能在需要时调动资源', score: 4 },
    ],
  },
  {
    dim: 3,
    text: '当你需要完成一件超出个人能力的事，调动外部资源的能力是？',
    options: [
      { text: '几乎不能，遇到困难只能靠自己硬扛', score: 1 },
      { text: '可以找朋友帮忙，但效果有限', score: 2 },
      { text: '有一定资源整合能力，能找到合适的人或工具', score: 3 },
      { text: '能有效整合人脉、资金、信息等多维资源', score: 4 },
    ],
  },
  {
    dim: 3,
    text: '你目前接触到的行业信息或机会，和大多数人相比是？',
    options: [
      { text: '和大多数人差不多，靠公开渠道', score: 1 },
      { text: '稍早一点，但没有质的差异', score: 2 },
      { text: '有一定信息优势，早于大多数人知道', score: 3 },
      { text: '有明显信息差，能提前判断和行动', score: 4 },
    ],
  },
  {
    dim: 3,
    text: '面对比你资历或收入高很多的人，你的状态是？',
    options: [
      { text: '紧张，不知道怎么相处，或感到自卑', score: 1 },
      { text: '可以接触，但通常处于被动倾听状态', score: 2 },
      { text: '能自然、平等地交流，相互有价值', score: 3 },
      { text: '能主动建立和维护这类关系，对等互动', score: 4 },
    ],
  },

  // ── 维度4：生活掌控 ──────────────────────────────────────
  {
    dim: 4,
    text: '你对自己每天时间的掌控程度是？',
    options: [
      { text: '几乎完全被工作、家庭或外部安排填满', score: 1 },
      { text: '有一点自由时间，但整体仍是被动状态', score: 2 },
      { text: '有一定自主时间，能做一些自己想做的事', score: 3 },
      { text: '时间高度自由，基本按自己意愿安排', score: 4 },
    ],
  },
  {
    dim: 4,
    text: '你是否被以下因素严重束缚：房贷/租金、打卡工作、育儿压力、债务？',
    options: [
      { text: '被多项严重束缚，几乎没有选择空间', score: 1 },
      { text: '有较大约束，选择空间有限', score: 2 },
      { text: '有约束，但有一定腾挪空间', score: 3 },
      { text: '约束较少，或已有能力主动驾驭这些约束', score: 4 },
    ],
  },
  {
    dim: 4,
    text: '如果你想换一座城市、换行业或改变生活方式，实际难度是？',
    options: [
      { text: '几乎不可能，成本和代价太高', score: 1 },
      { text: '理论上可以，但现实障碍很大', score: 2 },
      { text: '有挑战，但可以规划实现', score: 3 },
      { text: '随时可以，有足够资本和能力支撑转变', score: 4 },
    ],
  },
  {
    dim: 4,
    text: '对未来6个月自己的生活走向，你的掌控感是？',
    options: [
      { text: '几乎没有，感觉很多事不由我决定', score: 1 },
      { text: '一般，大方向不确定，只能控制小事', score: 2 },
      { text: '有较强掌控感，知道自己在做什么、往哪走', score: 3 },
      { text: '非常强，我在主动设计和推进自己的生活', score: 4 },
    ],
  },
  {
    dim: 4,
    text: '你现在的生活状态，整体评价是？',
    options: [
      { text: '感觉被生活推着走，很被动', score: 1 },
      { text: '凑合，没什么特别，也没什么不满', score: 2 },
      { text: '比较有方向感，生活在往好的方向走', score: 3 },
      { text: '满意，基本在过自己想要的生活', score: 4 },
    ],
  },

  // ── 维度5：成长潜力 ──────────────────────────────────────
  {
    dim: 5,
    text: '遇到困难或需要改变时，你的行动力是？',
    options: [
      { text: '容易拖延，知道该做但迟迟不动', score: 1 },
      { text: '会行动，但通常需要外部压力推动', score: 2 },
      { text: '能主动行动，执行力较强', score: 3 },
      { text: '高度自驱，问题出现前就已开始行动', score: 4 },
    ],
  },
  {
    dim: 5,
    text: '你是否有定期回顾自己行为和决策的习惯？',
    options: [
      { text: '几乎没有，不太反思', score: 1 },
      { text: '偶尔，出了问题才会复盘', score: 2 },
      { text: '有，会定期回顾和总结', score: 3 },
      { text: '系统性复盘，有持续改进的方法论', score: 4 },
    ],
  },
  {
    dim: 5,
    text: '面对变化（新技术、新环境、新规则），你的典型反应是？',
    options: [
      { text: '排斥或回避，感觉有威胁', score: 1 },
      { text: '观望，等别人先试再说', score: 2 },
      { text: '愿意尝试，积极适应', score: 3 },
      { text: '主动拥抱，甚至主动推动变化', score: 4 },
    ],
  },
  {
    dim: 5,
    text: '你现在的努力方向，5年后会积累成什么？',
    options: [
      { text: '不确定，感觉在原地踏步或在消耗', score: 1 },
      { text: '可能有一点积累，但不明显', score: 2 },
      { text: '会有一定积累，方向清晰', score: 3 },
      { text: '复利效应显著，正在建立真正的护城河', score: 4 },
    ],
  },
  {
    dim: 5,
    text: '对于"延迟满足"（放弃短期享受，投资长期回报），你的执行是？',
    options: [
      { text: '很难，倾向于即时消费和享乐', score: 1 },
      { text: '偶尔能做到，但长期坚持困难', score: 2 },
      { text: '大多数时候能做到，有中长期规划意识', score: 3 },
      { text: '延迟满足是习惯，投资未来已成生活常态', score: 4 },
    ],
  },
];

// ============================================================
// 结果层级定义（总分30–120，6个区间）
// ============================================================
const LEVELS = [
  {
    level: 1,
    name: '生存压力层',
    emoji: '🌱',
    tag: '第 1 层',
    tagline: '当下最重要的事是建立稳定性',
    minScore: 30,
    maxScore: 49,
    colorVar: '--lv1',
    status:
      '你目前处于人生的基础建设阶段，大部分精力用于应对收入压力、财务不安全感和基本生活的稳定问题。这不是终点，是大多数真正改变的起点。',
    strength:
      '处于底部意味着成长空间最大。清楚看到自己的现状，本身已经超越了许多不愿面对现实的人。',
    risk:
      '如果不主动打破当前状态，容易陷入"越忙越穷"的循环——时间和精力持续消耗，却没有积累。',
    nextSteps: [
      '优先建立3个月的应急储蓄，哪怕每月存500元',
      '学习一项有市场需求的可变现技能（不是通用知识）',
      '减少消费性负债，彻底避开高息贷款',
      '找到一个比你现在圈子质量高的人，保持真实联系',
    ],
    shareText: '知道自己在哪，比假装不知道强很多。',
  },
  {
    level: 2,
    name: '稳定打工层',
    emoji: '⚙️',
    tag: '第 2 层',
    tagline: '有了基础，但被主动权束缚',
    minScore: 50,
    maxScore: 64,
    colorVar: '--lv2',
    status:
      '你有相对稳定的收入和生活节奏，但大多数重要决策仍由外部环境决定。你不是过得不好，但你的选择权有限。',
    strength:
      '稳定是真正改变的前提。你有时间和余力开始布局下一阶段，这个窗口期比你想象的珍贵。',
    risk:
      '稳定感最容易让人停止成长。很多人在这里一待就是十年，以为稳定是安全，实际上是在慢慢被时代淘汰。',
    nextSteps: [
      '开始积累一项稀缺技能，而不只是完成手头工作',
      '建立初步储蓄目标——先存满3–6个月备用金',
      '主动拓展圈子，接触至少一个比你现在层次高的环境',
      '每周留出固定时间做一件5年后有价值的事',
    ],
    shareText: '稳，但不甘心就停在这里。',
  },
  {
    level: 3,
    name: '技能成长层',
    emoji: '📈',
    tag: '第 3 层',
    tagline: '正处于积累阶段，潜力可期',
    minScore: 65,
    maxScore: 79,
    colorVar: '--lv3',
    status:
      '你在建立自己的专业护城河，认知在提升，但资源网络和系统化收入还在积累阶段。你在往上走，但路还长。',
    strength:
      '你有方向感和成长意识，这已经超过了大多数同龄人。你处于一个关键窗口——未来3–5年的选择，决定你能到哪一层。',
    risk:
      '这个阶段最容易"假努力"——看起来很忙，实际上方向不对，或执行力不到位。成长最大的敌人不是懒惰，是低效的忙碌。',
    nextSteps: [
      '找到高质量的圈子或导师，加速认知升级',
      '明确1–2个核心方向，拒绝分散注意力',
      '尝试建立第一条小规模被动收入（哪怕每月几百元）',
      '开始思考"资产"而不只是"收入"',
    ],
    shareText: '我在往上走，只是路还长。',
  },
  {
    level: 4,
    name: '资源交换层',
    emoji: '🔗',
    tag: '第 4 层',
    tagline: '开始掌握选择权，进入正循环',
    minScore: 80,
    maxScore: 94,
    colorVar: '--lv4',
    status:
      '你具备了一定的行业价值和人脉资源，收入和选择空间在扩大，生活有了主动感。你开始能以资源换资源，进入正向飞轮。',
    strength:
      '你已经站在中上游。多数人终其一生无法到达你现在的位置。你有真实的选择权，这是绝大多数人没有的。',
    risk:
      '这个阶段最容易消费升级而不资产升级，以为到达终点，实际上只是中游。很多人在这里陷入"高收入低资产"的陷阱。',
    nextSteps: [
      '把收入的一部分系统性地转化为资产（不是消费品）',
      '深度经营3–5个关键人脉，而非广撒网',
      '思考如何减少对"时间换钱"模式的依赖',
      '开始布局个人品牌或行业影响力',
    ],
    shareText: '我开始有选择了，这个感觉很好。',
  },
  {
    level: 5,
    name: '系统掌控层',
    emoji: '⚡',
    tag: '第 5 层',
    tagline: '不靠时间赚钱，开始拥有杠杆',
    minScore: 95,
    maxScore: 109,
    colorVar: '--lv5',
    status:
      '你不只靠出售时间换收入，开始通过系统、团队、资产或品牌赚钱。你的时间和精力有较高的自由度，有能力主动设计生活。',
    strength:
      '你有多元收入、强资源网络和较强的抗风险能力。你建立了真正的护城河，市场波动对你的影响远低于普通人。',
    risk:
      '容易陷入"舒适区陷阱"——停止成长，满足于现有系统的运转。很多人在这里失去了向上的驱动力。',
    nextSteps: [
      '扩大影响力，参与更大规模的资源整合',
      '思考如何将个人能力转化为组织能力',
      '持续投资高质量关系，回馈和滋养圈层',
      '思考你的长期遗产：10年后你想留下什么',
    ],
    shareText: '我在为系统工作，不是为工资工作。',
  },
  {
    level: 6,
    name: '规则参与层',
    emoji: '🏆',
    tag: '第 6 层',
    tagline: '能影响规则，而不只是遵守规则',
    minScore: 110,
    maxScore: 120,
    colorVar: '--lv6',
    status:
      '你处于社会资源分配的主动位置，能够影响决策、资源和机会的流向。你不只是参与游戏，你在参与定制游戏规则。',
    strength:
      '高度自由、强大的资源网络，以及创造价值而非仅消费价值的能力。你的存在本身就是资源。',
    risk:
      '脱离现实感，或陷入权力与资源的消耗性游戏。在这个层级，最大的风险是忘记了"人"的部分。',
    nextSteps: [
      '用资源和影响力创造真正的社会价值，而非短期变现',
      '建立可持续的影响力遗产',
      '投资于能超越你的人，帮助更多人往上走',
      '保持谦逊——规则也在变，持续学习',
    ],
    shareText: '我参与的是规则，不只是游戏。',
  },
];

// ============================================================
// 状态
// ============================================================
let currentIndex = 0;
let answers = [];

// ============================================================
// 主流程
// ============================================================
function startTest() {
  currentIndex = 0;
  answers = [];
  showScreen('screen-question');
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentIndex];
  const total = QUESTIONS.length;
  const pct = (currentIndex / total) * 100;

  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressCount').textContent = `${currentIndex + 1} / ${total}`;
  document.getElementById('progressDim').textContent = DIMENSIONS[q.dim].name;

  document.getElementById('questionText').textContent = q.text;

  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';

  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-option';
    btn.innerHTML = `
      <span class="q-option-index">${labels[i]}</span>
      <span class="q-option-text">${opt.text}</span>
    `;
    btn.addEventListener('click', () => selectOption(btn, opt.score));
    container.appendChild(btn);
  });

  // 重置卡片动画
  const card = document.getElementById('questionCard');
  card.style.animation = 'none';
  requestAnimationFrame(() => {
    card.style.animation = '';
  });
}

function selectOption(btn, score) {
  // 防止重复点击
  const container = document.getElementById('optionsContainer');
  container.querySelectorAll('.q-option').forEach(b => b.style.pointerEvents = 'none');

  btn.classList.add('selecting');
  answers.push(score);

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < QUESTIONS.length) {
      renderQuestion();
    } else {
      showScreen('screen-loading');
      setTimeout(showResults, 1200);
    }
  }, 300);
}

// ============================================================
// 计算与展示结果
// ============================================================
function calculateScores() {
  // dimScores[i] = sum of scores for dimension i
  const dimScores = new Array(DIMENSIONS.length).fill(0);
  QUESTIONS.forEach((q, i) => {
    dimScores[q.dim] += answers[i] || 0;
  });
  const total = dimScores.reduce((a, b) => a + b, 0);
  return { dimScores, total };
}

function getLevel(total) {
  return LEVELS.find(l => total >= l.minScore && total <= l.maxScore) || LEVELS[0];
}

function showResults() {
  const { dimScores, total } = calculateScores();
  const level = getLevel(total);

  // 顶部英雄区
  document.getElementById('resultScore').textContent = total;
  document.getElementById('resultLevelTag').textContent = level.tag;
  document.getElementById('resultLevelName').textContent = level.name;
  document.getElementById('resultTagline').textContent = level.tagline;

  // 雷达图
  const canvas = document.getElementById('radarChart');
  const questionsPerDim = 5;
  const minPerDim = questionsPerDim * 1;
  const maxPerDim = questionsPerDim * 4;
  const normalized = dimScores.map(s => (s - minPerDim) / (maxPerDim - minPerDim));
  drawRadarChart(canvas, normalized);

  // 维度评分条
  const dimContainer = document.getElementById('dimScores');
  dimContainer.innerHTML = '';
  DIMENSIONS.forEach((dim, i) => {
    const pct = Math.round(((dimScores[i] - minPerDim) / (maxPerDim - minPerDim)) * 100);
    dimContainer.innerHTML += `
      <div class="dim-score-item">
        <span class="dim-score-name">${dim.name}</span>
        <div class="dim-score-bar-wrap">
          <div class="dim-score-bar" style="width:0%;background:${dim.color}" data-pct="${pct}"></div>
        </div>
        <span class="dim-score-val">${dimScores[i]}</span>
      </div>
    `;
  });

  // 分析文字
  document.getElementById('analysisStatus').textContent = level.status;
  document.getElementById('analysisStrength').textContent = level.strength;
  document.getElementById('analysisRisk').textContent = level.risk;

  const nextContainer = document.getElementById('analysisNext');
  nextContainer.innerHTML = level.nextSteps
    .map((s, i) => `<div class="next-step-item"><span class="step-num">${i + 1}.</span><span>${s}</span></div>`)
    .join('');

  // 分享卡片
  document.getElementById('shareEmoji').textContent = level.emoji;
  document.getElementById('shareLevelName').textContent = level.name;
  document.getElementById('shareScore').textContent = `总分 ${total} / 120`;
  document.getElementById('shareQuote').textContent = `"${level.shareText}"`;

  const shareCardDims = document.getElementById('shareCardDims');
  shareCardDims.innerHTML = DIMENSIONS.map((dim, i) => `
    <div class="share-dim-item">
      <div class="share-dim-name">${dim.name}</div>
      <div class="share-dim-val" style="color:${dim.color}">${dimScores[i]}</div>
    </div>
  `).join('');

  showScreen('screen-result');

  // 延迟触发评分条动画
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.querySelectorAll('.dim-score-bar').forEach(bar => {
        bar.style.transition = 'width 1s cubic-bezier(0.4,0,0.2,1)';
        bar.style.width = bar.dataset.pct + '%';
      });
    }, 300);
  });
}

// ============================================================
// 雷达图绘制
// ============================================================
function drawRadarChart(canvas, normalized) {
  const dpr = window.devicePixelRatio || 1;
  const logicalSize = canvas.offsetWidth || 300;
  canvas.width = logicalSize * dpr;
  canvas.height = logicalSize * dpr;

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const size = logicalSize;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.33;
  const labelR = size * 0.44;
  const n = DIMENSIONS.length;

  // 角度：从顶部开始，顺时针
  const angles = Array.from({ length: n }, (_, i) => (2 * Math.PI * i) / n - Math.PI / 2);

  ctx.clearRect(0, 0, size, size);

  // 背景网格（4层）
  for (let ring = 4; ring >= 1; ring--) {
    const r = (outerR * ring) / 4;
    ctx.beginPath();
    angles.forEach((a, i) => {
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = 'rgba(0,0,0,0.07)';
    ctx.lineWidth = 1;
    ctx.stroke();
    if (ring % 2 === 0) {
      ctx.fillStyle = 'rgba(0,0,0,0.02)';
      ctx.fill();
    }
  }

  // 辐射线
  angles.forEach(a => {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + outerR * Math.cos(a), cy + outerR * Math.sin(a));
    ctx.strokeStyle = 'rgba(0,0,0,0.07)';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // 数据多边形（带动画简化：直接绘制最终态）
  ctx.beginPath();
  angles.forEach((a, i) => {
    const r = outerR * Math.max(0.05, normalized[i]);
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(233,69,96,0.18)';
  ctx.fill();
  ctx.strokeStyle = '#E94560';
  ctx.lineWidth = 2;
  ctx.stroke();

  // 数据点
  angles.forEach((a, i) => {
    const r = outerR * Math.max(0.05, normalized[i]);
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#E94560';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // 标签
  ctx.font = `bold ${Math.round(size * 0.038)}px -apple-system, "PingFang SC", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  angles.forEach((a, i) => {
    const lx = cx + labelR * Math.cos(a);
    const ly = cy + labelR * Math.sin(a);
    // 彩色小圆点
    ctx.beginPath();
    ctx.arc(lx + 0, ly - 10, 4, 0, 2 * Math.PI);
    ctx.fillStyle = DIMENSIONS[i].color;
    ctx.fill();
    // 文字
    ctx.fillStyle = '#1C1C1E';
    ctx.fillText(DIMENSIONS[i].name, lx, ly + 4);
  });
}

// ============================================================
// 工具函数
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  // 等 DOM 重绘后再滚顶，否则 scrollTo 可能无效
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}

function restartTest() {
  showScreen('screen-welcome');
}

// ============================================================
// 层级探索抽屉
// ============================================================
const LEVEL_COLORS = ['#FF6B6B', '#FF9F43', '#FECA57', '#48DBFB', '#1DD1A1', '#A29BFE'];

function openLevelsDrawer() {
  const body = document.getElementById('levelsDrawerBody');
  if (!body.hasChildNodes()) {
    body.innerHTML = LEVELS.map((lv, i) => `
      <div class="level-card" id="lcard-${i}">
        <div class="level-card-bar" style="background:${LEVEL_COLORS[i]}"></div>
        <div class="level-card-header" onclick="toggleLevelCard(${i})">
          <span class="level-card-emoji">${lv.emoji}</span>
          <div class="level-card-info">
            <div class="level-card-tag">${lv.tag}</div>
            <div class="level-card-name">${lv.name}</div>
            <div class="level-card-tagline">${lv.tagline}</div>
          </div>
          <span class="level-card-chevron">▾</span>
        </div>
        <div class="level-card-body">
          <div class="level-card-section">
            <div class="level-card-section-label">📍 当前状态</div>
            <p>${lv.status}</p>
          </div>
          <div class="level-card-section">
            <div class="level-card-section-label">✅ 主要优势</div>
            <p>${lv.strength}</p>
          </div>
          <div class="level-card-section">
            <div class="level-card-section-label">⚠️ 最大风险</div>
            <p>${lv.risk}</p>
          </div>
          <div class="level-card-section">
            <div class="level-card-section-label">🚀 下一步建议</div>
            ${lv.nextSteps.map((s, j) => `
              <div class="next-step-item">
                <span class="step-num">${j + 1}.</span><span>${s}</span>
              </div>`).join('')}
          </div>
          <div class="level-card-section" style="padding-bottom:4px">
            <div class="level-card-section-label">💬 一句话</div>
            <p style="font-style:italic;color:var(--text)">"${lv.shareText}"</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  const overlay = document.getElementById('levelsDrawerOverlay');
  overlay.classList.add('open');
  // 防止背景滚动
  document.body.style.overflow = 'hidden';
}

function closeLevelsDrawer() {
  document.getElementById('levelsDrawerOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function handleDrawerOverlayClick(e) {
  // 点击遮罩背景（非抽屉本身）时关闭
  if (e.target === document.getElementById('levelsDrawerOverlay')) {
    closeLevelsDrawer();
  }
}

function toggleLevelCard(i) {
  const card = document.getElementById('lcard-' + i);
  card.classList.toggle('expanded');
}
