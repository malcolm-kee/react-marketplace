import { Accordion } from "../components/accordion";
import * as React from "react";

export const Faq = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(undefined); // undefined if nothing expanded, else the index of the accordion

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <Accordion
        showContent={expandedIndex === 0}
        onToggleShow={() =>
          setExpandedIndex(expandedIndex === 0 ? undefined : 0)
        }
        title="What's the best thing about Switzerland?"
      >
        <p className="text-base text-gray-500">
          I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
        </p>
      </Accordion>
      <Accordion
        title="How can I get refund?"
        showContent={expandedIndex === 1}
        onToggleShow={() =>
          setExpandedIndex(expandedIndex === 1 ? undefined : 1)
        }
      >
        <p className="text-base text-gray-500">
          We do not give refund, so try at your risk.
        </p>
        <p className="text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          facere hic sed nemo porro error libero corrupti voluptas assumenda
          nesciunt fugiat rem, aut, rerum quaerat eum accusamus adipisci. Culpa,
          modi amet est nobis odio eveniet! Quisquam ipsum alias molestiae
          ipsam.
        </p>
      </Accordion>
      <Accordion
        title="Can I become a millionaire by learning JavaScript?"
        showContent={expandedIndex === 2}
        onToggleShow={() =>
          setExpandedIndex(expandedIndex === 2 ? undefined : 2)
        }
      >
        <p className="text-base text-gray-500">
          The only thing that can surely make you a millionaire is by having one
          as your parents. Everything else can't ensure that.
        </p>
      </Accordion>
    </div>
  );
};
