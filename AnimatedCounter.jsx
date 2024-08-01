import { CountUp } from "countup.js";
// Animated Counter
const AnimatedCounter = () => 
  {
    const AnimatedCounter = ({ id, end }) => {
    const counterRef = React.useRef(null);
    React.useEffect(() => {
      const counter = new CountUp(id, end, {
        suffix: "+",
      });
      if (!counter.error) {
        counter.start();
      } else {
        console.error(counter.error);
      }
    }, [id, end]);

    return (
      <h3 id={id} ref={counterRef} className="counter-numbers">
        {end}+
      </h3>
    );
  };
  AnimatedCounter.propTypes = {
    id: PropTypes.string.isRequired,
    end: PropTypes.number.isRequired,
  };
    
    return (
      <>
        <div className="hero-counter grid grid-three-columns">
                <div className="counter-numbers">
                  <AnimatedCounter id="premium" end={9000} />
                  <p>Premium Product</p>
                </div>
                <div className="counter-numbers">
                  <AnimatedCounter id="customer" end={2000} />
                  <p>Happy Customer</p>
                </div>
                <div className="counter-numbers">
                  <AnimatedCounter id="awards" end={28} />
                  <p>Awards Winning</p>
                </div>
              </div>
      </>
    )
  }
