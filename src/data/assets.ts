/** Site media registry. Legacy imported filenames are retained for traceability. */
export const assets = {
  home: {
    texture: "/assets/framer/home/1PJVJutjlmXDrQzCM5kuS4Ilo.avif",
    auroraThumbnail: "/assets/thumbnails/aurora-thumbnail.png",
    tecanThumbnail: "/assets/thumbnails/tecan-thumbnail.png",
    mlLoopThumbnail: "/assets/mlloop/scenario-workspace-hero.png",
    contourOne: "/assets/framer/home/JvD3j2vtI3LIFJOEemhBXGdk.avif",
    contourTwo: "/assets/framer/home/mENJLcN1AqCTYHCft70MEpaXQY.avif",
  },
  aurora: {
    cover: "/assets/framer/aurora/usYUBzxOEtlY9BE7c5WN7mWRY1o.webp",
    careCliff: "/assets/aurora/care-cliff.svg",
    process: [
      "/assets/framer/aurora/MwB9mNhklViykMN07lXbByZU.avif",
      "/assets/framer/aurora/cDFmKSETZSQtWonJqWp7HwosWc.avif",
    ],
    storyboard: "/assets/aurora/storyboard.png",
    reflection: [
      "/assets/aurora/reflection-team.jpg",
      "/assets/aurora/reflection-presentation.jpg",
    ],
  },
  tecan: {
    cover: "/assets/framer/tecan/lrAOkftl1bthxSWDeWBrAxGlhc.png",
    personas: {
      william: "/assets/tecan/william.png",
      frank: "/assets/tecan/frank.png",
      kim: "/assets/tecan/kim.png",
    },
    visualFactory: "/assets/tecan/visual-factory.png",
  },
  about: {
    portrait: "/assets/framer/about/bxMcxLUtkijlao9eYwFYKR2Fo.webp",
    snow: "/assets/framer/about/vwxFewwWtZxPbXKxYGllotwSE.webp",
    cats: "/assets/framer/about/8ibGgqHNei28kG34L4AVfqPd5w.webp",
    craft: "/assets/framer/about/cDU5mMUmPZgWcLTG4vUyARWdo.webp",
  },
} as const;
