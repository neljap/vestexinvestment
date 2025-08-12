import { FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import { FaFacebook, FaInstagram, FaReddit } from "react-icons/fa6";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    title: "Software Developer",
    social: "Twitter",
    icon: <FaTwitter />,
    text: "Grateful to Oasis Trade Hub for their outstanding service, consistent support, and intuitive, feature-rich platform that delivers reliability, expert guidance, and an exceptional user experience.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    title: "Software Engineer",
    social: "Facebook",
    icon: <FaFacebook />,
    text: "I’m grateful to Oasis Trade Hub for their exceptional support, guidance, and a user-friendly, reliable platform packed with valuable features and expert knowledge since I joined.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    title: "Project Manager",
    social: "Reddit",
    icon: <FaReddit />,
    text: "I appreciate Oasis Trade Hub’s outstanding service; from day one, they’ve delivered unwavering support and guidance through a robust, user-friendly platform, rich in expert features.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    title: "Data Scientist",
    social: "Instagram",
    icon: <FaInstagram />,
    text: "Grateful to Oasis Trade Hub for their outstanding service—offering consistent support, expert guidance, and a robust, user-friendly platform filled with valuable tools and professional insight.",
    img: "https://picsum.photos/103/103",
  },
];

export const Testimony = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    // @ts-ignore
    // appendDots: dots => (
    //   <div
    //     style={{
    //     //   backgroundColor: "#ddd",
    //     display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         gap: "10px",
    //       width: "100%",
    //       margin: "0px",
    //       borderRadius: "10px",
    //       padding: "10px"
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // @ts-ignore
    // customPaging: i => (
    //   <div
    //     style={{
    //       width: "30px",
    //       height: "30px",
    //       borderRadius: "50%",
    //       backgroundColor: "yellow",
    //       borderColor: "yellow",
    //       fontSize: "0px",
    //       color: "blue",
    //       border: "1px blue solid"
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // ),
    responsive: [
    //   {
    //     breakpoint: 10000,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 640,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-[500]">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            Enjoy a unique experience marked by outstanding service. Our devoted team delivers personalized care, precise attention to detail, and a welcoming, elegant atmosphere from the moment you arrive.

          </p>
        </div>


        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
<div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-2 shadow-lg py-4 px-6 mx-4 rounded-xl  bg-[#ededed] relative min-h-[220px] justify-start items-start"
                >
                  <div className="flex flex-row gap-2 items-center">
                    {data.icon}
              {/* <FaTwitter /> */}
              <p className="font-[500]">{data.social}</p>
            </div>
            <div>
              <p className="leading-5">{data.text}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
                {/* {data.icon} */}
                <img src={data.img} className="w-12 h-12 rounded-full" alt="" />
              </div>
              <div>
                <h4>{data.name}</h4>
                <p>{data.title}</p>
              </div>
            </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

