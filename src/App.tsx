import { useEffect } from 'react'
import './App.css'
import lobsterMark from './assets/lobster-mark.svg'

const highlights = ['班次总览', '设备助手', '告警工单', '班组交接']

const values = [
  { title: '发现问题', text: '统一查看设备、告警、任务与风险。' },
  { title: '推动处置', text: '把分析结果直接转成工单、复核项和升级动作。' },
  { title: '闭环交接', text: '未结项、责任人、回执与接收状态一屏可见。' },
]

const roles = ['班组长 / 值班长', '机修 / 电气人员', '运维负责人', '接班班组']

const processSteps = [
  { title: '告警出现', text: '系统捕捉异常并锁定设备上下文。' },
  { title: '助手分析', text: '自动关联 SOP、历史维修与相似案例。' },
  { title: '任务落单', text: '生成工单、复核项与升级动作。' },
  { title: '跨班交接', text: '把未结项和责任链明确交给下一班。' },
]

const scenes = [
  '离散制造车间',
  '公辅与设备运维',
  '24 小时连续生产',
  '数字化样板工厂',
]

const outcomes = ['减少漏单', '缩短响应', '降低跨班断点', '提升闭环率']

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <header className="hero reveal revealed">
        <nav className="topbar">
          <div className="brand">
            <span className="brand-mark">
              <img src={lobsterMark} alt="IndustryClaw lobster icon" />
            </span>
            <div>
              <strong>IndustryClaw</strong>
              <span>工业现场任务协同</span>
            </div>
          </div>
          <div className="nav-links">
            <a href="#value">价值</a>
            <a href="#flow">流程</a>
            <a href="#scenes">场景</a>
            <a href="https://github.com/Roycent/IndustryClaw" target="_blank" rel="noreferrer">原型</a>
          </div>
        </nav>

        <div className="hero-content compact">
          <div className="hero-copy">
            <p className="eyebrow">INDUSTRIAL TASK COLLABORATION</p>
            <h1>让工业现场真正形成任务闭环</h1>
            <p className="hero-text">面向班次值守、告警处置、工单执行与班组交接的工业协同产品原型。</p>
            <div className="hero-actions">
              <a className="primary-btn" href="#value">查看产品价值</a>
              <a className="secondary-btn" href="https://industryclaw.vercel.app" target="_blank" rel="noreferrer">查看原型演示</a>
            </div>
          </div>

          <div className="hero-panel compact-panel">
            <div className="panel-card glow reveal delay-1">
              <span>核心能力</span>
              <strong>从告警到处置，再到交接</strong>
              <small>把监控、SOP、工单和交接串成一个现场执行入口。</small>
            </div>
            <div className="chip-row highlight-row no-wrap reveal delay-2">
              {highlights.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="value" className="section reveal compact-screen">
          <div className="section-heading narrow">
            <p className="eyebrow">VALUE</p>
            <h2>少看板，多执行</h2>
            <p className="section-text">IndustryClaw 不只是展示数据，而是推动异常真正进入执行链路。</p>
          </div>
          <div className="value-grid triple-grid">
            {values.map((item, index) => (
              <article key={item.title} className={`value-card reveal delay-${index + 1}`}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal compact-screen">
          <div className="section-heading narrow">
            <p className="eyebrow">ROLE</p>
            <h2>服务谁</h2>
          </div>
          <div className="role-row">
            {roles.map((role, index) => (
              <div key={role} className={`role-pill reveal delay-${(index % 3) + 1}`}>{role}</div>
            ))}
          </div>
        </section>

        <section id="flow" className="section reveal compact-screen alt-section">
          <div className="section-heading narrow">
            <p className="eyebrow">FLOW</p>
            <h2>一条更顺的现场流程</h2>
            <p className="section-text">从异常出现，到任务落单，再到交接闭环，每一步都更清楚。</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article key={step.title} className={`process-card reveal delay-${(index % 3) + 1}`}>
                <span className="process-index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="scenes" className="section reveal compact-screen">
          <div className="section-heading narrow">
            <p className="eyebrow">SCENES</p>
            <h2>适用场景</h2>
            <p className="section-text">适合需要把工业 AI、现场协同和跨班闭环真正做成业务能力的企业。</p>
          </div>
          <div className="scene-grid single-line-grid">
            {scenes.map((scene, index) => (
              <article key={scene} className={`scene-card simple-card reveal delay-${(index % 3) + 1}`}>
                <h3>{scene}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal compact-screen alt-section">
          <div className="section-heading narrow">
            <p className="eyebrow">OUTCOME</p>
            <h2>最终得到什么</h2>
            <p className="section-text">不是更多页面，而是更清晰的责任链、更少的断点和更高的闭环率。</p>
          </div>
          <div className="outcome-row">
            {outcomes.map((item, index) => (
              <div key={item} className={`outcome-pill reveal delay-${(index % 3) + 1}`}>{item}</div>
            ))}
          </div>
        </section>

        <section className="section cta-section reveal compact-screen">
          <div className="cta-card">
            <p className="eyebrow">INDUSTRYCLAW STORY</p>
            <h2>工业现场协同，不止是看见问题</h2>
            <p>更重要的是让问题被接住、被处理、被交接、被闭环。</p>
            <a className="primary-btn" href="https://github.com/Roycent/IndustryClawStory" target="_blank" rel="noreferrer">
              查看官网源码
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
