// Function to extract the references from ui.adsabs.harvard.edu references/citations list page
function get_ref_cite_papers_lst() {
  var op_txt = "";
  var tmp_str, tmp_int, tmp_elt;
  document
    .querySelectorAll("#current-subview ul.results-list > li")
    .forEach((e) => {
      op_txt += e.querySelector("h3").innerText + "\n";
      tmp_str = e.querySelector("h3").parentElement.getAttribute("href");
      op_txt +=
        "ABS Link: https://ui.adsabs.harvard.edu/" +
        tmp_str.substring(1) +
        "\n";
      tmp_elt = e.querySelector(
        "div.pull-right .s-results-links > div:nth-child(1) > ul.s-link-details > li > a"
      );
      op_txt +=
        "Arxiv Link: https://ui.adsabs.harvard.edu/" +
        tmp_elt.getAttribute("href") +
        "\n";
      tmp_elt = e.querySelector(
        "div.pull-right .s-results-links > div:nth-child(2) > ul.s-link-details"
      );
      tmp_elt.querySelectorAll("li").forEach((e2) => {
        tmp_str = e2.innerText;
        tmp_int = e2.innerText.indexOf(" (");
        op_txt +=
          tmp_str.substring(0, tmp_int) +
          ": " +
          tmp_str.substring(tmp_int + 2, tmp_str.length - 1) +
          "\n";
      });
      op_txt += "------\n";
    });
  return op_txt;
}

// Function to extract search results list with abstract, title, year, authors
// Example URL:https://ui.adsabs.harvard.edu/search/q=citations(bibcode%3A2023arXiv230209419Z)&sort=date%20desc%2C%20bibcode%20desc&p_=0
function get_search_results_papers_list() {
  // Expand the abstracts of all search results entry
  document
    .querySelectorAll(".abstract-row .short-abstract > button")
    .forEach((e) => e.click());
  var op_txt = "";
  var tmp_str, tmp_int, tmp_elt;
  document.querySelectorAll("ul.results-list > li").forEach((e) => {
    e.querySelectorAll(".row").forEach((e2, j) => {
      if (j == 0) {
        op_txt +=
          "ABS Link: https://ui.adsabs.harvard.edu/" +
          e2.querySelector(".s-identifier > a").getAttribute("href") +
          "\n";
        op_txt +=
          "Bib Code: " + e2.querySelector(".s-identifier > a").innerText + "\n";
      }
      if (j == 1) {
        op_txt +=
          "Title: " + e2.querySelector("h3.s-results-title").innerText + "\n";
      }
      if (j == 2) {
        tmp_elt = e2.querySelector("a.expand-authors");
        if (tmp_elt) tmp_elt.click();
        op_txt += "Authors: " + e2.querySelector("ul").innerText + "\n";
      }
      if (j == 4) {
        op_txt +=
          "Abstract: " + e2.querySelector(".full-abstract").innerText + "\n";
      }
    });
    op_txt += "------\n";
  });
  return op_txt;
}
