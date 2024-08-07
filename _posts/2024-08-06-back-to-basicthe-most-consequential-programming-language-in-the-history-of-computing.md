---
layout: post
title: "Back to BASIC—the Most Consequential Programming Language in the History of Computing"
author: Condé Nast
date: 2024-07-29
canonical_url: https://www.wired.com/story/back-to-basic-the-most-consequential-programming-language/
---

![Image may contain Book Publication Clothing Glove Computer Hardware Electronics Hardware Monitor and Screen](https://media.wired.com/photos/66a6dd57fa70aaf1662783a5/3:2/w_2560%2Cc_limit/Back%2520to%2520BASIC%2520(1).jpg)

ILLUSTRATION: SAMUEL TOMSON

I was entering the miseries of seventh grade in the fall of 1980 when a friend dragged me into a dimly lit second-floor room. The school had recently installed a newfangled Commodore PET computer, a squat and angular box that glowed in the corner. “You gotta try this,” he told me, and handed over a piece of paper on which he’d handwritten a program.

I plunked it out on the PET’s chunky mechanical [keyboard](https://www.wired.com/gallery/best-mechanical-keyboards/).

10 PRINT "CLIVE"

20 GOTO 10

I typed “RUN,” hit Enter, and watched as my name spilled down the screen in bright green-on-black text, over and over.

For a 12-year-old in the pre-internet era? This was electrifying. I had typed a couple of commands—ones that seemed easily understandable—and the machine had obeyed. I felt like I’d just stolen fire from Zeus himself.

I also realized, studying that tiny two-line program, that it was an infinite loop. The computer would run the code until the sun burned out, or someone unplugged it. There are not many ways, when you’re a preteen, to grasp the fabric of infinity. But I’d just done so, thanks to this strangely accessible computer language: BASIC.

The next day I and my nerdy friends raided the library. We found _101 Games in BASIC_, a book with code for making versions of checkers, Battleship, and the like. It was our Necronomicon. We’d heard about computer programming, of course, but never suspected it was something kids could do.

But BASIC? Holy crap. It seemed practically self-explanatory—commands like IF and THEN let you make logical decisions, INPUT let you ask a user a question and work with their response. This was programming that achieved a neat midpoint between the mind of a human and that of the machine.

This is why I’ve long argued that BASIC is the most consequential language in the history of computing. It’s a language for noobs, sure, but back then most everyone _was_ a noob. Throughout the ’70s and ’80s, BASIC sent a shock wave through teenage tech culture. Kids who were lucky or privileged enough (or both) to gain access to computers that ran BASIC—the VIC-20, the Commodore 64, janky Sinclair boxes in the UK—immediately started writing games, text adventures, chatbots, databases. In the ’90s, they became the generation that built all the internet apps and code that made cyberspace mainstream. BASIC brought coding out of the ivory towers, and thereby tilted the world on its axis.

It’s hard to overstate how abstruse, before BASIC, most coding was. In the 1950s and ’60s you generally used machine language, which had commands like “sal 665” and “sal 667.” (Those tell the computer to move its accumulator, a crucial region of memory, right or left. Got it?)

A few early visionaries attempted to make languages for normies. In the 1950s, the pioneering computer scientist Grace Hopper designed a language called FLOW-MATIC (a name whose badassery has yet to be outdone) that used plain-English-like commands such as IF EQUAL TO and READ-ITEM. Hopper wanted everyday businessfolk to be able to write—or at least read—code. Her innovations were later folded into COBOL, the language of banking and backend systems.

But it was BASIC that really blew the lid off. It was created in 1964 by John George Kemeny and Thomas Kurtz, two math professors at Dartmouth College who figured—in a stance that presaged the Learn to Code movement of the 2010s—that coding ought to be something any liberal arts student could learn.

For someone just getting into this weird craft, BASIC felt positively thaumaturgic. It was spellcasting: You uttered words that brought iron and silicon to life, and made them do things. (As the software engineer Erin Spiceland puts it, coding is “telling rocks what to think.”) If you were, as I was, marinated in Tolkien and other florid high-fantasy novels, there was a deep romance in the idea that everyday language could affect reality. _Speak, friend, and enter._

BASIC also encouraged tinkering. Unusually for the time, it was an “interpreted” language. With many previous languages, you wrote the code, but before you could run it you had to “compile” it into a little package of 1s and 0s. This was a halting affair: Write, compile, then run it. With BASIC, in contrast, the machine responded instantly. You wrote a few lines, hit RUN, and boom—the machine interpreted it, right then and there.

This transformed coding into a conversation with the machine. Programming was like thinking out loud. I’d be working on a chatbot, for example, so I’d enter a few lines into the parser—then hit RUN to see how it performed. I’d add a few more lines, observe what worked and what didn’t, then run again. This back-and-forth dance with the machine made the whole process of coding less forbidding. It felt less like doing Very Important Design and more like just _messing around_. Many of the world’s most popular languages (like JavaScript and Python) are now also interpreted on the fly. But BASIC was among the first.

BASIC also created the world’s first mass open-source culture. People shared code freely: If a friend wrote a cool blackjack game, we’d all make a copy—by hand, like scribes in medieval monasteries—and run it ourselves. Each month, Compute magazine printed reams of BASIC mailed in by hobbyists. I spent one afternoon painstakingly typing hundreds of lines of Conway’s “Game of Life” that I’d found in an issue, then watched, mesmerized, as an artificial organism bloomed onscreen.

There’s a saying in the world of programmers that code is written primarily for other coders to read, and only secondarily for the machine to run. BASIC proved this at scale.

But as a practical language? For making shippable software?

BASIC wasn’t always great.

Graphics, for example, ran glacially. I tried to craft a space-shooter, and it was unplayably sluggish. This is part of why so many BASIC game makers focused instead on text adventures: Words, at least, rendered speedily. The Cambrian explosion of text-based dungeon crawlers in the late ’70s and ’80s was in part a product of BASIC’s built-in limitations.

BASIC also had a few truly ill-considered elements. Infamously, it included the benighted command GOTO (read as “go to”). This let you write code that hopscotched around: If the program got to line 120, you could tell the computer to suddenly GOTO line 25, for example.

For a newbie coder, this was an easy way to write things! But it encouraged complex “spaghetti” structure, where the logic bounded and zigzagged all over the place. If I wrote a longish program—going into the hundreds or thousands of lines—and used several dozen GOTO statements, my code would become a maze of mysteries, impenetrable even to myself. The computer scientist Edsger Dijkstra so loathed this style that he wrote an entire essay inveighing against it: “Go To Statement Considered Harmful.” Anyone who learned to program on BASIC would be, as he later wrote, “mentally mutilated beyond hope of regeneration.”

Dijkstra was being hyperbolic. But he wasn’t entirely wrong: After its heyday, BASIC plummeted in popularity. Newer languages emerged that encouraged cleaner, more modern styles of writing and ran more speedily. BASIC still lives on these days—itself modernized, with GOTO (mostly) banished—in the world of Microsoft Visual Basic, which many non-coder officefolk have used to kludge together apps for internal use. But these days, only 4 percent of professional developers will admit to using BASIC. Me, when I started programming again in the 2010s—after a 25-year gap—I turned instead to newer languages like Python and JavaScript.

Every once in a while, though, I’ll hunt down an emulator for the Commodore PET. I’ll type in that ur-program I first wrote, more than 40 years ago, and hit RUN.

Still feels like magic.