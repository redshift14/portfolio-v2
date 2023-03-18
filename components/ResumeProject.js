import classes from '../styles/ResumeProject.module.css'

const ResumeProject = ({ name, description, time, locale, techUsed }) => {

  const {project_container, project_head,project_description, techUsed_container, techs, tech } = classes

  return (
    <div className={project_container}>
      <div className={project_head}>
        <h5>{locale == 'ar-DZ' ? name.ar : name.en}</h5>
        <h6>{'- '}{locale == 'ar-DZ' ? time.ar : time.en}</h6>
      </div>
      <p className={project_description}>
        {locale == 'ar-DZ' ? description.ar : description.en}
      </p>
      <div className={techUsed_container}>
        <h6>
          {locale == 'ar-DZ' ? 'التقنيات المستعملة:' : 'Technologies used:'}
        </h6>
        <div className={techs}>
          {
            techUsed.map(item => {
              return (
                <div className={tech} key={item._key}>
                  {locale == 'ar-DZ' ? item.ar : item.en}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ResumeProject