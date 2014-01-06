---
layout: pagecom
title: "Davis R Users' Group"
---

Welcome to the Davis R Users' Group (DRUG)!  We are a community of R users at UC Davis who support each other in using R for science. Our focus is providing a space for beginning and intermediate users to learn from each other.

-   ***Come to our weekly work sessions***: This is the core purpose of DRUG.  We have weekly, 2-hour work sessions where people bring their computers to work on their own projects, and ask each other questions as needed.  We have no TAs - just mutual support in R, statistics, and related topics.  Group members sometimes give short presentations on R methods and best practices or to get feedback on their projects.

***For Winter Quarter 2014, work sessions will be held Mondays 3-5PM in Wickson 2120J.***

 - ***Join the [mailing list](https://groups.google.com/d/forum/davis-rug)***: The mailing list is an online supplement to our in-person work sessions.
 
 - ***Use the resources below***: We've compiled a list of resources to help you get started using R and find answers to your questions.
 
We're fortunate have sponsorship from [Revolution Analytics](http://www.revolutionanalytics.com/) for our snacks and speaker prizes.

[![](http://dl.dropbox.com/u/3356641/blogstuff/RevolutionAnalytics_logo_374x87_trans.png)](http://www.revolutionanalytics.com/)

-------

## Resources for R Help

[Getting Started](#some-tips-on-getting-started) | [D-RUG Resources](#d-rug-resources) |[Web Resources](#web-resources) | [Mailing Lists](#other-mailing-lists) | [Books](#books) | [Courses](#r-courses) | [Misc](#miscellaneous) | [Stats at UCD](#general-statistics-resources-at-uc-davis)

***Please Add Additional Resources in the [Comments](#disqus_thread)!*** I will add them to the page.

### Some tips on getting started:

 - Download R [here](http://cran.cs.wwu.edu/)
 - After you install R, I recommend you install [RStudio](http://www.rstudio.org/).  RStudio is a program that makes R easier to use, and is being widely adopted by both beginning and advanced R users. Importantly, it works across most computer platforms, and has features that make it easy to [share your work](http://rpubs.com/), collaborate, and do [proper version control](http://rstudio.org/docs/version_control/overview). 
 - [Google](http://www.google.com) is your first stop for most questions.  You'll most likely reach most of the resources below while searching for your specific question.
 - Our regular R work sessions and [listserv](https://groups.google.com/d/forum/davis-rug) are great places to ask questions, especially if you are not sure what you are looking for.

### D-RUG tutorials from our meetings

Sometimes D-RUG members put together useful resources and tutorials for our meetings which we post on the blog under the "D-RUG" tag:

<ul>
    {% for post in site.tags.D-RUG  %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

### Web Resources

There's no need to reinvent the wheel.  Here are lists of beginner's resources which others have compiled

 - [Rseek](http://rseek.org/) is a search engine for R resources.
 - [RStudio's Getting Help with R Page](http://www.rstudio.org/docs/help_with_r)
 - [List of Free Online R Tutorials](http://pairach.com/2012/06/17/r_tutorials_non-uni/)
 - [Beginner tips from Revolution Analytics](http://blog.revolutionanalytics.com/beginner-tips/) 
 - A [free online course](https://www.coursera.org/course/compdata) from Coursera

### Books

 - *R in a nutshell* by Joseph Adler is a good book that's available in the Davis library and [online](http://proquest.safaribooksonline.com/9781449377502) for Davis users.
 - *A Primer of Ecology with R* by M. Henry H. Stevens is also available [online](http://www.springerlink.com/content/l48073/?p=6e7edb19e2964135bb5b67aa016171de&pi=15#section=64711&page=5&locus=0)

### Other Mailing Lists

These mailing list are very useful not just as a place to ask questions.  They are probably where you will find your answers when you search on Google.

 - The [R-Help mailing list](http://www.r-project.org/mail.html) and it's many subgroups, including an [Ecology-specific group](https://stat.ethz.ch/mailman/listinfo/r-sig-ecology)
 - [Stack Overflow](http://stackoverflow.com/) is a popular Q&A site for computer programming that a lot of [discussions about R](http://stackoverflow.com/questions/tagged/r).
 - [The Davis Scientific and Statistical Computing List](https://lists.ucdavis.edu/sympa/info/statscicomp) is mostly used by advanced users and includes some of the developers of R.
 
### R Courses

There are a few courses at UC Davis that use R.

 - [Duncan Temple Lang](http://www.stat.ucdavis.edu/~duncan/) (one of the developers of R) teaches [*Statistical Computing* (STA141)](http://eeyore.ucdavis.edu/stat141/), a course mostly about R but also more general topics in computer science for statistics. He also organizes an informal seminar series on statistical computing.  [STA 242](http://eeyore.ucdavis.edu/stat242/) is a more advanced version of the course.  He also will teach STA 135 - *Multivariate Data Analysis* this year, which is not about R but uses R for data exploration, data mining, and regression.
 - [Richard McElreath](http://xcelab.net/rm/)'s *Statistical Rethinking* (ANT298) is a course in Bayesian statistical methods which doesn't focus on R but teaches enough for the applications in the course.
 - [Marissa Baskett](http://www.des.ucdavis.edu/faculty/baskett/) and [Sebastian Schreiber](http://www-eve.ucdavis.edu/sschreiber/) teach *Computational methods in population biology* (ECL298) in alternate years. This course also isn't explicitly about R but teaches enough basics so as to be able to use it for the applications in the course.  They also created this handy [cheat sheet](http://www.des.ucdavis.edu/faculty/baskett/downloads/Rcommands.pdf)
 - *Design, Analysis, and Interpretation of Experiments* (PLS 205) has in the past provided an optional extra section to learn techniques in R in addition to SAS
 - Carole Hom teaches *Introduction to Dynamic Models in Modern Biology* (BIS 132) where R is used for differential and difference equation modeling.
 - There are occasional [paid workshops](http://www.hafnerconsulting.com/ucd2012/) offered on campus
 - At least one section of STA100 uses R
 - [Robert Hijmans](http://www.des.ucdavis.edu/FacultyInfo.aspx?ID_Number=83) teaches *Quantitative Geography* (GEO200CN).  It is a survey course about spatial data analysis and modeling using R, including subjects such as point pattern analysis, kriging, inference, cellular automata and Markov chains. It has lectures, disussions, and a intensive lab.
 - [Jim Fadel](http://animalscience.ucdavis.edu/faculty/fadel/) teaches ABG250: *Mathematical Modeling in Biological Systems*, which uses R and teaches enough for the applications in class
 - [Anna Steel](http://biotelemetry.ucdavis.edu/pages/bio_Steel.asp) taught ECL298: *R for Dummies: Basics of data manipulation in R* Winter Quarter 2013. The course may be taught by someone else in the future, but is still up in the air.
 - The political science methods sequence (POL211, POL212, POL213) uses R.
 - [Andrew Latimer](http://www.plantsciences.ucdavis.edu/faculty/latimer/index.htm)'s *Applied Statistical Modeling for Environmental Science* (PLS298) uses R in addition to JAGS and OPENBugs. It assumes familiarity with R.
 
### Miscellaneous

 - [R-bloggers](http://www.r-bloggers.com/)
 - The [One R Tip A Day Twitter Account](https://twitter.com/RLangTip)
 - [#rstats](https://twitter.com/#!/search/%23rstats?q=%23rstats) is a common hashtag for discussing R on Twitter

### General Statistics Resources at UC Davis

 - Here is [a page compiling stats and modeling courses](stats.html) that Ecology students can take at UC Davis
 - The UC Davis Department of Statistics has a [consulting service](http://anson.ucdavis.edu/stats-lab/services) that is free for disseration-related statistical advice.  You get a 1-hour meeting with a statistician to discuss your research and they will send you a write-up of their recommendations.


