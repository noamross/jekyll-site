#!/usr/bin/Rscript --default-packages=utils,grDevices,stats,graphics --verbose

args <- commandArgs()
inname <- as.character(args[6])
if(!is.na(args[7])) outname <- as.character(args[7])
print(inname)
print(outname)

require(knitr)
require(stringr)

opts_knit$set(out.format="markdown", verbose = TRUE, base.url="http://dl.dropbox.com/u/3356641/blogstuff/", base.dir="/Users/noamross/Dropbox/Public/blogstuff/")

opts_chunk$set(dev="png", fig.width=8, fig.height=8, cache=FALSE, fig.show="asis", warning=FALSE, fig.keep="high")

render_markdown()

knit_hooks$set(output = function(x, options){str_c("\n```{.sourceCode .rout}\n", x, "```\n\n")})
knit_hooks$set(source = function(x, options){str_c("\n```{.r}\n", x, "```\n\n")})
knit_hooks$set(plot = function (x, options) {
    if (options$fig.show == "animate") {
        .ani.plot.hook.html(x, options)
    }
    else {
        base = opts_knit$get("base.url")
        if (is.null(base)) 
            base = ""
        cap = if (is.null(fig.cap <- options$fig.cap)) {
            sprintf("")
        }
        else {
            if (options$fig.num == 1L) 
                fig.cap[1]
            else fig.cap[options$fig.cur]
        }
        sprintf("![%s](%s%s.%s)\n", cap, base, x[1], x[2])
    }
})

pat_md()
knit_patterns$set(chunk.begin="^`{3,}\\{\\.r(.*)\\}\\s*$")

if(!is.na(args[7])) {
	knit(inname, outname)
} else {
knit(inname)
}
 