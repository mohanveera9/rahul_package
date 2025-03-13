import Button1 from "../buttons/Button1.jsx";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white p-8 md:p-16  rounded-3xl">
    <div className="md:w-1/2 space-y-4 mx-8">
    <Button1 text="About Us" />
      <div className="text-gray-500 text-lg font-semibold">Driven by Quality, Defined by Innovation.</div>
      <div className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
        Delivering Unparalleled Quality and Prompt Service at <br />
        <span className="text-purple-600">Competitive Prices.</span>
      </div>
      <div className="text-gray-600 text-lg">
        Rahul Packaging excels in premium packaging solutions, offering a diverse range of products
        tailored to the pharmaceutical, food, and cosmetic industries. With a steadfast commitment
        to exceptional quality, reliable service, and innovative design, we leverage
        state-of-the-art technology and industry expertise to meet the evolving needs of our
        clients worldwide.
      </div>
    </div>
    <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
      <img
        src="/path-to-your-image.png"
        alt="Packaging Facility"
        className="rounded-2xl shadow-lg max-w-full h-auto"
      />
    </div>
  </section>
  )
}

export default About