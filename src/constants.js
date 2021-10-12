import notHavingIt from '../src/assets/images/nothavingit.svg'
import sad from '../src/assets/images/unhappy.svg'
import happy from '../src/assets/images/happy.svg'
import Card from '../src/components/Card';
import './styles/Card.scss';


export const cardsArray = [
    {
        key: "sad",
        value: <Card img={notHavingIt} alt="sad-emoji"
            mood="Cat wasn't having it" date="06-09-2021 / 07:01"
            style={{ border: "1px solid red", borderRadius: "5px", marginBottom: "13px" }}
            textStyle={{ color: "red" }}
            imgStyle={{
                border: "1px solid red", padding: "10px", borderRadius: "40px", background: "rgba(249, 49, 49, 0.1)", width: "35px",
                height: "35px"
            }}
        />
    },

    {
        key: "indifferent",
        value: <Card img={sad} alt="angry-emoji"
            mood="Cat was indifferent" date="06-09-2021 / 07:01"
            className="indifferent-card"
            style={{ border: "1px solid orange", borderRadius: "5px", marginBottom: "13px" }}
            textStyle={{ color: "orange" }}
            imgStyle={{
                border: "1px solid orange", padding: "10px", borderRadius: "40px", background: "rgba(255, 150, 53, 0.2)", width: "35px",
                height: "35px"
            }}
        />
    },
    {
        key: "happy",
        value: <Card img={happy} alt="happy-emoji"
            mood="Cat was super excited" date="06-09-2021 / 07:01"
            className="happy-card"
            style={{ border: "1px solid green", borderRadius: "5px", marginBottom: "13px" }}
            textStyle={{ color: "green" }}
            imgStyle={{
                border: "1px solid green", padding: "10px", borderRadius: "40px", background: "rgba(50, 194, 82, 0.2)", width: "35px",
                height: "35px"
            }}
        />
    }
];


