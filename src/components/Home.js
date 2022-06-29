import styles from "./Home.module.css";
import title from "../Images/title.svg";
const Home = () => {
    const stories = ["story1","story2","story3"];
    const works =["work1","work2","work3"];
    const people = ["team1","team2","team3"];
    return (  
        <div className={styles.home_grid_content}>
            <div className={styles.wavemaker_title}>
                <img src={title} alt="" />
            </div>
            <div className={styles.our_story}>
                <div className={styles.titles}>
                    Our Story
                </div>
                <a href="/">
                    <div className={styles.rapid_image_slider}>
                    {
                        stories.map((story,index)=>{
                            const img = require(`../Images/Home/${story}.webp`);
                            return(
                                <div key={index}>
                                    <img className="object-fit--cover" src={img} alt=""/>
                                </div>
                            )
                        })
                    }
                    </div>
                </a>
            </div>
            <div className={styles.our_work}>
                <div className={styles.titles}>
                    Our Work
                </div>
                <a  href="/">
                    <div className={styles.rapid_image_slider}>
                    {
                        works.map((work,index)=>{
                            const img = require(`../Images/Home/${work}.webp`);
                            return(
                                <div key={index}>
                                    <img className="object-fit--cover" src={img} alt=""/>
                                </div>
                            )
                        })
                    }
                    </div>
                </a>
            </div>
            <div className={styles.our_people}>
                <div className={styles.titles}>
                    Our people
                </div>
                <a  href="/">
                    <div className={styles.rapid_image_slider}>
                    {
                        people.map((crew,index)=>{
                            const img = require(`../Images/Home/${crew}.webp`);
                            return(
                                <div key={index}>
                                    <img className="object-fit--cover" src={img} alt=""/>
                                </div>
                            )
                        })
                    }
                    </div>
                </a>
            </div>
        </div>
    );
}
 
export default Home;