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

# Welcome!

I will be starting as a Master's student in [Computer Science](https://www.mccormick.northwestern.edu/computer-science/) at [Northwestern University](https://www.mccormick.northwestern.edu/) in the fall of 2024. I completed my bachelor's degree in [Data Science and Technology](https://dsct.hkust.edu.hk/) at [the Hong Kong University of Science and Technology](https://hkust.edu.hk/), under the guidance of [Prof. Chi-Keung Tang](https://cse.hkust.edu.hk/~cktang/bio.html) and [Prof. Yu-Wing Tai](https://yuwingtai.github.io/). My research during my undergraduate studies focused on **Neural Radiance Fields** (NeRF), **Diffusion Models** (SD) and **Neural Architecture Search** (NAS). I had the privilege of working with [Prof. Xiaomeng Li](https://xmengli.github.io/) through the Undergraduate Research Opportunities Program (UROP), where I learned **Medical** Vision Language Models (VLMs). 

I am passionate about several research areas, including **large multimodal models** (LMMs), **multi-modalities generative AI**, **3D vision**, and **AutoML**. My primary objective is to empower machines with the ability to extract meaningful patterns and relationships from both **structured data** (e.g. text, images, and video) and **unstructured 3D geometric data**. Concurrently, I hope to enhance the interpretability and explainability of these models, propelling us closer to the realization of human-centric and physically-based general artificial intelligence.

<!-- 注释掉了
I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).
-->

# 🔥 News
- *2024.07*: &nbsp;🎉🎉 Two papers accepted by _ECCV 2024!_
- *2024.06*: &nbsp;🎉🎉 Awarded _"Kaggle Competitions Expert"_.
- *2024.06*: &nbsp;🎉🎉 Honored the Dean List Award in Spring 2023-24.
- *2024.06*: &nbsp;🎉🎉 Received a _Silver medal_&nbsp;🥈 in [_"Image Matching Challenge 2024 - Hexathlon"_](https://www.kaggle.com/competitions/image-matching-challenge-2024) (CVPR’24 Workshop), ranked 28<sup>th</sup>/ 929. [Our solution](https://github.com/HaosenSUN/IMC-2024) was released.
- *2023.11*: &nbsp;🎉🎉 Received a _Silver medal_&nbsp;🥈 in [_"Google - Fast or Slow? Predict AI Model Runtime"_](https://www.kaggle.com/competitions/predict-ai-model-runtime), ranked 40<sup>th</sup>/ 616. [Our solution](https://github.com/HaosenSUN/Google-Competition) was released.

# 📝 Publications 

_\* indicates equal contribution_

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2024</div><img src='images/Auto-GAS_01.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Auto-DAS: Automated Proxy Discovery for Training-free Distillation-aware Architecture Search](https://scholar.google.com/citations?user=lfQSWAgAAAAJ&hl=en)

**Haosen Sun**, Peijie Dong, Zimian Wei, Shitong Shao, Lujun Li 

_European Conference on Computer Vision (ECCV)_, 2024

[**Project**](https://github.com/HaosenSUN/Auto-DAS) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- <font size=2>We present Auto-DAS, an automatic proxy discovery framework using an Evolutionary Algorithm (EA) for training-free Distillation-aware Architecture Search (DAS).</font>
- <font size=2>Auto-DAS generalizes well to various architectures and search spaces (e.g. ResNet, ViT, NAS-Bench-101, and NAS-Bench-201), achieving state-of-the-art results in both ranking correlation and final searched accuracy.</font>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2024</div><img src='images/Auto-DAS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Auto-GAS: Automated Proxy Discovery for Training-free Generative Architecture Search](https://scholar.google.com/citations?user=lfQSWAgAAAAJ&hl=en)

Lujun Li, **Haosen Sun**, Shiwen Li, Peijie Dong, Qifeng Liu, Wei Xue, Yike Guo

_European Conference on Computer Vision (ECCV)_, 2024

[**Project**](https://github.com/HaosenSUN/Auto-DAS) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- <font size=2>We introduce Auto-GAS, the first training-free Generation Architecture Search (GAS) framework enabled by an auto-discovered proxy, which achieves competitive scores with 110× faster search than GAN Compression.</font>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2023</div><img src='images/teaser.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Inpaint4DNeRF: Promptable Spatio-Temporal NeRF Inpainting with Generative Diffusion Models](https://arxiv.org/abs/2401.00208)

Han Jiang<sup>\*</sup>, **Haosen Sun<sup>\*</sup>**, Ruoxuan Li<sup>\*</sup>, Yu-Wing Tai, Chi-Keung Tang  

_arXiv:2401.00208_, Dec 2023

[**Project**](https://inpaint4dnerf.github.io/) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- <font size=2>Inpaint4DNeRF can generate prompt-based objects guided by the seed images and their 3D proxies while preserving multiview consistency. Our generative baseline framework is general which can be readily extended to 4D dynamic NeRFs.</font>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2023</div><img src='images/NeRF.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Registering Neural Radiance Fields as 3D Density Images](https://arxiv.org/abs/2305.12843)

Han Jiang<sup>\*</sup>, Ruoxuan Li<sup>\*</sup>, **Haosen Sun**, Yu-Wing Tai, Chi-Keung Tang

_arXiv:2305.12843_, May 2023

[**Project**](https://arxiv.org/abs/2305.12843) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- <font size=2>We proposes a method to align and merge pre-trained NeRF models of partially overlapping 3D scenes using a generalized registration pipeline, incorporating key point detection, point set registration, and universal pre-trained descriptor networks with contrastive learning strategy.</font>

</div>
</div>

- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020**

# 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 📖 Educations
- *2019.06 - 2022.04 (now)*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.
