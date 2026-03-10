import { useEffect } from 'react'
import './App.css'
import lobsterMark from './assets/lobster-mark.svg'

const highlights = ['龙虾智能体', '自动化执行', '告警工单', '班组交接']

const values = [
  { title: '龙虾特性', text: '像现场龙虾一样持续巡航、盯住异常、抓住未结项。' },
  { title: '智能体协同', text: '从查看信息延伸到理解上下文、调用系统和推动动作。' },
  { title: '自动化闭环', text: '把分析结果自动转成工单、复核项、通知与交接动作。' },
]

const roles = ['班组长 / 值班长', '机修 / 电气人员', '运维负责人', '接班班组']

const agents = [
  '巡检 Agent',
  '告警 Agent',
  '诊断 Agent',
  'SOP Agent',
  '工单 Agent',
  '调度 Agent',
  '交接 Agent',
  '能耗 Agent',
  '报表 Agent',
  '管理驾驶舱 Agent',
]

const skills = [
  '设备监测', '告警聚合', '异常归因', '趋势分析', '阈值判断', 'SOP 检索',
  '案例召回', '工单创建', '工单派发', '工单催办', '升级流转', '交接生成',
  '回执跟踪', '责任链绑定', '班次识别', '停机分析', '点检建议', '备件推荐',
  '能耗分析', '产线概览', '任务编排', '通知推送', '消息订阅', '报表汇总',
  '日报生成', '风险评分', '知识问答', '多系统调用', '角色分发', '闭环审计',
]

const processSteps = [
  { title: '持续巡航', text: '智能体持续关注设备、告警、任务与未结项。' },
  { title: '理解上下文', text: '自动关联 SOP、历史维修、班次责任链和相似案例。' },
  { title: '自动落单', text: '把建议转成工单、升级、通知和待办事项。' },
  { title: '跨班接力', text: '让交接从文字说明延伸成一条真正被接住的任务链。' },
]

const scenes = ['离散制造车间', '公辅与设备运维', '24 小时连续生产', '数字化样板工厂']
const outcomes = ['减少漏单', '缩短响应', '自动派发', '提升闭环率']

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
              <span>工业龙虾 · 智能体协同</span>
            </div>
          </div>
          <div className="nav-links">
            <a href="#value">价值</a>
            <a href="#agents">Agents</a>
            <a href="#flow">流程</a>
            <a href="#scenes">场景</a>
          </div>
        </nav>

        <div className="hero-content compact">
          <div className="hero-copy">
            <p className="eyebrow">INDUSTRIAL LOBSTER AGENT</p>
            <h1>让工业现场真正形成任务闭环</h1>
            <p className="hero-text">一只面向工业现场的龙虾智能体，持续巡航、理解上下文、自动派发任务，帮助班组把跨班交接真正接起来。</p>
            <div className="hero-actions">
              <a className="primary-btn" href="#value">查看产品价值</a>
              <a className="secondary-btn" href="https://industryclaw.vercel.app" target="_blank" rel="noreferrer">查看原型演示</a>
            </div>
          </div>

          <div className="hero-panel compact-panel">
            <div className="panel-card glow reveal delay-1">
              <span>核心能力</span>
              <strong>巡航、理解、执行、交接</strong>
              <small>把工业现场里的监控、知识、工单与通知串成一条自动化执行链。</small>
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
            <h2>看见问题，也推动动作</h2>
            <p className="section-text">IndustryClaw 让智能体直接进入现场执行链路，持续把异常、任务和交接往前推。</p>
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

        <section id="agents" className="section reveal compact-screen alt-section">
          <div className="section-heading narrow">
            <p className="eyebrow">AGENTS & SKILLS</p>
            <h2>自带 10+ 个 Agents，30+ 个 Skills</h2>
            <p className="section-text">提供一整套可组合的工业智能体与技能体系，覆盖巡检、诊断、工单、交接、报表等核心环节。</p>
          </div>
          <div className="agent-skill-layout">
            <div className="agent-grid">
              {agents.map((agent, index) => (
                <div key={agent} className={`agent-card reveal delay-${(index % 3) + 1}`}>{agent}</div>
              ))}
            </div>
            <div className="skill-cloud reveal delay-2">
              {skills.map((skill) => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="flow" className="section reveal compact-screen">
          <div className="section-heading narrow">
            <p className="eyebrow">FLOW</p>
            <h2>一条自动化的现场流程</h2>
            <p className="section-text">从持续巡航，到智能判断，再到自动落单与跨班接力，整个链路更顺也更稳。</p>
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

        <section id="scenes" className="section reveal compact-screen alt-section">
          <div className="section-heading narrow">
            <p className="eyebrow">SCENES</p>
            <h2>适用场景</h2>
            <p className="section-text">适合需要把工业 AI、智能体协同和自动化闭环真正落到现场的企业。</p>
          </div>
          <div className="scene-grid single-line-grid">
            {scenes.map((scene, index) => (
              <article key={scene} className={`scene-card simple-card reveal delay-${(index % 3) + 1}`}>
                <h3>{scene}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal compact-screen">
          <div className="section-heading narrow">
            <p className="eyebrow">OUTCOME</p>
            <h2>最终得到什么</h2>
            <p className="section-text">更少漏单、更快响应、更强自动化和更高闭环率。</p>
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
            <h2>一只真正会干活的工业龙虾</h2>
            <p>它能巡航、分析、调用系统并自动推动现场任务闭环，把现场协同真正做成一套可运行的机制。</p>
            <a className="primary-btn" href="https://github.com/Roycent/IndustryClawStory" target="_blank" rel="noreferrer">查看官网源码</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
