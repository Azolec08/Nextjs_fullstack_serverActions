import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <figure className="relative w-[200px] h-[250px]">
            <Image
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="heroImg"
              fill
              sizes="min-width:600px"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </figure>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link href="/cardpage">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
