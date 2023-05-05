import React from "react";
import Wave from "react-wavify";

type Props = {
  className?: string;
  fill?: string;
};

const CloudProgressBar = ({ className, fill = "green", ...props }: Props) => (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     xmlSpace="preserve"
  //     width={800}
  //     height={800}
  //     viewBox="0 0 512.001 512.001"
  //     {...props}
  //     className={className}
  //     fill={fill}
  //   >

  <Wave
    fill="green"
    paused={false}
    options={{
      height: 20,
      amplitude: 10,
      speed: 0.4,
      points: 5,
    }}
    mask="url(#mask)"
  >
    <mask id="mask">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={800}
        height={800}
        viewBox="0 0 512.001 512.001"
        {...props}
      >
        <path d="M344.381 143.771C254.765 56.017 102.37 103.776 79.825 227.7c-31.849 4.598-59.138 25.445-72.018 55.076-.016.035-.032.07-.047.107-26.687 61.602 18.784 130.232 85.51 130.232h282.267c75.246 0 136.463-61.216 136.463-136.462 0-87.412-81.686-152.971-167.619-132.882zm31.156 237.349H93.271c-69.246 0-84.534-98.263-18.714-119.456 14.753-4.65 43.01-7.348 74.38 21.892 6.464 6.024 16.586 5.667 22.61-.794 6.024-6.464 5.668-16.586-.794-22.61-17.93-16.712-38.071-27.33-58.484-31.453 22.034-99.077 147.374-131.851 215.247-56.305a15.993 15.993 0 0 0 16.693 4.57c67.272-21.117 135.795 29.374 135.795 99.69.001 57.602-46.863 104.466-104.467 104.466z" />
      </svg>
    </mask>
  </Wave>
  //   </svg>
);

export default CloudProgressBar;
