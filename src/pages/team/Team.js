import TeamCard from '../../components/TeamCard'
import './Team.css'

export default function Team () {
  const finalyear = [
    { name: 'Khwab Kalra', link: 'https://www.linkedin.com/in/khwab2064', imageLink: 'https://i.imgur.com/llebqmU.jpg' },
    { name: 'Shubham Sharma', link: 'https://www.linkedin.com/in/2211shubham', imageLink: 'https://i.imgur.com/IWZCYsO.jpg' },
    { name: 'Prakhar Pratyush', link: 'https://www.linkedin.com/in/prakhar1144/', imageLink: 'https://i.imgur.com/REY2Klb.png' },
    { name: 'Bhavesh Uttawani', link: 'https://www.linkedin.com/in/bhavesh-uttawani-23023a202', imageLink: 'https://i.imgur.com/4f3uX26.jpg' },
    { name: 'Nandini Sharma', link: 'https://www.linkedin.com/in/nandini-sharma-70551819b', imageLink: 'https://i.imgur.com/5qzm4zV.jpg' },
    { name: 'Priyanka Mandal', link: 'https://www.linkedin.com/in/priyanka-mandal-370667156', imageLink: 'https://i.imgur.com/ZuKTwfX.jpg' },
    { name: 'Rohit Sharma', link: 'https://www.linkedin.com/in/rohitsharma077', imageLink: 'https://i.imgur.com/IA22kL4.jpg' },
    { name: 'Dipesh Kumar', link: 'https://www.linkedin.com/in/dipesh728', imageLink: 'https://i.imgur.com/5VEDK83.jpg' },
    { name: 'Swapnil Karn', link: 'https://www.linkedin.com/in/swapnil-karn-9988b6216', imageLink: 'https://i.imgur.com/FbYnfTz.jpg' }
  ]

  const cc = [
    { name: 'Gaurav Kumar', link: 'https://www.linkedin.com/in/gaurav-kumar-146638217/', imageLink: 'https://i.imgur.com/oXMSDeQ.jpg' },
    { name: 'Gopanshu Thakur', link: 'https://www.linkedin.com/in/gopanshu-thakur-b94b45177/', imageLink: 'https://i.imgur.com/nJkANMx.jpg' }
  ]

  const thirdyear = [
    { name: 'Plaksha Sharma', link: 'https://www.linkedin.com/in/plaksha-sharma-011628224', imageLink: 'https://i.imgur.com/hhS4vPG.jpg' },
    { name: 'Jiya Kakani', link: 'https://www.linkedin.com/in/jiya-kakani-bab172204', imageLink: 'https://i.imgur.com/SOlnQz1.jpg' },
    { name: 'Joiyad Khan', link: 'https://www.linkedin.com/in/joiyad-khan-3ab0bb203', imageLink: 'https://i.imgur.com/H1VbVfs.jpg' },
    { name: 'Aditya Kant', link: 'https://www.linkedin.com/in/aditya-kant-4640bb210', imageLink: 'https://i.imgur.com/g3mNXte.jpg' },
    { name: 'Ankush verma', link: 'https://www.linkedin.com/in/ankush-verma-582820213', imageLink: 'https://i.imgur.com/m6bffJc.jpg' },
    { name: 'Ipshita Singh', link: 'https://www.linkedin.com/in/ipshita-singh-910679203', imageLink: 'https://i.imgur.com/PeR6tGL.jpg' },
    { name: 'Akhileshwar singh', link: 'https://www.linkedin.com/in/akhileshwar-singh-427580208', imageLink: 'https://i.imgur.com/HU5TC1T.jpg' },
    { name: 'Sujal Thakur', link: 'https://www.linkedin.com/in/sujal-thakur-0a245120a', imageLink: 'https://i.imgur.com/AJLHNrN.jpg' },
    { name: 'Aayush Thakur', link: 'https://www.linkedin.com/in/aayush-thakur175', imageLink: 'https://i.imgur.com/I9Vuse5.jpg' },
    { name: 'Simran thakur', link: 'https://www.linkedin.com/in/simran-thakur-504733264', imageLink: 'https://i.imgur.com/Y8uE9uF.jpg' },
    { name: 'Shreshtha Verma', link: 'https://www.linkedin.com/in/shreshtha-verma-015370203/', imageLink: 'https://i.imgur.com/iUuFZEI.jpg' },
    { name: 'Ronak Gupta ', link: 'https://www.linkedin.com/in/ronak-gupta-8bb688213', imageLink: 'https://i.imgur.com/0q8xeYW.jpg' },
    { name: 'Mayank Lalwani', link: 'https://www.linkedin.com/in/mayank-lalwani-bbb890210/', imageLink: 'https://i.imgur.com/94h30nV.jpg' },
    { name: 'Archit Gupta', link: 'https://www.linkedin.com/in/archit-gupta-6578921ba', imageLink: 'https://i.imgur.com/uXFalDV.jpg' },
    { name: 'Saumya Soni', link: 'https://www.linkedin.com/in/saumya--soni/', imageLink: 'https://i.imgur.com/kHEtgLH.jpg' },
    { name: 'Shruti Avasthi', link: 'https://www.linkedin.com/in/shruti-avasthi-8bb372203', imageLink: 'https://i.imgur.com/p2VRh16.jpg' },
    { name: 'Ajay Sharma', link: 'https://www.linkedin.com/in/ajay-sharma-79b210233', imageLink: 'https://i.imgur.com/2NfqVQZ.jpg' },
    { name: 'Ajay Thakur', link: 'https://www.linkedin.com/in/ajay-thakur-90aa531b7', imageLink: 'https://i.imgur.com/5wCFUZM.jpg' }
  ]

  const secondyear = [
    { name: 'Vatsalya Sharma', link: 'https://www.linkedin.com/in/vatsalya-sharma-698811224', imageLink: 'https://i.imgur.com/qK1Kthv.jpg' },
    { name: 'Abhinav Jaiswal', link: 'https://www.linkedin.com/in/abhinav-jaiswal-1b5860211', imageLink: 'https://i.imgur.com/CHgCA48.jpg' },
    { name: 'Hardik Chauhan ', link: 'https://www.linkedin.com/in/hardik-chauhan-162762228', imageLink: 'https://i.imgur.com/3PMZdOJ.jpg' },
    { name: 'Aditya Sood', link: 'https://www.linkedin.com/in/aditya-sood-630189225', imageLink: 'https://i.imgur.com/JLagLBR.jpg' },
    { name: 'Ekansh Verma', link: 'https://www.linkedin.com/in/ekansh-verma-469557228', imageLink: 'https://i.imgur.com/76oqknm.jpg' },
    { name: 'Leena', link: 'https://www.linkedin.com/in/leena105', imageLink: 'https://i.imgur.com/qlNAGi3.jpg' },
    { name: 'Vivek Kumar ', link: 'https://www.linkedin.com/in/vivek-kumar-b95675231', imageLink: 'https://i.imgur.com/oJqhZ5S.jpg' },
    { name: 'Ayushi', link: 'https://www.linkedin.com/in/ayushi-8214a1261', imageLink: 'https://i.imgur.com/oUN7ejV.jpg' },
    { name: 'Chandan ', link: 'https://www.linkedin.com/in/chandan-kumawat-305801228', imageLink: 'https://i.imgur.com/K5wx0ht.jpg' },
    { name: 'Aryan Bhardwaj ', link: 'https://instagram.com/aryan8b?igshid=Mzc0YWU1OWY=', imageLink: 'https://i.imgur.com/SIa10yY.jpg' },
    { name: 'Priyanshu Pant', link: 'https://instagram.com/priyanshu_pant_13?igshid=NTE5MzUyOTU=', imageLink: 'https://i.imgur.com/NvXVgr7.jpg' },
    { name: 'Aditya Kapoor', link: 'https://www.linkedin.com/in/aditya-kapoor-a271a8261', imageLink: 'https://i.imgur.com/ffkjmvX.jpg' },
    { name: 'Rahul Bhari', link: 'https://www.linkedin.com/in/connect-to-rahul-bhari', imageLink: 'https://i.imgur.com/GzYROtI.jpg' },
    { name: 'Saksham Thakur', link: 'https://www.linkedin.com/in/saksham-thakur-85a112230/', imageLink: 'https://i.imgur.com/XprthIw.jpg' },
    { name: 'Ishwer Dutt', link: 'https://www.linkedin.com/in/ishwer-dutt-780785217', imageLink: 'https://i.imgur.com/t5WydKr.jpeg' }
  ]

  const firstyear = [
    {
      name: 'Mohit Choudhary',
      link: 'https://www.linkedin.com/in/mohit-choudhary-b98a46263',
      imageLink: 'https://i.imgur.com/AAnsvfd.jpg'
    },
    {
      name: 'Abhishek Duharia',
      link: 'https://www.linkedin.com/in/abhishek-duharia-2678b2266',
      imageLink: 'https://i.imgur.com/u5RxLFF.jpeg'
    },
    {
      name: 'Gaurav Kumar',
      link: 'https://in.linkedin.com/in/gaurav-kumar-422b3a1a6',
      imageLink: 'https://i.imgur.com/sNTQv3z.jpeg'
    },
    {
      name: 'Sakshi Meena',
      link: 'https://www.linkedin.com/in/sakshi-meena-77ab2625a',
      imageLink: 'https://i.imgur.com/fonCzZn.jpeg'
    },
    {
      name: 'Muskaan Bansal',
      link: 'https://www.linkedin.com/in/muskaan-bansal-b4ab38259',
      imageLink: 'https://i.imgur.com/kSjtdRF.jpg'
    },
    {
      name: 'Sachin Kulhari ',
      link: 'https://www.linkedin.com/in/sachin-kulhari-5a7a83258',
      imageLink: 'https://i.imgur.com/8ZGvbtm.jpeg'
    },
    {
      name: 'Saumitra Tandon ',
      link: 'https://www.linkedin.com/in/saumitra-tandon-1031a5262',
      imageLink: 'https://i.imgur.com/72DQrqw.jpg'
    },

    {
      name: 'Vikash Kumar Jakhar',
      link: 'https://www.linkedin.com/in/vikash-kumar-jakhar-81ab60258',
      imageLink: 'https://i.imgur.com/5dS4Iyp.jpeg'
    },
    {
      name: 'Ayyam Ahammad Gauri ',
      link: 'https://www.linkedin.com/in/ayyam-ahammad-gauri-26abb6252',
      imageLink: 'https://i.imgur.com/JNTE4yt.jpg'
    },
    {
      name: 'Ankit kumar',
      link: 'https://www.linkedin.com/in/a-patel-708b4a211',
      imageLink: 'https://i.imgur.com/18FnUyb.jpg'
    },
    {
      name: 'Tuhina Pegu',
      link: 'https://www.linkedin.com/in/tuhina-pegu-997a9a268',
      imageLink: 'https://i.imgur.com/qSJwb14.jpeg'
    },
    {
      name: 'Muskan Saini',
      link: 'https://www.linkedin.com/in/muskan-saini-8643ba224',
      imageLink: 'https://i.imgur.com/a91JvAN.jpg'
    },
    {
      name: 'Vinay Ramteke',
      link: 'https://www.linkedin.com/in/vinay-ramteke-632b37263',
      imageLink: 'https://i.imgur.com/FaGk8h9.jpg'
    },
    {
      name: 'Priyanshi Lakhotia',
      link: 'https://www.linkedin.com/in/priyanshi-lakhotia-a4550725a',
      imageLink: 'https://i.imgur.com/0Fakdcp.jpg'
    },
    {
      name: 'Aashish ',
      link: 'https://www.linkedin.com/in/ashish-saini-44a648250',
      imageLink: 'https://i.imgur.com/urMvU8q.jpeg'
    },
    {
      name: 'Himanshu Nirmal',
      link: 'https://www.linkedin.com/public-profile/settings',
      imageLink: 'https://i.imgur.com/kpSQrY0.jpeg'
    }
  ]

  return (
    <div className='team-page'>

      <div className='team-content'>
        <h1 className='year-heading'>Club Coordinators</h1>
      </div>

      <div className='flex-container'>
        {cc.map((member, index) => <TeamCard key={index} name={member.name} link={member.link} imageLink={member.imageLink} />)}
      </div>

      <div className='team-content'>
        <h1 className='year-heading'>Final Year</h1>
      </div>

      <div className='flex-container'>
        {finalyear.map((member, index) => <TeamCard key={index} name={member.name} link={member.link} imageLink={member.imageLink} />)}
      </div>

      <div className='team-content'>
        <h1 className='year-heading'>Coordinators</h1>
      </div>

      <div className='flex-container'>
        {thirdyear.map((member, index) => <TeamCard key={index} name={member.name} link={member.link} imageLink={member.imageLink} />)}
      </div>

      <div className='team-content'>
        <h1 className='year-heading'>Executive Members</h1>
      </div>

      <div className='flex-container'>
        {secondyear.map((member, index) => <TeamCard key={index} name={member.name} link={member.link} imageLink={member.imageLink} />)}
      </div>

      <div className='team-content'>
        <h1 className='year-heading'>Volunteers</h1>
      </div>

      <div className='flex-container'>
        {firstyear.map((member, index) => <TeamCard key={index} name={member.name} link={member.link} imageLink={member.imageLink} />)}
      </div>
    </div>
  )
}
