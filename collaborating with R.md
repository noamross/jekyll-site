% Don't R alone! A guide to tools for collaboration with R
% Noam Ross
% 13-01-06 15:39:05

This a brief guide to using R in collaborative, social ways. R is a powerful
open-source programming language for data analysis, statistics, and
visualization, but much of its power derives from a large, engaged *community*
of users. This is an introduction to tools for engaging the community to improve
your R code and collaborate with others

Topics
======

-   [Asking questions via e-mail, listservs and bulletin
    boards:](#asking-questions-via-e-mail-listservs-and-bulletin-boards)
-   [Sharing R scripts with
    `gist.github.com`](#sharing-r-scripts-with-gist.github.com)
-   [Sharing reports of code and results with
    `knitr`](#sharing-reports-of-code-and-results-with-knitr)
-   [Collaborating and version control](#collaborating-and-version-control)
    -   [Dropbox](#dropbox)
    -   [Git and Github](#git-and-github)

-   [Package creation and sharing](#package-creation-and-sharing)
-   [Interactive R with Shiny](#interactive-r-with-shiny)

[Asking questions via e-mail, listservs and bulletin boards:](#TOC)
===================================================================

There are a large number of online forums for discussing R and asking questions.
Some of the most popular are [Stack
Overflow](http://stackoverflow.com/questions/tagged/r), a general programmers
Q&A website with a large R section, and the
[R-help](https://stat.ethz.ch/mailman/listinfo/r-help) listserv. You can also
find specialty forums, like
[R-sig-ecology](https://stat.ethz.ch/mailman/listinfo/r-sig-ecology), or local
forums like the [Davis R Users'
Group](https://groups.google.com/forum/?fromgroups#!forum/davis-rug)

These fora are great places to get help with your R. To get good answers, its
important to know how to ask good questions. Key to a good question is a
**minimal reproducible example** (MRE). In short, an MRE is a bit of code that,
when copy-and-pasted from an e-mail into R, will reproduce the results or
problem you are asking about. Here is a [great guide to producing a reproducible
example](http://stackoverflow.com/a/5963610/1757441). A few important
components:

> -   a minimal dataset, necessary to reproduce the error
> -   the minimal runnable code necessary to reproduce the error, which can be
>     run on the given dataset.
> -   the necessary information on the used packages, R version and system it is
>     run on.
> -   in case of random processes, a seed (set by set.seed()) for
>     reproducibility

One useful trick for producing an MRE is the `dput()` command. `dput` takes any
object in R and prints it in a form that can be copy-and-pasted. For instance,
say you have a data frame like this:

~~~~ {.sourceCode .r}
df <- data.frame(a = 1:5, b = 6:10)
df
~~~~

    ##   a  b
    ## 1 1  6
    ## 2 2  7
    ## 3 3  8
    ## 4 4  9
    ## 5 5 10

Running `dput` creates text that can be entered into R make an identical
structure

~~~~ {.sourceCode .r}
dput(df)
~~~~

    ## structure(list(a = 1:5, b = 6:10), .Names = c("a", "b"), row.names = c(NA, 
    ## -5L), class = "data.frame")

Now you can insert this data into your MRE by typing:

    df <- structure(list(a = 1:5, b = 6:10), .Names = c("a", "b"), 
      row.names = c(NA, -5L), class = "data.frame")

Your real data is probably considerably larger and more complex, and could be in
the form of a data frame, list, or any other number of objects. Try running
`dput(mtcars)` to see the results with a larger data set. It's often shorter to
using `dput` on cleaned-up, manipulated data than including a lot of
data-manipulation steps in your MRE. If your dataset is large, simply use `dput(head(mtcars))` to share only the first few rows.

Similarly, it is easy to share more information about your set up using the `sessionInfo()` function. It returns information about your `R` version, your platform, base, and loaded packages, all of which are really helpful for troubleshooting purposes.
Simply copy and paste the output from the function alongside your question.

[Sharing R scripts with `gist.github.com`](#TOC)
================================================

Sometimes you want to share an R script you've written. Creating a **gist** is a
great way to do this that has several advantages over sharing over e-mail:

-   You can share the code just by sending a URL
-   Syntax highlighting makes the code easier to read
-   You can update the code and it will remember previous versions
-   The gist an be public or private
-   People can comment on the gist and have a conversation

To post your code as a gist, go to <http://gist.github.com>, and paste your
code, and put in a brief description. You'll get an easily sharable web page
like this:

![](http://dl.dropbox.com/u/3356641/blogstuff/gistexample.png)

Signing up for the website is not neccessary, but it is needed if you want to
revise your gist in the future.

A gist can include multiple files, so sometimes its useful for to include both
an R script and your source data file in one gist.

[Sharing reports of code and results with `knitr`](#TOC)
========================================================

Often you want to share the results of analyses you perform in R with
colleagues. A good way to do this is with a *report* - a document of text, code,
and results (often graphs). 'knitr' is an R package for making reports that can
be printed or shared on the web.

`knitr` takes documents that are a mixture of text and code, extracts the code
and runs it, and then inserts the code and results back in. This has several
advantages:

-   If you change your code, all you have to do is re-run knitr, rather than run
    the code, copy-and-paste results, and then do re-formatting
-   Colleagues who read your report can see exactly the steps you took to reach
    your results, and reproduce them if they want.

`knitr` can work with a variety of different document types: HTML, LaTeX, etc.,
but most commonly people use *markdown*, which is a simple syntax designed for
producing web pages. Here's what a short markdown document using `knitr` looks
like:

    Title
    =====

    This is an example document.  Here's a summary of some data:

    ```{r}
    summary(cars)
    ```

    Here is a plot of that data:

    ```{r}
    plot(cars)
    ```

If you save this file as `example.Rmd` (R-markdown), and run

    library(knitr)
    library(markdown)
    knit("example.Rmd")
    markdownToHTML("example.md")

You get an HTML file called `example.HTML`. Open it in a browser and it looks
like this:

![](http://dl.dropbox.com/u/3356641/blogstuff/knitexample.png)

As you can see, your document has both your writing, code, and results,
formatted in an easy-to-read way.

If you use Rstudio, this whole process is automated for you. Just hit the "Knit
HTML" button once you have written your R-markdown document, and it will
generate the web page and show a preview:

![](http://dl.dropbox.com/u/3356641/blogstuff/knitbutton.png)

An additional benefit of using Rstudio is that it will give you the option of
automatically uploading the HTML document to their server at
<http://rpubs.com/>. Just hit the "Publish" in the preview window:

![](http://dl.dropbox.com/u/3356641/blogstuff/publish.png)

Like gists, documents at <http://rpubs.com/> can be updated and easily shared
and accept comments.

[Collaborating and version control](#TOC)
=========================================

If you are working with a team on a project that involves multiple R analyses
and data sets,

[Dropbox](#TOC)
---------------

An easy way to share your R files and maintain version control is to use
[Dropbox](https://www.dropbox.com/). Dropbox is a service that syncs files
across computers. If you and your collaborators share a Dropbox folder, changes
will automatically stay up-to-date across all your computers. Importantly,
Dropbox keeps previous versions of files and lets you revert to past versions,
so you can go back if something in your code breaks:

![](http://dl.dropbox.com/u/3356641/blogstuff/dropboxexample.png)

[Git and Github](#TOC)
----------------------

[Git](http://git-scm.com/) is a version-control system widely used by
programmers. It's much more powerful than Dropbox version control, with features
that include

-   Fine-scale control of what files and folders change with each update
-   Log messages to remind you of what changes were important with each version
-   Creating parallel versions (branches) of projects
-   Comparing different versions of files and folders
-   Merging changes made on different branches or by different users.

Git has a bit of a learning curve, but if you do a lot of programming work in R
or other languages, it is well worth it. To get started, see the documentation
[here](http://git-scm.com/doc)

Using Git alongside a web service like [Github](https://github.com/) lets you
collaborate on projects in a very powerful way. Collaborators can work on code
simultaneously, merge changes and resolve conflicts through github. In addition,
the R package `devtools` lets you download and run files directly from github.

Again, if you use Rstudio, git is built into the interface:

![](http://dl.dropbox.com/u/3356641/blogstuff/gitexample.png)

[Package creation and sharing](#TOC)
====================================

One of the great strengths of R is the collection of over 3,000 user created
packages. You might want to create a package if you have developed a new method
in R, or if you have a large collection of functions that would be useful to
share. If you write a scientific publication using R for analysis, an
accompanying package is a good way to make the data and methods accessible for
other researchers to reproduce and build upon.

Hadley Wyckam has written a great guide to developing R packages, which can be
found [here](https://github.com/hadley/devtools/wiki). It accompanies his
package `devtools` which provides many useful tools for package development.
`devtools`, like `knitr` and git, is built into RStudio.

[Interactive R with Shiny](#TOC)
================================

A relatively new and exciting way to use R to share data analysis is
[Shiny](http://www.rstudio.com/shiny/). Shiny is an R package that lets you
create *interactive* web pages that let users explore your data and analysis.
Here's an example. Click on it to go to the interactive version:

[![](http://dl.dropbox.com/u/3356641/blogstuff/shinyexample.png)](http://www.rstudio.com/shiny/)
