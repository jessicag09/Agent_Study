window.__STUDY_CONFIG__ = {
  // Apps Script web app deployment URL, without a trailing slash.
  // Example: "https://script.google.com/macros/s/AKfycb.../exec"
  apiBaseUrl: "https://script.google.com/macros/s/AKfycbxjD4KM-OHTe4qnBl2SWVNvRCEIrvPesIW5AOxVbIF_DViD76FntTERwJnL4a2HNeST/exec",

  // Qualtrics post-survey URL.
  // Left blank because the post-study survey now runs inside the
  // prototype itself. Setting this re-enables an external redirect
  // after the in-app survey, which would send participants to a
  // second post-survey on Qualtrics — almost never what we want.
  postSurveyUrl: "",

  // Participant flow returns to the post-survey automatically after a save.
  autoRedirectToPostSurvey: false,
  postSurveyDelayMs: 1200,
};
