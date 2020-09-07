import React from "react";
import styled from "styled-components";

import NAME from "../../utils/Enum";

// interface func {
//   onClick: ()=> void;
// }

interface IconProps {
  name: string;
}

interface optionsIFC {
  viewBox: string;
  width: number;
  height: number;
  d_path?: string;
}

const IconArea = styled.span`
  cursor: pointer;
  ${(props: IconProps) =>
    props.name === "setting" ? "float:right; margin: 10px; opacity: 0.7;" : ""}
`;

const setOptions = (name: string): optionsIFC => {
  let viewBox = "",
    height = 0,
    width = 0,
    d_path = "";

  switch (name) {
    case NAME.INFORM:
      viewBox = "0 0 60 60";
      height = 22;
      width = 22;
      d_path =
        "M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z";
      break;
    case NAME.SETTING:
      viewBox = "0 0 340.274 340.274";
      width = 18;
      height = 18;
      d_path =
        "M293.629 127.806l-5.795-13.739c19.846-44.856 18.53-46.189 14.676-50.08l-25.353-24.77-2.516-2.12h-2.937c-1.549 0-6.173 0-44.712 17.48l-14.184-5.719c-18.332-45.444-20.212-45.444-25.58-45.444h-35.765c-5.362 0-7.446-.006-24.448 45.606l-14.123 5.734C86.848 43.757 71.574 38.19 67.452 38.19l-3.381.105-27.27 26.737c-4.138 3.891-5.582 5.263 15.402 49.425l-5.774 13.691C0 146.097 0 147.838 0 153.33v35.068c0 5.501 0 7.44 46.585 24.127l5.773 13.667c-19.843 44.832-18.51 46.178-14.655 50.032l25.353 24.8 2.522 2.168h2.951c1.525 0 6.092 0 44.685-17.516l14.159 5.758c18.335 45.438 20.218 45.427 25.598 45.427h35.771c5.47 0 7.41 0 24.463-45.589l14.195-5.74c26.014 11 41.253 16.585 45.349 16.585l3.404-.096 27.479-26.901c3.909-3.945 5.278-5.309-15.589-49.288l5.734-13.702c46.496-17.967 46.496-19.853 46.496-25.221V151.88c-.005-5.519-.005-7.446-46.644-24.074zM170.128 228.474c-32.798 0-59.504-26.187-59.504-58.364 0-32.153 26.707-58.315 59.504-58.315 32.78 0 59.43 26.168 59.43 58.315-.006 32.177-26.656 58.364-59.43 58.364z";
      break;
    case NAME.CALENDAR:
      viewBox = "0 0 512 512";
      width = 30;
      height = 30;
      d_path =
        "m446 40h-46v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-224v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-46c-36.393 0-66 29.607-66 66v340c0 36.393 29.607 66 66 66h380c36.393 0 66-29.607 66-66v-340c0-36.393-29.607-66-66-66zm-380 32h46v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h224v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h46c18.748 0 34 15.252 34 34v38h-448v-38c0-18.748 15.252-34 34-34zm380 408h-380c-18.748 0-34-15.252-34-34v-270h448v270c0 18.748-15.252 34-34 34z";
      break;
    case NAME.RICE:
      viewBox = "0 0 512 512";
      width = 30;
      height = 30;
      d_path =
        "M497,210h-16.53c-3.056-14.862-10.59-28.514-21.626-39.084c5.678-19.503,3.282-40.626-6.988-58.416c-10.272-17.79-27.368-30.426-47.096-35.26c-4.835-19.728-17.471-36.824-35.261-47.096c-17.788-10.27-38.912-12.666-58.415-6.988C297.035,8.488,277.543,0,257,0c-20.865,0-41.698,8.844-55.951,23.195c-19.539-5.727-40.721-3.344-58.549,6.949c-17.79,10.271-30.426,27.368-35.261,47.095c-19.728,4.834-36.824,17.47-47.095,35.26c-10.271,17.789-12.666,38.913-6.988,58.416C42.12,181.486,34.586,195.138,31.53,210H15c-8.284,0-15,6.716-15,15c0,88.059,45.651,169.721,120,216.259V467c0,24.813,20.187,45,45,45h182c24.813,0,45-20.187,45-45v-25.741c74.349-46.538,120-128.2,120-216.259C512,216.716,505.284,210,497,210z M79.496,188.019c6.034-4.177,8.159-12.107,5.023-18.743c-6.346-13.426-5.746-29.043,1.606-41.776c7.352-12.734,20.577-21.063,35.375-22.28c7.314-0.601,13.119-6.406,13.721-13.72c1.217-14.799,9.545-28.023,22.279-35.376c12.733-7.352,28.351-7.951,41.776-1.606c6.635,3.137,14.565,1.011,18.742-5.023C226.092,37.835,241.757,30,257,30c14.705,0,28.529,7.288,36.981,19.496c4.178,6.034,12.108,8.16,18.743,5.023c13.425-6.346,29.041-5.746,41.775,1.606s21.063,20.576,22.279,35.375c0.601,7.314,6.406,13.119,13.72,13.721c14.799,1.217,28.024,9.546,35.377,22.28c7.352,12.733,7.951,28.35,1.605,41.776c-3.136,6.635-1.011,14.566,5.023,18.743c7.91,5.476,13.737,13.215,16.871,21.981H62.624C65.759,201.234,71.585,193.495,79.496,188.019z M362,467c0,8.271-6.729,15-15,15H165c-8.271,0-15-6.729-15-15v-17h212V467z M369.098,420H142.902C77.53,382.275,35.497,314.374,30.502,239.8h450.996C476.503,314.374,434.47,382.275,369.098,420z";
      break;
    default:
      break;
  }

  return { viewBox, width, height, d_path };
};

//(event: React.MouseEvent) => void
interface Props {
  id?: string;
  name: string;
  onClick: (event: React.MouseEvent) => void;
}

/** 
// const SVGIcon:React.FC<Props> ({name, onClick}) => {
// const SVGIcon = ({ name, onClick }: IconProps) => {
*/
const SVGIcon = ({ name, ...props }: Props) => {
  const option = setOptions(name);
  const { viewBox, width, height, d_path } = option;
  console.log(name, "na?");
  return (
    <IconArea name={name} {...props}>
      <svg
        id={name}
        x="0px"
        y="0px"
        fill="#fff"
        enableBackground="new 0 0 512 512"
        viewBox={viewBox}
        width={width}
        height={height}
      >
        <g>
          <path d={d_path} />
        </g>
        {name === NAME.RICE && (
          <g>
            <g>
              <circle cx="317" cy="135" r="15" />
            </g>
            <g>
              <circle cx="377" cy="165" r="15" />
            </g>
            <g>
              <circle cx="135" cy="135" r="15" />
            </g>
          </g>
        )}
      </svg>
    </IconArea>
  );
};

export default SVGIcon;
