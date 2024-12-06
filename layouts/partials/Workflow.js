import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const Workflow = ({ workflow }) => {
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63448.585418270755!2d107.13395548930802!3d-6.324430163462037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b00739ace6f%3A0xab4f27f8c4d59cf3!2sRuko%20HIVE%20CENDANA%20SPARK!5e0!3m2!1sen!2sid!4v1733466025609!5m2!1sen!2sid";

  return (
    <section className="section pb-0">
      <div className="mb-8 text-center">
        {markdownify(
          workflow.title,
          "h2",
          "mx-auto max-w-[400px] font-bold leading-[44px]",
        )}
        {markdownify(workflow.description, "p", "mt-3")}
      </div>
      <div style={styles.container}>
        <div style={styles.mapWrapper}>
          <iframe
            src={embedUrl}
            style={styles.iframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  mapWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "800px", // Atur ukuran maksimal iframe
    paddingTop: "56.25%", // Rasio aspek 16:9
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "0",
  },
};

export default Workflow;
