import { getRgba } from "@common/utils/palette";

const components = {
  // MuiTouchRipple: {
  //   styleOverrides: {
  //     root: {
  //       backgroundColor: "#eee",
  //       color: "#eee",
  //     },
  //   },
  // },
  // MuiInputBase: {
  //   styleOverrides: {
  //     root: {
  //       ".MuiInputBase-input": {
  //         padding: 8,
  //       },
  //     },
  //   },
  // },
  // MuiCheckbox: {
  //   styleOverrides: {
  //     root: {
  //       padding: 4,
  //       "&.Mui-checked": {
  //         color: "#eee",
  //       },
  //       "&:hover": {
  //         backgroundColor: getRgba("#999", 0.1),
  //       },
  //     },
  //   },
  // },
  // MuiSvgIcon: {
  //   styleOverrides: {
  //     root: {
  //       "&.MuiSvgIcon-fontSizeLarge": {
  //         fontSize: "1.75rem",
  //       },
  //     },
  //   },
  // },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        boxShadow: "none",
        padding: "12px 24px",
        minWidth: "auto",
        height: "fit-content",
        fontFamily: "rubik",
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "24px",
        textTransform: 'none',
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
  },
  // MuiTabs: {
  //   styleOverrides: {
  //     root: {
  //       minHeight: 0,
  //       height: 48,
  //       ".MuiTabs-flexContainer": {
  //         gap: 24,
  //       },
  //       ".MuiTabs-indicator": {
  //         height: 4,
  //       },
  //     },
  //   },
  // },
  // MuiTab: {
  //   styleOverrides: {
  //     root: {
  //       padding: 2,
  //       minHeight: 42,
  //       height: 46,
  //     },
  //   },
  // },
  // MuiAccordion: {
  //   styleOverrides: {
  //     root: {
  //       boxShadow: "none",
  //       border: 0,
  //       borderRadius: 8,
  //       padding: 0,
  //       "&:before": {
  //         display: "none",
  //       },
  //       background: "transparent",
  //     },
  //   },
  //   defaultProps: { disableGutters: true },
  // },
  // MuiAccordionSummary: {
  //   styleOverrides: {
  //     root: {
  //       padding: "0 8px",
  //       minHeight: 28,
  //       ".MuiAccordionSummary-content": {
  //         margin: 0,
  //       },
  //       borderRadius: 8,
  //       backgroundColor: "#eee",
  //     },
  //   },
  // },
  // MuiAccordionDetails: {
  //   styleOverrides: {
  //     root: {
  //       padding: "0 0 8px 0",
  //     },
  //   },
  // },
  // MuiPaper: {
  //   styleOverrides: {
  //     root: {
  //       padding: 16,
  //       borderRadius: 8,
  //     },
  //   },
  //   defaultProps: { elevation: 0 },
  // },
  // MuiLink: {
  //   styleOverrides: {
  //     root: {
  //       textDecoration: "none",
  //       color: "#555e61",
  //       "&:hover": {
  //         color: "#00141e",
  //       },
  //     },
  //   },
  // },
  // MuiGrid: {
  //   styleOverrides: {
  //     root: {
  //       "&.MuiGrid-container": {
  //         margin: 0,
  //       },
  //     },
  //   },
  // },
};

export default components;
