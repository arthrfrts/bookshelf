---
layout: post
title: "From Infocom to 80 Days: An oral history of text games and interactive fiction"
author: Anna Washenko
date: 2024-06-20
canonical_url: https://arstechnica.com/gaming/2024/06/from-infocom-to-80-days-an-oral-history-of-text-games-and-interactive-fiction/
---

![Zork running on an Amiga at the Computerspielemuseum in Berlin, Germany.](https://cdn.arstechnica.net/wp-content/uploads/2023/11/45897016062_e1c52b1dd9_k-800x1199.jpg)

Zork running on an Amiga at the Computerspielemuseum in Berlin, Germany.

_You are standing at the end of a road before a small brick building._

That simple sentence first appeared on a PDP-10 mainframe in the 1970s, and the words marked the beginning of what we now know as interactive fiction.

From the bare-bones text adventures of the 1980s to the heartfelt hypertext works of Twine creators, interactive fiction is an art form that continues to inspire a loyal audience. The community for interactive fiction, or IF, attracts readers and players alongside developers and creators. It champions an open source ethos and a punk-like individuality.

But whatever its production value or artistic merit, at heart, interactive fiction is simply words on a screen. In this time of AAA video games, prestige television, and contemporary novels and poetry, how does interactive fiction continue to endure?

To understand the history of IF, the best place to turn for insight is the authors themselves. Not just the authors of notable text games—although many of the people I interviewed for this article do have that claim to fame—but the authors of the communities and the tools that have kept the torch burning. Here's what they had to say about IF and its legacy.

Examine roots: Adventure and Infocom
------------------------------------

The interactive fiction story began in the 1970s. The first widely played game in the genre was _Colossal Cave Adventure_, also known simply as _Adventure_. The text game was made by Will Crowther in 1976, based on his experiences spelunking in Kentucky’s aptly named Mammoth Cave. Descriptions of the different spaces would appear on the terminal, then players would type in two-word commands—a verb followed by a noun—to solve puzzles and navigate the sprawling in-game caverns.

During the 1970s, getting the chance to interact with a computer was a rare and special thing for most people.

"My father's office had an open house in about 1978," IF author and tool creator Andrew Plotkin recalled. "We all went in and looked at the computers—computers were very exciting in 1978—and he fired up _Adventure_ on one of the terminals. And I, being eight years old, realized this was the best thing in the universe and immediately wanted to do that forever."

"It is hard to overstate how potent the effect of this game was," said Graham Nelson, creator of the Inform language and author of the landmark IF _Curses_, of his introduction to the field. "Partly that was because the behemoth-like machine controlling the story was itself beyond ordinary human experience."

Perhaps that extraordinary factor is what sparked the curiosity of people like Plotkin and Nelson to play _Adventure_ and the other text games that followed. The roots of interactive fiction are entangled with the roots of the computing industry. "I think it's always been a focus on the written word as an engine for what we consider a game," said software developer and tech entrepreneur Liza Daly. "Originally, that was born out of necessity of primitive computers of the '70s and '80s, but people discovered that there was a lot to mine there."

Home computers were just beginning to gain traction as Stanford University student Don Woods released his own version of _Adventure_ in 1977, based on Crowther’s original Fortran work. Without wider access to comparatively pint-sized machines like the Apple 2 and the Vic-20, Scott Adams might not have found an audience for his own text adventure games, released under his company Adventure International, in another homage to Crowther. As computers spread to more people around the world, interactive fiction was able to reach more and more readers.

* * *

#### Page 2

Too good to be grue
-------------------

_Adventure_’s impact on interactive fiction and game design has already been well-documented. So has the second big boom for interactive fiction: the glory days of Infocom. The company, composed of MIT staff and students, started in 1979, and they won many fans with their debut creation, Zork. That text adventure got a few sequels, and the company solidified its geek legacy by partnering with Douglas Adams for a retelling of _A Hitchhiker's Guide to the Galaxy_. For many of the key players of IF in the '80s and '90s, this was a golden age of irrevocable impact.

![](https://cdn.arstechnica.net/wp-content/uploads/2024/06/Zork-cover-art.jpeg)

"I did play a few other kinds of fairly basic arcade-style computer games, but the text adventures felt much deeper and more engaging," said Emily Short, creative director at [Failbetter Games](https://www.failbettergames.com/) and a pioneer in both IF and game narrative. "The legibility and purpose of the environments especially appealed to me. In the world of a text adventure, everything is there for a reason, to solve a puzzle or tell a piece of a story. In childhood, I felt like a lot of the real world was mysterious and inexplicable, and I enjoyed a game where the environment would in time be fully solved and explained."

Infocom occupied a unique space in the games industry of the early '80s, not just because of its genre of choice but also for its ability to connect with players. "They had a really funny newsletter, and they highlighted their game authors in a way that was unusual for the time," Daly recalled of the company. "It meant that IF always felt more personal to me than other kinds of games from that period."

Twine creator Chris Klimas had a similar story of falling in love before he ever booted up an Infocom game. He was wrapping up a copy of _A_ _Hitchhiker's Guide to the Galaxy_ as a holiday gift and became fascinated with the packaging. "It came in this folio, almost like a record, where there was a floppy disc that went into this sleeve and the instruction manual went into another pocket," he explained. "I was kinda curious about it, because I liked computer games anyway, so really stealthily, I slipped the manual out and read through it." He was excited by the manual even before falling in love with the actual game.

[![It’s not the special edition from Klimas’ memory, but it’s still a good example of the appeal behind Infocom’s games from the second you opened the box.](https://cdn.arstechnica.net/wp-content/uploads/2024/06/s-l1600-640x640.webp)](https://cdn.arstechnica.net/wp-content/uploads/2024/06/s-l1600.webp)

It’s not the special edition from Klimas’ memory, but it’s still a good example of the appeal behind Infocom’s games from the second you opened the box.

(As a side note, Klimas was the only person I spoke with who gave a nod to the Choose Your Own Adventure books as a source of inspiration, which I, too, remember fondly as my own first exposure to interactive fiction.)

But the Infocom heyday was shortlived. After the business was acquired by Activision in the mid-eighties and the brand was abandoned soon after, no other notable studio stepped up to carry the banner for text adventures. In spite of, or possibly because of, the short amount of time Infocom was around, their releases generated both a lot of fans and a lot of mystique. And since playing IF in those days often demanded at least some technical know-how and a lot of curiosity, _Zork_ lovers around the world got enterprising. A few independent, unrelated efforts emerged to reverse-engineer how the company made its games.

One of them came from Graham Nelson while he was a student of mathematics at the University of Oxford. He created [Inform](https://www.inform-fiction.org/), which allowed people to write their own games with the Z-machine virtual machine used by Infocom. _Curses_ was his sprawling magnum opus to showcase Inform's potential, and many IF authors have cited it as both a watershed work and a personal inspiration. He told me via email about his motivations to build Inform:

> I became fascinated with disassembling and deciphering the so-called story files of Infocom and wrote one of my own, with Inform simply being the tool I needed to make in order to do that. But the writing was really the point. I wrote a novel and some short stories and a play and a doctoral thesis about invariants of 3-manifolds with boundary…
> 
> I continue to think today that the act of concentration in writing a poem is quite like the mathematician's ideal of finding the cleanest line through a written proof. And I wrote an interactive fiction, _Curses_, in the same imitative spirit. To me, this was another genre of writing, not of computer science. There were game mechanics, of course, but 80s or 90s IF was more like writing poetry than programming an arcade game, even if a compiler was involved. The room descriptions alone were like sixty exercises in style, each to be done a little differently, each to consume no more than a few dozen words.

Some of the other essential developments for the early IF community were provided by Plotkin. He authored his own set of notable works, such as _Spider and Web_ and _Hadean Lands_, but is equally famed in the scene for his technical contributions.

"The original reverse-engineered Infocom format was an excellent format, and people wrote a lot of games in it," he said. "But… it just wasn't that big. You could get in 128kB of text and code." Authors using Inform or TADS, the Text Adventure Development System, were starting to surpass the boundaries of those early formats, so Plotkin recognized a need to redesign Z-machine. The result was Glulx, a 32-bit virtual machine that resolved some of the limitations of Z-machine. He also separated the interface layer into its own application, allowing writers more flexibility and creativity in how they would present their works. "Even at that point in the '90s, I was imagining a web browser interface," he said. "I was imagining an interpreter which could be ported to Mac, Windows, Linux."

* * *

#### Page 3

Subject: Seeking fellow Infocom fans
------------------------------------

The place to share these tools and the games made with them was Usenet. rec.arts.int-fiction was the newsgroup for writers and craft talk, while rec.games.int-fiction was the place to discuss releases and get help as a player. It was a transformative time for IF, especially for those who were seeking fellow fans of the Infocom era.

"It was really fun and cool to be part of folks who remembered these games that seemed to us to have this huge cultural impact and then vanished entirely," said [Interactive Fiction Technology Foundation](https://iftechfoundation.org/) co-founder Jason McIntosh. "So for a while, it felt like we were keeping this flame lit. And that felt very important."

"That period was tremendously formative for my own understanding of how to design and talk about games," Short reflected. "There was a terrific sense of creative community and shared inquiry. You might release a game and have it played only by a handful of people, but those people would often give really detailed and thoughtful feedback on everything from the implementation to the literary themes of the work. Sometimes they’d create their own pieces riffing on or responding to the ideas in yours."

Jon Ingold—narrative director and co-founder of [Inkle Studios](https://www.inklestudios.com/), which made _80 Days_ and _Steve Jackson's Sorcery!—_also recalled the experience of creating games and iterating ideas in a dialogue. "That ping-ponging between developers in a closed environment means that six games later, you get something really incredible," he said.

[![IF fans of the Infocom era convened in person as well as on Usenet forums. Here are the notes from a group play session at MIT from the early 2010s.](https://cdn.arstechnica.net/wp-content/uploads/2024/06/play-zork-640x480.jpeg)](https://cdn.arstechnica.net/wp-content/uploads/2024/06/play-zork.jpeg)

IF fans of the Infocom era convened in person as well as on Usenet forums. Here are the notes from a group play session at MIT from the early 2010s.

He also spoke about the special sense of immediacy in games during that era. "In the '90s, when a game came out, you _had_ to play it because it might do something that would blow your mind," Ingold said. "It might completely pivot your idea of what's possible in a game."

While the collective memory of those Usenet days is mostly fond, the reality was never all sunshine and rainbows. Even while acknowledging the positive aspects of artistic development during that era, Short was clear about the problems. "It wasn’t a flawless environment. Usenet was unmoderated, and there was a certain amount of trolling and harassment there," she wrote. "I did have a few unpleasant experiences with that culture."

McIntosh didn't put so fine a point on it. "We were all assholes. We were just a bunch of young punks, and we would flame each other, and we were mean," he said.

Community via competition in IFComp
-----------------------------------

The outlook for commercial IF was sinking to a low point during the '90s as "adventure game" started to mean titles like _King's Quest_ and _Monkey Island_ rather than text-only. But people in the IF newsgroups were on the brink of two important events that changed the outlook for the better within their community.

In 1995, the writing IF newsgroup started talking about holding a competition for shorter games. From out of the rambling discussion, Kevin Wilson was the person who picked up the torch. “There had been some conversation on rec.arts.int-fiction about a competition of some sort for a while, but it hadn't really gone much of anywhere," Wilson told me via email. "I was fairly involved in the scene at the time, so I finally just kind of announced one, set some basic rules and a deadline, and off we went.”

![The map for <em>Hadean Lands</em>, which raised more than $30,000 in a Kickstarter project and brought classic interactive fiction to mobile gamers.](https://cdn.arstechnica.net/wp-content/uploads/2024/06/Hadean-Lands-map.jpeg)

The map for _Hadean Lands_, which raised more than $30,000 in a Kickstarter project and brought classic interactive fiction to mobile gamers.

The event was dubbed [IFComp](https://ifcomp.org/), and the response far surpassed Wilson's expectations. It became an annual fixture, and multiple people have since helmed the event, including Jason McIntosh. After McIntosh took over IFComp in 2014, he oversaw the event's transition to welcome hypertext entries as part of the IF canon officially. He and the event's recent leadership have emphasized that the competition be a snapshot of IF's current state. "We let the community drive what shape this wants to be," McIntosh explained. "\[IFComp\] is an annual community expression."

And it continues to play that role, entering its 29th year this summer.

* * *

#### Page 4

Playing in the ifMUD
--------------------

Around the same time that IFComp was getting off the ground in the mid-'90s, Liza Daly started looking for more ways to connect with her fellow IF fans. She saw the potential benefit of having real-time conversations in addition to the asynchronous dialogues of the Usenet forums. So she turned to a multi-user dungeon, or MUD. These early online experiences were part interactive fiction, part chat room, and part adventure or role-playing game. MUDs were familiar to many of the IF fans of the era, and Daly decided to make one for the scene.

"Because a MUD is sort of an embodied place, it was an opportunity for people who liked writing text adventures to create a text adventure-like shared space that folks could occupy," she told me.

And occupy they did. After Daly created the ifMUD space, it didn't take long for the idea to take off as a popular counterpart to the newsgroups. And while there was plenty of experimentation within the MUD as a piece of communal interactive fiction, Daly's goal of offering real-time connection did come to fruition. "I'm not sure the scene would have been quite as strong if there wasn't some place for folks to make those personal relationships and bring them into the real world," she said.

Over time, IF's online conversations shifted to other platforms, and while ifMUD is technically [still around](http://ifmud.ziz.org/), its heydey has passed. But its role during the late '90s and early 2000s is undeniable. "For a solid 10 years, it was _the_ place that the IF community came together," Daly said.

Both IFComp and ifMUD were the result of a community member seeing an opportunity to strengthen the bonds among this seemingly rag-tag bunch of IF fans. And to both efforts, the rag-tag bunch said, "Yes, please!"

A seismic shift in tech: Ink, Twine, and Inform 7
-------------------------------------------------

The interactive fiction story, perhaps fittingly, began to branch in new directions during the late 2000s and early 2010s. After so many years with Inform and TADS as the de facto platforms for creating and reading parser games, the scene started experimenting with new tools and new approaches to storytelling. Chris Klimas launched Twine in 2009. The same year, Dan Fabulich and Adam Strong-Morse founded Choice of Games, which still publishes text-only stories with the ChoiceScript language. Hot on their heels in 2011, Joe Humphries and Jon Ingold teamed up to launch Inkle Studios.

These people had shared experiences writing and playing parser works in the '90s, but many of their efforts in the aughts reflected a shift across the gaming world to treat interactive fiction as more than the process of solving puzzles in a virtual space. This in turn demanded new tools.

"The more games I wrote, the more I realized that I was interested in characters and dialogue primarily, but doing that within the parser-based setup was a huge amount of work for not much reward," explained Ingold.

He and Humphries wanted to make a text game with mainstream appeal. They developed a choice-driven IF tool called [Ink](https://www.inklestudios.com/ink/) that fit their creative and technical aims precisely, making it easy to weave together different blocks of text for a highly variable game experience. Ink powers not just Inkle's own game releases, like the recent _A Highland Song_, but also many notable indie projects such as _Bury Me My Love_, _Sable_, _Goodbye Volcano High_, and _Neocab_.

Klimas had a similar experience. As he was brainstorming new ideas for his own IF works, he found "that the kind of experiences I wanted to make didn't, at least in my mind, lend themselves well to the parser format." He explored some early-'90s experiments in hypertext fiction and found himself drawn to the idea of having a dynamic, modifiable website for a text game. So he set out to create a tool explicitly for writers who wanted to create interactive stories with that approach.

His first effort, a command line tool for an existing hypertext platform called TiddlyWiki, fell flat with most of the IF world. But Klimas stuck with the project, feeling certain that there were people who could benefit from the approach. "I wanted to feel like I was not quite so alone in my creative concerns, to be honest," he said.

Once he revamped the initial concept and released it as [Twine](https://twinery.org/), the community Klimas had sought found him. The system stood out both for its visual scripting approach that requires no prior programming knowledge, and for publishing projects as webpages that could be easily shared and played. Indie game developers, and notably queer creators, were drawn to the tool as a way to create a personal story without the usual technology and complexity barriers associated with a video game. My sources talked about this time as the Twine "explosion," and that isn't hyberbole—at the time of this writing, indie game marketplace itch.io has more than 6,600 games with the Twine tag.

* * *

#### Page 5

Changing identities
-------------------

The flip side of all this new tech development was consternation that IF was coming to mean more than the classic parser game experience. As with so many moments of rapid change, the response from the old guard was sometimes resistant, sometimes skeptical, sometimes downright vitriolic. But after the dust settled, even the most passionate fans of the _Zork_ era gameplay reached acceptance.

"What we've decided in 45 years of trying," Plotkin acknowledged, "is that there is just never going to be a gigantic audience for that. The audience for that is probably about the same size as it was in 1980."

Perhaps that makes sense. The roots of IF and the roots of computing may have been tightly knotted underground, but they still grew into two distinct plants. Since so much changed so quickly, having your first computer experience in 1985 was worlds apart from having your first computer experience in 2005. People who didn't have any knowledge of working close to the metal or under the hood were discovering the concept of interactive fiction, wanting to bring their skills as writers, artists, and designers to the field.

A new symbiotic relationship emerging for IF was with the wider world of computer and video games.

"What has happened is that many of those authors have gone on to very serious careers in game development as narrative designers and producers," Daly observed. "This wasn't maybe what we thought was going to happen in the '90s, but I think it actually did turn into a good entry point for people who wanted to work in the game industry."

"The key thing I would like people to walk away with Twine is… 'I can be creative. I can make games, I don't have to just play them.'" Klimas said of his platform. "And even though those games might be really humble in terms of graphics or scope…they're still interesting. That's the most important part."

The parser world didn't remain static during this time, either. Graham Nelson, with extensive support from Emily Short, released a natural-language version of his language, called [Inform 7](https://ganelson.github.io/inform-website/), in 2006.

"Natural language just has such a breathtaking ease when describing the state of the world," Nelson said. "It's hard to imagine a more clear expression than "if every door in the Dining Room is closed" as a way to ask if every door in the Dining Room is closed." Again, this was a shift that removed some of the technical barriers for people looking to write IF, making it easier to not just read but create.

And it often comes back to those creators. Short said she watches community feedback when she's developing a new IF tool and gave Inform 7 as an example. "When I was building documentation and examples for Inform, I was trying to anticipate both 'what do people already know they want to do?' and 'what _should_ people want to know about how to use this system?'" she said. "And I tried to write example cases that might inspire users to explore new design possibilities with the tool, as well as solving problems they already had."

Making it open and official
---------------------------

Another common, community-centric thread quickly emerged with every tool-maker I interviewed. Interactive fiction is a world of free, usually open-source technology. Nearly every platform in regular use has been available at no cost from inception, and a vast majority of them have also been open-source for almost as long. That was a core ethos in the early days, and most people have continued to honor it.

"At least back then, a big goal of the community was we all loved these Infocom text adventure games and text adventures in general," Klimas said. "A lot of effort was spent into making these games playable on what were contemporary platforms."

Since those tools had always been free, he said that he never expected to charge for Twine, even when the tool did see leaps in popularity. He also wanted to do right by the people who have been a big part of the tool's success. "By and large, the users of Twine are people who are not working professionally in games. And they are oftentimes from backgrounds that don't have a ton of resources," he said. His attitude was similar about open-sourcing the project. "I definitely drank the Kool-Aid to a degree when Linux became a big deal," he said.

* * *

#### Page 6

Inkle Studios took a more measured consideration but still wound up in the same place as Twine. "We knew that if we released it as a tool that we charged for, we would become a tools company," Ingold said. "We would be forever fixing other people's bugs and problems." The duo also saw Ink as their chance to not just make connections with the game dev community but also make a bigger artistic statement about stories in games. Ink "allowed people to write games in the way we think that games should be written," he said. "If we put this tool out into the world, then people might start to write games in the way that we think they ought to be… But if nobody uses it, then nobody's going to do that."

"It was always the plan to open-source Inform," Nelson said. It admittedly took a while to reach that point, but he's happy that he finally got there:

> My main feeling on finally making the GitHub repository public was relief. I could now be hit by lightning and it wouldn't all be lost. It's been very good to have other people able to inspect the code to find bugs and even sometimes fix them. More helpful still has been the inform-evolution repository, where proposals for improvements and changes are documented as they are experimented with. There's a nice sense of connection with people which comes along with all of this, and it's good for me to work with people who actually know what they are doing.

The community has also benefited from new and official infrastructure. When McIntosh took over IFComp, he met with a lawyer for advice about handling fanfiction submissions. After describing the event, he summed up the lawyer's response as: "OK, let me get this straight: This is a community institution which has been running for 15 years, you actually do distribute prizes for it, you actually do have lots of people who want to give it money, and you _haven't_ organized into a nonprofit?"

That conversation led to the creation of the [Interactive Fiction Technology Foundation](https://iftechfoundation.org/). IFTF now supports several key resources for the scene, including the IFComp, the IntFiction forums, an annual conference called NarraScope, and Twine.

After so many years of disparate efforts, the community is taking gradual steps to preserve its legacy and to more intentionally, incrementally grow in new directions.

Where we’ve been and where we’re going
--------------------------------------

That brings us to today. Interactive fiction no longer lurks in the shadows as a retro-gaming relic. It's everywhere. I've highlighted just some of the work done by dedicated individuals who have helped the art form to reach this stage. But as with the best stories, the truth is more than the sum of its parts.

I asked each interviewee for their take on why IF has survived and thrived through the decades. Most credited the power of text and language as a vital part of the human experience, and without question, that's at the core of IF. But there's also a scrappy, self-starting mentality that continues to serve as its engine.

"Anyone who gets involved in this community and sticks around, sooner or later they start making a game," Plotkin said. "There's very few people who just lurk and watch."

"It’s a game style where it’s still possible to build an entire game as a single developer using free tools; it also offers all the creative affordances of text," Short said. "You can work with metaphor, with allusion, with ambiguity, with narrative voice and unreliable narrators, the whole set of novelist's tools to convey interiority and bring different parts of your story in focus in different ways. And you can narrate scenes of any scope and scale—monsters, naval battles, volcanic eruptions, things that would just wipe out the budget of a 3D game."

Nelson summed up the whole of the interactive fiction's past and future in his own uniquely witty way:

> Interactive fiction is long-lived because it is a forever-experimental genre of writing. If you think of IF really narrowly as the art of the '80s-style text adventure, you could make a case that there was an interesting cultural moment which had its peak and then passed. There were amateurs, then professionals, then amateurs again. And certainly the major games companies aren't now using Inform to sell text adventures. But they do use Inform, in 2024, as a prototyping tool for working out the dynamics of stories which are then implemented for the world of console and Steam games. Those are interactive fictions, too. And there is a huge and flourishing genre of partly textual gaming on mobile which is very much about storytelling, using a sort of patchwork of words, animations and video clips. I don't see that going away.
> 
> Talking about interactive fiction as some sort of lost art is like saying that nobody writes plays in blank verse any more. Maybe not, but you can draw a through line from Shakespeare to _Barbie_ and _Oppenheimer_. We still want actors and characters and spectacle. For as long as we make first-person experiences mediated by a computer, we'll be making new interactive fiction.

So get lamp, go north, and pick your dialogue choices carefully. There's a big, vibrant world out there to explore.