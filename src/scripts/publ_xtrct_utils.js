
# Function to extract the references from ui.adsabs.harvard.edu references/citations list page
function get_ref_cite_papers_lst() {
  var op_txt = '';
  var tmp_str, tmp_int, tmp_elt;
  document.querySelectorAll('#current-subview ul.results-list > li').forEach( e => {
    op_txt += e.querySelector('h3').innerText+"\n";
    tmp_str = e.querySelector('h3').parentElement.getAttribute('href');
    op_txt += 'ABS Link: https://ui.adsabs.harvard.edu/'+ tmp_str.substring(1)+"\n";
    tmp_elt = e.querySelector('div.pull-right .s-results-links > div:nth-child(1) > ul.s-link-details > li > a');
    op_txt += 'Arxiv Link: https://ui.adsabs.harvard.edu/'+ tmp_elt.getAttribute('href')+"\n";
    tmp_elt = e.querySelector('div.pull-right .s-results-links > div:nth-child(2) > ul.s-link-details');
    tmp_elt.querySelectorAll('li').forEach( e2 => {
        tmp_str = e2.innerText;
        tmp_int = e2.innerText.indexOf(' (');
        op_txt += tmp_str.substring(0,tmp_int)+': '+tmp_str.substring(tmp_int+2,tmp_str.length-1) + "\n";
    });
    op_txt += "------\n";
  });
  return(op_txt);
}
