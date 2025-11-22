
# Fnction to extract the references from ui.adsabs.harvard.edu
function get_ref_papers_lst() {
  var op_txt = '';
  var tmp_str, tmp_int;
  document.querySelectorAll('#current-subview ul.results-list > li').forEach( e => {
    op_txt += e.querySelector('h3').innerText+"\n";
    tmp_str = e.querySelector('h3').parentElement.getAttribute('href');
    op_txt += 'Link: https://ui.adsabs.harvard.edu/'+ tmp_str.substring(1)+"\n";
    const m_elt = e.querySelector('div.pull-right .s-results-links > div:nth-child(2) > ul.s-link-details');
    m_elt.querySelectorAll('li').forEach( e2 => {
        tmp_str = e2.innerText;
        tmp_int = e2.innerText.indexOf(' (');
        op_txt += tmp_str.substring(0,tmp_int)+': '+tmp_str.substring(tmp_int+2,tmp_str.length-1) + "\n";
    });
    op_txt += "------\n";
  });
  return(op_txt);
}
