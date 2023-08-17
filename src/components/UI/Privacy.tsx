import "../../styles/privacy.css";

function Privacy() {
  const date = new Date().getFullYear();
  return (
    <div className="container">
      <h2 className="highlight title">Privacy Policy</h2>
      <p className="para">
        PRIVACY POLICY Last Updated: {date} <br /> 1. Introduction Welcome to
        [Your Website Name] ("us", "we", or "our"). We are committed to
        protecting your personal information and your right to privacy. This
        Privacy Policy explains how we collect, use, disclose, and safeguard
        your personal information.
        <br /> 2. Information We Collect We may collect various types of
        personal information when you visit or use our website, including but
        not limited to: - Personal information you provide directly, such as
        your name, email address, and other contact details. - Information
        collected automatically through cookies and similar technologies,
        including your IP address, browser type, device type, and browsing
        preferences. - Usage data, such as the pages you visit, the time and
        date of your visit, and other engagement data.
        <br /> 3. How We Use Your Information We may use the personal
        information we collect for various purposes, including: - To provide and
        maintain our services. - To personalize your experience on our website.
        - To communicate with you, respond to your inquiries, and provide
        updates. - To analyze and improve our website's performance and
        functionality. - To comply with legal obligations.
        <br /> 4. Disclosure of Your Information We may share your personal
        information with: - Service providers who assist in the operation of our
        website and services. - Law enforcement, regulatory authorities, or
        legal advisors as required by law.
        <br /> 5. Your Choices You can manage your preferences regarding the
        collection and use of your personal information by [describe how users
        can update their preferences, e.g., adjusting cookie settings,
        unsubscribing from marketing communications].
        <br /> 6. Security We strive to implement appropriate security measures
        to protect your personal information. However, no method of transmission
        or storage is completely secure, and we cannot guarantee the absolute
        security of your information.
        <br /> 7. Links to Other Websites Our website may contain links to
        third-party websites. We have no control over their content or privacy
        practices and are not responsible for the content or privacy policies of
        those websites.
        <br /> 8. Children's Privacy Our website is not directed to children
        under the age of 13. We do not knowingly collect personal information
        from children. If you are a parent or guardian and believe that your
        child has provided us with personal information, please contact us.
        <br /> 9. Changes to this Privacy Policy We may update our Privacy
        Policy from time to time. Any changes will be posted on this page, and
        the date of the last update will be indicated at the top.
        <br /> 10. Contact Us If you have any questions or concerns about our
        Privacy Policy, please contact us at [contact information]. [Optional:
        Additional terms or clauses specific to your website's operations, data
        processing practices, or legal requirements.]
      </p>
    </div>
  );
}

export default Privacy;
