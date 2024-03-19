import ProfilePic from "../assets/salmaan.png";
import { AiFillStar } from "react-icons/ai";
export const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">How It Work</h1>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img
          src={ProfilePic}
          alt=""
          style={{ borderRadius: "50%", width: "100px" }}
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          deleniti corrupti est veniam expedita molestiae velit iusto et
          voluptates! Molestias explicabo suscipit quae eaque exercitationem
          eveniet error quisquam voluptatibus ad.
        </p>
        <div className="testimonial-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Salmaan Mushtaq</h2>
      </div>
    </div>
  );
};
