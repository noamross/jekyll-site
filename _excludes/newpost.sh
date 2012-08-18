#!/bin/bash

# This is the script I run from Textmate to generate and dave new post, process my site with jekyll, post-process the RSS and update both git repose

r=$(CocoaDialog inputbox --title "Add Tags" \
--informative-text "Enter string:" \
--button1 "Okay" --button2 "Cancel")
[[ $(head -n1 <<<"$r") == "2" ]] && exit_discard
r=$(tail -n1 <<<"$r")

filename="$TM_FILEPATH"
basename="${filename%.*}"
date=`date +%Y-%m-%d`
wkspcnm=$(basename "$TM_FILEPATH")
wkspcnm="${wkspcnm%.*}" 
filedash=$(echo $wkspcnm | sed 's/[\.\,\:\;\"\!\?\-\_\(\)\&\{\}\/]*//g' | sed -e 's/[^A-Za-z0-9]/-/g' | tr '[:upper:]' '[:lower:]')
finalname=$date-$filedash
echo $finalname

echo "<pre>"
pandoc -r markdown -t markdown -s --template=/Users/noamross/Dropbox/Public/pd/jekyllpost.md --base-header-level=2 --bibliography=/Users/noamross/Dropbox/Public/library.bib --csl=/Users/noamross/Dropbox/Public/pd/ecology.csl -V tags="[$r]" -o "$finalname.md"
echo "</pre>"
echo "<pre>"
mv "$finalname.md" /Users/noamross/Dropbox/Public/jekyll-site/_posts
echo "</pre>"

cd /Users/noamross/Dropbox/Public/jekyll-site/

jekyll /Users/noamross/Dropbox/Public/noamross.github.com/_site/

git add .
git commit -a -m 'new post'
git push

cd /Users/noamross/Dropbox/Public/noamross.github.com/

perl -pi -e 's|(\\\[)(.*?)(\\\])|&lt;div style=&quot;text-align:center;&quot;&gt;&lt;img src=&quot;http://latex.codecogs.com/png.latex?\2&quot; alt=&quot;\2&quot; /&gt;&lt;/div&gt;|g' _site/blog/*.xml
perl -pi -e 's|(\\\()(.*?)(\\\))|&lt;img style=&quot;vertical-align:middle&quot; src=&quot;http://latex.codecogs.com/png.latex?\\inline \2&quot; alt=&quot;\2&quot; /&gt;|g' _site/blog/*.xml

git --work-tree=_site/ add .
git --work-tree=_site/ commit -a -m 'new post'
git --work-tree=_site/ push

