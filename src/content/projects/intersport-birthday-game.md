---
title: Intersport Birthday Game
image: {
    url: "",
    alt: ""
}
period: {
    start: 2023-01-01
}
type: private
---

I joined my roommates startup for their first project, where they where tasked to create a simple balloon game for [Intersport](https://www.intersport.dk/).

## What is Intersport?

<blockquote cite="https://en.wikipedia.org/wiki/Intersport">
    <p>INTERSPORT International Corporation, commonly known as INTERSPORT, is an international sporting goods retailer with its headquarters based in Bern, Switzerland. IIC is the purchasing and brand management company of the INTERSPORT group and is considered one of the largest sporting goods retailers in the world.</p>
    <footer>—Wikipedia.com, <cite>Intersport</cite></footer>
</blockquote>

## Game

The game was a simple clicker game, where the objective was to pop as many balloons until the timer ran out. Each balloon equaled one point, and by the end of each week of the campaign a winner would be picked to retrive some free sport products.

### Assets

We were given the following image, which was the different screens for the game, plus the images for the balloons:

![game flow](/content/cases/intersport-flow.png)
<img src="/content/cases/intersport-red-balloon.png" width="250"/>

### Demands

- The game shoud be playable from the users own mobile phone, so the game should have a responsive layout.
- The users scores should be saved.

## Tools

We first started making the project in [Unity](https://unity.com/), but since the game needed to be responsive, we decided to just use [React](https://react.dev/), since we were going to put the game on a website anyway.

Each balloon was one point, so to actually use the users score I was tasked to setup the database and connect it to the React project. Here I wanted to use a SQL database, as we just needed one table to keep track of the users score. I therefor selected [Supabase](https://supabase.com/), as they also provide a nice API for handling user authentication.

For hosting we decided to use [Vercel](https://vercel.com/), since they are great for deploying web projects, and I have used it before.

### Tools

- React
- Supabase
- Vercel

## Implementation

## Conclusion

I think the project went well. We made a working product, which was played by more than 10.000 people, and Intersport also seemed to be happy, since they still want to make more interative games.

## Reflection

If I where to create such a project again, I would focus more on communicating with the client (Intersport in this case), since the start went a bit slow, and the end was a bit stressed. We didn't get the final design until the end, so we had to make some changes on the frontend.

I would therefor use [TailwindCSS](https://tailwindcss.com/) instead of normal CSS with React. This is because I have used it before, and like it, and we had to rewrite a lot of the style to fit it to Intersports demands. It would therefor have been better to have local styling for each individual React component.
