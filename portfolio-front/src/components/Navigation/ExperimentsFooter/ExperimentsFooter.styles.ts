import { LIGHT_GREY } from "@/constants/style";
import styled from "styled-components";

export const Container = styled.div({
    borderTop: `0.5px solid ${LIGHT_GREY}`,
    height: 50,
    position: "fixed",
    bottom: 0,
    width: "100%",
    paddingLeft: "20rem",

    display: "flex",
    alignItems: "center",
});
