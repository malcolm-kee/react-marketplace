import * as React from "react";
import { CareerItem } from "../components/career-item";

const jobs = [
  {
    descriptions: [
      "Create memes using the latest memes template",
      "Resurrect outdated memes templates by changing wordings to reflect latest trend",
      "Able to tell joke without appearing trying too hard",
    ],
    requirements: [
      "Knowledge of latest memes template",
      "Creative but not destructive",
      "Balls to make fun of your boss",
    ],
    _id: "60f1bf2ddcd48a001f4f9e74",
    title: "Memer",
    department: "UI / UX Design",
    level: "experienced",
    summary:
      "The Design team plays an important role in Shopit. The team covers the entire range of product UI/UX design, including the user-growth, promotion, wallet and payment, checkout, retention, listings and users, search and recommendation etc. The team is also responsible for the branding visual identities and elements of Shopit, including logos, mascots, stickers, and internal physical products.",
    headcount: 20,
    createdAt: "2021-07-16T17:17:33.183Z",
    updatedAt: "2021-07-16T17:17:33.183Z",
    __v: 0,
  },
  {
    descriptions: [
      "Post random tech articles to keep the team updated on latest tech trends.",
      'Use emoji with conflicting message content, e.g. "I disagree with your opinion and I think that\'s stupid :)"',
      "Add Gif to make the chatroom seems exciting.",
    ],
    requirements: [
      "Knowledge of latest tech trends is mandatory",
      "Knowledge of best practices of Gif and Memes",
    ],
    _id: "60f1bf2ddcd48a001f4f9e6b",
    title: "Slack Chatter",
    department: "Engineering",
    level: "entry",
    summary:
      "The Engineering teams at Shopit is the core competency of Shopit by utilizing next-gen Blockchain virtual currency and display them in an interactive platform using VR/AR best practices.",
    headcount: 2,
    createdAt: "2021-07-16T17:17:33.170Z",
    updatedAt: "2021-07-16T17:17:33.170Z",
    __v: 0,
  },
  {
    descriptions: [
      "Groom yourself perfectly so that we can dazzle the candidates to work for us",
      "Apply the art of subtlety to attracts candiates without causing feeling of being cheated",
      'Post inspirational quotes and stories on LinkedIn. It is fine if there is no real info that you want to share, as long as you ends your post with "Agree?"',
    ],
    requirements: [
      "Good-looking is mandatory. Normal looking can be considered if you have a nice voice and good Photoshop skill (Instagram filter doesn't count, it's too common so everyone can tell at once).",
      "Good in writing email and bad in writing other stuffs. This is to attract candidates before they join and confuse them when they are hired.",
      "Genuine interest to other people and good in making others talking.",
    ],
    _id: "60f1bf2ddcd48a001f4f9e60",
    title: "Recruiter",
    department: "Human Resources",
    level: "experienced",
    summary:
      "The Human Resources teams at Shopit is what makes the Engineering teams here possible. By having an attractive appearance, HR attracts talents that wish to interact with them before they realize HR is working in different building in Shopit",
    headcount: 1,
    createdAt: "2021-07-16T17:17:33.155Z",
    updatedAt: "2021-07-16T17:17:33.155Z",
    __v: 0,
  },
  {
    descriptions: [
      'Add comments on GitHub issue with "+1", "This is not Stack Overflow", and "Closed because irrelevant"',
      "Push a commit everyday by removing/adding a space to make repository seems active.",
      "Copy paste entire content of a random logs file and use it to raise GitHub issue on competitor's repository to create the perception of bugginess of the library.",
    ],
    requirements: [
      "Master degree or outstanding writing skill is required.",
      "Good sense of humour.",
    ],
    _id: "60f1bf2ddcd48a001f4f9e57",
    title: "GitHub Issue Commentor",
    department: "Engineering",
    level: "internship",
    summary:
      "The Engineering teams at Shopit is the core competency of Shopit by utilizing next-gen Blockchain virtual currency and display them in an interactive platform using VR/AR best practices.",
    headcount: 2,
    createdAt: "2021-07-16T17:17:33.144Z",
    updatedAt: "2021-07-16T17:17:33.144Z",
    __v: 0,
  },
  {
    descriptions: [
      "Primarily cleanup the sh*t that is caused by others, including the hard-code React component and the inaccurate financial report",
      "Ensure toilet papers and drinks on meeting tables are always available while avoid being recognized as same person that handle both places at the same time",
      'Communicate effectively with shareholders and C-suite executives, as they fond of motivational story about janitor that can be shared in LinkedIn and ends with "appreciate what you have".',
      "Take on ad-hoc tasks, such as being the scapegoat of security breach",
    ],
    requirements: [
      'Good cleaning skill is mandatory. From cleaning up the legacy code to polishing the annual report presentation, you\'re the go-to person when anyone think of the word "clean".',
      "Ability to multi-task, like wiping the table while waiting the tea water to be heated",
      "Good scheduling skill, such as on the way to retrieving toilet paper from storeroom, bring along the rubbish from office",
      "Friendly and cheerful. White teeth is a plus",
    ],
    _id: "60f1bf2ddcd48a001f4f9e4c",
    title: "Janitor",
    department: "Health/Wellfare",
    level: "experienced",
    summary:
      "The Health/Wellfare teams at Shopit responsible for health and wellfare for everyone in the company, including the workaholic CEO and his micro-managing husband (also acting as COO here).",
    headcount: 3,
    createdAt: "2021-07-16T17:17:33.129Z",
    updatedAt: "2021-07-16T17:17:33.129Z",
    __v: 0,
  },
  {
    descriptions: [
      "Primarily handle inquiries pertaining to orders, payments, shipping, vouchers and etc from both sellers and buyers via live chat",
      "Level 1 Customer Service is expected to provide First Contact Resolution (FCR) according to standard operating procedures. In the event of non-FCR, you are expected to follow up and respond back to users via callback or email",
      "Update case details appropriately, i.e. Gdocx, Salesforce and etc",
      "To meet Key Performance Indicators such as average handling time, FCR rate, email/chat response rate, customer satisfaction score and etc",
      "Communicate effectively by providing accurate information to Shopee users and external partners such as Poslaju and iPay88, where appropriate",
      "Communicate effectively with team members",
      "Take on ad-hoc projects/assignments",
    ],
    requirements: [
      "Passionate Diploma holder and fresh graduates are welcome to apply",
      "Business writing skill is mandatory",
      "Good typing skill",
      "Ability to work independently, flexible and adaptable",
      "Ability to multi-task, prioritize and manage time effectively",
      "Demonstrate teamwork all the time",
    ],
    _id: "60f1bf2ddcd48a001f4f9e43",
    title: "Customer Service Agent",
    department: "Operations",
    level: "entry",
    summary:
      "The Operation teams at Shopit covers the operational end-to-end process, from when the buyer searches for a product listed on the Shopit platform, to the moment the buyer receives the products. The team analyses and monitors operational KPIs across the region and conducts root cause analysis when operation performance fluctuates. The Operations team comprises Customer Service, Payment, Listings, Warehouse, Logistics, Seller Operations and Fraud.",
    headcount: 10,
    createdAt: "2021-07-16T17:17:33.112Z",
    updatedAt: "2021-07-16T17:17:33.112Z",
    __v: 0,
  },
  {
    descriptions: [
      "Explore and optimize the visual design work flow/method and help team improving the efficiency of cooperation",
      "Act as a designer and one of the decision maker to define and design the key visual and guidance of each request from marketing and product, for better execution around the world",
      "Optimize and maintain the brand identity for each Shopit brands by using scientific and efficient methods",
    ],
    requirements: [
      "Bachelor degree or outstanding design skills with more than 2 years experience in marketing design / web design / mobile design",
      "Solid design philosophy, deep understanding and practical experience in marketing/branding design, user experience design and related fields",
      "Excellent communication and teamwork skills",
      "Passionate and detail-oriented",
      "Experience in design for e-commerce is a plus",
      "Experience in designing for global/regional/local markets is a plus",
      "Experience in project management is a plus",
      "Experience in photography/graphic design/motion design is a plus",
    ],
    _id: "60f1bf2ddcd48a001f4f9e38",
    title: "Web Designer",
    department: "UI / UX Design",
    level: "experienced",
    summary:
      "The Design team plays an important role in Shopit. The team covers the entire range of product UI/UX design, including the user-growth, promotion, wallet and payment, checkout, retention, listings and users, search and recommendation etc. The team is also responsible for the branding visual identities and elements of Shopit, including logos, mascots, stickers, and internal physical products.",
    headcount: 5,
    createdAt: "2021-07-16T17:17:33.086Z",
    updatedAt: "2021-07-16T17:17:33.086Z",
    __v: 0,
  },
];

export const Career = () => {
  return (
    <div className="max-w-xl mx-auto p-6 space-y-5">
      {jobs.map((job) => (
        <CareerItem
          title={job.title}
          department={job.department}
          level={job.level}
          onEdit={() => alert("Edit btn clicked, populate the form!")}
          onDelete={() => alert("Delete btn clicked, delete the item!")}
          key={job._id}
        />
      ))}
    </div>
  );
};
