function closeTabs() {
    var assessments = document.getElementById("assessments");
    var assessmentsTab = document.getElementById("assessmentsTab");
    var navigation = document.getElementById("navigation");
    var navigationTab = document.getElementById("navigationTab");
    var customize = document.getElementById("customize");
    var customizeTab = document.getElementById("customizeTab");
    var connections = document.getElementById("connections");
    var connectionsTab = document.getElementById("connectionsTab");

    customizeTab.style.height = "23px";
    customizeTab.style.margin = "20px 0 0 5px";
    customizeTab.style.color = "";
    customize.style.display = "none";
    navigationTab.style.height = "23px";
    navigationTab.style.margin = "20px 0 0 5px";
    navigationTab.style.color = "";
    navigation.style.display = "none";
    connectionsTab.style.height = "23px";
    connectionsTab.style.margin = "20px 0 0 5px";
    connectionsTab.style.color = "";
    connections.style.display = "none";

}

function openNavigation() {
    var navigation = document.getElementById("navigation");
    var navigationTab = document.getElementById("navigationTab");
    closeTabs();
    navigationTab.style.height = "28px";
    navigationTab.style.color = "white";
    navigationTab.style.margin = "15px 0 0 5px";
    navigation.style.display = "block";

}

function openCustomize() {
    var customize = document.getElementById("customize");
    var customizeTab = document.getElementById("customizeTab");
    closeTabs();
    customizeTab.style.height = "28px";
    customizeTab.style.color = "white";
    customizeTab.style.margin = "15px 0 0 5px";
    customize.style.display = "block";
}

function openConnections() {
    var connections = document.getElementById("connections");
    var connectionsTab = document.getElementById("connectionsTab");
    closeTabs();
    connectionsTab.style.height = "28px";
    connectionsTab.style.color = "white";
    connectionsTab.style.margin = "15px 0 0 5px";
    connections.style.display = "block";

}