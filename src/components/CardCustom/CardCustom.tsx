// Card.tsx
import React from "react";
import { toast } from "sonner";

import "./Card.css";

interface CardProps {
  title: string;
  imageUrl?: string;
  description: string;
  showReadMore?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  description,
  showReadMore = true,
}) => {
  const handleReadMore = () => {
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };

  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}

      <div className="card-content">
        <h2 className="card-title">{title}</h2>

        <p className="card-description">{description}</p>

        {showReadMore && (
          <button onClick={handleReadMore} className="read-more-button">
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
