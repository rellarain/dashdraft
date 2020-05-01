<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<header class="tb5" id="header">
    <div>
        <div class="At6"><a href="">A</a></div><div class="Ut6"><a href="">U</a></div><div class="Rt6"><a href="">R</a></div><div class="APt6"><a href="">A</a></div>

    </div>
    <div id="IDs">
        <p> <a href=""><?php $DisplayName ?>Aurella Rain Walker</a> </p>
        <p class="tt1"> <a href="" class="tt1"><?php $RegionID;?>0016</a>-<a href="" class="tt1"><?php $DistrictID;?>0000</a>-<a href="" class="tt1"><?php $MemberID;?>0000</a></p>
    </div>
    <div id="Menu"><span class="ab3"></span></div>
    <div id="Progress" class="tb7"></div>
    <nav id="dropdown" class="ab7">
        <div id="navcloser" onmousedown="dropdown()">Close</div>
        <div class="ab3" id="scroller">
            <div id="navTab" class="ab8">
                <span id="navigationTab" onmousedown="openNavigation()" class="ab4">Navigation</span>
                <span id="connectionsTab" onmousedown="openConnections()" class="ab4">Connections</span>
                <span class="ab4">Messages</span>
                <span id="customizeTab" onmousedown="openCustomize()" class="ab4">Customize</span>
                <span class="ab4">Subscription</span>

            </div>
            <div id="navigation">
                <form action="" method="POST">
                    <p>Applicant Management: confirm and reject applications</p>
                    <p>Member Management: view members, change member codes, delete accounts, view membership status</p>
                    <p>Report Management: comments on assessments, contact messages</p>
                    <p>Content Management: view content, edit content, create content, delete content</p>
                    <p>Training Management: view trainee progress, view course content, </p>
                    <p>Member Gallery</p>
                    <p>this should list all open assessments and an option to open a new assessment if available slots exist</p>
                    <p>assessment components should show the progress of that assessment in steps and percentages, the number of times taken, the subtraits assessed thus far</p>
                    <p>opening an assessment should list available assessments with names and descriptions and how many slots are left</p>
                    <p>if the maximum number of slots is reached, then the opening element is not displayed</p>
                </form>
            </div>
            <div id="connections">
                <form action="" method="POST">
                    <header class="tb6">
                        <span><span class="tb2 tt7">1</span></span>
                        <span><h3 class="tt1">Name</h3></span>
                        <span><div class="ab6 at1">Edit</div></span>
                    </header>
                    <div class="tb2 connUsers"></div>
                    <div class="tb5 accessInput">
                    <label for="" class="Ut2 Utt8"><input type="checkbox" name="" id="" class=""><span class="ab5"> </span> Gender Identity</label>
                    <label for="" class="tb2 tt8"><input type="checkbox" name="" id="" class=""><span class="ab5"> </span> Gender Identity</label>
                    <label for="" class="At2 Att8"><input type="checkbox" name="" id="" class=""><span class="ab5"> </span> Gender Identity</label>
                    <label for="" class="APt2 APtt8"><input type="checkbox" name="" id="" class=""><span class="ab5"> </span> dfuiosjgnsloikdfgs Identity</label>
                    <label for="" class="Rt2 Rtt8"><input type="checkbox" name="" id="" class=""><span class="ab5"> </span> Gender Identity</label>
                    </div>
                    <footer class="tb6">
                        <section class="connAccessTab">
                            <div class="tb2"><span class="tb8 tt1">Access</span> <div class="tt8">9/99</div></div>
                        </section>
                        <section class="accessEdit">
                            <span class="ab6 at1">Edit</span>
                        </section>
                    </footer>
                </form>
            </div>
            <div id="customize">
                <form action="" method="POST">
                    <button class="at1 ab5">Save</button>
                    <?php include 'themeselect.php' ?>
                    <?php include 'accentselect.php' ?>
                </form>
            </div>
        </div>
        <div id="signout">Sign Out</div>
    </nav>
</header>


</body>
</html>