import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Team.css';
import femaleImg from '../../Photo/male.png';
import maleImg from '../../Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Box from '@material-ui/core/Box';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const Team = (props) => {
  let { idTeam } = useParams();
  const [teamDetails, setTeamDetails] = useState({})
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
      .then(res => res.json())
      .then(data => setTeamDetails(data.teams[0]))
  }, [idTeam])

  const { strTeamBanner, strAlternate, intFormedYear, strCountry, strGender, strSport, strDescriptionEN, strStadiumDescription, strYoutube } = teamDetails
  let genderImage = ({ strGender } === 'male') ? maleImg : femaleImg;


const handleTwittwr =()=>{
  console.log('i am clicked')
  const openTwitter = ({ strYoutube});
  return openTwitter;
}

  return (
    <div style={{ textAlign: 'center' }}>
      <img style={{width:'100%'}} src={strTeamBanner} alt="" />
      <Box style={{ display:'flex', padding:'20px 200px 40px 50px' , marginLeft: '12%', marginRight: '12 %', marginTop: '30px', backgroundColor:'red'}}>

        <Grid item xs={12} sm={6}>         
          <h1>{strAlternate} </h1>
          <h4>Founded: {intFormedYear} </h4>
          <h4>Country: {strCountry} </h4>
          <h4>Sports Type: {strSport} </h4>
          <h4>Gander: {strGender} </h4>         
        </Grid>
        <Grid item xs={12} sm={6}>         
          <img style={{ width: '500px', marginLeft: '30%', paddingTop: '20px' }} src={genderImage} alt="" />         
        </Grid>
        
      </Box>
      <div style={{ marginLeft: '12%', marginRight: '12%', marginTop: '50px', textAlign: 'justify' }}>
        <p>{strDescriptionEN}</p><br />
        <p>{strStadiumDescription}</p><br />
      </div>
      <span className='socilIcon'> <FontAwesomeIcon icon={faTwitter} onClick={()=>handleTwittwr()} />  </span>
      <span className='socilIcon'> <FontAwesomeIcon icon={faFacebook} onClick={() => { console.log('clicked') }} />  </span>
      <span className='socilIcon'> <FontAwesomeIcon icon={faFacebook} onClick={() => { window.open(`https://www.youtube.com`) }} /> </span>
      <span className='socilIcon'> <FontAwesomeIcon icon={faYoutube} onClick={() => { window.open({ strYoutube }) }} /> </span>
    </div>
  );
};

export default Team;