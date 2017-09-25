chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            $(document).ready(function () {
                attachLayoutClasses();
            });

        }
    }, 10);
});

function attachLayoutClasses() {
    var $container = $('#pgl1');
    $container.addClass('main-container');
    $container.find('> div:nth-child(1)').addClass('main-header');
    $container.find('> div:nth-child(2)').addClass('main-content');
    $container.find('> div:nth-child(3)').addClass('main-footer');
}

function addThemeCopyright() {

}