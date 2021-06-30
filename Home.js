
import React, { useEffect, useRef, useState } from 'react';
import Typed from "react-typed";

import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import slide1 from '../../slide1.jpg';
import slide2 from '../../slide2.jpg';
import slide3 from '../../slide3.jpg';
import slide4 from '../../slide4.jpg';
import slide5 from '../../slide5.webp';

import key1 from '../../key1.jpg';
import key2 from '../../key2.jpg';
import key3 from '../../key3.jpg';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '30px 40px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

const Home = () => {


    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    
    let interval = useRef();
    
    const startTimer = () => {
      const CountdownDate = new Date('August 22, 2021 00:00:00').getTime();
    
      interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = CountdownDate - now;
    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if (distance < 0) {
          //stop timer
          clearInterval(interval.current);
        } else {
          //update timer
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      
      
      }, 1000);
    };
    
    //componentDidMount
    useEffect(() => {
      startTimer();
      return () => {
        clearInterval(interval.current);
      }
    })
    

    const classes = useStyles();

    return (

        <div>

        <div className="header-wraper">
            <div className="main-info">
                <h1> International Conference on Application Frameworks
                </h1>
                <Typed
                className="typed-text"
                strings={["2021" , "Month of August" , "22nd 23rd & 24th" , "SLIIT"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
               <a href="./components/layout/Footer" className="btn-main-offer">Contact Info</a>
            </div>
        </div>


        <div className="container" style={{textAlign: "center" , width: "50rem" , marginTop:"5rem"}}>
          <h1 className="topic">8TH INTERNATIONAL CONFERENCE ON APPLICATION FRAMEWORK 2021</h1>
          <br/>
          <p>The 8TH International Conference on Application Framework -2021 (ICAF2021)
             is organized by the Faculty of Computing of the Sri Lanka Institute of Information Technology (SLIIT)
              as an open forum for academics along with industry professionals to present the latest findings
               and research output and practical deployments in the Computer Science and Information Technology
                domains. Primary objective of the ICAF is to uplift the research culture and the quality of 
                research done by Sri Lankan researchers. This conference will create a platform for national and 
                international researchers to showcase their research output, networking opportunities to discuss
                 innovative ideas, and initiate collaborative work. ICAF that was on past 7 years were successfully 
                 conducted with a technical co-sponsorship by IEEE Sri Lanka Section and all 
                 publications are available in IEEE Xplore digital library</p>
                 <br/>
                 <br/>
                 <h2 className="topic-date">August 22RD 23ND & 24TH </h2>
                 <br/>
                  <h2 className="topic-venue"> @ Sri Lanka Institute of Information Technology</h2>
        </div>

            <section className="timer-container">
      <section className="timer">
        <div>
          <h2></h2>
        </div>
        <div>
          <section>
            <p>{timerDays}</p>
            <p><small>Days</small></p>
          </section>
          <span>:</span>

          <section>
            <p>{timerHours}</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>

          <section>
            <p>{timerMinutes}</p>
            <p><small>Minuites</small></p>
          </section>
          <span>:</span>

          <section>
            <p>{timerSeconds}</p>
            <p><small>Seconds</small></p>
          </section>
 
        </div>
      </section>
    </section>
<hr/>
        <div className="keynotes" ><div  className="topic"><h1>KEYNOTE SPEAKERS</h1></div>
    <div class="card-group">
    <div class="card" style={{borderColor: "#fff"}}><a>
    <img src={key1} class="card-img-top" alt="..."/>
    <div class="card-body1" style={{textAlign: "center", margin: "0rem 2rem 3rem 2rem"}}>
      <h5 class="card-title"><h4>PROF UDARA JAYASEKARA</h4></h5>
      <p class="card-text">Department of Computer Science and Software Engineering</p>
      <p class="card-text">Sri Lanka Institute of Information Technology</p>
    </div>
    </a>
  </div>
  <div class="card"  style={{borderColor: "#fff"}}><a>
    <img src={key3} class=" key3 card-img-top" alt="..."/>
    <div class="card-body1"  style={{textAlign: "center", margin: "0rem 2rem 3rem 2rem"}}>
    <h5 class="card-title"><h4>DR DIMUSHA PERERA</h4></h5>
    <p class="card-text">Department of Computer Science and Software Engineering</p>
      <p class="card-text">Sri Lanka Institute of Information Technology</p>
    </div>
    </a>
  </div>
  <div class="card"  style={{borderColor: "#fff"}}><a>
    <img src={key2} class="card-img-top" alt="..."/>
    <div class="card-body1"  style={{textAlign: "center", margin: "0rem 2rem 3rem 2rem"}}>
    <h5 class="card-title"><h4>PROF NAVODYA JAYASINGHE</h4></h5>
      <p class="card-text">Department of Computer Science and Software Engineering</p>
      <p class="card-text">Sri Lanka Institute of Information Technology</p>
    </div>
    </a>
  </div>
</div>
</div>

        <hr></hr>
        <div className="topic" style={{textAlign: "center", marginTop: "3rem" , marginBottom: "3rem"}}>
          <h1 className="topic">PAST CONFERENCES</h1></div>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style={{marginBottom: "5rem"}}>
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={slide1} class="d-block" alt="..."  style={{ width: "900px" }}/>
            </div>
            <div class="carousel-item">
              <img src={slide2}  class="d-block" alt="..."  style={{ width: "900px" }}/>
            </div>
            <div class="carousel-item">
              <img src={slide3}  class="d-block" alt="..."  style={{ width: "900px"}}/>
            </div>
            <div class="carousel-item">
              <img src={slide4}  class="d-block" alt="..."  style={{ width: "900px"}}/>
            </div>
            <div class="carousel-item">
              <img src={slide5}  class="d-block" alt="..."  style={{ width: "900px"}}/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

 
        <hr></hr>
      <div className="topic" style={{textAlign: "center", marginTop: "5rem" , marginBottom: "3rem"}}>
         <h1 className="topic">IMPORTANT DATES</h1></div>

      <Timeline align="alternate" style={{width: "60rem" , marginLeft: "8rem"}}>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            6th June 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          < CalendarToday style={{color: "#f9ab00"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              PAPER SUBMISSION (OPEN)
            </Typography>
            <Typography>You can upload all the papers</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            6th June 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          < CalendarToday style={{color: "#f9ab00"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              PAPER SUBMISSION (OPEN)
            </Typography>
            <Typography>You can upload all the papers</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            6th June 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          < CalendarToday style={{color: "#f9ab00"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              PAPER SUBMISSION (OPEN)
            </Typography>
            <Typography>You can upload all the papers</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            6th June 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          < CalendarToday style={{color: "#f9ab00"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              PAPER SUBMISSION (OPEN)
            </Typography>
            <Typography>You can upload all the papers</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>

    </div>



    )
}

export default Home

