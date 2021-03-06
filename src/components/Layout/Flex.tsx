import * as React from "react";
import styled from "styled-components";

interface CFlexProps {
  children: React.ReactNode;
  direction?: string;
  flexWrap?: string;
  jContent?: string;
  alignItems?: string;
  alignContent? : string;
}
interface IFlexProps {
  children?: React.ReactNode;
  flex: string;
  alignSelf?: string;
  order?: string;
  zIndex?: string;
  style?: object;
}

const SubBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: ${(props: CFlexProps) => props.direction || "row"}
    ${(props: CFlexProps) => props.flexWrap || "nowrap"};
  justify-content: ${(props: CFlexProps) =>
    props.jContent || "flex-start"}; /*수평축 방향 정렬*/
  align-items: ${(props: CFlexProps) =>
    props.alignItems || "stretch"}; /*수직축 방향 정렬 (전체설정)*/
`;

const Box = styled.div`
  flex: ${(props: IFlexProps) => props.flex};
  align-self: ${(props: IFlexProps) =>
    props.alignSelf || "stretch"}; /*수직축 방향 정렬 (개별설정)*/
  ${(props: IFlexProps) => (props.order ? `order: ${props.order}` : "")};
  ${(props: IFlexProps) => (props.zIndex ? `z-index: ${props.zIndex}` : "")};
`;

export const FxContainer = (props: CFlexProps) => {
  const { children, ...other } = props;
  return <SubBox {...other}>{children}</SubBox>;
};

export const FxItem = (props: IFlexProps) => {
  const { children, ...other } = props;
  return <Box {...other}>{children ? children : null}</Box>;
};
