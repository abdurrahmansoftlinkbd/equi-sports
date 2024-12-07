const Accordion = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center my-20">
        <div className="w-full lg:w-5/12">
          <img
            src="https://i.ibb.co.com/VLhd4ML/metallic-dumbbell-4-copyright.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="mb-4 text-sm font-medium">FAQ</p>
          <h1 className="text-5xl font-semibold mb-5">
            Customers want to know
          </h1>
          <div className="collapse collapse-arrow border-t border-b">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-2xl font-semibold ">
              How do I know if the sports equipment I’m buying is suitable for
              my needs?
            </div>
            <div className="collapse-content">
              <p>
                We understand that choosing the right gear can be overwhelming,
                especially with so many options. That’s why each product on our
                website comes with detailed descriptions, specifications, and
                usage recommendations. Additionally, our customer support team
                is available to guide you in selecting the perfect equipment for
                your sport and skill level.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-b">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-2xl font-semibold ">
              What is your return policy for sports equipment?
            </div>
            <div className="collapse-content">
              <p>
                Your satisfaction is our top priority! If you’re not completely
                happy with your purchase, we offer hassle-free returns within 30
                days, provided the item is unused and in its original packaging.
                Simply contact our support team, and we’ll guide you through the
                return process. Please note that customized items are
                non-refundable.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-b">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-2xl font-semibold ">
              How can I trust the quality of the products?
            </div>
            <div className="collapse-content">
              <p>
                We take pride in offering only the best sports gear from trusted
                brands and manufacturers. Every product is thoroughly inspected
                for quality, durability, and performance. Plus, our customer
                reviews and ratings provide real feedback from athletes and
                sports enthusiasts like you, helping you make informed
                decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
