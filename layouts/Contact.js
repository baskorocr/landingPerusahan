import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.2427704192864!2d107.2662569836016!3d-6.362618249944338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjEnNDUuNSJTIDEwN8KwMTUnNTkuMSJF!5e0!3m2!1sid!2sid!4v1733469115038!5m2!1sid!2sid";
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <iframe
              src={embedUrl}
              style={{ width: "590px", height: "400px", border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            ;
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
              <button type="submit" className="btn btn-primary mt-5">
                Contact Now!
              </button>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
