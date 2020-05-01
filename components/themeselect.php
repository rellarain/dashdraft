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

<div class="colorSelect" id="themeSelect">
    <header class="tb8">
        <h1>Theme</h1>
        <div class="tt8" id="themeHelpOpen" onmousedown="themeOpen();">?</div>
    </header>

    <div class="tb1">
        <ul><li class="tb8"></li><li class="tb7"></li><li class="tb6"></li><li class="tb5"></li><li class="tb4"></li><li class="tb3"></li><li class="tb2"></li><li class="tb1"></li></ul>
        <main>
            <select name="tlv" id="themeLight" class="tb5 tt1"  onchange="themeBuild()">
                <option value="" disabled>Brightness</option>
                <option value="20" <?php if ($_POST['tlv'] == 20) {echo "selected";}?>>Light</option>
                <option value="10" <?php if ($_POST['tlv'] == 10) {echo "selected";}?>>Medium</option>
                <option value="0"  <?php if ($_POST['tlv'] == 0) {echo "selected";}?>>Dark</option>
            </select>
            <section class="saturation">
                <label for="tsv" class="tt7">Saturation</label>
                <h2 class="tt1 tb7" id="tso"><?php echo $_POST['tsv'];?></h2>
                <input type="range" name="tsv" id="themeSat" class="tb2" min="5" max="40" value="<?php echo $_POST["tsv"];?>" oninput="tsatUpdate()" onchange="themeBuild()">
            </section>
            <section class="hue">
                <label for="tsv" class="tt7">Hue</label>
                <h2 class="tt1 tb7" id="tho"><?php echo $_POST['thv'];?></h2>
                <input type="range" name="thv" id="themeHue" class="tb2" min="1" max="360" value="<?php echo $_POST["thv"];?>" oninput="thueUpdate()" onchange="themeBuild()">
            </section>
        </main>
    </div>

    <div class="colorSelectHelp tb2" id="themeHelp">
        <section class="tb6">
            <h4 class="tt3">What is your theme?</h4>
            <h5 class="tt2">Your theme is defined by you. You can choose colors that represent you in whatever way you wish. Your theme color will customize the non-interactive elements of this website.</h5>
        </section>
        <section class="tb6">
            <h4 class="tt3">What does lightness do?</h4>
            <h5 class="tt2">Lightness determines the range of value in your theme. "Value" in a theme relates to the darkness or lightness of the individual colors of your theme.</h5>
            <figure><span id="tLight1">Light</span><ul><li id="tLight2"></li><li id="tLight3"></li><li id="tLight4"></li><li id="tLight5"></li><li id="tLight6"></li><li id="tLight7"></li><li id="tLight8"></li></ul></figure>
            <figure><span id="tMedium1">Medium</span><ul><li id="tMedium2"></li><li id="tMedium3"></li><li id="tMedium4"></li><li id="tMedium5"></li><li id="tMedium6"></li><li id="tMedium7"></li><li id="tMedium8"></li></ul></figure>
            <figure><span id="tDark1">Dark</span><ul><li id="tDark2"></li><li id="tDark3"></li><li id="tDark4"></li><li id="tDark5"></li><li id="tDark6"></li><li id="tDark7"></li><li id="tDark8"></li></ul></figure>
        </section>
        <section class="tb6">
            <h4 class="tt3">What does saturation do?</h4>
            <h5 class="tt2">Saturation determines the boldness of color in your theme. Lower values create more grayscale colors, while higher values make theme more colorful. The theme colors will be less colorful than your accent colors.</h5>
            <div>
                <figure id="tNeutral">Neutral</figure> 
                <figure id="tDull">Dull</figure> 
                <figure id="tFaded">Faded</figure>
                <img src="" alt="" id="tSatPreview">
                <figure id="tPale">Pale</figure>
                <figure id="tSoft">Soft</figure>
                <figure id="tBright">Bright</figure>
            </div>
        </section>
        <section class="tb6">
            <h4 class="tt3">What does hue do?</h4>
            <h5 class="tt2">Hue determines the type of color in your theme. Hue values create different colors, and the ranges of those colors are listed below.</h5>
            <img alt="" src=""id="tHuePreview">
            <figure id="tred">Red <span>350-10</span></figure>
            <figure id="trorange">Red Orange <span>10-30</span></figure>
            <figure id="torange">Orange <span>30-50</span></figure>
            <figure id="tyellow">Yellow <span>50-70</span></figure>
            <figure id="tchart">Chartreuse <span>70-90</span></figure>
            <figure id="tygreen">Yellow Green <span>90-110</span></figure>
            <figure id="tgreen">Green <span>110-130</span></figure>
            <figure id="tblgreen">Blue Green <span>130-150</span></figure>
            <figure id="tmint">Mint <span>150-170</span></figure>
            <figure id="tturq">Turquoise <span>170-190</span></figure>
            <figure id="tcyan">Cyan <span>190-210</span></figure>
            <figure id="tblue">Blue <span>210-230</span></figure>
            <figure id="tperi">Periwinkle <span>230-250</span></figure>
            <figure id="tindigo">Indigo <span>250-270</span></figure>
            <figure id="tpurple">Purple <span>270-290</span></figure>
            <figure id="tviolet">Violet <span>290-310</span></figure>
            <figure id="tpink">Pink <span>310-330</span></figure>
            <figure id="trviolet">Red Violet <span>330-350</span></figure>
        </section>
    </div>

    <footer class="tb5">
        <span id="tLightTitle"></span>
        <span id="tSatTitle"></span>
        <span id="tHueTitle"></span>
    </footer>


</div>



</body>
</html>