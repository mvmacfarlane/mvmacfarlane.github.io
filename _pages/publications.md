---
title: "Publications"
layout: gridlay
sitemap: false
permalink: /publications/
years: [2022, 2023, 2024]
---

<style>
.jumbotron {
    padding: 3%;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-top: 10px;
    margin-bottom: 30px;
}

/* Smaller font for year headings */
.jumbotron h3 {
    font-size: 1.2em; /* Reduce the size of the year headings */
    font-weight: normal;
    color: #666; /* Light grey color to make them less prominent */
    margin-bottom: 10px;
}

/* Normal font size for the Publications title */
.jumbotron h2 {
    font-size: 2em;
    font-weight: bold;
    color: white; /* Make the Publications header text white */
    margin-bottom: 20px;
}


/* Adjust publication list items */
ol {
    margin-left: 20px;
    padding-left: 20px;
}

ol li {
    margin-bottom: 15px;
    font-size: 1.1em; /* Slightly larger font for publication titles */
}
</style>

<div class="jumbotron">
  <h2>Publications</h2>

  <h3>2024</h3>
  <ol>
    {% bibliography --query @*[year=2024] %}
  </ol>

  <h3>2023</h3>
  <ol>
    {% bibliography --query @*[year=2023] %}
  </ol>

  <h3>2022</h3>
  <ol>
    {% bibliography --query @*[year=2022] %}
  </ol>
</div>
