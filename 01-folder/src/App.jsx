import React from 'react';
import Card from './component/Card';
import Navbar from './component/Navbar';

const App = () => {


  let jobs = [
  {
    logo: "https://imgs.search.brave.com/iBh_OGsj0zgMWV1FAEdm3u8tHMgHkaG9IMhoz-GaMro/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
    name: "Meta",
    date: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$120/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://imgs.search.brave.com/uU9b7LBA01u46O4i-Xh3WyNsbaVVD4mmVNMUF0dhp3g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby1ibGFjay1h/bmQteWVsbG93LXZl/Y3Rvci00Njg2MDEx/MC5qcGc",
    name: "Amazon",
    date: "5 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://imgs.search.brave.com/R979K2QkR3eQF9V2SXAZ8mqKIgOJDz-CbWrZ_BQzAnE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzU2LzAwLzkz/LzM2MF9GXzQ1NjAw/OTMyMl9ucWZqQm1i/VjJwak0xTXdNNmJi/WFdPcTZpQWl2QWNK/ai5qcGc",
    name: "Apple",
    date: "1 day ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://imgs.search.brave.com/kuInYCg_eL2AKYnGgq6W9VOJQBF_17KB3N3R_wJQ0Eg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/Mjk3NjRiODdlYzc2/YjgyZmIyMWZjZTQu/cG5n",
    name: "Netflix",
    date: "3 days ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$180/hr",
    location: "Delhi, India"
  },
  {
    logo: "https://imgs.search.brave.com/8xtKdURqFnna4KKPIbhHjlUO2MRYWfvOG2Ln_SM69Zc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzk1LzEzLzgx/LzM2MF9GXzY5NTEz/ODE0OV9HZFJJUHhT/b1hVMGE2VGdINlNs/M1o5VEdhT1NqekhC/ZC5qcGc",
    name: "Google",
    date: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$130/hr",
    location: "Pune, India"
  },
  {
    logo: "https://imgs.search.brave.com/nxpRDyPTsGfkar0bt_0-5yoSw_6HF6Fcx4dVrPTVNrU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzEyLzA0/LzMzLzEyMDQzM2I2/YWM2MTgzODYzZjk3/OWQyMDFkYTJmZjA1/LmpwZw",
    name: "Microsoft",
    date: "6 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$140/hr",
    location: "Chennai, India"
  },
  {
    logo: "https://imgs.search.brave.com/DRfSvWDweJSwMmX5Vf6YihffeYNZnevo86QJxToO-Xo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y5L2Yz/L2MxL2Y5ZjNjMTJl/YmE0NGFjZDhiNmRl/OTQ5ZjE0NWZkODMx/LmpwZw",
    name: "Tesla",
    date: "2 days ago",
    post: "Automation Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$160/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://imgs.search.brave.com/CHwPypuAGwMTwylANf4U4J9Uxi8z9EaTfY_08Q8QxPM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aWJtLmNvbS9kZXNp/Z24vbGFuZ3VhZ2Uv/ODc3YjIwOGU5ZDA1/YjM3NjUwYTcwZTU1/ODY3ODYxYmQvY29y/ZV9ncmF5NjBfb25f/d2hpdGUuc3Zn",
    name: "IBM",
    date: "1 week ago",
    post: "AI Researcher",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$170/hr",
    location: "Kolkata, India"
  },
];
  return (
    <>
<div className="allcard">
  {jobs.map(function (elem,idx) {
    return(
      <div key={idx}>
      <Card logo={elem.logo} company={elem.name} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} date={elem.date} pay={elem.pay} location={elem.location}/>
      </div>
    )
  })}
</div>
    </> 
  );
}

export default App;
