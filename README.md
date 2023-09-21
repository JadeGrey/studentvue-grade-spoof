<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

# User Script

Made with tampermonkey, untested on others.

To activate, hold `backspace` and use one of the keys.

- Change grades to A's and A-'s (`A`)
- Change grades to B+'s, B's and B-'s (`B`)
- Change grades to C+'s, C's and C-'s (`C`)
- Change grades to D+'s, D's and D-'s (`D`)
- Custom configuration (`E`)
- Reset coming soon

# Bookmarklets

[Minified](https://www.toptal.com/developers/javascript-minifier) and then converted using [Caiorss's Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker)

### Auto A's

```
javascript:(function()%7Bconst%20letters%3D%5B%22A%22%2C%22A-%22%5D%2CletterGrades%3Ddocument.querySelectorAll(%22.mark%22)%2CpercentGrades%3Ddocument.querySelectorAll(%22.score%22)%2CgradesDivs%3Ddocument.querySelectorAll(%22div%3Ahas(.mark)%3Ahas(.score)%3Anot(.mark-count)%22)%3BletterGrades.forEach(e%3D%3E%7Blet%20t%3DMath.floor(Math.random()*letters.length)%2Cr%3Dletters%5Bt%5D%3Be.textContent%3Dr%7D)%2CgradesDivs.forEach(e%3D%3E%7Blet%20t%3De.querySelector(%22.mark%22)%2Cr%3De.querySelector(%22.score%22)%3Bt%26%26%22A%22%3D%3D%3Dt.textContent.trim()%3Fr.textContent%3D%60%24%7B(Math.random()*(99.9-94)%2B94).toFixed(1)%7D%25%60%3At%26%26%22A-%22%3D%3D%3Dt.textContent.trim()%26%26(r.textContent%3D%60%24%7B(Math.random()*(93.4-90)%2B90).toFixed(1)%7D%25%60)%7D)%2Calert(%22Replacing%20grades%20with%20A's...%22)%3B%7D)()%3B
```

### Auto B's

```
javascript:(function()%7Bconst%20letters%3D%5B%22B%2B%22%2C%22B%22%2C%22B-%22%5D%2CletterGrades%3Ddocument.querySelectorAll(%22.mark%22)%2CpercentGrades%3Ddocument.querySelectorAll(%22.score%22)%2CgradesDivs%3Ddocument.querySelectorAll(%22div%3Ahas(.mark)%3Ahas(.score)%3Anot(.mark-count)%22)%3BletterGrades.forEach(e%3D%3E%7Blet%20t%3DMath.floor(Math.random()*letters.length)%2Cr%3Dletters%5Bt%5D%3Be.textContent%3Dr%7D)%2CgradesDivs.forEach(e%3D%3E%7Blet%20t%3De.querySelector(%22.mark%22)%2Cr%3De.querySelector(%22.score%22)%3Bt%26%26%22B%2B%22%3D%3D%3Dt.textContent.trim()%3Fr.textContent%3D%60%24%7B(Math.random()*(89.3-87)%2B87).toFixed(1)%7D%25%60%3At%26%26%22B%22%3D%3D%3Dt.textContent.trim()%3Fr.textContent%3D%60%24%7B(Math.random()*(86.3-83)%2B83).toFixed(1)%7D%25%60%3At%26%26%22B-%22%3D%3D%3Dt.textContent.trim()%26%26(r.textContent%3D%60%24%7B(Math.random()*(82.3-80)%2B80).toFixed(1)%7D%25%60)%7D)%2Calert(%22Replacing%20grades%20with%20B's...%22)%3B%7D)()%3B
```

### Auto C's

```
javascript:(function()%7Bconst%20letters%3D%5B%22C%2B%22%2C%22C%22%2C%22C-%22%5D%2CletterGrades%3Ddocument.querySelectorAll(%22.mark%22)%2CpercentGrades%3Ddocument.querySelectorAll(%22.score%22)%2CgradesDivs%3Ddocument.querySelectorAll(%22div%3Ahas(.mark)%3Ahas(.score)%3Anot(.mark-count)%22)%3BletterGrades.forEach(e%3D%3E%7Blet%20t%3DMath.floor(Math.random()*letters.length)%2Cr%3Dletters%5Bt%5D%3Be.textContent%3Dr%7D)%2CgradesDivs.forEach(e%3D%3E%7Blet%20t%3De.querySelector(%22.mark%22)%2Cr%3De.querySelector(%22.score%22)%3Bt%26%26%22C%2B%22%3D%3D%3Dt.textContent.trim()%3Fr.textContent%3D%60%24%7B(Math.random()*(79.3-77)%2B77).toFixed(1)%7D%25%60%3At%26%26%22C%22%3D%3D%3Dt.textContent.trim()%3Fr.textContent%3D%60%24%7B(Math.random()*(76.3-73)%2B73).toFixed(1)%7D%25%60%3At%26%26%22C-%22%3D%3D%3Dt.textContent.trim()%26%26(r.textContent%3D%60%24%7B(Math.random()*(72.3-70)%2B70).toFixed(1)%7D%25%60)%7D)%2Calert(%22Replacing%20grades%20with%20C's...%22)%3B%7D)()%3B
```

### Auto D's

```
javascript:(function()%7Bconst%20letters%3D%5B%22D%2B%22%2C%22D%22%2C%22D-%22%5D%2CletterGrades%3Ddocument.querySelectorAll(%22.mark%22)%2CpercentGrades%3Ddocument.querySelectorAll(%22.score%22)%2CgradesDivs%3Ddocument.querySelectorAll(%22div%3Ahas(.mark)%3Ahas(.score)%3Anot(.mark-count)%22)%3BletterGrades.forEach(e%3D%3E%7Blet%20t%3DMath.floor(Math.random()*letters.length)%2Cr%3Dletters%5Bt%5D%3Be.textContent%3Dr%7D)%2CgradesDivs.forEach(e%3D%3E%7Blet%20t%3De.querySelector(%22.mark%22)%2Cr%3De.querySelector(%22.score%22)%3Bt%26%26%22D%2B%22%3D%3D%3Dt.textContent.trim()%3Fr.textContent%3D%60%24%7B(Math.random()*(69.3-67)%2B67).toFixed(1)%7D%25%60%3At%26%26%22D%22%3D%3D%3Dt.textContent.trim()%3Fr.textContent%3D%60%24%7B(Math.random()*(66.3-65)%2B65).toFixed(1)%7D%25%60%3At%26%26%22D-%22%3D%3D%3Dt.textContent.trim()%26%26(r.textContent%3D%60%24%7B(Math.random()*(64.3-63)%2B63).toFixed(1)%7D%25%60)%7D)%2Calert(%22Replacing%20grades%20with%20D's...%22)%3B%7D)()%3B
```

### Grade Picker

```
javascript:(function()%7Bconst%20lettersInput%3Dprompt(%22From%20decending%20order%2C%20place%20the%20letter%20grades%20you%20want%20separated%20by%20commas%20and%20a%20space%20(Ex.%20A-%2C%20C%2C%20B%2B%2C%20A%2C%20F)%5CnDo%20NOT%20use%20%2B%20on%20A%20or%20-%2F%2B%20on%20F%22)%2Cletters%3DlettersInput.split(%22%2C%22).map(t%3D%3Et.trim())%2CletterGrades%3Ddocument.querySelectorAll(%22.mark%22)%2CpercentGrades%3Ddocument.querySelectorAll(%22.score%22)%2CgradesDivs%3Ddocument.querySelectorAll(%22div%3Ahas(.mark)%3Ahas(.score)%3Anot(.mark-count)%22)%2CvalidGrades%3D%5B%22A%22%2C%22A-%22%2C%22B%2B%22%2C%22B%22%2C%22B-%22%2C%22C%2B%22%2C%22C%22%2C%22C-%22%2C%22D%2B%22%2C%22D%22%2C%22D-%22%2C%22F%22%5D%3Bif(percentGrades.length%3D%3D%3Dletters.length)%7Blet%20t%3D0%3BletterGrades.forEach(e%3D%3E%7B!e.parentNode.querySelector(%22.mark-count%22)%26%26(validGrades.includes(letters%5Bt%5D)%3Fe.textContent%3Dletters%5Bt%5D%3Aalert(%60'%24%7Bletters%5Bt%5D%7D'%20is%20not%20a%20valid%20grade%2C%20if%20you%20think%20this%20is%20an%20issue%20dm%20jade.grey%20on%20discord.%60)%2Ct%2B%2B)%7D)%2CgradesDivs.forEach(t%3D%3E%7Blet%20e%3Dt.querySelector(%22.mark%22)%2Cn%3Dt.querySelector(%22.score%22)%3Be%26%26%22A%22%3D%3D%3De.textContent.trim()%3Fn.textContent%3D%60%24%7B(Math.random()*(99.9-94)%2B94).toFixed(1)%7D%25%60%3Ae%26%26%22A-%22%3D%3D%3De.textContent.trim()%3Fn.textContent%3D%60%24%7B(Math.random()*(93.4-90)%2B90).toFixed(1)%7D%25%60%3Ae%26%26%22B%2B%22%3D%3D%3De.textContent.trim()%3Fn.textContent%3D%60%24%7B(Math.random()*(89.3-87)%2B87).toFixed(1)%7D%25%60%3Ae%26%26%22B%22%3D%3D%3De.textContent.trim()%3Fn.textContent%3D%60%24%7B(Math.random()*(86.3-83)%2B83).toFixed(1)%7D%25%60%3Ae%26%26%22B-%22%3D%3D%3De.textContent.trim()%3Fn.textContent%3D%60%24%7B(Math.random()*(82.3-80)%2B80).toFixed(1)%7D%25%60%3Ae%26%26%22C%2B%22%3D%3D%3De.textContent.trim()%3Fn.textContent%3D%60%24%7B(Math.random()*(79.3-77)%2B77).toFixed(1)%7D%25%60%3Ae%26%26%22C%22%3D%3D%3De.textContent.trim()%3Fn.textContent%3D%60%24%7B(Math.random()*(76.3-73)%2B73).toFixed(1)%7D%25%60%3Ae%26%26%22C-%22%3D%3D%3De.textContent.trim()%3Fn.textContent%3D%60%24%7B(Math.random()*(72.3-70)%2B70).toFixed(1)%7D%25%60%3Ae%26%26%22D%2B%22%3D%3D%3De.textContent.trim()%3Fn.textContent%3D%60%24%7B(Math.random()*(69.3-67)%2B67).toFixed(1)%7D%25%60%3Ae%26%26%22D%22%3D%3D%3De.textContent.trim()%3Fn.textContent%3D%60%24%7B(Math.random()*(66.3-65)%2B65).toFixed(1)%7D%25%60%3Ae%26%26%22D-%22%3D%3D%3De.textContent.trim()%3Fn.textContent%3D%60%24%7B(Math.random()*(64.3-63)%2B63).toFixed(1)%7D%25%60%3Ae%26%26%22F%22%3D%3D%3De.textContent.trim()%26%26(n.textContent%3D%60%24%7B(62.3*Math.random()%2B0).toFixed(1)%7D%25%60)%7D)%7Delse%20alert(%60The%20number%20of%20classes%20does%20not%20match%20the%20number%20of%20grades%20provided.%20%24%7BgradesDivs.length%7D%20to%20%24%7Bletters.length%7D%60)%2Cconfirm(%22Would%20you%20like%20to%20try%20again%3F%22)%26%26printComb()%3B%7D)()%3B
```
