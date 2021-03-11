import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Home.css';

const Home = () => {
  const [teamList, setTeamList] = useState([])
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
    fetch(url)
      .then(res => res.json())
      .then(data => setTeamList(data.teams))
  }, [])

  const teamLogo = { width: '200px' };
  const history = useHistory();

  return (
    <div>
      <span>
      <img  style={{width:"100%"}} src="https://thedubliner.gr/wp-content/uploads/banner.jpg" alt=""/>
      <h1 className='bannerStyle'>English Premier League-2021 </h1></span>
      
      <div style={{ marginLeft: '100px', marginTop:'220px' }}>
        {teamList.map(team =>
          <div className="teamList">
            <img style={teamLogo} src={team.strTeamBadge} alt="" />
            <h3>Team Name: {team.strTeam} </h3>
            <p>Sports Type: {team.strSport} </p>
            <button onClick={() => history.push(`team/${team.idTeam}`)}> Explore--</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;