import Carousel from "../components/Carousel";
import "../scss/Home.scss"
import Content from "../components/Content"
const Home = () => {
    return (
        <>
            <Carousel />
            <h2 className="text">
                Gençlik dinamiğimizi, bilgi birikimimiz deneyimimiz ve teknoloji ile harmanlayarak yola çıktık <br />
                Yaptığımız işin kalitesi aldığımız paranın karşılığı değil, karakterimizin karşılığıdır.
            </h2>
            <Content /> 
        </>
    )
  };
  
  export default Home;