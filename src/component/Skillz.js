import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend} from 'recharts';

function Skillz(props) {
    const data = [
        {
          subject: 'HTML',
          A: 98,
          B: 80,
          fullMark: 150,
        },
        {
          subject: 'CSS',
          A: 99,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'sass',
          A: 98,
          B: 100,
          fullMark: 150,
        },

        {
          subject: 'JAVASCRIPT',
          A: 87,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'REACT.JS',
          A: 70,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'ADOBE PHOTOSHOP',
          A: 60,
          B: 90,
          fullMark: 150,
        },
        {
          subject: 'python',
          A: 45,
          B: 90,
          fullMark: 150,
        },
        {
          subject: 'algoritmie',
          A: 82,
          B: 90,
          fullMark: 150,
        },

      ];
      const dataSoft = [
        {
          subject: 'Adaptabilité',
          A: 95,
          B: 80,
          fullMark: 150,
        },
        {
          subject: 'Sociabilité',
          A: 78,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Resistance au stress',
          A: 82,
          B: 100,
          fullMark: 150,
        },
        {
          subject: `esprit d'équipe`,
          A: 97,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Curiosité',
          A: 100,
          B: 90,
          fullMark: 150,
        },

      ];
     
      
  return (<>
  
   <button class="close-button-radar" onClick={() => props.toogleFromRadarToCOntent(false)}>
          <span class="inner">
            <span class="label">Fermer</span>
          </span>
        </button>
    <ResponsiveContainer width="70%" height="70%">
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <PolarGrid  stroke='black' opacity={0.5}/>
      <PolarAngleAxis dataKey={`subject`} stroke="black" />
      <PolarRadiusAxis angle={18} domain={[0, 100]} stroke="black" />
     <Radar name="hard Skill" dataKey="A" stroke="#82ca9d" fill="yellow" fillOpacity={0.6} />
     <Legend verticalAlign="top" height={36} color="red" />
    </RadarChart>
  </ResponsiveContainer>

  <ResponsiveContainer width="70%" height="70%">
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataSoft}>
      <PolarGrid  stroke='black' opacity={0.5}/>
      <PolarAngleAxis dataKey={`subject`} stroke="black" />
      <PolarRadiusAxis angle={18} domain={[0, 100]} stroke="black" />
     <Radar name="Soft Skill" dataKey="A" stroke="#82ca9d" fill="brown" fillOpacity={0.6} />
     <Legend verticalAlign="top" height={36} />
    </RadarChart>
  </ResponsiveContainer>
  </>
  )
}

export default Skillz