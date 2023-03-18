import { useRouter } from 'next/router'
import Image from 'next/image'
import ResumeProject from './ResumeProject'
import classes from '../styles/ResumePage.module.css' 
import mailIcon from '../public/icons/mail.png'
import linkedInIcon from '../public/icons/linkedin.png'
import locationIcon from '../public/icons/address.png'

const ResumePage = ({ data }) => {

  const { locale } = useRouter()

  const { education, email, languages, linkedIn, location, projectsDone, skills, subtitle } = data

  const { main, main_ar, title, subtitleClass, contact_info_container, contact_item, section_title, section_container, skills_container, skill_container, one_skill, study_container, study_head, study_content, language_container } = classes

  return (
    <section className={locale == 'ar-DZ' ? main_ar : main}>
      <h1 className={title}>{locale == 'ar-DZ' ? 'أنس عريف' : 'Anas Arif'}</h1>
      <h3 className={subtitleClass}>{locale == 'ar-DZ' ? subtitle.ar : subtitle.en}</h3>

      <div className={contact_info_container}>
        <div className={contact_item}>
          <Image src={mailIcon} priority alt='mail' />
          <a target='_blank' rel='noreferrer' href={`mailto:${email}`}>{email}</a>
        </div>
        <div className={contact_item}>
          <Image src={linkedInIcon} priority alt='linkedIn' />
          <a target='_blank' rel='noreferrer' href={linkedIn}>LinkedIn</a>
        </div>
        <div className={contact_item}>
          <Image src={locationIcon} priority alt='location' />
          <p>{locale == 'ar-DZ' ? location.ar : location.en}</p>
        </div>
      </div>

      <div className={section_container}>
        <h4 className={section_title}>
          {locale == 'ar-DZ' ? 'المشاريع المنجزة' : 'Projects done'}
        </h4>
        {
          projectsDone.map(project => {
            const { _key, description, name, techUsed, time } = project
            return (
              <ResumeProject
                key={_key}
                name={name}
                description={description} 
                time={time}
                techUsed={techUsed}
                locale={locale}
              />
            )
          })
        }
      </div>
      
      <div className={section_container}>
        <h4 className={section_title}>
          {locale == 'ar-DZ' ? 'المهارات' : 'Skills'}
        </h4>
        {
          skills.map(skill => {
            return (
              <div className={skills_container} key={skill._key}>           
                <p>{locale == 'ar-DZ' ? skill.typeTitle.ar : skill.typeTitle.en}</p>
                <div className={skill_container}>
                  {
                    skill.skills.map(indevidualSkill => {
                      return (
                        <div key={indevidualSkill._key} className={one_skill}>
                          {locale == 'ar-DZ' ? indevidualSkill.ar : indevidualSkill.en}
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>

      <div className={section_container}>
        <h4 className={section_title}>
          {locale == 'ar-DZ' ? 'الدراسات' : 'Education'}
        </h4>
        {
          education.map(item => {
            const { certificateSubitle, certificateTitle, institution, period, _key } = item
            return (
              <div className={study_container} key={_key}>
                <h5>{locale == 'ar-DZ' ? institution.ar : institution.en}</h5>
                <div className={study_content}>
                  <div className={study_head}>
                    <h6>{locale == 'ar-DZ' ? certificateTitle.ar : certificateTitle.en}</h6>
                    <p>{'- '}{locale == 'ar-DZ' ? period.ar : period.en}</p>
                  </div>
                  <p>{locale == 'ar-DZ' ? certificateSubitle.ar : certificateSubitle.en}</p>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className={section_container}>
        <h4 className={section_title}>
          {locale == 'ar-DZ' ? 'اللغات' : 'Languages'}
        </h4>
        {
          languages.map(language => {
            const { level, name, _key } = language
            return (
              <div key={_key} className={language_container}>
                <h5>{locale == 'ar-DZ' ? name.ar : name.en}</h5>
                <h6>{locale == 'ar-DZ' ? level.ar : level.en}</h6>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default ResumePage