import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="py-5 px-56 bg-[url(https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg)]">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-left">{title}</h1>
        {isVisible ? (
          <>
            <i
              class="fa fa-angle-up"
              style={{ color: "#ed4e4e", cursor: "pointer" }}
              onClick={() => setIsVisible(false)}
            ></i>
          </>
        ) : (
          <i
            class="fa fa-angle-down"
            style={{ color: "#ffffff", cursor: "pointer" }}
            onClick={() => setIsVisible(true)}
          ></i>
        )}
      </div>
      {isVisible && <p className="py-5 text-[#c1c1c19f]">{description}</p>}
    </div>
  );
};

const Faq = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div className="bg-[url(https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg)] text-white">
      <div className="flex w-full justify-center">
        <h1 className="text-4xl text-center py-9 px-2 first-letter:text-[#ed4e4e] first-letter:text-5xl">
          Frequently
        </h1>
        <h1 className="text-4xl text-center py-9 px-2 first-letter:text-[#ed4e4e] first-letter:text-5xl">
          Asked
        </h1>
        <h1 className="text-4xl text-center py-9 px-2 first-letter:text-[#ed4e4e] first-letter:text-5xl">
          Questions
        </h1>
      </div>
      <div className="">
        <Section
          title="What is Foodhut's Customer Care Number?"
          description="We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. "
          isVisible={visibleSection === "1"}
          setIsVisible={() => {
            visibleSection !== "1"
              ? setVisibleSection("1")
              : setVisibleSection("");
          }}
        />
        <Section
          title="I entered the wrong CVV, why did my transaction still go through?"
          description="The logic of validations of CVV resides with either payment gateways or banks. It is absolutely the choice of banks to have CVV as a mandatory input field or not. As per RBI guidelines, 2-Factor-Authentication is not mandatory for less than Rs 2000 rupees transaction. It is not in control of Swiggy. As an organization, we don't store any card information."
          isVisible={visibleSection === "2"}
          setIsVisible={() => {
            visibleSection !== "2"
              ? setVisibleSection("2")
              : setVisibleSection("");
          }}
        />
        <Section
          title="Can I edit my order?"
          description="In order to edit your order, please click on 'Help' and then 'I wantto modify items in my order'. We will connect you to a support agent who will assist you with the same. Please note that your order can be edited only if the restaurant is yet to confirm your order. Post that, we may not be able to modify your order if food preparation has started."
          isVisible={visibleSection === "3"}
          setIsVisible={() => {
            visibleSection !== "3"
              ? setVisibleSection("3")
              : setVisibleSection("");
          }}
        />
        <Section
          title="I want to cancel my order"
          description="In order to cancel your order, please click on 'Help' and then 'I want to cancel my order'. Please note that we may charge you a cancellation fee as it helps us to minimise food wastage and also compensate our restaurant partners for cancelled orders."
          isVisible={visibleSection === "4"}
          setIsVisible={() => {
            visibleSection !== "4"
              ? setVisibleSection("4")
              : setVisibleSection("");
          }}
        />
        <Section
          title="Will Foodhut be accountable for quality/quantity?"
          description="Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant."
          isVisible={visibleSection === "5"}
          setIsVisible={() => {
            visibleSection !== "5"
              ? setVisibleSection("5")
              : setVisibleSection("");
          }}
        />
        <Section
          title="Is there a minimum order value?"
          description="We have no minimum order value and you can order for any amount. "
          isVisible={visibleSection === "6"}
          setIsVisible={() => {
            visibleSection !== "6"
              ? setVisibleSection("6")
              : setVisibleSection("");
          }}
        />
        <Section
          title="Do you charge for delivery?"
          description="Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. "
          isVisible={visibleSection === "7"}
          setIsVisible={() => {
            visibleSection !== "7"
              ? setVisibleSection("7")
              : setVisibleSection("");
          }}
        />
        <Section
          title="Can I change the address / number?"
          description="Any major change in delivery address is not possible after you have placed an order with us. However, slight modifications like changing the flat number, street name, landmark etc. are allowed. If you have received delivery executive details, you can directly call him, else you could contact our customer service team."
          isVisible={visibleSection === "8"}
          setIsVisible={() => {
            visibleSection !== "8"
              ? setVisibleSection("8")
              : setVisibleSection("");
          }}
        />
        <Section
          title="My Foodhut Money wallet has been mis-used by someone else"
          description="Please block your wallet by reaching out to our customer care executives. We will work with ICICI to address your issue, if any."
          isVisible={visibleSection === "9"}
          setIsVisible={() => {
            visibleSection !== "9"
              ? setVisibleSection("9")
              : setVisibleSection("");
          }}
        />
        <Section
          title="Can I order in advance?"
          description="Yes, you can order up to 2 days in advance on our platform. Click onthe 'NOW' button on the top left corner of the app to select your desired delivery time slot and place an order. This feature is currently available only on Android phones and in select cities."
          isVisible={visibleSection === "10"}
          setIsVisible={() => {
            visibleSection !== "10"
              ? setVisibleSection("10")
              : setVisibleSection("");
          }}
        />
        <Section
          title="How long do you take to deliver?"
          description="Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant."
          isVisible={visibleSection === "11"}
          setIsVisible={() => {
            visibleSection !== "11"
              ? setVisibleSection("11")
              : setVisibleSection("");
          }}
        />
      </div>
    </div>
  );
};

export default Faq;
