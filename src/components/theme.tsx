import {
  createSystem,
  defineConfig,
  defaultConfig,
} from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    "html, body": {
      background: "bg.canvas",
      color: "fg.default",
      scrollBehavior: "smooth",
      overflowX: "clip",
      maxWidth: "100%",
    },
    body: {
      fontFamily: "body",
      fontSize: "body",
      fontWeight: "regular",
      lineHeight: "1.7",
    },
    "img, svg, video, canvas": {
      maxWidth: "100%",
    },
    h1: {
      textStyle: "h1",
    },
    h2: {
      textStyle: "h2",
    },
    "a, button, [role='button']": {
      fontFamily: "body",
      fontSize: "cta",
      fontWeight: "semibold",
    },
    "small, figcaption": {
      textStyle: "micro",
    },
    "::selection": {
      background: "brand.primary",
      color: "fg.onBrand",
    },
    "::placeholder": {
      color: "fg.muted",
    },
  },
  theme: {
    tokens: {
      colors: {
        tsa: {
          blue: { value: "#003858" },
          ivory: { value: "#F7F3EE" },
          taupe: { value: "#8A8681" },
          orange: { value: "#F48420" },
          sage: { value: "#5F736B" },
          graphite: { value: "#1F2430" },
          white: { value: "#FFFFFF" },
          mist: { value: "rgba(0, 56, 88, 0.08)" },
        },
      },
      fonts: {
        heading: {
          value: "Lora, Georgia, 'Times New Roman', serif",
        },
        body: {
          value: "Manrope, Arial, Helvetica, sans-serif",
        },
      },
      fontSizes: {
        h1: { value: "clamp(2.5rem, 5vw, 3.5rem)" },
        h2: { value: "clamp(1.75rem, 3.5vw, 2.25rem)" },
        h3: { value: "clamp(1.25rem, 2vw, 1.5rem)" },
        body: { value: "clamp(1rem, 1.5vw, 1.125rem)" },
        cta: { value: "clamp(0.875rem, 1.25vw, 1rem)" },
        micro: { value: "clamp(0.6875rem, 1vw, 0.8125rem)" },
      },
      fontWeights: {
        regular: { value: "400" },
        semibold: { value: "600" },
      },
      letterSpacings: {
        micro: { value: "0.12em" },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          primary: { value: "{colors.tsa.blue}" },
        },
        bg: {
          canvas: { value: "{colors.tsa.ivory}" },
          surface: { value: "{colors.tsa.white}" },
          brand: { value: "{colors.tsa.blue}" },
        },
        fg: {
          default: { value: "{colors.tsa.graphite}" },
          muted: { value: "{colors.tsa.taupe}" },
          onBrand: { value: "{colors.tsa.ivory}" },
        },
        accent: {
          warm: { value: "{colors.tsa.orange}" },
          balance: { value: "{colors.tsa.sage}" },
        },
        border: {
          subtle: { value: "rgba(0, 56, 88, 0.12)" },
        },
      },
    },
    textStyles: {
      h1: {
        value: {
          fontFamily: "heading",
          fontSize: "h1",
          fontWeight: "semibold",
          lineHeight: "1.05",
          letterSpacing: "-0.02em",
        },
      },
      h2: {
        value: {
          fontFamily: "heading",
          fontSize: "h2",
          fontWeight: "semibold",
          lineHeight: "1.12",
          letterSpacing: "-0.015em",
        },
      },
      h3: {
        value: {
          fontFamily: "heading",
          fontSize: "h3",
          fontWeight: "semibold",
          lineHeight: "1.25",
        },
      },
      body: {
        value: {
          fontFamily: "body",
          fontSize: "body",
          fontWeight: "regular",
          lineHeight: "1.7",
        },
      },
      cta: {
        value: {
          fontFamily: "body",
          fontSize: "cta",
          fontWeight: "semibold",
          lineHeight: "1.2",
        },
      },
      micro: {
        value: {
          fontFamily: "body",
          fontSize: "micro",
          fontWeight: "semibold",
          lineHeight: "1.3",
          letterSpacing: "micro",
          textTransform: "uppercase",
        },
      },
    },
  },
})

const theme = createSystem(defaultConfig, config)

export default theme
