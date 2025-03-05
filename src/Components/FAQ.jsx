const FAQ = () => {
  return (
    <div className="space-y-4" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <p className="w-4/5 mx-auto text-center">
        Got questions? We&apos;ve got answers! Browse our FAQ section for quick
        and helpful information about using coupons, redeeming discounts, and
        making the most out of your shopping experience.
      </p>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Q1: How can I sign up for the coupon collecting app?
          </div>
          <div className="collapse-content">
            <p>
              Signing up is easy! Simply click on the &#34;Sign Up&#34; button
              on the homepage and choose to register using your email or Google
              account through Firebase Authentication. Follow the prompts to
              complete the process.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Q2: Are the coupons and discount codes on the app free to use?
          </div>
          <div className="collapse-content">
            <p>
              Yes, all the coupons and discount codes listed on our app are free
              to use. We collect them from various e-commerce stores so you can
              save money without any extra cost.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Q3: How do I use a coupon code from the app?
          </div>
          <div className="collapse-content">
            <p>
              Once you find a coupon you want to use, simply click on the coupon
              to view the details. Copy the coupon code and paste it at checkout
              on the respective e-commerce store&apos;s website to apply the
              discount.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Q4: How often are the coupons updated on the app?
          </div>
          <div className="collapse-content">
            <p>
              We strive to keep our coupon database up-to-date. Coupons are
              updated regularly to ensure you have access to the latest and most
              relevant discounts available.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Q5: What should I do if a coupon code does not work?
          </div>
          <div className="collapse-content">
            <p>
              If a coupon code does not work, please check the expiry date and
              terms and conditions associated with the coupon. If it is still
              valid and you&apos;re experiencing issues, feel free to contact
              our support team for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
