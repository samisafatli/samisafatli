
import TimelineItem from '../TimelineItem/TimelineItem'
import timeline from '../../data/timeline'
import Title from '../Title/Title'

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
       <div className="w-full md:w-7/12">
       <Title>Timeline</Title>
          {timeline.map(item => (
             <TimelineItem
                key={item.title} 
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details}
             />
          ))}
       </div>
    </div>
 )
}

export default Timeline