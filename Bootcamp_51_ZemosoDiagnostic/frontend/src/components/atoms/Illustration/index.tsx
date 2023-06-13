import React from "react";

export interface IllustrationProps {
  image: string;
  width?: string;
  height?: string;
}

const Illustration: React.FC<IllustrationProps> = (props: IllustrationProps) => {
  return (
    <div>
        <img
          src={props.image}
          width={props.width}
          height={props.height}
        />
    </div>
  );
};

export default Illustration;
