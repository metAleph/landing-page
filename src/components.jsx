import React from 'react';

/* Header */
export const Header = (props) => (
    <section>
        <h1 className={props.titleStyle}>{props.title}</h1>
        <p className={props.subtitleStyle}>{props.subtitle}</p>
    </section>
)

/* About */
export const About = (props) => (
    <section>
        <h1 className={props.titleStyle}>{props.title}</h1>
        <p className={props.contentStyle}>{props.content}</p>
    </section>
)
/* Project */
export const Project = (props) => (
    <section>
        <h1 className={props.titleStyle}>{props.title}</h1>
        {
            props.content.map((project) => {
                return <p key={project.key} className={props.contentStyle}><a href={project.url} target="_blank">{project.name}</a></p>
            })
        }
    </section>
)
/* Team */
export const Team = (props) => (
    <section>
        <h1 className={props.titleStyle}>{props.title}</h1>
        {
            props.content.map((member) => {
                return <p key={member.key} className={props.contentStyle}>{member.member} {member.field} {member.year} </p>
            })
        }

    </section>
)
/* Footer */
const Footer = (props) => (
    <footer className={props.sectionStyle}>
        <div>
            <p className={props.contentStyle}>{props.content}</p>
        </div>
    </footer>
)
/* App */
export const App = (props) => (
    <section>
        <Header titleStyle={props.styleClass.headerTitle} title={props.data.headerTitle}
            subtitleStyle={props.styleClass.headerSubtitle} subtitle={props.data.headerSubtitle} />
        <About titleStyle={props.styleClass.section} contentStyle={props.styleClass.sectionContent}
            title={props.data.aboutTitle} content={props.data.about} />
        <Project titleStyle={props.styleClass.section} contentStyle={props.styleClass.sectionContent}
            title={props.data.projectTitle} content={props.data.project} />
        <Team titleStyle={props.styleClass.section} contentStyle={props.styleClass.sectionContent}
            title={props.data.teamTitle} content={props.data.team} />
    </section>
)