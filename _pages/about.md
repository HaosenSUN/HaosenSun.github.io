---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

## Welcome! I'm **_Haosen_**.

I will be starting my Master's in [Computer Science](https://www.mccormick.northwestern.edu/computer-science/) at [Northwestern University](https://www.mccormick.northwestern.edu/) in Fall 2024. Currently, I am working with [Prof. Manling Li](https://limanling.github.io/) at NU-MLL-Group, collaborating with the [Stanford Vision and Learning Lab](https://svl.stanford.edu/). Previously, I was a research intern at the [Shanghai AI Lab](https://www.shlab.org.cn/). I earned my bachelor's degree in [Data Science and Technology](https://dsct.hkust.edu.hk/) from the [Hong Kong University of Science and Technology](https://hkust.edu.hk/), where I worked under the guidance of [Prof. Chi-Keung Tang](https://cse.hkust.edu.hk/~cktang/bio.html) and [Prof. Yu-Wing Tai](https://yuwingtai.github.io/). I also collaborated with [Prof. Xiaomeng Li](https://xmengli.github.io/) on Medical Vision-Language Models (VLMs) as part of the UROP program.

My research interests span **Large Multimodal Models**, **Multi-modalities Generative AI**, **3D Vision**, and **Efficient AI**. My goal is to empower machines with the ability to extract meaningful patterns and relationships from both structured data (e.g. text, images, and video) and unstructured 3D geometric data. Additionally, I hope to enhance the interpretability and explainability of these models, advancing us toward the development of **human-centered** and **physically-grounded** general artificial intelligence.

<span style="color:purple">I am actively seeking a _**PhD**_ position beginning in _**Fall 2025/26**_. If our research interests align, please feel free to connect!</span>

<!-- 注释掉了
I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).
-->

# 🔥 News
- *2024.09*: &nbsp;🎉🎉 Will serve as ICLR 2025 Reviewer.
- *2024.07*: &nbsp;🎉🎉 Will join [Shanghai Artificial Intelligence Laboratory](https://www.shlab.org.cn/) as a research intern.
- *2024.07*: &nbsp;🎉🎉 Two papers accepted by _**ECCV 2024**!_
- *2024.06*: &nbsp;🎉🎉 Awarded _"Kaggle Competitions Expert"_.
- *2024.06*: &nbsp;🎉🎉 Honored the Dean List Award in Spring 2023-24.
- *2024.06*: &nbsp;🎉🎉 Received a [_Silver medal_](https://drive.google.com/file/d/1Hrlh49hSojx8Ri6tRwef9uq5Tv_5OW8i/view?usp=sharing) 🥈 in [_"Image Matching Challenge 2024 - Hexathlon"_](https://www.kaggle.com/competitions/image-matching-challenge-2024) (CVPR’24 Workshop), ranked 28<sup>th</sup>/ 929. [Our solution](https://github.com/HaosenSUN/IMC-2024) was released.
- *2023.11*: &nbsp;🎉🎉 Received a [_Silver medal_](https://drive.google.com/file/d/19Z22-iGbAlimB5nizjaBJvcMf9VYsrUo/view?usp=sharing) 🥈 in [_"Google - Fast or Slow? Predict AI Model Runtime"_](https://www.kaggle.com/competitions/predict-ai-model-runtime), ranked 40<sup>th</sup>/ 616. [Our solution](https://github.com/HaosenSUN/Google-Competition) was released.

# 📝 Publications 
_\* indicates equal contribution_
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2024</div><img src='images/Auto-GAS_01.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Auto-DAS: Automated Proxy Discovery for Training-free Distillation-aware Architecture Search](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/00676.pdf)

**Haosen Sun**, Peijie Dong, Zimian Wei, Shitong Shao, Lujun Li 

_European Conference on Computer Vision (ECCV)_, 2024

[**[Project Code]**](https://github.com/HaosenSUN/Auto-DAS) [**[Paper]**](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/00676.pdf) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- <font size=2>We present Auto-DAS, an automatic proxy discovery framework using an Evolutionary Algorithm (EA) for training-free Distillation-aware Architecture Search (DAS).</font>
- <font size=2>Auto-DAS generalizes well to various architectures and search spaces (e.g. ResNet, ViT, NAS-Bench-101, and NAS-Bench-201), achieving state-of-the-art results in both ranking correlation and final searched accuracy.</font>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2024</div><img src='images/Auto-DAS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Auto-GAS: Automated Proxy Discovery for Training-free Generative Architecture Search](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/00668.pdf)

Lujun Li, **Haosen Sun**, Shiwen Li, Peijie Dong, Qifeng Liu, Wei Xue, Yike Guo

_European Conference on Computer Vision (ECCV)_, 2024

[**[Project Code]**](https://github.com/HaosenSUN/Auto_GAS) [**[Paper]**](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/00668.pdf) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- <font size=2>We introduce Auto-GAS, the first training-free Generation Architecture Search (GAS) framework enabled by an auto-discovered proxy, which achieves competitive scores with 110× faster search than GAN Compression.</font>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2023</div><img src='images/teaser.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Inpaint4DNeRF: Promptable Spatio-Temporal NeRF Inpainting with Generative Diffusion Models](https://arxiv.org/abs/2401.00208)

Han Jiang<sup>\*</sup>, **Haosen Sun<sup>\*</sup>**, Ruoxuan Li<sup>\*</sup>, Yu-Wing Tai, Chi-Keung Tang  

_Arxiv Preprint (Submitted to CVPR'24)_, Dec 2023

[**[Project Page]**](https://inpaint4dnerf.github.io/) [**[Paper]**](https://arxiv.org/abs/2401.00208) [**[Project Code]**](https://github.com/HaosenSUN/Inpaint4DNeRF) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- <font size=2>Inpaint4DNeRF can generate prompt-based objects guided by the seed images and their 3D proxies while preserving multiview consistency. Our generative baseline framework is general which can be readily extended to 4D dynamic NeRFs.</font>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2023</div><img src='images/NeRF.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Registering Neural Radiance Fields as 3D Density Images](https://arxiv.org/abs/2305.12843)

Han Jiang<sup>\*</sup>, Ruoxuan Li<sup>\*</sup>, **Haosen Sun**, Yu-Wing Tai, Chi-Keung Tang

_Arxiv Preprint_, May 2023

[**[Paper]**](https://arxiv.org/abs/2305.12843) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- <font size=2>We proposes a method to align and merge pre-trained NeRF models of partially overlapping 3D scenes using a generalized registration pipeline, incorporating key point detection, point set registration, and universal pre-trained descriptor networks with contrastive learning strategy.</font>

</div>
</div>


### Additional Publications

- [Measuring road safety achievement based on EWM-GRA-SVD: A
decision-making support system for APEC countries](https://www.sciencedirect.com/science/article/abs/pii/S0950705122006888),
Faan Chen<sup>\*</sup>, Lin Shi<sup>\*</sup>, Yaxin Li, Qilin Wang, **Haosen Sun**, Xinyu Tang, Jiacheng Zu, Zhenwei Sun, 
_**Knowledge-Based Systems**_

# 🎖 Honors and Awards
- *2020.09 - 2024.07* HKUST **Admissions Scholarship** (Kerry Holdings Limited Scholarship, HK$280,000)	
- *2024.06* **The Dean List** Award, Top 10%
- *2024.06* [**Silver Medal**](https://drive.google.com/file/d/1Hrlh49hSojx8Ri6tRwef9uq5Tv_5OW8i/view?usp=sharing) in CVPR’24 Workshop [_(Image Matching Challenge 2024 - Hexathlon)_](https://www.kaggle.com/competitions/image-matching-challenge-2024), ranked 28<sup>th</sup>/ 929
- *2023.11* [**Silver Medal**](https://drive.google.com/file/d/19Z22-iGbAlimB5nizjaBJvcMf9VYsrUo/view?usp=sharing) in Kaggle Competition [_(Google - Fast or Slow? Predict AI Model Runtime)_](https://www.kaggle.com/competitions/predict-ai-model-runtime), ranked 40<sup>th</sup>/ 616
- *2022.08* **Nomination** for the Mr. Armin and Mrs. Lillian Kitchell Undergraduate Research Award
- *2019.10* [**Bronze Medal**](https://drive.google.com/file/d/1SmSzMAw6phx0I3Cz-vS50eZ2SGy5N5YH/view?usp=sharing) and [**the First Prize**](https://drive.google.com/file/d/1SmSzMAw6phx0I3Cz-vS50eZ2SGy5N5YH/view?usp=sharing) in the 36<sup>th</sup> Chinese Physics Olympiad (CPHO), Top 0.1%
- *2019.07* the	**Third Prize** in the 28<sup>th</sup> China National Biology Olympiad (CNBO), Top 5%


# 📖 Educations
- *2024.09 - 2026.06 (now)*, **_M.S._** in **Computer Science**, Northwestern University, _USA_
- *2020.09 - 2024.07*, **_BSc_** in **Data Science and Technology**, Hong Kong University of Science and Technology (HKUST), _Hong Kong_

<!--
# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)
-->

# 💻 Internships
- *07/2024 – 09/2024*, Shanghai Artificial Intelligence Laboratory, _China_.

  **_Research Intern_**, working closely with [Dr. Peng Ye](https://scholar.google.co.uk/citations?user=UEZZP5QAAAAJ&hl=en).
  
- *10/2023 – 05/2024*, Hong Kong Generative AI Research and Development Center (HKGAI), _Hong Kong_.

  **_Research Intern_**, working closely with [Dr. Lujun Li](https://scholar.google.com/citations?user=aPl3DjIAAAAJ&hl=zh-CN).


