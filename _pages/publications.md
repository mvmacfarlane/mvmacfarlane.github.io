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
    padding-bottom: 20px;
    padding-top: 20px;
    margin-top: 10px;
    margin-bottom: 30px;
    background-color: #333333; /* Much darker grey background */
    border-radius: 8px; /* Rounded corners for a softer look */
}

/* Smaller font for year headings */
.jumbotron h3 {
    font-size: 1.2em;
    font-weight: normal;
    color: #cccccc; /* Lighter grey color for the year headings */
    margin-bottom: 15px;
}

/* Normal font size for the Publications title */
.jumbotron h2 {
    font-size: 2em;
    font-weight: bold;
    color: white; /* Set the Publications header text to white */
    margin-bottom: 20px;
}

/* Adjust publication list items */
ol {
    margin-left: 25px; /* Increase left margin for better spacing */
    padding-left: 25px;
    padding-right: 25px; /* Add right padding for spacing */
}

ol li {
    margin-bottom: 20px; /* Increase space between publication items */
    font-size: 1.1em; /* Slightly larger font for publication titles */
}

/* Highlight first authorship publications in green */
.first-authorship {
    color: green; /* Set first authorship publications to green */
    font-weight: bold; /* Make them bold for emphasis */
}
</style>

<div class="jumbotron">
  <h2>Publications</h2>
  <p><strong>*</strong> First authorships are highlighted in <span style="color:green;">green</span>.</p>

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
