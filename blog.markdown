---
layout: page
title: Blog Posts
permalink: /blog/
---

<ul>
  {% assign sorted_posts = site.posts | sort: "date" %}
  {% for post in sorted_posts %}
  <div style="margin-bottom: 1em">
      <div style="font-size: 1.2em"><a href="{{ post.url }}"><b>{{ post.title }}</b></a></div>
      <div style="font-size: 0.9em">{{ post.excerpt }}</div>
      <div style="font-size: 0.7em">{{ post.date | date: "%Y-%m-%d" }}</div>
  </div>
  {% endfor %}
</ul>