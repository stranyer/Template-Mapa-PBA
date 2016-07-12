
$(document).ready(function(){
    // HTML markup implementation, overlap mode, initilaize collapsed
    $( '#menu' ).multilevelpushmenu({
        containersToPush: [$( '.pushobj' )],
        collapsed: true
    });
});
