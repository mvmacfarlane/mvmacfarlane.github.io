---
title: "Open Source Software"
layout: gridlay
sitemap: false
permalink: /software/
---

<style>
img{
  border-radius: 10px;
}
iframe {
  width: 175px;
  display: inline;
  vertical-align:middle;
  <!-- margin-bottom:5px; -->
  <!-- margin-left:5px; -->
  <!-- border: 1px solid red; -->
}
.col-md-3 {
  margin:0;
  padding:0;
  margin-top:10px;
  margin-bottom:10px;
  display:block;
  overflow:hidden;
  text-align:center;
  display: table-cell;
  height: auto;
  float: none;
  background:white;
  border-radius:20px;
  <!-- border: 1px solid black; -->
}
</style>








## Open Source Software

<div class="jumbotron">
<div class="row align-items-end">
<div class="col-md-12 col-sm-12">
<h4><b>Jumanji: Reinforcement Learning Environments in JAX</b></h4>
<a href="https://github.com/instadeepai/jumanji" target="_blank"><button class="btn btn-success btn-sm">GITHUB</button></a>
<a href="https://arxiv.org/abs/2306.09884" target="_blank"><button class="btn btn-danger btn-sm">PAPER</button></a>

<b>Authors:</b>
<i>Clément Bonnet et al.</i>

Jumanji is a diverse suite of scalable reinforcement learning environments written in JAX. It features 22 environments, ranging from simple games to NP-hard combinatorial problems, enabling faster iteration and large-scale experimentation in RL research. 

<b>Contribution:</b> I contributed to the development of the Sokoban environment, one of the routing challenges featured in the Jumanji suite.

<div style="text-align:center;">
  <img src="{{ site.url }}/assets/images/sokoban.gif" alt="Sokoban environment GIF" width="300px" />
</div>

</div>
</div>
</div>


<div class="jumbotron">
<div class="row align-items-end">
<div class="col-md-12 col-sm-12">
<h4><b>Flashbax: Accelerated Replay Buffers in JAX</b></h4>
<a href="https://github.com/instadeepai/flashbax" target="_blank"><button class="btn btn-success btn-sm">GITHUB</button></a>
<a href="https://github.com/instadeepai/flashbax/" target="_blank"><button class="btn btn-info btn-sm">DOCUMENTATION</button></a>

<b>Authors:</b>
<i>Edan Toledo et al.</i>

Flashbax is a library designed to streamline the use of experience replay buffers within reinforcement learning. It provides efficient buffer implementations like Flat, Trajectory, and Prioritized Buffers, tailored for JAX-based environments.

<b>Contribution:</b> I contributed to the development and design of the buffer library during my internship at InstaDeep.
</div>
</div>
</div>
