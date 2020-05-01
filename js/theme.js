function themeBuild() {
    // Theme Styling
    var tsv = document.getElementById("themeSat").value;
    var thv = document.getElementById("themeHue").value;
    var tlv = document.getElementById("themeLight").value;

    var tl2 = parseInt(tlv) + 10;
    var tl3 = parseInt(tlv) + 20;
    var tl4 = parseInt(tlv) + 30;
    var tl5 = parseInt(tlv) + 40;
    var tl6 = parseInt(tlv) + 50;
    var tl7 = parseInt(tlv) + 60;
    var tl8 = parseInt(tlv) + 70;

    var theme8 = "hsl("+thv+", "+tsv+"%, "+tlv+"%)";
    var theme7 = "hsl("+thv+", "+tsv+"%, "+tl2+"%)";
    var theme6 = "hsl("+thv+", "+tsv+"%, "+tl3+"%)";
    var theme5 = "hsl("+thv+", "+tsv+"%, "+tl4+"%)";
    var theme4 = "hsl("+thv+", "+tsv+"%, "+tl5+"%)";
    var theme3 = "hsl("+thv+", "+tsv+"%, "+tl6+"%)";
    var theme2 = "hsl("+thv+", "+tsv+"%, "+tl7+"%)";
    var theme1 = "hsl("+thv+", "+tsv+"%, "+tl8+"%)";
    
    var tb1 = document.getElementsByClassName("tb1");
    var tb2 = document.getElementsByClassName("tb2");
    var tb3 = document.getElementsByClassName("tb3");
    var tb4 = document.getElementsByClassName("tb4");
    var tb5 = document.getElementsByClassName("tb5");
    var tb6 = document.getElementsByClassName("tb6");
    var tb7 = document.getElementsByClassName("tb7");
    var tb8 = document.getElementsByClassName("tb8");
    
    for (i = 0; i < tb1.length; i++) {tb1[i].style.background = theme1;}
    for (i = 0; i < tb2.length; i++) {tb2[i].style.background = theme2;}
    for (i = 0; i < tb3.length; i++) {tb3[i].style.background = theme3;}
    for (i = 0; i < tb4.length; i++) {tb4[i].style.background = theme4;}
    for (i = 0; i < tb5.length; i++) {tb5[i].style.background = theme5;}
    for (i = 0; i < tb6.length; i++) {tb6[i].style.background = theme6;}
    for (i = 0; i < tb7.length; i++) {tb7[i].style.background = theme7;}
    for (i = 0; i < tb8.length; i++) {tb8[i].style.background = theme8;}

    var tt1 = document.getElementsByClassName("tt1");
    var tt2 = document.getElementsByClassName("tt2");
    var tt3 = document.getElementsByClassName("tt3");
    var tt4 = document.getElementsByClassName("tt4");
    var tt5 = document.getElementsByClassName("tt5");
    var tt6 = document.getElementsByClassName("tt6");
    var tt7 = document.getElementsByClassName("tt7");
    var tt8 = document.getElementsByClassName("tt8");
    
    for (i = 0; i < tt1.length; i++) {tt1[i].style.color = theme1;}
    for (i = 0; i < tt2.length; i++) {tt2[i].style.color = theme2;}
    for (i = 0; i < tt3.length; i++) {tt3[i].style.color = theme3;}
    for (i = 0; i < tt4.length; i++) {tt4[i].style.color = theme4;}
    for (i = 0; i < tt5.length; i++) {tt5[i].style.color = theme5;}
    for (i = 0; i < tt6.length; i++) {tt6[i].style.color = theme6;}
    for (i = 0; i < tt7.length; i++) {tt7[i].style.color = theme7;}
    for (i = 0; i < tt8.length; i++) {tt8[i].style.color = theme8;}

    var tL1= document.getElementById("tLight1"); tL1.style.background = "hsl("+thv+", "+tsv+"%, 90%)";
    var tL2= document.getElementById("tLight2"); tL2.style.background = "hsl("+thv+", "+tsv+"%, 80%)";
    var tL3= document.getElementById("tLight3"); tL3.style.background = "hsl("+thv+", "+tsv+"%, 70%)";
    var tL4= document.getElementById("tLight4"); tL4.style.background = "hsl("+thv+", "+tsv+"%, 60%)";
    var tL5= document.getElementById("tLight5"); tL5.style.background = "hsl("+thv+", "+tsv+"%, 50%)";
    var tL6= document.getElementById("tLight6"); tL6.style.background = "hsl("+thv+", "+tsv+"%, 40%)";
    var tL7= document.getElementById("tLight7"); tL7.style.background = "hsl("+thv+", "+tsv+"%, 30%)";
    var tL8= document.getElementById("tLight8"); tL8.style.background = "hsl("+thv+", "+tsv+"%, 20%)";

    var tM1= document.getElementById("tMedium1"); tM1.style.background = "hsl("+thv+", "+tsv+"%, 80%)";
    var tM2= document.getElementById("tMedium2"); tM2.style.background = "hsl("+thv+", "+tsv+"%, 70%)";
    var tM3= document.getElementById("tMedium3"); tM3.style.background = "hsl("+thv+", "+tsv+"%, 60%)";
    var tM4= document.getElementById("tMedium4"); tM4.style.background = "hsl("+thv+", "+tsv+"%, 50%)";
    var tM5= document.getElementById("tMedium5"); tM5.style.background = "hsl("+thv+", "+tsv+"%, 40%)";
    var tM6= document.getElementById("tMedium6"); tM6.style.background = "hsl("+thv+", "+tsv+"%, 30%)";
    var tM7= document.getElementById("tMedium7"); tM7.style.background = "hsl("+thv+", "+tsv+"%, 20%)";
    var tM8= document.getElementById("tMedium8"); tM8.style.background = "hsl("+thv+", "+tsv+"%, 10%)";
    
    var tD1= document.getElementById("tDark1"); tD1.style.background = "hsl("+thv+", "+tsv+"%, 70%)";
    var tD2= document.getElementById("tDark2"); tD2.style.background = "hsl("+thv+", "+tsv+"%, 60%)";
    var tD3= document.getElementById("tDark3"); tD3.style.background = "hsl("+thv+", "+tsv+"%, 50%)";
    var tD4= document.getElementById("tDark4"); tD4.style.background = "hsl("+thv+", "+tsv+"%, 40%)";
    var tD5= document.getElementById("tDark5"); tD5.style.background = "hsl("+thv+", "+tsv+"%, 30%)";
    var tD6= document.getElementById("tDark6"); tD6.style.background = "hsl("+thv+", "+tsv+"%, 20%)";
    var tD7= document.getElementById("tDark7"); tD7.style.background = "hsl("+thv+", "+tsv+"%, 10%)";
    var tD8= document.getElementById("tDark8"); tD8.style.background = "hsl("+thv+", "+tsv+"%, 0%)";



    var tHuePreview = document.getElementById("tHuePreview");
    tHuePreview.style.background = "linear-gradient(to right, hsl(0, "+tsv+"%, "+tl6+"%) 0%, hsl(120, "+tsv+"%, "+tl6+"%) 33%, hsl(240, "+tsv+"%, "+tl6+"%) 66%, hsl(359, "+tsv+"%, "+tl6+"%) 100%)";

    var tSatPreview = document.getElementById("tSatPreview");
    tSatPreview.style.background = "linear-gradient(to right, hsl("+thv+", 5%, "+tl6+"%) 0%, hsl("+thv+", 40%, "+tl6+"%) 100%)";
    var tNeutral = document.getElementById("tNeutral");
        tNeutral.style.background = "hsl("+thv+", 5%, "+tl6+"%)";
    var tDull = document.getElementById("tDull");
        tDull.style.background = "hsl("+thv+", 12%, "+tl6+"%)";
    var tFaded = document.getElementById("tFaded");
        tFaded.style.background = "hsl("+thv+", 19%, "+tl6+"%)";
    var tPale = document.getElementById("tPale");
        tPale.style.background = "hsl("+thv+", 26%, "+tl6+"%)";
    var tSoft = document.getElementById("tSoft");
        tSoft.style.background = "hsl("+thv+", 33%, "+tl6+"%)";
    var tBright = document.getElementById("tBright");
        tBright.style.background = "hsl("+thv+", 40%, "+tl6+"%)";
    
    var tred = document.getElementById("tred");
        tred.style.background = "hsl(0, "+tsv+"%,"+tl6+"%)";
        tred.style.color = "hsl(0, "+tsv+"%,"+tlv+"%)";
    var trorange = document.getElementById("trorange");
        trorange.style.background = "hsl(20, "+tsv+"%,"+tl6+"%)";
        trorange.style.color = "hsl(20, "+tsv+"%,"+tlv+"%)";
    var torange = document.getElementById("torange");
        torange.style.background = "hsl(40, "+tsv+"%,"+tl6+"%)";
        torange.style.color = "hsl(40, "+tsv+"%,"+tlv+"%)";
    var tyellow = document.getElementById("tyellow");
        tyellow.style.background = "hsl(60, "+tsv+"%,"+tl6+"%)";
        tyellow.style.color = "hsl(60, "+tsv+"%,"+tlv+"%)";
    var tchart = document.getElementById("tchart");
        tchart.style.background = "hsl(80, "+tsv+"%,"+tl6+"%)";
        tchart.style.color = "hsl(80, "+tsv+"%,"+tlv+"%)";
    var tygreen = document.getElementById("tygreen");
        tygreen.style.background = "hsl(100, "+tsv+"%,"+tl6+"%)";
        tygreen.style.color = "hsl(100, "+tsv+"%,"+tlv+"%)";
    var tgreen = document.getElementById("tgreen");
        tgreen.style.background = "hsl(120, "+tsv+"%,"+tl6+"%)";
        tgreen.style.color = "hsl(120, "+tsv+"%,"+tlv+"%)";
    var tblgreen = document.getElementById("tblgreen");
        tblgreen.style.background = "hsl(140, "+tsv+"%,"+tl6+"%)";
        tblgreen.style.color = "hsl(140, "+tsv+"%,"+tlv+"%)";
    var tmint = document.getElementById("tmint");
        tmint.style.background = "hsl(160, "+tsv+"%,"+tl6+"%)";
        tmint.style.color = "hsl(160, "+tsv+"%,"+tlv+"%)";
    var tturq = document.getElementById("tturq");
        tturq.style.background = "hsl(180, "+tsv+"%,"+tl6+"%)";
        tturq.style.color = "hsl(180, "+tsv+"%,"+tlv+"%)";
    var tcyan = document.getElementById("tcyan");
        tcyan.style.background = "hsl(200, "+tsv+"%,"+tl6+"%)";
        tcyan.style.color = "hsl(200, "+tsv+"%,"+tlv+"%)";
    var tperi = document.getElementById("tperi");
        tperi.style.background = "hsl(220, "+tsv+"%,"+tl6+"%)";
        tperi.style.color = "hsl(220, "+tsv+"%,"+tlv+"%)";
    var tblue = document.getElementById("tblue");
        tblue.style.background = "hsl(240, "+tsv+"%,"+tl6+"%)";
        tblue.style.color = "hsl(240, "+tsv+"%,"+tlv+"%)";
    var tindigo = document.getElementById("tindigo");
        tindigo.style.background = "hsl(260, "+tsv+"%,"+tl6+"%)";
        tindigo.style.color = "hsl(260, "+tsv+"%,"+tlv+"%)";
    var tpurple = document.getElementById("tpurple");
        tpurple.style.background = "hsl(280, "+tsv+"%,"+tl6+"%)";
        tpurple.style.color = "hsl(280, "+tsv+"%,"+tlv+"%)";
    var tviolet = document.getElementById("tviolet");
        tviolet.style.background = "hsl(300, "+tsv+"%,"+tl6+"%)";
        tviolet.style.color = "hsl(300, "+tsv+"%,"+tlv+"%)";
    var tpink = document.getElementById("tpink");
        tpink.style.background = "hsl(320, "+tsv+"%,"+tl6+"%)";
        tpink.style.color = "hsl(320, "+tsv+"%,"+tlv+"%)";
    var trviolet = document.getElementById("trviolet");
        trviolet.style.background = "hsl(340, "+tsv+"%,"+tl6+"%)";
        trviolet.style.color = "hsl(340, "+tsv+"%,"+tlv+"%)";

    var tLightTitle= document.getElementById("tLightTitle");
    if (tlv == 20) {tLightTitle.innerHTML = "Light";}
    if (tlv == 10) {tLightTitle.innerHTML = "Medium";}
    if (tlv == 0) {tLightTitle.innerHTML = "Dark";}
    var tSatTitle= document.getElementById("tSatTitle");
    if (tsv < 8.5) {
        tSatTitle.innerHTML = "Neutral";
    } else if (tsv < 15.5) {
        tSatTitle.innerHTML = "Dull";
    } else if (tsv < 22.5) {
        tSatTitle.innerHTML = "Faded";
    } else if (tsv < 29.5) {
        tSatTitle.innerHTML = "Pale";
    } else if (tsv < 36.5) {
        tSatTitle.innerHTML = "Soft";
    } else if (tsv <= 40) {
        tSatTitle.innerHTML = "Bright";
    }
    var tHueTitle= document.getElementById("tHueTitle");
    if (thv < 10) {
        tHueTitle.innerHTML = "Red";
    } else if (thv < 30) {
        tHueTitle.innerHTML = "Red Orange";
    } else if (thv < 50) {
        tHueTitle.innerHTML = "Orange";
    } else if (thv < 70) {
        tHueTitle.innerHTML = "Yellow";
    } else if (thv < 90) {
        tHueTitle.innerHTML = "Chartreuse";
    } else if (thv < 110) {
        tHueTitle.innerHTML = "Yellow Green";
    } else if (thv < 130) {
        tHueTitle.innerHTML = "Green";
    } else if (thv < 150) {
        tHueTitle.innerHTML = "Blue Green";
    } else if (thv < 170) {
        tHueTitle.innerHTML = "Mint";
    } else if (thv < 190) {
        tHueTitle.innerHTML = "Turquoise";
    } else if (thv < 210) {
        tHueTitle.innerHTML = "Cyan";
    } else if (thv < 230) {
        tHueTitle.innerHTML = "Blue";
    } else if (thv < 250) {
        tHueTitle.innerHTML = "Periwinkle";
    } else if (thv < 270) {
        tHueTitle.innerHTML = "Indigo";
    } else if (thv < 290) {
        tHueTitle.innerHTML = "Purple";
    } else if (thv < 310) {
        tHueTitle.innerHTML = "Violet";
    } else if (thv < 330) {
        tHueTitle.innerHTML = "Pink";
    } else if (thv < 350) {
        tHueTitle.innerHTML = "Red Violet";
    } else if (thv <= 360) {
        tHueTitle.innerHTML = "Red";
    }

    // Accent Styling
    var asv = document.getElementById("accentSat").value;
    var ahv = document.getElementById("accentHue").value;
    var alv = document.getElementById("accentLight").value;

    var al2 = parseInt(alv) + 10;
    var al3 = parseInt(alv) + 20;
    var al4 = parseInt(alv) + 30;
    var al5 = parseInt(alv) + 40;
    var al6 = parseInt(alv) + 50;
    var al7 = parseInt(alv) + 60;
    var al8 = parseInt(alv) + 70;

    var accent8 = "hsl("+ahv+", "+asv+"%, "+alv+"%)";
    var accent7 = "hsl("+ahv+", "+asv+"%, "+al2+"%)";
    var accent6 = "hsl("+ahv+", "+asv+"%, "+al3+"%)";
    var accent5 = "hsl("+ahv+", "+asv+"%, "+al4+"%)";
    var accent4 = "hsl("+ahv+", "+asv+"%, "+al5+"%)";
    var accent3 = "hsl("+ahv+", "+asv+"%, "+al6+"%)";
    var accent2 = "hsl("+ahv+", "+asv+"%, "+al7+"%)";
    var accent1 = "hsl("+ahv+", "+asv+"%, "+al8+"%)";
    
    var ab1 = document.getElementsByClassName("ab1");
    var ab2 = document.getElementsByClassName("ab2");
    var ab3 = document.getElementsByClassName("ab3");
    var ab4 = document.getElementsByClassName("ab4");
    var ab5 = document.getElementsByClassName("ab5");
    var ab6 = document.getElementsByClassName("ab6");
    var ab7 = document.getElementsByClassName("ab7");
    var ab8 = document.getElementsByClassName("ab8");
    
    for (i = 0; i < ab1.length; i++) {ab1[i].style.background = accent1;}
    for (i = 0; i < ab2.length; i++) {ab2[i].style.background = accent2;}
    for (i = 0; i < ab3.length; i++) {ab3[i].style.background = accent3;}
    for (i = 0; i < ab4.length; i++) {ab4[i].style.background = accent4;}
    for (i = 0; i < ab5.length; i++) {ab5[i].style.background = accent5;}
    for (i = 0; i < ab6.length; i++) {ab6[i].style.background = accent6;}
    for (i = 0; i < ab7.length; i++) {ab7[i].style.background = accent7;}
    for (i = 0; i < ab8.length; i++) {ab8[i].style.background = accent8;}

    var at1 = document.getElementsByClassName("at1");
    var at2 = document.getElementsByClassName("at2");
    var at3 = document.getElementsByClassName("at3");
    var at4 = document.getElementsByClassName("at4");
    var at5 = document.getElementsByClassName("at5");
    var at6 = document.getElementsByClassName("at6");
    var at7 = document.getElementsByClassName("at7");
    var at8 = document.getElementsByClassName("at8");
    
    for (i = 0; i < at1.length; i++) {at1[i].style.color = accent1;}
    for (i = 0; i < at2.length; i++) {at2[i].style.color = accent2;}
    for (i = 0; i < at3.length; i++) {at3[i].style.color = accent3;}
    for (i = 0; i < at4.length; i++) {at4[i].style.color = accent4;}
    for (i = 0; i < at5.length; i++) {at5[i].style.color = accent5;}
    for (i = 0; i < at6.length; i++) {at6[i].style.color = accent6;}
    for (i = 0; i < at7.length; i++) {at7[i].style.color = accent7;}
    for (i = 0; i < at8.length; i++) {at8[i].style.color = accent8;}

    var aL1= document.getElementById("aLight1"); aL1.style.background = "hsl("+ahv+", "+asv+"%, 90%)";
    var aL2= document.getElementById("aLight2"); aL2.style.background = "hsl("+ahv+", "+asv+"%, 80%)";
    var aL3= document.getElementById("aLight3"); aL3.style.background = "hsl("+ahv+", "+asv+"%, 70%)";
    var aL4= document.getElementById("aLight4"); aL4.style.background = "hsl("+ahv+", "+asv+"%, 60%)";
    var aL5= document.getElementById("aLight5"); aL5.style.background = "hsl("+ahv+", "+asv+"%, 50%)";
    var aL6= document.getElementById("aLight6"); aL6.style.background = "hsl("+ahv+", "+asv+"%, 40%)";
    var aL7= document.getElementById("aLight7"); aL7.style.background = "hsl("+ahv+", "+asv+"%, 30%)";
    var aL8= document.getElementById("aLight8"); aL8.style.background = "hsl("+ahv+", "+asv+"%, 20%)";

    var aM1= document.getElementById("aMedium1"); aM1.style.background = "hsl("+ahv+", "+asv+"%, 80%)";
    var aM2= document.getElementById("aMedium2"); aM2.style.background = "hsl("+ahv+", "+asv+"%, 70%)";
    var aM3= document.getElementById("aMedium3"); aM3.style.background = "hsl("+ahv+", "+asv+"%, 60%)";
    var aM4= document.getElementById("aMedium4"); aM4.style.background = "hsl("+ahv+", "+asv+"%, 50%)";
    var aM5= document.getElementById("aMedium5"); aM5.style.background = "hsl("+ahv+", "+asv+"%, 40%)";
    var aM6= document.getElementById("aMedium6"); aM6.style.background = "hsl("+ahv+", "+asv+"%, 30%)";
    var aM7= document.getElementById("aMedium7"); aM7.style.background = "hsl("+ahv+", "+asv+"%, 20%)";
    var aM8= document.getElementById("aMedium8"); aM8.style.background = "hsl("+ahv+", "+asv+"%, 10%)";
    
    var aD1= document.getElementById("aDark1"); aD1.style.background = "hsl("+ahv+", "+asv+"%, 70%)";
    var aD2= document.getElementById("aDark2"); aD2.style.background = "hsl("+ahv+", "+asv+"%, 60%)";
    var aD3= document.getElementById("aDark3"); aD3.style.background = "hsl("+ahv+", "+asv+"%, 50%)";
    var aD4= document.getElementById("aDark4"); aD4.style.background = "hsl("+ahv+", "+asv+"%, 40%)";
    var aD5= document.getElementById("aDark5"); aD5.style.background = "hsl("+ahv+", "+asv+"%, 30%)";
    var aD6= document.getElementById("aDark6"); aD6.style.background = "hsl("+ahv+", "+asv+"%, 20%)";
    var aD7= document.getElementById("aDark7"); aD7.style.background = "hsl("+ahv+", "+asv+"%, 10%)";
    var aD8= document.getElementById("aDark8"); aD8.style.background = "hsl("+ahv+", "+asv+"%, 0%)";



    var aHuePreview = document.getElementById("aHuePreview");
    aHuePreview.style.background = "linear-gradient(to right, hsl(0, "+asv+"%, "+al6+"%) 0%, hsl(120, "+asv+"%, "+al6+"%) 33%, hsl(240, "+asv+"%, "+al6+"%) 66%, hsl(359, "+asv+"%, "+al6+"%) 100%)";

    var aSatPreview = document.getElementById("aSatPreview");
    aSatPreview.style.background = "linear-gradient(to right, hsl("+ahv+", 45%, "+al6+"%) 0%, hsl("+ahv+", 80%, "+al6+"%) 100%)";
    var aFaded = document.getElementById("aFaded");
        aFaded.style.background = "hsl("+ahv+", 45%, "+al6+"%)";
    var aPale = document.getElementById("aPale");
        aPale.style.background = "hsl("+ahv+", 52%, "+al6+"%)";
    var aSoft = document.getElementById("aSoft");
        aSoft.style.background = "hsl("+ahv+", 59%, "+al6+"%)";
    var aBright = document.getElementById("aBright");
        aBright.style.background = "hsl("+ahv+", 66%, "+al6+"%)";
    var aVibrant = document.getElementById("aVibrant");
        aVibrant.style.background = "hsl("+ahv+", 73%, "+al6+"%)";
    var aNeon = document.getElementById("aNeon");
        aNeon.style.background = "hsl("+ahv+", 80%, "+al6+"%)";
    
    var ared = document.getElementById("ared");
        ared.style.background = "hsl(0, "+asv+"%,"+al6+"%)";
        ared.style.color = "hsl(0, "+asv+"%,"+alv+"%)";
    var arorange = document.getElementById("arorange");
        arorange.style.background = "hsl(20, "+asv+"%,"+al6+"%)";
        arorange.style.color = "hsl(20, "+asv+"%,"+alv+"%)";
    var aorange = document.getElementById("aorange");
        aorange.style.background = "hsl(40, "+asv+"%,"+al6+"%)";
        aorange.style.color = "hsl(40, "+asv+"%,"+alv+"%)";
    var ayellow = document.getElementById("ayellow");
        ayellow.style.background = "hsl(60, "+asv+"%,"+al6+"%)";
        ayellow.style.color = "hsl(60, "+asv+"%,"+alv+"%)";
    var achart = document.getElementById("achart");
        achart.style.background = "hsl(80, "+asv+"%,"+al6+"%)";
        achart.style.color = "hsl(80, "+asv+"%,"+alv+"%)";
    var aygreen = document.getElementById("aygreen");
        aygreen.style.background = "hsl(100, "+asv+"%,"+al6+"%)";
        aygreen.style.color = "hsl(100, "+asv+"%,"+alv+"%)";
    var agreen = document.getElementById("agreen");
        agreen.style.background = "hsl(120, "+asv+"%,"+al6+"%)";
        agreen.style.color = "hsl(120, "+asv+"%,"+alv+"%)";
    var ablgreen = document.getElementById("ablgreen");
        ablgreen.style.background = "hsl(140, "+asv+"%,"+al6+"%)";
        ablgreen.style.color = "hsl(140, "+asv+"%,"+alv+"%)";
    var amint = document.getElementById("amint");
        amint.style.background = "hsl(160, "+asv+"%,"+al6+"%)";
        amint.style.color = "hsl(160, "+asv+"%,"+alv+"%)";
    var aturq = document.getElementById("aturq");
        aturq.style.background = "hsl(180, "+asv+"%,"+al6+"%)";
        aturq.style.color = "hsl(180, "+asv+"%,"+alv+"%)";
    var acyan = document.getElementById("acyan");
        acyan.style.background = "hsl(200, "+asv+"%,"+al6+"%)";
        acyan.style.color = "hsl(200, "+asv+"%,"+alv+"%)";
    var aperi = document.getElementById("aperi");
        aperi.style.background = "hsl(220, "+asv+"%,"+al6+"%)";
        aperi.style.color = "hsl(220, "+asv+"%,"+alv+"%)";
    var ablue = document.getElementById("ablue");
        ablue.style.background = "hsl(240, "+asv+"%,"+al6+"%)";
        ablue.style.color = "hsl(240, "+asv+"%,"+alv+"%)";
    var aindigo = document.getElementById("aindigo");
        aindigo.style.background = "hsl(260, "+asv+"%,"+al6+"%)";
        aindigo.style.color = "hsl(260, "+asv+"%,"+alv+"%)";
    var apurple = document.getElementById("apurple");
        apurple.style.background = "hsl(280, "+asv+"%,"+al6+"%)";
        apurple.style.color = "hsl(280, "+asv+"%,"+alv+"%)";
    var aviolet = document.getElementById("aviolet");
        aviolet.style.background = "hsl(300, "+asv+"%,"+al6+"%)";
        aviolet.style.color = "hsl(300, "+asv+"%,"+alv+"%)";
    var apink = document.getElementById("apink");
        apink.style.background = "hsl(320, "+asv+"%,"+al6+"%)";
        apink.style.color = "hsl(320, "+asv+"%,"+alv+"%)";
    var arviolet = document.getElementById("arviolet");
        arviolet.style.background = "hsl(340, "+asv+"%,"+al6+"%)";
        arviolet.style.color = "hsl(340, "+asv+"%,"+alv+"%)";

    var aLightTitle= document.getElementById("aLightTitle");
    if (alv == 25) {aLightTitle.innerHTML = "Light";}
    if (alv == 15) {aLightTitle.innerHTML = "Medium";}
    if (alv == 5) {aLightTitle.innerHTML = "Dark";}
    var aSatTitle= document.getElementById("aSatTitle");
    if (asv < 48.5) {
        aSatTitle.innerHTML = "Faded";
    } else if (asv < 55.5) {
        aSatTitle.innerHTML = "Pale";
    } else if (asv < 62.5) {
        aSatTitle.innerHTML = "Soft";
    } else if (asv < 69.5) {
        aSatTitle.innerHTML = "Bright";
    } else if (asv < 76.5) {
        aSatTitle.innerHTML = "Vibrant";
    } else if (asv <= 80) {
        aSatTitle.innerHTML = "Neon";
    }
    var aHueTitle= document.getElementById("aHueTitle");
    if (ahv < 10) {
        aHueTitle.innerHTML = "Red";
    } else if (ahv < 30) {
        aHueTitle.innerHTML = "Red Orange";
    } else if (ahv < 50) {
        aHueTitle.innerHTML = "Orange";
    } else if (ahv < 70) {
        aHueTitle.innerHTML = "Yellow";
    } else if (ahv < 90) {
        aHueTitle.innerHTML = "Chartreuse";
    } else if (ahv < 110) {
        aHueTitle.innerHTML = "Yellow Green";
    } else if (ahv < 130) {
        aHueTitle.innerHTML = "Green";
    } else if (ahv < 150) {
        aHueTitle.innerHTML = "Blue Green";
    } else if (ahv < 170) {
        aHueTitle.innerHTML = "Mint";
    } else if (ahv < 190) {
        aHueTitle.innerHTML = "Turquoise";
    } else if (ahv < 210) {
        aHueTitle.innerHTML = "Cyan";
    } else if (ahv < 230) {
        aHueTitle.innerHTML = "Blue";
    } else if (ahv < 250) {
        aHueTitle.innerHTML = "Periwinkle";
    } else if (ahv < 270) {
        aHueTitle.innerHTML = "Indigo";
    } else if (ahv < 290) {
        aHueTitle.innerHTML = "Purple";
    } else if (ahv < 310) {
        aHueTitle.innerHTML = "Violet";
    } else if (ahv < 330) {
        aHueTitle.innerHTML = "Pink";
    } else if (ahv < 350) {
        aHueTitle.innerHTML = "Red Violet";
    } else if (ahv <= 360) {
        aHueTitle.innerHTML = "Red";
    }
}



function tsatUpdate() {
    var tsv = document.getElementById("themeSat").value;
    var thv = document.getElementById("themeHue").value;
    document.getElementById("tso").innerHTML = tsv;
    document.getElementById("tso").style.backgroundColor = "hsl("+thv+", "+tsv+", 20)";
}

function thueUpdate() {
    var thv = document.getElementById("themeHue").value;
    document.getElementById("tho").innerHTML = thv;
}

function asatUpdate() {
    var asv = document.getElementById("accentSat").value;
    var ahv = document.getElementById("accentHue").value;
    document.getElementById("aso").innerHTML = asv;
    document.getElementById("aso").style.backgroundColor = "hsl("+ahv+", "+asv+", 20)";
}

function ahueUpdate() {
    var ahv = document.getElementById("accentHue").value;
    document.getElementById("aho").innerHTML = ahv;
}



function themeOpen() {
    var themeHelp = document.getElementById("themeHelp");
    if (themeHelp.style.height == "0px") {
        themeHelp.style.height = "1170px";
        return;
    } else {
        themeHelp.style.height = "0px";
        return;
    }
};
function accentOpen() {
    var accentHelp = document.getElementById("accentHelp");
    if (accentHelp.style.height == "0px") {
        accentHelp.style.height = "1170px";
        return;
    } else {
        accentHelp.style.height = "0px";
        return;
    }
};


