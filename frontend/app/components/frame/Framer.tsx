import React, { useMemo }  from 'react';
import './Framer.css';
import Frame from './Frame';

const Framer = () => {
  const upperCards = [
    { id: 1, body: 'Roomify helped me visualize my space better than any other design tool. The AI suggestions were spot on!', footer: 'Ben', star: 5 },
    { id: 2, body: 'I love how intuitive the interface is. It was easy to upload my room and experiment with different styles.', footer: 'Charles', star: 4 },
    { id: 3, body: 'Roomify saved me hours of planning. I was able to instantly see how my furniture would look in a new layout.', footer: 'Juan',star: 5 },
    { id: 4, body: 'I wish there were more customization options for certain furniture pieces, but overall, I’m impressed.', footer: 'Jack', star: 4 },
    { id: 5, body: 'The AI suggestions are great, but sometimes they could be more specific to my style. I want more variety.', footer: 'Aleem', star: 3 },
    { id: 6, body: 'The platform could use more real-time collaboration features, especially for designing rooms with multiple people.', footer: 'Claudio', star: 5 },
  ];

  const lowerCards = [
    { id: 1, body: `I'd love to see an option for mood lighting in the AI-generated designs, to get a better sense of ambiance.`, footer: 'Sam', star: 5 },
    { id: 2, body: 'I like the feedback I get after I submit my design, but I wish there were more interactive options for fine-tuning.', footer: 'Ahmed', star: 3 },
    { id: 3, body: 'It would be helpful if there were more diverse furniture options, especially for smaller spaces.', footer: 'Alvrez', star: 4 },
    { id: 4, body: 'I love that Roomify considers both style and functionality. The designs are both beautiful and practical!', footer: 'Khan', star: 5 },
    { id: 5, body: 'The ability to switch between different styles and layouts is amazing, and I love how it helps me experiment.', footer: 'Aleem', star: 4 },
    { id: 6, body: 'I can see the potential of Roomify in creating my dream home. The AI helps me focus on what matters most!', footer: 'Chris', star: 4 },
  ];

  const duplicatedUpperCards = useMemo(() => upperCards.concat(upperCards), []);
  const duplicatedLowerCards = useMemo(() => lowerCards.concat(lowerCards), []);

  return (
    <>
      <div className="framer-header">
        <h2 className="py-3 text-center">Why They Love Roomify</h2>
      </div>
      <div className="framer-container">
        <div className="upper-framer">
        
          {duplicatedUpperCards.map((card, index) => (
            <Frame key={`${card.id}-${index}`} body={card.body} footer={card.footer} star={card.star} />
          ))}
        </div>
        <div className="lower-framer">
          {duplicatedLowerCards.map((card, index) => (
            <Frame key={`${card.id}-${index}`} body={card.body} footer={card.footer} star={card.star} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Framer;