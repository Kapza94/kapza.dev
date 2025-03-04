const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-custom-black text-gray-300 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 custom-orange-font">Summary</h1>
      <p className="mb-6">
        With 8 years of experience in the customer support field, I have spent the last 4 years
        leading teams across various companies, driving operational efficiency, and enhancing
        customer satisfaction. My expertise lies in strategic planning, KPI development, and process
        improvement, with a strong understanding of agile principles and project management. In
        addition to my leadership roles, I am a freelance web developer, passionate about using
        technology to solve problems and improve user experiences.
      </p>

      <h2 className="text-2xl font-bold mb-4 custom-purple-font">Experience</h2>

      <div className="mb-6">
        <h3 className="text-xl font-bold custom-orange-font">Betsson Group (Rizk brand)</h3>
        <p className="italic">
          Customer Service Team Manager | May 2023 - Present | Belgrade, Serbia
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Launched Rizk.rs, a flagship brand of Betsson Group, in Serbia.</li>
          <li>Developed KPI tracking and metrics systems for all agents.</li>
          <li>Conducted one-on-one meetings to foster professional growth.</li>
          <li>Strategized to enhance visibility and player retention.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold custom-orange-font">Examroom.Ai</h3>
        <p className="italic">
          Customer Service Team Leader | May 2022 - May 2023 | Belgrade, Serbia
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Developed and managed comprehensive tracking metrics.</li>
          <li>Led onboarding operations for new agents.</li>
          <li>Managed daily huddles and shift operations.</li>
          <li>Collaborated with international teams for efficiency.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold custom-orange-font">Geodis</h3>
        <p className="italic">
          Supply Chain Team Lead | November 2019 - April 2022 | Belgrade, Serbia
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Presented KPIs to British Petroleum.</li>
          <li>Optimized shipment processes and vendor performance.</li>
          <li>Managed a team and improved daily workflow efficiency.</li>
          <li>Conducted root cause analysis for future problem prevention.</li>
        </ul>
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
