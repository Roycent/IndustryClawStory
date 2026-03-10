import './App.css'
import lobsterMark from './assets/lobster-mark.svg'

type Story = {
  title: string
  items: string[]
}

type ValueCard = {
  title: string
  text: string
}

type SceneCard = {
  title: string
  text: string
  bullets: string[]
}

const userStories: Story[] = [
  {
    title: '生产总览',
    items: [
      '作为班组长，我希望一进入系统就看到当班设备、工单、超时项和班次信息，这样我能快速判断本班重点风险。',
      '作为值班主管，我希望看到按责任人和模块拆分的值守状态表，这样我能立即知道问题落在谁身上。',
      '作为现场管理者，我希望在总览页看到未结项和升级风险，这样我能优先干预最容易影响产线的事项。',
      '作为交接责任人，我希望看到当前交接版本是否锁定、是否已接收，这样我能避免交接遗漏。',
    ],
  },
  {
    title: '设备助手工作台',
    items: [
      '作为班组长，我希望用自然语言直接查询某台设备本班为什么停机、还有哪些未结项，这样我不用在多个系统来回切换。',
      '作为机修人员，我希望助手自动带出设备上下文、历史维修、相关 SOP 和相似案例，这样我能更快定位故障。',
      '作为电气工程师，我希望助手把分析结果直接落成工单、复核项和交接项，这样我不用手工重复录入。',
      '作为现场执行人员，我希望看到任务链当前执行到哪一步、哪些步骤已完成、哪些人还未回执，这样我能持续跟踪任务闭环。',
    ],
  },
  {
    title: '告警 / 工单中心',
    items: [
      '作为设备工程师，我希望在一个列表里统一查看工单、告警和升级记录，这样我能集中处理，不漏单。',
      '作为值班主管，我希望按等级、状态、班次和是否待升级进行筛选，这样我能快速聚焦高优先级任务。',
      '作为运维负责人，我希望看到每个工单的来源、SLA、影响范围和当前进度，这样我能判断是否需要催办或升级。',
      '作为管理者，我希望保留升级记录链路，这样我能复盘响应机制是否合理。',
    ],
  },
  {
    title: '班组交接 / 任务历史',
    items: [
      '作为交班班长，我希望系统自动汇总本班异常、未结项、责任人和处理建议，这样我能更快完成高质量交接。',
      '作为接班班长，我希望看到交接摘要、待接收列表和接收确认状态，这样我能明确接了什么、还缺什么。',
      '作为白班责任人，我希望只看到分配给我的未结项、截止时间和回执要求，这样我能清楚知道接班后的第一优先级。',
      '作为生产主管，我希望查看异常时间线和各节点处理结果，这样我能复盘一次异常从发生到交接的全过程。',
    ],
  },
]

const valueCards: ValueCard[] = [
  {
    title: '从看见异常到推动处置',
    text: 'IndustryClaw 不只负责展示告警，而是把异常、责任人、SLA、升级与交接串成一条可执行链路。',
  },
  {
    title: '降低跨系统切换成本',
    text: '把监控、SOP、工单、通知和交接收敛到一个协同界面，让一线人员少切系统、少丢上下文。',
  },
  {
    title: '让工业助手进入执行链路',
    text: '助手不仅回答问题，还能生成工单、复核项、交接项，并明确哪些结果已经真正写回业务系统。',
  },
  {
    title: '提升班组交接质量',
    text: '把未结项、责任人、截止时间、接收确认和升级结果结构化，减少跨班断点与责任模糊。',
  },
]

const targetScenes: SceneCard[] = [
  {
    title: '离散制造工厂',
    text: '适用于包装、装配、电子、汽车零部件、机械制造等多产线、多班次协同场景。',
    bullets: ['班组长值守', '异常协同处置', '跨班交接闭环'],
  },
  {
    title: '流程工业 / 公辅运维',
    text: '适用于空压站、冷站、锅炉、公辅能源站等持续运行、告警频繁的场景。',
    bullets: ['趋势判断', '升级链路', '多岗位联动'],
  },
  {
    title: '24 小时连续生产',
    text: '面向夜班密集、交接复杂、异常跨班延续的工厂，强化任务接力而不是口头交班。',
    bullets: ['未结项承接', '接收确认', '责任可追溯'],
  },
  {
    title: '数字化样板工厂',
    text: '适合已有 MES、SCADA、工单系统和知识库，但缺统一 AI 入口与执行工作台的企业。',
    bullets: ['AI 助手落地', '系统整合展示', '客户演示与汇报'],
  },
]

const metrics = [
  { value: '4', label: '核心业务页面' },
  { value: '1', label: '现场协同主入口' },
  { value: 'N', label: '可接入业务系统' },
  { value: '24×7', label: '适配连续生产场景' },
]

function App() {
  return (
    <div className="site-shell">
      <header className="hero">
        <nav className="topbar">
          <div className="brand">
            <span className="brand-mark">
              <img src={lobsterMark} alt="IndustryClaw lobster icon" />
            </span>
            <div>
              <strong>IndustryClaw</strong>
              <span>工业现场任务协同产品原型</span>
            </div>
          </div>
          <div className="nav-links">
            <a href="#story">用户故事</a>
            <a href="#value">价值主张</a>
            <a href="#scenes">目标场景</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">INDUSTRIAL TASK COLLABORATION</p>
            <h1>让工业现场从“看到问题”走向“推动闭环”</h1>
            <p className="hero-text">
              IndustryClaw（工业龙虾）不是一个只负责展示数据的工业看板，
              而是一个面向班组值守、告警处置、工单执行和班组交接的现场协同官网样板页。
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#value">查看价值主张</a>
              <a className="secondary-btn" href="#story">浏览用户故事</a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card glow">
              <span>核心问题</span>
              <strong>现在哪件事最该处理？</strong>
              <small>谁负责、是否超时、是否已经写回系统、下一班有没有接住。</small>
            </div>
            <div className="metric-grid">
              {metrics.map((item) => (
                <div key={item.label} className="metric-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section intro-strip">
          <div className="section-heading narrow">
            <p className="eyebrow">WHY IT EXISTS</p>
            <h2>IndustryClaw 回答的是工业现场最真实的执行问题</h2>
            <p>
              它不是把更多图表堆在一起，而是把告警、工单、SOP、通知和交接台账连成一条现场任务链，
              让异常真正进入处置流程，而不是停留在“看到了”。
            </p>
          </div>
          <div className="problem-list">
            <div className="problem-item">现在哪件事最该处理？</div>
            <div className="problem-item">这件事该谁处理？有没有超时？</div>
            <div className="problem-item">助手是否已结合上下文给出可执行动作？</div>
            <div className="problem-item">处理结果是否写回工单、通知、交接台账？</div>
            <div className="problem-item">这班没处理完的事，下一班有没有明确接住？</div>
          </div>
        </section>

        <section id="story" className="section">
          <div className="section-heading">
            <p className="eyebrow">USER STORIES</p>
            <h2>围绕四个核心页面组织的一线用户故事</h2>
            <p>从班组长到机修、电气、运维负责人，再到接班班组，页面设计都围绕真实岗位动作展开。</p>
          </div>
          <div className="story-grid">
            {userStories.map((story) => (
              <article key={story.title} className="story-card">
                <div className="story-head">
                  <span className="story-index">0{userStories.indexOf(story) + 1}</span>
                  <h3>{story.title}</h3>
                </div>
                <ul>
                  {story.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="value" className="section alt-section">
          <div className="section-heading">
            <p className="eyebrow">VALUE PROPOSITION</p>
            <h2>产品价值主张</h2>
            <p>
              IndustryClaw 的价值，不在于把工业数据展示得更炫，而在于把分散在多个系统中的信息与动作串起来，
              形成一条可跟踪、可回执、可交接的执行闭环。
            </p>
          </div>
          <div className="value-grid">
            {valueCards.map((card) => (
              <article key={card.title} className="value-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="scenes" className="section">
          <div className="section-heading">
            <p className="eyebrow">TARGET SCENES</p>
            <h2>目标客户场景</h2>
            <p>适合需要把工业 AI、现场协同和跨班闭环真正做成业务能力的制造企业与运维场景。</p>
          </div>
          <div className="scene-grid">
            {targetScenes.map((scene) => (
              <article key={scene.title} className="scene-card">
                <h3>{scene.title}</h3>
                <p>{scene.text}</p>
                <div className="chip-row">
                  {scene.bullets.map((bullet) => (
                    <span key={bullet} className="chip">{bullet}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-section">
          <div className="cta-card">
            <p className="eyebrow">INDUSTRYCLAW STORY</p>
            <h2>把“从告警到处置，从工单到交接”的链路讲清楚</h2>
            <p>
              这是一个为 IndustryClaw 准备的官网故事页，适合用于产品介绍、客户演示、方案汇报与内部共识对齐。
            </p>
            <a className="primary-btn" href="https://github.com/Roycent/IndustryClaw" target="_blank" rel="noreferrer">
              查看原型项目
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
