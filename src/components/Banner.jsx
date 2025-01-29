import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/me.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 30); // Consistent faster typing speed
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-End Developer", "Back-End Developer", "Handsome Guy"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2); // This makes deletion faster.
    } else {
      setDelta(100 - Math.random() * 30); // Consistent typing speed
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500); // Delay before starting new word
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              {/* <span className="tagline">Welcome to my Portfolio</span> */}
              <h1 id="greeting">{`Hi! I'm Jayson, a `} 
                <div className="txt-rotate" dataPeriod="1000" data-rotate='[ "Front-End Developer", "Back-End Developer", "Handsome Guy" ]'>
                  <span className="wrap">{text}</span>
                </div>
              </h1>
              <p>
                Dedicated B.S.I.T. student at the University of Science and Technology of
                Southern Philippines, recognized on the Dean's List for three consecutive
                years (2021-2023), seeking an internship to apply my skills in IT, including
                programming, database management, and system administration while
                gaining practical experience in the IT industry.
              </p>
              {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={headerImg} alt="Header Img"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
