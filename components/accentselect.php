<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color</title>
    <link rel="stylesheet" href="style.css">
    <script src="./theme.js" type="text/javascript">
    </script>
</head>
<body>

<div class="colorSelect" id="accentSelect" >
    <header class="ab8">
        <h1>Accent</h1>
        <div class="at8" id="accentHelpOpen" onmousedown="accentOpen();">?</div>
    </header>

    <div class="ab1">
        <ul><li class="ab8"></li><li class="ab7"></li><li class="ab6"></li><li class="ab5"></li><li class="ab4"></li><li class="ab3"></li><li class="ab2"></li><li class="ab1"></li></ul>
        <main>
            <select name="alv" id="accentLight" class="ab5 at1"  onchange="themeBuild()">
                <option value="" disabled>Brightness</option>
                <option value="25" <?php if ($_POST['alv'] == 25) {echo "selected";}?>>Light</option>
                <option value="15" <?php if ($_POST['alv'] == 15) {echo "selected";}?>>Medium</option>
                <option value="5"  <?php if ($_POST['alv'] == 5) {echo "selected";}?>>Dark</option>
            </select>
            <section class="saturation">
                <label for="asv" class="at7">Saturation</label>
                <h2 class="at1 ab7" id="aso"><?php echo $_POST['asv'];?></h2>
                <input type="range" name="asv" id="accentSat" class="ab2" min="45" max="80" value="<?php echo $_POST["asv"];?>" oninput="asatUpdate()" onchange="themeBuild()">
            </section>
            <section class="hue">
                <label for="asv" class="at7">Hue</label>
                <h2 class="at1 ab7" id="aho"><?php echo $_POST['ahv'];?></h2>
                <input type="range" name="ahv" id="accentHue" class="ab2" min="1" max="360" value="<?php echo $_POST["ahv"];?>" oninput="ahueUpdate()" onchange="themeBuild()">
            </section>
        </main>
    </div>

    <div class="colorSelectHelp ab2" id="accentHelp">
        <section class="ab6">
            <h4 class="at3">What is your accent?</h4>
            <h5 class="at2">Your accent is chosen by you. The accent color of your profile will determine the colors of the interactive elements of this website.</h5>
        </section>
        <section class="ab6">
            <h4 class="at3">What does lightness do?</h4>
            <h5 class="at2">Lightness will determine the lightness or darkness of the interactive elements on this website.</h5>
            <figure><span id="aLight1">Light</span><ul><li id="aLight2"></li><li id="aLight3"></li><li id="aLight4"></li><li id="aLight5"></li><li id="aLight6"></li><li id="aLight7"></li><li id="aLight8"></li></ul></figure>
            <figure><span id="aMedium1">Medium</span><ul><li id="aMedium2"></li><li id="aMedium3"></li><li id="aMedium4"></li><li id="aMedium5"></li><li id="aMedium6"></li><li id="aMedium7"></li><li id="aMedium8"></li></ul></figure>
            <figure><span id="aDark1">Dark</span><ul><li id="aDark2"></li><li id="aDark3"></li><li id="aDark4"></li><li id="aDark5"></li><li id="aDark6"></li><li id="aDark7"></li><li id="aDark8"></li></ul></figure>
        </section>
        <section class="ab6">
            <h4 class="at3">What does saturation do?</h4>
            <h5 class="at2">Saturation determines the boldness of the color of your accent. Lower values create more neutral colors, while higher values create neon colors. The accent will be more colorful than your theme color, but be careful to pick a color that is comfortable to look at for an extended period of time.</h5>
            <div>
                <figure id="aFaded">Faded</figure> 
                <figure id="aPale">Pale</figure> 
                <figure id="aSoft">Soft</figure>
                <img src="" alt="" id="aSatPreview">
                <figure id="aBright">Bright</figure>
                <figure id="aVibrant">Vibrant</figure>
                <figure id="aNeon">Neon</figure>
            </div>
        </section>
        <section class="ab6">
            <h4 class="at3">What is a hue?</h4>
            <h5 class="at2">Hue determines the color of your accent. Hue values create different colors, and the rand of those colors are listed below.</h5>
            <img alt="" src=""id="aHuePreview">
            <figure id="ared">Red <span>350-10</span></figure>
            <figure id="arorange">Red Orange <span>10-30</span></figure>
            <figure id="aorange">Orange <span>30-50</span></figure>
            <figure id="ayellow">Yellow <span>50-70</span></figure>
            <figure id="achart">Chartreuse <span>70-90</span></figure>
            <figure id="aygreen">Yellow Green <span>90-110</span></figure>
            <figure id="agreen">Green <span>110-130</span></figure>
            <figure id="ablgreen">Blue Green <span>130-150</span></figure>
            <figure id="amint">Mint <span>150-170</span></figure>
            <figure id="aturq">Turquoise <span>170-190</span></figure>
            <figure id="acyan">Cyan <span>190-210</span></figure>
            <figure id="ablue">Blue <span>210-230</span></figure>
            <figure id="aperi">Periwinkle <span>230-250</span></figure>
            <figure id="aindigo">Indigo <span>250-270</span></figure>
            <figure id="apurple">Purple <span>270-290</span></figure>
            <figure id="aviolet">Violet <span>290-310</span></figure>
            <figure id="apink">Pink <span>310-330</span></figure>
            <figure id="arviolet">Red Violet <span>330-350</span></figure>
        </section>
    </div>

    <footer class="ab5">
        <span id="aLightTitle"></span>
        <span id="aSatTitle"></span>
        <span id="aHueTitle"></span>
    </footer>


</div>


    
</body>
</html>