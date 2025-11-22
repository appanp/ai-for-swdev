## AI for Software Development

### TODOs

- [x] Add links to GS citations wherever it is missing
- [x] Write a JS function to extract the citations from adsabd.harvard.edu links below.
  - There are around 500+ citations from absads.harvard.edu site & there could be clashes.
- [ ] Write a JS function to extract results of search from arxiv such as [this one](https://arxiv.org/search/?searchtype=author&query=Ganesh%2C+V&abstracts=show&size=100&order=-announced_date_first)
- [x] Get the consolidated list of citations from the root papers listed below.
  - There are [around 630+ of them](./data/citations_of_root_papers_from_ads.txt).
  - Only around 500+ of them are unqiue.
- [ ] Write script or command to download the PDF files from arviv
- [ ] Come up with a classification of papers
  - Create a Jupyter notebook to cluster the papers

### Command-line Snippets

```
gawk '/Citations: [0-9]+, Refere/ {cnt_str=$3;tot_cnt += substr(cnt_str,1,length(cnt_str)-1)}; END {print tot_cnt}' README.md
526
```

```
ripgrep 'ABS Link:' data/citations_of_root_papers_from_ads.txt|cut -d' ' -f3|sort -d|uniq|wc -l
543
ripgrep 'Arxiv Link:' data/citations_of_root_papers_from_ads.txt|cut -d' ' -f3|sort -d|uniq|ripgrep EPRINT_PDF|wc -l
508
```

### Papers

PDF files of these papers are in folder `~/my_git_repos/ai-for-swdev/papers/` in my Lenovo Thinkpad P16s.

1. [No More Manual Tests? Evaluating and Improving ChatGPT for Unit Test Generation](https://ui.adsabs.harvard.edu/abs/2023arXiv230504207Y/abstract)
   - Citations: 113, References: 17
   - [arxiv link](https://arxiv.org/abs/2305.04207)
   - [GS citations: 199](https://scholar.google.com/scholar_lookup?arxiv_id=2305.04207)
1. [PAT-Agent: Autoformalization for Model Checking](https://ui.adsabs.harvard.edu/abs/2025arXiv250923675Z/abstract)
   - Citations: 1, References: 11
   - [arxiv link](https://arxiv.org/abs/2509.23675)
   - [GS citations: 1](https://scholar.google.com/scholar_lookup?arxiv_id=2509.23675)
1. [Validating Formal Specifications with LLM-generated Test Cases](https://ui.adsabs.harvard.edu/abs/2025arXiv251023350C/abstract)
   - Citations: 0, References: 4
   - [arxiv link](https://arxiv.org/abs/2510.23350)
   - [GS citations: 0](https://scholar.google.com/scholar_lookup?arxiv_id=2510.23350)
1. [Automatic Generation of Test Cases based on Bug Reports: a Feasibility Study with Large Language Models](https://ui.adsabs.harvard.edu/abs/2023arXiv231006320P/abstract)
   - Citations: 5, References: 8
   - [arxiv link](https://arxiv.org/abs/2310.06320)
   - [GS citations: 49](https://scholar.google.com/scholar_lookup?arxiv_id=2310.06320)
1. [Software Testing with Large Language Models: Survey, Landscape, and Vision](https://ui.adsabs.harvard.edu/abs/2023arXiv230707221W/abstract)
   - Citations: 58, References: 76
   - [arxiv link](https://arxiv.org/abs/2307.07221)
   - [GS citations: 658](https://scholar.google.com/scholar_lookup?arxiv_id=2307.07221)
1. [Large Language Models for Software Engineering: Survey and Open Problems](https://ui.adsabs.harvard.edu/abs/2023arXiv231003533F/abstract)
   - Citations: 161, References: 120
   - [arxiv link](https://arxiv.org/abs/2310.03533)
   - [GS citations: 695](https://scholar.google.com/scholar_lookup?arxiv_id=2310.03533)
1. [Unifying the Perspectives of NLP and Software Engineering: A Survey on Language Models for Code](https://ui.adsabs.harvard.edu/abs/2023arXiv231107989Z/abstract)
   - Citations: 77, References: 300
   - [arxiv link](https://arxiv.org/abs/2311.07989)
   - [GS citations: 109](https://scholar.google.com/scholar_lookup?arxiv_id=2311.07989)
1. [A Survey on Large Language Models for Software Engineering](https://ui.adsabs.harvard.edu/abs/2023arXiv231215223Z/abstract)
   - Citations: 68, References: 495
   - [arxiv link](https://arxiv.org/abs/2312.15223)
   - [GS citations: 113](https://scholar.google.com/scholar_lookup?arxiv_id=2312.15223)
1. [Pitfalls in Language Models for Code Intelligence: A Taxonomy and Survey](https://ui.adsabs.harvard.edu/abs/2023arXiv231017903S/abstract)
   - Citations: 12, References: 42
   - [arxiv link](https://arxiv.org/abs/2310.17903)
   - [GS citations: 22](https://scholar.google.com/scholar_lookup?arxiv_id=2310.17903)
1. [Automated Unit Test Improvement using Large Language Models at Meta](https://ui.adsabs.harvard.edu/abs/2024arXiv240209171A/abstract)
   - Citations: 27, References: 18
   - [arxiv link](https://arxiv.org/abs/2402.09171)
   - [GS citations: 179](https://scholar.google.com/scholar_lookup?arxiv_id=2402.09171)
1. [Chain-of-Thought Prompting of Large Language Models for Discovering and Fixing Software Vulnerabilities](https://ui.adsabs.harvard.edu/abs/2024arXiv240217230N/abstract)
   - Citations: 33, References: 18
   - [arxiv link](https://arxiv.org/abs/2402.17230)
   - [GS citations: 69](https://scholar.google.com/scholar_lookup?arxiv_id=2402.17230)
1. [HDLdebugger: Streamlining HDL debugging with Large Language Models](https://ui.adsabs.harvard.edu/abs/2024arXiv240311671Y/abstract)
   - Citations: 30, References: 21
   - [arxiv link](https://arxiv.org/abs/2403.11671)
   - [GS citations: 52](https://scholar.google.com/scholar_lookup?arxiv_id=2403.11671)
1. [Large Language Model for Vulnerability Detection and Repair: Literature Review and the Road Ahead](https://ui.adsabs.harvard.edu/abs/2024arXiv240402525Z/abstract)
   - Citations: 29, References: 47
   - [GS citations: 142](https://scholar.google.com/scholar_lookup?arxiv_id=2404.02525)
   - [arxiv link](https://arxiv.org/abs/2404.02525)
1. [Test Oracle Automation in the era of LLMs](https://ui.adsabs.harvard.edu/abs/2024arXiv240512766M/abstract)
   - Citations: 3, References: 10
   - [axiv link](https://arxiv.org/abs/2405.12766)
   - [GS citations: 25](https://arxiv.org/abs/2405.12766)
1. [Leveraging Large Language Models for Enhancing the Understandability of Generated Unit Tests](https://ui.adsabs.harvard.edu/abs/2024arXiv240811710D/abstract)
   - Citations: 14, References: 17
   - [arxiv link](https://arxiv.org/abs/2408.11710)
   - [GS citations: 23](https://scholar.google.com/scholar_lookup?arxiv_id=2408.11710)
1. [LLMs are All You Need? Improving Fuzz Testing for MOJO with Large Language Models](https://ui.adsabs.harvard.edu/abs/2025arXiv251010179H/abstract)
   - Citations: 0, References: 26
   - [arxiv link](https://arxiv.org/abs/2510.10179)
   - [GS citations: 0](https://scholar.google.com/scholar_lookup?arxiv_id=2510.10179)
1. [You Can REST Now: Automated REST API Documentation and Testing via LLM-Assisted Request Mutations](https://ui.adsabs.harvard.edu/abs/2024arXiv240205102D/abstract)
   - Citations: 8, References: 15
   - [arxiv link](https://arxiv.org/abs/2402.05102)
   - [GS citations: 17](https://scholar.google.com/scholar_lookup?arxiv_id=2402.05102)
