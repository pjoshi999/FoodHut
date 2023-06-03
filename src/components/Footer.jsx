const Footer = () => {
  return (
    <footer className="flex bg-[#09101a] border-t-2 shadow-xl shadow-white text-white justify-center items-center h-80">
      <div className="flex flex-col w-full">
        <div className="flex justify-evenly">
          <div className="w-72">
            <h1 className="text-[#F65F5F] text-2xl">Foodhut</h1>
            <p>
              Savor the flavors of culinary excellence with FoodHut, where a
              world of delicious delights is just a click away.
            </p>
            <div className="flex py-5">
              <span className="pr-5">
                <a href="mailto:joshi.priyanshu999@gmail.com">
                  <i
                    className="fa fa-google fa-lg p-1"
                    style={{ color: "#FDCE77" }}
                  ></i>
                </a>
              </span>
              <span className="pr-5">
                <a
                  href="https://www.linkedin.com/in/priyanshujoshi98/"
                  target="_blank"
                >
                  <i
                    className="fa fa-linkedin fa-lg p-1"
                    style={{ color: "#FDCE77" }}
                  ></i>
                </a>
              </span>
              <span className="pr-5">
                <a href="https://github.com/pjoshi999" target="_black">
                  <i
                    className="fa fa-github fa-lg p-1"
                    style={{ color: "#FDCE77" }}
                  ></i>
                </a>
              </span>
              <span className="pr-5">
                <a
                  href="https://www.instagram.com/_p.joshi98_/"
                  target="_black"
                >
                  <i
                    className="fa fa-instagram fa-lg p-1"
                    style={{ color: "#FDCE77" }}
                  ></i>
                </a>
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-[#F65F5F] text-2xl">About Us</h2>
            <span>
              <a href="">About Us</a>
            </span>
            <span>
              <a href="">Service Us</a>
            </span>
            <span>
              <a href="">Contact Us</a>
            </span>
            <span>
              <a href="">Company Us</a>
            </span>
          </div>

          <div className="flex flex-col">
            <h2 className="text-[#F65F5F] text-2xl">Company</h2>
            <span>
              <a href="">Partnership</a>
            </span>
            <span>
              <a href="">Terms of Use</a>
            </span>
            <span>
              <a href="">Privacy</a>
            </span>
            <span>
              <a href="">Sitemap</a>
            </span>
          </div>

          <div className="flex flex-col w-96">
            <h2 className="text-[#F65F5F] text-2xl">Get in Touch</h2>
            <p>
              We're just a click away! Contact us and let's make your food
              experience unforgettable.
            </p>
            <form action="/" method="post" className="mt-5">
              <input
                type="email"
                name="email"
                className="bg-[#1c232e] px-3 py-2 pl-5 rounded-full"
                placeholder="Email"
              />
              <button
                type="submit"
                name="submit"
                className="bg-[#F65F5F] hover:bg-[#ed4e4e] ml-3 rounded-full px-3 py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <h3 className="text-center mt-8">
          &copy; Made with ❤️ By Priyanshu Joshi
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
