import { Page, Text, View, Document, StyleSheet, PDFViewer, Font, Link, Image as PDFImage } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  main_title: {
    fontFamily: "Montserrat",
    fontSize: "32px",
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: "18px",
  },
  small_title: {
    fontFamily: "Montserrat",
    fontSize: "12px",
  },
  job: {
    fontFamily: "Work Sans",
    fontSize: "24px",
    color: "rgb(8,126,164)",
  },
  number: {
    fontFamily: "Work Sans",
    fontSize: "12px",
  },
  text: {
    fontFamily: "Work Sans",
    fontSize: "10px",
  },
  tag: {
    fontFamily: "Open Sans",
    fontSize: "8px",
    fontWeight: 600,
    padding: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
    borderBottomWidth: 1
  },
  email: {
    fontFamily: "Work Sans",
    fontSize: "12px",
  },
  divider: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  section: {
    padding: 40,
    paddingBottom: 10,
    // flexGrow: 1
  },
});
Font.register({
  family: "Montserrat",
  src: "http://fonts.gstatic.com/s/montserrat/v10/zhcz-_WihjSQC0oHJ9TCYC3USBnSvpkopQaUR-2r7iU.ttf",
});
Font.register({
  family: "Work Sans",
  src: "http://fonts.gstatic.com/s/worksans/v2/ElUAY9q6T0Ayx4zWzW63VKCWcynf_cDxXwCLxiixG1c.ttf",
});
Font.register({
  family: "Open Sans",
  fonts: [
    { src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf" },
    { src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf", fontWeight: 600 },
  ],
});
Font.registerHyphenationCallback((word) => [word]);
//ReactDOMServer.renderToString(<MdMemory/>)
function svgToPng(svg: string, width: number, height: number): Promise<string> {
  // Create a new off-screen canvas
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  // Draw the SVG onto the canvas
  const image = new Image();
  image.src = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  image.onload = () => {
    ctx?.drawImage(image, 0, 0, width, height);
  };

  // Wait for the image to load and draw it onto the canvas
  return new Promise((resolve) => {
    image.onload = () => {
      // Convert the canvas to a data URI
      const pngDataUri = canvas.toDataURL("image/png");
      resolve(pngDataUri);
    };
  });
}

// Example usage:
// const svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//   <rect x="10" y="10" width="80" height="80" fill="blue"/>
// </svg>`;

// svgToPng(svg, 100, 100).then((pngDataUri) => {
//   console.log(pngDataUri);
// });

function Divider() {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ ...styles.divider, width: "100%" }} />
    </View>
  );
}

function Tag({ children, color }: { children: string; color: string }) {
  return (
    // <View style={{ ...styles.tag, backgroundColor: color }}>
      <View style={{ ...styles.tag, color: color, borderColor: color }}>
      <Text >{children}</Text>
      </View>
    // </View>
  );
}

function App() {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const svg = (<FiPhone />).props.d as string; // replace with your SVG string
    const width = 100; // replace with your desired width
    const height = 100; // replace with your desired height

    svgToPng(svg, width, height).then((dataUri) => {
      setImageSrc(dataUri);
      console.log("dsasd", dataUri);
    });
  }, []);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.main_title}>Milferdson Salanga</Text>
          <Text style={styles.job}>Full-Stack React JS Developer</Text>
          <Text style={styles.number}>+639764127416</Text>
          <Text style={styles.email}>milferdsonsalanga@gmail.com</Text>
          <Text style={styles.email}>{imageSrc}</Text>
        </View>
        {/* <PDFImage source={imageSrc} /> */}
        <View style={{ paddingHorizontal: 40 }}>
          <Divider />
          <View style={{ alignItems: "center", paddingVertical: 10 }}>
            <Text style={{ fontFamily: "Open Sans", textAlign: "justify", fontSize: "10px" }}>
              Experienced full-stack <Text style={{ color: "rgb(8,126,164)", fontWeight: 600 }}>React JS</Text>{" "}
              developer with a{" "}
              <Link style={{ fontWeight: 600 }} src="https://imgur.com/a/fe2YZlE">
                recent project
              </Link>
              : inventory + point of sale system, utilizing{" "}
              <Text style={{ color: "rgb(8,126,164)", fontWeight: 600 }}>React JS</Text>,{" "}
              <Text style={{ fontWeight: 600 }}>Fastify</Text>,{" "}
              <Text style={{ fontWeight: 600, color: "rgb(105,158,202)" }}>PostgreSQL</Text>, and{" "}
              <Text style={{ fontWeight: 600, color: "rgb(2,110,0)" }}>Node JS</Text>. Ability to use{" "}
              <Text style={{ color: "rgb(8,126,164)", fontWeight: 600 }}>React JS</Text> and quickly master new
              technologies, as evidenced by learning and creating this resume using{" "}
              <Text style={{ color: "rgb(141, 22, 2)", fontWeight: 600 }}>react-pdf</Text>, a library for{" "}
              <Text style={{ color: "rgb(8,126,164)", fontWeight: 600 }}>React JS</Text>.
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 30, flexGrow: 1 }}>
            <View style={{ flex: 3 }}>
              <View>
                <Text style={styles.title}>EXPERIENCE</Text>
                <Divider />
                <View style={{ flexGrow: 1, marginTop: 5 }}>
                  <View style={{ flexGrow: 1, marginBottom: 5 }}>
                    <Text style={{ ...styles.small_title, color: "rgb(8,126,164)" }}>
                      Full-Stack React JS Developer - Part-time, Freelance
                    </Text>
                    <Text style={styles.small_title}>Oncotine Pharmaceuticals - Inventory and POS</Text>
                    <Text style={{ fontSize: 8, color: "#2c3e50" }}>September 2023 - Present</Text>
                    <View style={{ flexGrow: 1 }}>
                      <Text style={{ textAlign: "justify" }}>
                        <Text style={{ ...styles.text }}>
                          {"\u2022"} Developed user-friendly add-to-cart interface, streamlining product selection,
                          quantity adjustment, and removal from cart.
                        </Text>
                        <Text style={{ ...styles.text }}>
                          {"\n\u2022"} Implemented custom Node.js scaffolding utilizing Fastify for API route serving
                          and Fastify-PostgreSQL for seamless PostgreSQL database connectivity.
                        </Text>
                        <Text style={{ ...styles.text }}>
                          {"\n\u2022"} Utilized Git, Gitflow, and Gitflow extension in VS Code for efficient version
                          control, reducing reliance on manual command-line Git operations.
                        </Text>
                        <Text style={{ ...styles.text }}>
                          {"\n\u2022"} Deployed system front-end and back-end using RustDesk for temporary localized
                          server connectivity to client PCs.
                        </Text>
                        <Text style={{ ...styles.text }}>
                          {"\n\u2022"} Applied system updates and hotfixes via RustDesk.
                        </Text>
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexGrow: 1, marginBottom: 5 }}>
                    <Text style={{ ...styles.small_title, color: "rgb(8,126,164)" }}>
                      Full-Stack React JS Developer - Freelance
                    </Text>
                    <Text style={styles.small_title}>Water-Monitoring System</Text>
                    <Text style={{ fontSize: 8, color: "#2c3e50" }}>April 2023 - June 2023</Text>
                    <View style={{ flexGrow: 1 }}>
                      <Text style={{ textAlign: "justify" }}>
                        <Text style={{ ...styles.text }}>
                          {"\u2022"} Utilized Vite for React front-end application scaffolding.
                        </Text>
                        <Text style={{ ...styles.text }}>
                          {"\n\u2022"} Designed device enclosure with Fusion 360 and printed it using Ender 3 V2. v2.
                        </Text>
                        <Text style={{ ...styles.text }}>
                          {"\n\u2022"} Utilized Firebase for real-time updates from NodeMCU to React front-end.
                        </Text>
                        <Text style={{ ...styles.text }}>
                          {"\n\u2022"} Streamlined system complexity by eliminating Arduino Uno and utilizing only
                          NodeMCU with an analog multiplexer to extend analog input.
                        </Text>
                      </Text>
                    </View>
                  </View>

                  <View style={{ flexGrow: 1, marginBottom: 5 }}>
                    <Text style={{ ...styles.small_title, color: "rgb(8,126,164)" }}>
                      Full-Stack React JS Developer - Freelance
                    </Text>
                    <Text style={styles.small_title}>E-Commerce Mobile App</Text>
                    <Text style={{ fontSize: 8, color: "#2c3e50" }}>March 2021 - March 2022</Text>
                    <View style={{ flexGrow: 1 }}>
                      <Text style={{ textAlign: "justify" }}>
                        <Text style={{ ...styles.text }}>
                          {"\u2022"} Established React Native project with Expo and use Native Base component library.
                        </Text>
                        <Text style={{ ...styles.text }}>
                          {"\n\u2022"} Setup Node JS server, utilizing Mongoose, Express and Multer. (MERN Stack)
                        </Text>
                        <Text style={{ ...styles.text }}>
                          {"\n\u2022"} Designed individual UIs for Riders, Customers, and Sellers, each with distinct
                          features within a single app.
                        </Text>
                        <Text style={{ ...styles.text }}>
                          {"\n\u2022"} Collaborated with backend developer using VSCode's LiveShare for simultaneous
                          codebase work.
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.title}>EMPLOYMENT</Text>
                <Divider />
                <View style={{ flexGrow: 1, marginTop: 5 }}>
                  <Text style={{ ...styles.small_title, color: "rgb(8,126,164)" }}>Technical Support Specialist</Text>
                  <Text style={styles.small_title}>E-Med Healthcare Solutions Inc.</Text>
                  <Text style={{ fontSize: 8, color: "#2c3e50" }}>July 2023 - Present</Text>
                  <View style={{ flexGrow: 1 }}>
                    <Text style={{ ...styles.text }}>
                      {"\u2022"} Handled technical hardware and software issues via phone support.
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ flex: 2 }}>
              <View style={{ marginBottom: 5 }}>
                <Text style={styles.title}>TECHNOLOGIES</Text>
                <Divider />
                <View
                  style={{
                    flexWrap: "wrap",
                    flexGrow: 1,
                    flexDirection: "row",
                    marginTop: 10,
                    gap: 5,
                  }}
                >
                  {/* <Tag color="rgb(68,172,76)">React JS</Tag>
                  <Tag color="rgb(68,172,76)">HTML</Tag>
                  <Tag color="rgb(68,172,76)">CSS</Tag>
                  <Tag color="rgb(68,172,76)">JavaScript</Tag>
                  <Tag color="rgb(68,172,76)">TypeScript</Tag>
                  <Tag color="rgb(68,172,76)">JSON</Tag>
                  <Tag color="rgb(68,172,76)">Git</Tag>
                  <Tag color="rgb(68,172,76)">Zustand</Tag>
                  <Tag color="rgb(68,172,76)">MobX</Tag>
                  <Tag color="rgb(68,172,76)">ES7</Tag>
                  <Tag color="rgb(68,172,76)">Fastify</Tag>
                  <Tag color="rgb(68,172,76)">Node JS</Tag>
                  <Tag color="rgb(68,172,76)">Express</Tag>
                  <Tag color="rgb(68,172,76)">PostgreSQL</Tag>
                  <Tag color="rgb(68,172,76)">MongoDB</Tag>
                  <Tag color="rgb(68,172,76)">Solid JS</Tag>
                  <Tag color="rgb(68,172,76)">Java</Tag>
                  <Tag color="rgb(68,172,76)">C</Tag>
                  <Tag color="rgb(68,172,76)">C++</Tag>
                  <Tag color="rgb(68,172,76)">C#</Tag>
                  <Tag color="rgb(68,172,76)">Python</Tag>
                  <Tag color="rgb(68,172,76)">Gradio</Tag>
                  <Tag color="rgb(68,172,76)">Firebase</Tag>
                  <Tag color="rgb(68,172,76)">Arduino</Tag>
                  <Tag color="rgb(68,172,76)">Rust</Tag> */}
                  <Tag color="rgb(8,126,164)">React JS</Tag>
                  <Tag color="rgb(225,77,37)">HTML</Tag>
                  <Tag color="rgb(46,95,164)">CSS</Tag>
                  <Tag color="rgb(213,185,49)">JavaScript</Tag>
                  <Tag color="rgb(46,117,195)">TypeScript</Tag>
                  <Tag color="#2c3e50">JSON</Tag>
                  <Tag color="rgb(240,79,50)">Git</Tag>
                  <Tag color="#2c3e50">Zustand</Tag>
                  <Tag color="rgb(223,92,22)">MobX</Tag>
                  <Tag color="rgb(213,185,49)">ES7</Tag>
                  <Tag color="#2c3e50">Fastify</Tag>
                  <Tag color="rgb(128,188,1)">Node JS</Tag>
                  <Tag color="#2c3e50">Express</Tag>
                  <Tag color="rgb(105,158,202)">PostgreSQL</Tag>
                  <Tag color="rgb(47,160,59)">MongoDB</Tag>
                  <Tag color="rgb(72,121,179)">Solid JS</Tag>
                  <Tag color="rgb(238,32,25)">Java</Tag>
                  <Tag color="rgb(56,70,165)">C</Tag>
                  <Tag color="rgb(91,56,165)">C++</Tag>
                  <Tag color="rgb(101,31,120)">C#</Tag>
                  <Tag color="rgb(248,205,41)">Python</Tag>
                  <Tag color="rgb(254,121,0)">Gradio</Tag>
                  <Tag color="rgb(247,131,0)">Firebase</Tag>
                  <Tag color="rgb(0,130,134)">Arduino</Tag>
                  <Tag color="rgb(226,55,35)">Rust</Tag>
                </View>
              </View>
              <View style={{ marginBottom: 5 }}>
                <Text style={styles.title}>SKILLS</Text>
                <Divider />
                <View style={{ flexGrow: 1, marginTop: 5 }}>
                  <View style={{ flexGrow: 1, marginBottom: 5 }}>
                    <Text style={{ ...styles.small_title, color: "rgb(8,126,164)" }}>Technical</Text>
                    <View style={{ flexGrow: 1 }}>
                      <Text style={{ textAlign: "justify" }}>
                        <Text style={styles.text}>
                          {"\u2022"} Proficient in C, C++, C#, etc., currently utilizing JavaScript and TypeScript as
                          default programming languages.
                        </Text>
                        <Text style={styles.text}>
                          {"\n\u2022"} Skilled in Microsoft Office applications including Word, Excel, etc.
                        </Text>
                        <Text style={styles.text}>{"\n\u2022"} Experienced in image manipulation using Photoshop.</Text>
                        <Text style={styles.text}>
                          {"\n\u2022"} Quickly develop small automation tools with Python.
                        </Text>
                        <Text style={styles.text}>
                          {"\n\u2022"} Resourceful and responsible utilization of large language models like ChatGPT for
                          enhanced productivity in writing letters and solving bugs beyond StackOverflow solutions.
                        </Text>
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexGrow: 1, marginBottom: 5 }}>
                    <Text style={{ ...styles.small_title, color: "rgb(8,126,164)" }}>Personal</Text>
                    <View style={{ flexGrow: 1 }}>
                      <Text style={{ textAlign: "justify" }}>
                        <Text style={styles.text}>
                          {"\u2022"} Proficient at translating technical jargon into layman's terms using relevant
                          analogies.
                        </Text>
                        <Text style={styles.text}>
                          {"\n\u2022"} Enthusiastic and quick learner, always eager to adopt new technologies.
                        </Text>
                        <Text style={styles.text}>{"\n\u2022"} Strong written and verbal communication skills.</Text>
                        <Text style={styles.text}>
                          {"\n\u2022"} Demonstrates dependability, accountability, professionalism, and integrity in all
                          endeavors.
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ marginBottom: 5 }}>
                <Text style={styles.title}>EDUCATION</Text>
                <Divider />
                <View style={{ flexGrow: 1, marginTop: 5 }}>
                  <Text style={{ ...styles.small_title, color: "rgb(8,126,164)" }}>
                    Bachelor of Science in Computer Engineering
                  </Text>
                  <Text style={styles.small_title}>Lorma Colleges</Text>
                  <Text style={{ fontSize: 8, color: "#2c3e50" }}>2014 - 2019</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default App;
