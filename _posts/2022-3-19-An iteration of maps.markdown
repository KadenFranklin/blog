---
layout: post
title:  "An iteration of maps"
date:   2022-3-19 3:00:00 -0500
categories: Hendrix Arboretum
---

The Hendrix Arboretum is a project I have been working on for a while. It was a class project for CSCI 340, but my group ran into a bunch of problems. So I have kind of been working on it for way longer than I need to but that's alright cause its hard for me to give up on things. I had versions of this project saved through its incremental development over the past months, and I thought it would be cool to leave a record of that here.

[Oldest](https://kadenfranklin.github.io/actually-a-map/Oldest/The%20Hendrix%20College%20Campus%20Arboretum%20_%20Hendrix%20College)

There already existed a webpage for the Hendrix Arboretum but it was not interactive, or anything it just kinda explained what it was. I copied saved a version of the [webpage](https://www.hendrix.edu/biology/biology.aspx?id=3645), and started looking at the [bing maps api](https://docs.microsoft.com/en-us/bingmaps/v8-web-control/map-control-api/) to figure out how the heck it worked.


[Old](https://kadenfranklin.github.io/actually-a-map/Old/The%20Hendrix%20College%20Campus%20Arboretum%20_%20Hendrix%20College)

On this the only real development was that I made it access the correct css files. Definitely took me way too long to figure this on out. For future reference, the difference between this and the first is './' preceding some files instead '..'


[Middle](https://kadenfranklin.github.io/actually-a-map/Middle/The%20Hendrix%20College%20Campus%20Arboretum%20_%20Hendrix%20College)

I changed the css a little bit. Added a border around the map, added the search bar and made trees searchable by number I think. Also made buttons for specialty categories, but the buttons did not actually do anything in this version.


[New](https://kadenfranklin.github.io/actually-a-map/New/The%20Hendrix%20College%20Campus%20Arboretum%20_%20Hendrix%20College)

This was the first version of the map that was actually linked to the database. That is why you see the for each item in Model.specialties. It also read tree coordinates from the database as well, but for the last HTML file I just left it reading 5 random locations.
