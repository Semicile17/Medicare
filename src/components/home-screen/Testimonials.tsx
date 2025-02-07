import { AnimatedTestimonials } from "../ui/animated-testimonials";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://img.freepik.com/free-photo/excited-happy-blond-girl-looking-amused-delighted-with-great-news_176420-27747.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://img.freepik.com/free-photo/beautiful-caucasian-girl-with-natural-beauty-face-showing-big-size-object-copy-space-shape-large-box-with-hands-standing-white-wall_176420-34353.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://img.freepik.com/premium-photo/beautiful-caucasian-woman-dreamy-smiling-with-eyes-closed-standing-relaxed-happy-against-white-wall_176420-34234.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://img.freepik.com/premium-photo/positive-reply-excellent-smiling-happy-woman-close-eyes-showing-okay-ok-signs-approval-like-agree-standing-t-shirt-against-white-background_176420-47273.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
};

export default Testimonials;
