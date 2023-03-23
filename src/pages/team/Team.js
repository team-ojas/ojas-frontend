import TeamCard from '../../components/TeamCard'
import './Team.css'

export default function Team () {
  const finalyear = [
    { name: 'Khwab Kalra', link: 'https://www.linkedin.com/in/khwab2064', imageLink: ' http://drive.google.com/uc?export=view&id=1oovQ1lySdpkRHmz5eW6LNHVmAOuM8-M6' },
    { name: 'Prakhar Pratyush', link: 'https://www.linkedin.com/in/prakhar1144/', imageLink: 'https://i.imgur.com/w7WrhHx.png' },
    { name: 'Bhavesh Uttawani', link: 'https://www.linkedin.com/in/bhavesh-uttawani-23023a202', imageLink: ' http://drive.google.com/uc?export=view&id=1yBCc1kqqRF-JXDpLBNdf48doJuQCGyF3' },
    { name: 'Nandini Sharma', link: 'https://www.linkedin.com/in/nandini-sharma-70551819b', imageLink: ' http://drive.google.com/uc?export=view&id=1mwUWA_OAtSJbXuhU18S48MQ7TTcyfIzZ' },
    { name: 'Priyanka Mandal', link: 'https://www.linkedin.com/in/priyanka-mandal-370667156', imageLink: ' http://drive.google.com/uc?export=view&id=1nnepWoZarMSWeJdmdhKjG2lBsffglNE8' },
    { name: 'Shubham Sharma', link: 'https://www.linkedin.com/in/2211shubham', imageLink: ' http://drive.google.com/uc?export=view&id=1hDnMhr83fVN54-VzFtBZfdGW8Gu5QvE1' },
    { name: 'Rohit Sharma', link: 'https://www.linkedin.com/in/rohitsharma077', imageLink: ' http://drive.google.com/uc?export=view&id=1eEzjNwiRazMu8NSnvIBE4i8K55Y_j192' },
    { name: 'Dipesh Kumar', link: 'https://www.linkedin.com/in/dipesh728', imageLink: 'http://drive.google.com/uc?export=view&id=1uoOzX5GIf_jv3YPg6V0fV1bX3lM5-0Zp' }
  ]

  const thirdyear = [
    { name: 'Jiya Kakani', link: 'https://www.linkedin.com/in/jiya-kakani-bab172204', imageLink: 'http://drive.google.com/uc?export=view&id=1qkCvYUCRt98RxENpXHxjDM5tSdu8AsW9' },
    { name: 'Gaurav Kumar', link: 'https://www.linkedin.com/in/gaurav-kumar-146638217/', imageLink: 'http://drive.google.com/uc?export=view&id=1wP8CV88RZlPyKfFVHmlxWFwbtuConKmW' },
    { name: 'Joiyad Khan', link: 'https://www.linkedin.com/in/joiyad-khan-3ab0bb203', imageLink: 'http://drive.google.com/uc?export=view&id=1I3bk33tYzj9nLMIjrsQOLdaQHrrRTDjf' },
    { name: 'Aditya Kant', link: 'https://www.linkedin.com/in/aditya-kant-4640bb210', imageLink: 'http://drive.google.com/uc?export=view&id=1RXrphGXp0ucSVv5Q7xeGocLyn5vT4hz5' },
    { name: 'Plaksha Sharma', link: 'https://www.linkedin.com/in/plaksha-sharma-011628224', imageLink: 'http://drive.google.com/uc?export=view&id=1bGrDgtYdv61CWX_90rgBFDoutzRIRHKS' },
    { name: 'Saumya Soni', link: 'https://www.linkedin.com/in/saumya--soni', imageLink: 'http://drive.google.com/uc?export=view&id=1eCjz2BgiS01l_txE8Fpad1ScU_VwOF1j' },
    { name: 'Ankush verma', link: 'https://www.linkedin.com/in/ankush-verma-582820213', imageLink: ' http://drive.google.com/uc?export=view&id=1E232AeVhvTQgf2Wd9xzRLmpHvL55_Y29' },
    { name: 'Ipshita Singh', link: 'https://www.linkedin.com/in/ipshita-singh-910679203', imageLink: ' http://drive.google.com/uc?export=view&id=11-ucD6uv1IWA-PkfRMLZFPpZzfW8yDbk' },
    { name: 'Akhileshwar singh', link: 'https://www.linkedin.com/in/akhileshwar-singh-427580208', imageLink: ' http://drive.google.com/uc?export=view&id=1iabu1BvDDvFK49fwNNdQXWZSvuSI3AZz' },
    { name: 'Sujal Thakur', link: 'https://www.linkedin.com/in/sujal-thakur-0a245120a', imageLink: ' http://drive.google.com/uc?export=view&id=1_JKg8bI90dF40MClmL2Jypd_xfxHyoVx' },
    { name: 'Aayush Thakur', link: 'https://www.linkedin.com/in/aayush-thakur175', imageLink: ' http://drive.google.com/uc?export=view&id=184dEV90GBQ3DdXAXp_NFdV9efu5f071J' },
    { name: 'Simran thakur', link: 'https://www.linkedin.com/in/simran-thakur-504733264', imageLink: ' http://drive.google.com/uc?export=view&id=1dhbYSMCrcKmg1NwfEdeUAlwda7V8050V' },
    { name: 'Shreshtha Verma', link: 'https://www.linkedin.com/in/shreshtha-verma-015370203/', imageLink: ' http://drive.google.com/uc?export=view&id=1fJggDmwGEukr5dhZnVY1qd1tkzNisbFu' },
    { name: 'Gopanshu Thakur', link: 'https://www.linkedin.com/in/gopanshu-thakur-b94b45177/', imageLink: ' http://drive.google.com/uc?export=view&id=1K8a-U_oyg8j8maTTi5yxUZ2fk4wsFC77' }
  ]

  const secondyear = [
    { name: 'Aditya Sood', link: 'https://www.linkedin.com/in/aditya-sood-630189225', imageLink: ' http://drive.google.com/uc?export=view&id=1gprlOzKcIvtrUMoqce3sumUyKmpFvNos' },
    { name: 'Ekansh Verma', link: 'https://www.linkedin.com/in/ekansh-verma-469557228', imageLink: ' http://drive.google.com/uc?export=view&id=1LcjKyODeT8K2nw5Yn58TsrePQGUyC42M' },
    { name: 'Leena', link: 'https://www.linkedin.com/in/leena-k-18999825a', imageLink: ' http://drive.google.com/uc?export=view&id=19NHxpcBRPQrrnPoYqfOjvGjX_p3CbqSo' },
    { name: 'Vivek Kumar ', link: 'https://www.linkedin.com/in/vivek-kumar-b95675231', imageLink: ' http://drive.google.com/uc?export=view&id=11yXHY99VLqP9GNxhVySey2yMF9kICdGS' },
    { name: 'Ayushi', link: 'https://www.linkedin.com/in/ayushi-8214a1261', imageLink: ' http://drive.google.com/uc?export=view&id=1jh7j_vNah7XD_Ni3pkfdRI5JZU1Wyvx0' },
    { name: 'Chandan ', link: 'https://www.linkedin.com/in/chandan-kumawat-305801228', imageLink: ' http://drive.google.com/uc?export=view&id=1iWAgpoT2zHNXitBpejdCVxgClH2LSbwp' },
    { name: 'Aryan Bhardwaj ', link: 'https://instagram.com/aryan8b?igshid=Mzc0YWU1OWY=', imageLink: ' http://drive.google.com/uc?export=view&id=1SeJEzGJ0XRu9z5psU0h9bcL9qjSbOPVp' },
    { name: 'Priyanshu Pant', link: 'https://instagram.com/priyanshu_pant_13?igshid=NTE5MzUyOTU=', imageLink: ' http://drive.google.com/uc?export=view&id=1h4CeyeOHNtcnmNGC04EmDjNjaXtr4UVu' },
    { name: 'Aditya Kapoor', link: 'https://www.linkedin.com/in/aditya-kapoor-a271a8261', imageLink: ' http://drive.google.com/uc?export=view&id=1esOjM0iDG2EQTd4_qgETVuOHAC0vFDjo' },
    { name: 'Abhinav Jaiswal', link: 'https://www.linkedin.com/in/abhinav-jaiswal-1b5860211', imageLink: ' http://drive.google.com/uc?export=view&id=1B2i9C5ix93E0UBxjlEuy6gRMg_ZaaNjt' },
    { name: 'Vivek Kumar ', link: 'https://www.linkedin.com/in/vivek-kumar-b95675231', imageLink: ' http://drive.google.com/uc?export=view&id=12pdc5cZbLVuW73_-0j0JC88O0fpYo4G4' },
    { name: 'Vatsalya Sharma', link: 'https://www.linkedin.com/in/vatsalya-sharma-698811224', imageLink: ' http://drive.google.com/uc?export=view&id=12W8q_I4kWOowhw2fBORXJ-KAQhaNJdva' },
    { name: 'Hardik Chauhan ', link: 'https://www.linkedin.com/in/hardik-chauhan-162762228', imageLink: ' http://drive.google.com/uc?export=view&id=1pR76qqYP5iJSFLiwGhLqJSd50uJl1Mgq' },
    { name: 'Rahul Bhari', link: 'https://www.linkedin.com/in/connect-to-rahul-bhari', imageLink: ' http://drive.google.com/uc?export=view&id=1Grgs6ngvVeJLPNh1Jd3K1k4WOOLRc8eV' },
    { name: 'Aditya kapoor', link: 'https://www.linkedin.com/in/aditya-kapoor-a271a8261', imageLink: ' http://drive.google.com/uc?export=view&id=13MqDTi7ijXHHUpfnKR56VNRd3iO9giai' },
    { name: 'Saksham Thakur', link: 'https://www.linkedin.com/in/saksham-thakur-85a112230/', imageLink: ' http://drive.google.com/uc?export=view&id=1kqKx0U07WO20QotKMLcVDh-BuGWyz_KF' }
  ]

  const firstyear = [
    { name: 'Mohit Choudhary', link: 'https://www.linkedin.com/in/mohit-choudhary-b98a46263', imageLink: ' http://drive.google.com/uc?export=view&id=1oZ_qZSs-WoLiXJpzhk4Ka-yVkhVYzH2p' },
    { name: 'Abhishek Duharia', link: 'https://www.linkedin.com/in/abhishek-duharia-2678b2266', imageLink: ' http://drive.google.com/uc?export=view&id=1TmOMVKeDvXEgyQsW0r-iJn_jwgC2CHVs' },
    { name: 'Gaurav Kumar', link: 'https://in.linkedin.com/in/gaurav-kumar-422b3a1a6', imageLink: ' http://drive.google.com/uc?export=view&id=1s_wc_aEZZ3Fa5x5Tq39hlc7HKI1Iw_RF' },
    { name: 'Sakshi Meena', link: 'https://www.linkedin.com/in/sakshi-meena-77ab2625a', imageLink: ' http://drive.google.com/uc?export=view&id=1qWiOFqcONALmH3QIwE45BXIZ1wft1cH_' },
    { name: 'Muskaan Bansal', link: 'https://www.linkedin.com/in/muskaan-bansal-b4ab38259', imageLink: ' http://drive.google.com/uc?export=view&id=1KofH27K0dWzJw5d_bgrNgEJwhctQ1Qpt' },
    { name: 'Sachin Kulhari ', link: 'https://www.linkedin.com/in/sachin-kulhari-5a7a83258', imageLink: ' http://drive.google.com/uc?export=view&id=12B1JJFyDphHsQGJ8DAol5p67ZASw-WDe' },
    { name: 'Saumitra Tandon ', link: 'https://www.linkedin.com/in/saumitra-tandon-1031a5262', imageLink: ' http://drive.google.com/uc?export=view&id=1yb4JrlBw9tDh4jXrJGQEKCQrzx6In0Jo' },
    { name: 'Aditya Dogra', link: 'https://www.linkedin.com/in/aditya-dogra-b43555251', imageLink: ' http://drive.google.com/uc?export=view&id=1tWjHUbQOtT_60qNkRo7NZlhb9s0mVou6' },
    { name: 'Muskaan Bansal', link: 'https://www.linkedin.com/in/muskaan-bansal-b4ab38259', imageLink: ' http://drive.google.com/uc?export=view&id=1HULVhGTSn150fqIdCmd8WKt27vPrB99M' },
    { name: 'Vikash Kumar Jakhar', link: 'https://www.linkedin.com/in/vikash-kumar-jakhar-81ab60258', imageLink: ' http://drive.google.com/uc?export=view&id=1JVu2trE6tEBDerdGf9Fd5SsrkamnhJZY' },
    { name: 'Ayyam Ahammad Gauri ', link: 'https://www.linkedin.com/in/ayyam-ahammad-gauri-26abb6252', imageLink: ' http://drive.google.com/uc?export=view&id=1O0YvkHtRCaoD0DQS2_SyF6SeMd1w88c_' },
    { name: 'Sushant', link: 'https://www.linkedin.com/in/sushant-vishwakarma-884a86266', imageLink: ' http://drive.google.com/uc?export=view&id=1kbdZKXYCYhSl01WONgsx2voGwO8x8JvU' },
    { name: 'Anvesh Thakur', link: 'https://www.linkedin.com/in/anvesh-thakur-a29a8b262', imageLink: ' http://drive.google.com/uc?export=view&id=1iim21WtPbkixHWcSWY71pDKzEQ5mTwLy' },
    { name: 'Ankit kumar', link: 'https://www.linkedin.com/in/a-patel-708b4a211', imageLink: ' http://drive.google.com/uc?export=view&id=1jIKCyiNzxL2tnq8fEa5wlPy6kaj7dYCh' },
    { name: 'Muskan Saini', link: 'https://www.linkedin.com/in/muskan-saini-8643ba224', imageLink: ' http://drive.google.com/uc?export=view&id=1ZUIzC5j7iXau6ee19xIAOSCheGOUaWKj' },
    { name: 'Vinay Ramteke', link: 'https://www.linkedin.com/in/vinay-ramteke-632b37263', imageLink: ' http://drive.google.com/uc?export=view&id=15uNjS8-bil6HLnsvJND4235N0x8rVkhBname:' },
    { name: 'Priyanshi Lakhotia', link: 'https://www.linkedin.com/in/priyanshi-lakhotia-a4550725a', imageLink: ' http://drive.google.com/uc?export=view&id=1h6KioSbNjxeTDtcp1sxwiWG_7pwIAiip' },
    { name: 'Aashish ', link: 'https://www.linkedin.com/in/ashish-saini-44a648250', imageLink: ' http://drive.google.com/uc?export=view&id=1TwPD8A-DxRa5TLaFaUwAUOalwH7rwW78' },
    { name: 'Himanshu Nirmal', link: 'https://www.linkedin.com/public-profile/settings', imageLink: ' http://drive.google.com/uc?export=view&id=1eK_eDPkczJlzSz4fG0lyJ2D719lEFzpy' },
    { name: 'Tuhina Pegu', link: 'https://www.linkedin.com/in/tuhina-pegu-997a9a268', imageLink: ' http://drive.google.com/uc?export=view&id=1WN2ASE4A_1YQEBp99i5aPOh3V3e_zes6' },
    { name: 'Sushant pratap singh', link: 'https://www.linkedin.com/in/sushant-singh-b78a65268', imageLink: ' http://drive.google.com/uc?export=view&id=12jpsCeklXiTd-03HB3X_zdLD68iRSFiU' }
  ]

  return (
    <div className='team-page'>

      <div className='team-content'>
        <h1>Final Year</h1>
      </div>

      <div className='flex-container'>
        {finalyear.map((member, index) => <TeamCard key={index} name={member.name} link={member.link} imageLink={member.imageLink} />)}
      </div>

      <div className='team-content'>
        <h1>3rd Year</h1>
      </div>

      <div className='flex-container'>
        {thirdyear.map((member, index) => <TeamCard key={index} name={member.name} link={member.link} imageLink={member.imageLink} />)}
      </div>

      <div className='team-content'>
        <h1>2nd Year</h1>
      </div>

      <div className='flex-container'>
        {secondyear.map((member, index) => <TeamCard key={index} name={member.name} link={member.link} imageLink={member.imageLink} />)}
      </div>

      <div className='team-content'>
        <h1>1st Year</h1>
      </div>

      <div className='flex-container'>
        {firstyear.map((member, index) => <TeamCard key={index} name={member.name} link={member.link} imageLink={member.imageLink} />)}
      </div>
    </div>
  )
}
