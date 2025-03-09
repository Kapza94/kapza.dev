const Resume = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-custom-black text-gray-300 rounded-lg shadow-lg">
      <div className="experience-about">
        <h1 className="text-3xl font-bold mb-4 custom-orange-font">Summary</h1>
        <p className="mb-6">
          With 8 years of experience in the customer support field, I have spent the last 4 years
          leading teams across various companies, driving operational efficiency, and enhancing
          customer satisfaction. My expertise lies in strategic planning, KPI development, and
          process improvement, with a strong understanding of agile principles and project
          management. In addition to my leadership roles, I am a freelance web developer, passionate
          about using technology to solve problems and improve user experiences.
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-4 custom-purple-font">Experience</h2>

      <div className="exp-all grid grid-cols-2 grid-rows-2 gap-4">
        <div className="exp-block mb-6 p-4 border border-gray-800 rounded-lg bg-gray-900 flex flex-col h-full">
          <h3 className="text-xl font-bold custom-orange-font">Betsson Group (Rizk brand)</h3>
          <p className="italic">
            Customer Service Team Manager | May 2023 - Present | Belgrade, Serbia
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Launched Rizk.rs, a flagship brand of Betsson Group, in Serbia.</li>
            <li>Developed KPI tracking and metrics systems for all agents.</li>
            <li>Conducted one-on-one meetings to help improve professional growth.</li>
            <li>Strategized to enhance visibility and player retention.</li>
            <li>Analyzed customer feedback and CSAT trends to drive service improvements.</li>
            <li>
              Implemented new workflows to streamline support efficiency and reduce response times.
            </li>
            <li>
              Coordinated with international teams to align support standards and best practices.
            </li>
          </ul>
        </div>

        <div className="exp-block mb-6 p-4 border border-gray-800 rounded-lg bg-gray-900 flex flex-col h-full">
          <h3 className="text-xl font-bold custom-orange-font">Examroom.Ai</h3>
          <p className="italic">
            Customer Service Team Leader | May 2022 - May 2023 | Belgrade, Serbia
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Led the onboarding team, managing up to 15 agents.</li>
            <li>Developed shift schedules and handled daily operations.</li>
            <li>Launched the Onboarding Agent (OBA) position in Serbia.</li>
            <li>Co-created and implemented comprehensive KPI tracking metrics.</li>
            <li>Ran daily huddles and led shifts in the absence of the Shift Manager.</li>
            <li>Collaborated with the India team to streamline global operations.</li>
            <li>Optimized resource management and trained a new team leader.</li>
          </ul>
        </div>

        <div className="exp-block mb-6 p-4 border border-gray-800 rounded-lg bg-gray-900 flex flex-col h-full">
          <h3 className="text-xl font-bold custom-orange-font">Geodis</h3>
          <p className="italic">
            Supply Chain Team Leader | November 2019 - April 2022 | Belgrade, Serbia
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Presented KPIs to British Petroleum and addressed urgent shipment issues.</li>
            <li>Ensured daily task completion and operational efficiency.</li>
            <li>Worked on cost-saving initiatives with the Inbound Logistics Supply Manager.</li>
            <li>Monitored vendor performance and developed improvement plans.</li>
            <li>
              Led the team through the covid-19 pandemic by helping implement new ways to improve
              our teams productivity and ddelivery times.
            </li>
          </ul>
        </div>

        <div className="exp-block mb-6 p-4 border border-gray-800 rounded-lg bg-gray-900 flex flex-col h-full">
          <h3 className="text-xl font-bold custom-orange-font">NCR</h3>
          <p className="italic">
            End 2 End Service Account Executive. | November 2019 - April 2022 | Belgrade, Serbia
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Provided end-to-end support for Barclays, Clydesdale, and Yorkshire Bank clients.
            </li>
            <li>
              Managed ATM outages, collaborating with internal teams to restore services promptly.
            </li>
            <li>
              Coordinated meetings between third-party companies and NCR for client discussions.
            </li>
            <li>
              Produced daily spreadsheets and reports for account teams, aiding in analysis and
              statistics.
            </li>
            <li>
              Prioritized and escalated client issues, ensuring efficient communication and
              resolution.
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 custom-purple-font">Skills</h2>
      <p>
        <strong>Web Development:</strong> HTML, CSS, JavaScript, React, Node.js, MySQL, SQLite,
        GraphQL, WordPress
      </p>
      <p>
        <strong>KPI & Team Management:</strong> Quality & Customer Focus, Performance &
        Productivity, Growth & Engagement, Operational Efficiency
      </p>
    </div>
  );
};

export default Resume;
