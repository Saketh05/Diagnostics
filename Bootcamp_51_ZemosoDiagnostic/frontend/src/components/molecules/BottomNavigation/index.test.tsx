import { Box, Typography } from "@mui/material";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import BottomNavigation from ".";
import theme from "../../../Theme/theme";

const mockFunc = jest.fn();

describe("BottomNavigation testing", () => {
  test("renders BottomNavigation with cancelLink", () => {
    render(
      <BrowserRouter>
        <BottomNavigation
          buttonName="Select Lab"
          cancelLink="/"
          buttonLink="/"
          typo={<Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
          >
            <Typography
              variant="overline2"
              sx={{ color: theme.palette.text2.main }}
            >
              Los Altos Center Lab
            </Typography>
            <Typography
              variant="button"
              sx={{
                color: theme.palette.text1.main,
                "> span": { color: theme.palette.text3.main }
              }}
            >
              $1200 <Typography variant="overlineR">for 1 Test</Typography>
            </Typography>
          </Box>} />
      </BrowserRouter>
    );
    const testBottomNavigation = screen.getByText(/Los Altos Center Lab/i);
    const testButton = screen.getByText(/Select/i);
    fireEvent.click(testButton);
    expect(testBottomNavigation).toBeInTheDocument();
  });

  test("renders BottomNavigation without cancelLink", () => {
    render(
      <BrowserRouter>
        <BottomNavigation
          buttonName="Select Lab"
          buttonLink="/"
          handleNext={mockFunc}
          typo={
            <Box
              sx={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
            >
              <Typography
                variant="overline2"
                sx={{ color: theme.palette.text2.main }}
              >
                Los Altos Center Lab
              </Typography>
              <Typography
                variant="button"
                sx={{
                  color: theme.palette.text1.main,
                  "> span": { color: theme.palette.text3.main },
                }}
              >
                $1200 <Typography variant="overlineR">for 1 Test</Typography>
              </Typography>
            </Box>
          }
        />
      </BrowserRouter>
    );
    const testPageFooter = screen.getByText(/Los Altos Center Lab/i);
    const testButton = screen.getByText(/Select/i);
    fireEvent.click(testButton);
    expect(testPageFooter).toBeInTheDocument();
    expect(mockFunc).toBeCalled()
  });
});
