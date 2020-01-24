import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchTeams } from "../actions";

const Teams = props => {
    return (
        <div className = "teams" key={props.team.id}>
            <h1>{props.team.name}</h1>
            <p>Abbreviation: {props.team.abbreviation}</p>
            <p>City {props.team.city}</p>
            <p>Conference: {props.team.conference}</p>
            <p>Division: {props.team.division}</p>
            <p>Full Name: {props.team.full_name}</p>
        </div>
    )
}

const TeamsCard = props => {
    useEffect(() => {
        props.fetchTeams();
    }, []);

    return (
    <div className="teamscard">
        {props.teams.map(team => (
            <Teams key={team.id} team={team} />
        ))}
    </div>
    )
}

const mapStateToProps = state => {
    return {
      teams: state.teams,
      gettingTeams: state.gettingTeams,
      error: state.error
    };
  };
  export default connect(
    mapStateToProps,
    { fetchTeams }
  )(TeamsCard);