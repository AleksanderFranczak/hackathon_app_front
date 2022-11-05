import styled from "styled-components";

import React from "react";
import { appColors } from "../utils/colors";

const Wrapper = styled.div``;

const SingleProgressItem = styled.div`
  width: 10px;
  height: 5px;
  border-radius: 4px;
  background: ${(props) => (props.active ? appColors.pink : "rgba(0,0,0,0.6)")};
`;

const ProgressPagination = ({ activeIndex, pages }) => {
  return <Wrapper></Wrapper>;
};
