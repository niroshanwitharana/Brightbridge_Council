In the utils.ts file are a list of Zephyrs (air quality sensors) that belong to Brightbridge Council. Your task is to create a React application that displays each of the council's Zephyrs. Please follow the guidance below:

1. Order the Zephyrs so that all of Standard Zephyr types are displayed before the enhanced Zephyr types.
2. Display the name, type, batteryPercentage, NO2, and PM2.5 value of each Zephyr.
3. Use the colourscale arrray provided in utils.ts to show a colour for each Zephyr. You should base this color off the highest value between the NO2 and PM2.5 reading for each Zephyr. The minimum reading is 0 and the maximum reading is 10.
4. Add a filter that allows a user to show either: all Zephyrs, standard Zephyr types, or enhanced Zephyr types.
5. Some of the Zephyrs listed aren't owned by Brightbridge Council any more. Don't display any Zephyrs that aren't currently owned.
6. Do pay attention to styles and how you can present the information in a clean, engaging way for the council.

Please provide a copy of your code in a publicly accessible location (e.g. Github, Bitbucket etc) when you're done.
